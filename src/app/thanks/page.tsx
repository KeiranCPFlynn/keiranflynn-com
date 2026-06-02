import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-36 pb-24 sm:px-8 sm:pt-44">
      <div className="glass-card p-8 sm:p-10">
        <div className="accent-line mb-8" />
        <h1 className="text-heading mb-5 text-white">Thanks</h1>
        <p className="mb-8 leading-relaxed text-white/65">
          Your message has been received. I will reply shortly if there is a
          fit for the product work you described.
        </p>
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
