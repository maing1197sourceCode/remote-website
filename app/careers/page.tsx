import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { categories, jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description: "Remote jobs for Vietnam-based professionals with international companies.",
};

export default function Careers({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  return (
    <>
      <section className="bg-ink py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow !text-teal">Careers</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Remote jobs, <span className="text-teal">ready for the world.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light text-white/60">
            Roles with international companies, open to Vietnam-based professionals.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="section container-x text-slate">Loading jobs…</div>}>
        <JobList searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function JobList({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const active = categories.find((c) => c === category) ?? "All";
  const list = active === "All" ? jobs : jobs.filter((j) => j.category === active);

  return (
      <section className="section">
        <div className="container-x">
          <nav className="flex flex-wrap gap-2" aria-label="Filter by category">
            {categories.map((c) => (
              <Link
                key={c}
                href={c === "All" ? "/careers" : `/careers?category=${c}`}
                aria-current={c === active ? "true" : undefined}
                className={`rounded-full border px-4 py-2 text-xs font-bold ${
                  c === active ? "border-brand bg-brand text-white" : "border-lilac text-ink hover:bg-lilac-soft"
                }`}
              >
                {c}
              </Link>
            ))}
          </nav>

          <ul className="mt-8 grid gap-4">
            {list.map((j) => (
              <li key={j.slug}>
                <Link
                  href={`/careers/${j.slug}`}
                  className="flex flex-col gap-3 rounded-xl bg-cloud p-6 ring-1 ring-lilac transition hover:ring-brand md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h2 className="text-lg font-extrabold text-ink">{j.title}</h2>
                    <p className="mt-1 text-sm text-slate">{j.summary}</p>
                  </div>
                  <div className="data shrink-0 text-[11px] text-slate md:text-right">
                    <div>{j.type} · {j.category}</div>
                    <div className="mt-1 text-teal-dark">{j.overlap}</div>
                  </div>
                </Link>
              </li>
            ))}
            {list.length === 0 && <li className="text-slate">No open roles in this category yet.</li>}
          </ul>
        </div>
      </section>
  );
}
