const sections = [
  {
    title: "Information Collected",
    content:
      "This site collects only the information you provide directly, such as your name, email address and message through the contact form. Scheduling may be handled through Cal.com.",
  },
  {
    title: "How Information Is Used",
    content:
      "Your information is used to respond to enquiries, arrange calls and discuss potential AI product work. It is not sold or shared for advertising.",
  },
  {
    title: "Third-Party Services",
    content:
      "The site may use services such as Cal.com for scheduling, Resend for email delivery and Google Analytics for basic site analytics. Those services process data under their own privacy policies.",
  },
  {
    title: "Project Confidentiality",
    content:
      "Project discussions, product ideas and workflow details shared during calls or enquiries are treated as confidential unless you give explicit permission to share them.",
  },
  {
    title: "Contact",
    content:
      "For privacy questions, use the contact page or email Keiran directly.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
      <div className="accent-line mb-8" />
      <h1 className="text-display mb-4 text-white">Privacy Policy</h1>
      <p className="mb-16 text-[13px] tracking-wide text-white/55">
        Last updated: June 2026
      </p>

      <div className="space-y-14">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-lg font-medium text-white/75">
              {section.title}
            </h2>
            <p className="leading-[1.8] text-white/60">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
