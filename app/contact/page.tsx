import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description: "Tell us the role. We'll come back with a scored shortlist of vetted remote talent from Vietnam.",
};

export default function Contact() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="h2">Book a discovery call</h1>
          <p className="lead">
            Tell us about the role and your team. We'll reply within one business day with next steps and a timeline for your
            scored shortlist.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink">
            <li className="flex gap-3"><span className="text-teal-dark">✓</span> 30 minutes, no obligation</li>
            <li className="flex gap-3"><span className="text-teal-dark">✓</span> Shortlist in about 5 days</li>
            <li className="flex gap-3"><span className="text-teal-dark">✓</span> Only Verified and Elite profiles</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
