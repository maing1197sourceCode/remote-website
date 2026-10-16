"use client";

import { useState } from "react";

export default function ApplyForm({ jobSlug, jobTitle }: { jobSlug: string; jobTitle: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = { ...Object.fromEntries(new FormData(e.currentTarget)), jobSlug };
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-cloud p-8 ring-1 ring-lilac" role="status">
        <h3 className="text-xl font-extrabold text-ink">Application received.</h3>
        <p className="mt-2 text-sm text-slate">Thanks for applying for {jobTitle}. We'll review your profile and reply by email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-cloud p-6 ring-1 ring-lilac md:p-8">
      <h3 className="text-lg font-extrabold text-ink">Apply for {jobTitle}</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="a-name" className="label">Full name</label>
          <input id="a-name" name="name" required className="field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="a-email" className="label">Email</label>
          <input id="a-email" name="email" type="email" required className="field" autoComplete="email" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="a-link" className="label">Portfolio / LinkedIn / CV link</label>
          <input id="a-link" name="link" type="url" required className="field" placeholder="https://" />
        </div>
      </div>
      <div>
        <label htmlFor="a-note" className="label">Why you're a fit</label>
        <textarea id="a-note" name="note" rows={4} className="field" />
      </div>
      {status === "error" && <p className="text-sm font-semibold text-red-600" role="alert">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="btn-brand disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}
