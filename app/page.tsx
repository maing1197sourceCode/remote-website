import Link from "next/link";
import CTA from "@/components/CTA";
import SavingsCalculator from "@/components/SavingsCalculator";
import { roles, tiers } from "@/data/roles";

const pillars = [
  { k: "De-risk", v: "Scored on 100 points before you meet them." },
  { k: "Speed", v: "A vetted shortlist in 5 days, not months." },
  { k: "Fit", v: "English · AI-fluent · in your timezone." },
  { k: "Peace of mind", v: "Compliant hiring in Vietnam, handled." },
];

const steps = [
  { n: "01", t: "Discovery call", d: "We learn the role, team and timezone you need." },
  { n: "02", t: "Scored shortlist", d: "3–5 Verified or Elite profiles, each with a Remote-Ready score." },
  { n: "03", t: "You interview", d: "Meet candidates who have already passed English, skills and AI-workflow tests." },
  { n: "04", t: "Hire & support", d: "We handle compliant contracts, payroll and onboarding." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <span className="pointer-events-none absolute -right-40 -top-52 h-[640px] w-[640px] rounded-full border border-teal/15" />
        <span className="pointer-events-none absolute -bottom-32 -left-32 h-[440px] w-[440px] rounded-full border border-brand/20" />
        <div className="container-x relative py-20 md:py-32">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[3px] text-teal">Remote talent · Vietnam</p>
          <h1 className="text-5xl font-black leading-none tracking-[-2px] text-white md:text-7xl">
            Hire proven,
            <br />
            <span className="text-teal">not promising.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/60">
            Vetted, remote-ready talent from Vietnam — English-fluent, AI-fluent and timezone-friendly. Everyone else sells
            potential. We sell proof.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Book a discovery call</Link>
            <Link href="/careers" className="btn-ghost">I'm looking for work</Link>
          </div>
          <div className="mt-12 max-w-xl" aria-label="Remote-Ready score, 0 to 100">
            <div className="flex h-3.5 overflow-hidden rounded-full bg-white/10">
              <i className="block h-full bg-slate" style={{ width: "55%" }} />
              <i className="block h-full bg-brand" style={{ width: "15%" }} />
              <i className="block h-full bg-teal" style={{ width: "15%" }} />
              <i className="block h-full bg-gold" style={{ width: "15%" }} />
            </div>
            <div className="data mt-2.5 flex justify-between text-[9px] text-white/40">
              <span>0 · Foundation</span><span>55 · Developing</span><span>70 · Verified</span><span>85+ · Elite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proof pillars */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Why Erasight Talent</p>
          <h2 className="h2">Proof, not potential.</h2>
          <p className="lead">
            Vietnam doesn't lack talent. It lacks the system to make it world-ready. We built that system, then we measure it.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.k} className="rounded-xl bg-cloud p-6 ring-1 ring-lilac">
                <div className="data text-[11px] text-teal-dark">{p.k}</div>
                <p className="mt-3 text-[15px] font-semibold leading-snug text-ink">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section bg-cloud">
        <div className="container-x">
          <p className="eyebrow">Roles</p>
          <h2 className="h2">Hire for the roles that move your business</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <Link
                key={r.title}
                href="/contact"
                className="group rounded-xl bg-white p-6 ring-1 ring-lilac transition hover:ring-brand"
              >
                <h3 className="text-lg font-extrabold text-ink">{r.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {r.tags.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-slate">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-block text-sm font-bold text-brand group-hover:underline">Hire this role →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Remote-Ready tiers */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">The Remote-Ready score</p>
          <h2 className="h2">Our proof, made visible</h2>
          <p className="lead">
            Every candidate is scored on a 100-point standard covering English, hard skills, AI workflow and timezone overlap.
            Only Verified and Elite profiles are shown to employers.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div key={t.name} className={`flex min-h-[158px] flex-col justify-between rounded-xl p-5 ${t.cls}`}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-sm font-extrabold">{t.icon}</span>
                <div>
                  <div className="text-xs font-bold tabular-nums">{t.range}</div>
                  <div className="text-xl font-extrabold">{t.name}</div>
                  <div className="mt-0.5 text-[11px] leading-snug opacity-80">{t.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-ink">
        <div className="container-x">
          <p className="eyebrow !text-teal">How it works</p>
          <h2 className="h2 !text-white">From brief to hire in four steps</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-3xl font-black text-teal">{s.n}</div>
                <h3 className="mt-3 text-lg font-extrabold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{s.d}</p>
              </div>
            ))}
          </div>
          <Link href="/how-it-works" className="btn-ghost mt-8">See the full process</Link>
        </div>
      </section>

      {/* Calculator */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Savings calculator</p>
          <h2 className="h2">See what a remote hire could save you</h2>
          <p className="lead">Pick a role and team size for an illustrative annual cost comparison.</p>
          <div className="mt-8">
            <SavingsCalculator />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
