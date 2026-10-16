import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "How it works",
  description: "From discovery call to a scored shortlist and compliant hire in Vietnam.",
};

const steps = [
  { n: "01", t: "Discovery call", d: "A 30-minute call to define the role, the skills that matter, your timezone and budget." },
  { n: "02", t: "Source & score", d: "We draw from the Remote Ready VN community and score each candidate on 100 points: English, hard-skill test, AI workflow and timezone overlap." },
  { n: "03", t: "Shortlist", d: "You receive 3–5 Verified or Elite profiles with scorecards. Proof first, price last." },
  { n: "04", t: "Interview & choose", d: "Meet candidates directly. We coordinate scheduling and feedback." },
  { n: "05", t: "Hire & onboard", d: "We handle compliant contracts and payroll under Vietnam's rules, then support the first weeks." },
];

export default function HowItWorks() {
  return (
    <>
      <section className="bg-ink py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow !text-teal">How it works</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Vetted first. <span className="text-teal">Hired fast.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light text-white/60">
            We train and vet before you ever see a profile, so you interview signal, not noise.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-x max-w-3xl">
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-6 rounded-xl bg-cloud p-6 ring-1 ring-lilac">
                <span className="text-3xl font-black text-brand">{s.n}</span>
                <div>
                  <h2 className="text-xl font-extrabold text-ink">{s.t}</h2>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTA />
    </>
  );
}
