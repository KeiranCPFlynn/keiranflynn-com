const base = process.argv[2] || "http://127.0.0.1:4010";
const start = [
  "/",
  "/services",
  "/work",
  "/writing",
  "/about",
  "/contact",
  "/privacy",
  "/conversation",
  "/blog",
];

const seen = new Set(start);
const checked = [];
const errors = [];
const missingAlt = [];

function isInternal(href) {
  return (
    href.startsWith("/") &&
    !href.startsWith("//") &&
    !href.startsWith("/api/") &&
    !href.startsWith("/_next/") &&
    !href.startsWith("#")
  );
}

function normalize(href) {
  return href.split("#")[0].replace(/\/$/, "") || "/";
}

async function checkPath(path) {
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  checked.push(`${response.status} ${path}`);
  if (response.status >= 400) errors.push(`${response.status} ${path}`);

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return;

  const html = await response.text();

  for (const match of html.matchAll(/<a\s+[^>]*href="([^"]+)"/g)) {
    const href = match[1];
    if (isInternal(href)) {
      const normalized = normalize(href);
      if (!seen.has(normalized) && seen.size < 160) seen.add(normalized);
    }
  }

  for (const match of html.matchAll(/<img\s+[^>]*>/g)) {
    const tag = match[0];
    const src = tag.match(/src="([^"]+)"/)?.[1] || "";
    const hasAlt = /alt="[^"]*"/.test(tag);
    if (src && !src.startsWith("data:") && !hasAlt) {
      missingAlt.push(`${path} ${src}`);
    }
  }
}

for (const path of seen) {
  await checkPath(path);
}

for (const path of seen) {
  if (!checked.some((entry) => entry.endsWith(` ${path}`))) {
    await checkPath(path);
  }
}

console.log("checked");
console.log(checked.sort().join("\n"));
console.log("errors");
console.log(errors.join("\n") || "none");
console.log("missingAlt");
console.log(missingAlt.join("\n") || "none");
