import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

// Simple in-memory rate limiter: max 3 submissions per IP per 15 minutes
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  rateLimitMap.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  return false;
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!host || !user || !pass) throw new Error("SMTP credentials not configured");

  return nodemailer.createTransport({
    host,
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "freelymoving@gmail.com",
      replyTo: email,
      subject: `[keiranflynn.com] Contact form: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
