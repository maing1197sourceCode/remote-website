import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ApplyForm from "@/components/ApplyForm";
import { jobs } from "@/data/jobs";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  return job ? { title: job.title, description: job.summary } : {};
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Link href="/careers" className="text-sm font-bold text-brand hover:underline">← All jobs</Link>
          <h1 className="h2 mt-4">{job.title}</h1>
          <p className="data mt-3 text-[11px] text-slate">
            {job.type} · {job.location} · {job.overlap}
          </p>
          <p className="lead">{job.summary}</p>

          <h2 className="mt-10 text-lg font-extrabold text-ink">What you'll do</h2>
          <ul className="mt-3 space-y-2">
            {job.responsibilities.map((r) => (
              <li key={r} className="flex gap-3 text-[15px] text-slate"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{r}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-extrabold text-ink">What we're looking for</h2>
          <ul className="mt-3 space-y-2">
            {job.requirements.map((r) => (
              <li key={r} className="flex gap-3 text-[15px] text-slate"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <ApplyForm jobSlug={job.slug} jobTitle={job.title} />
        </div>
      </div>
    </section>
  );
}
