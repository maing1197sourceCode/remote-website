"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="text-xl font-extrabold text-ink">Thanks — we'll be in touch.</h3>
        <p className="mt-2 text-sm text-slate">Expect a reply within one business day to schedule your discovery call.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-cloud p-6 ring-1 ring-lilac md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" required className="field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="label">Work email</label>
          <input id="email" name="email" type="email" required className="field" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="company" className="label">Company</label>
          <input id="company" name="company" required className="field" autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="roles" className="label">Roles you're hiring</label>
          <input id="roles" name="roles" className="field" placeholder="e.g. 2 back-end devs, 1 designer" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label">Anything we should know?</label>
        <textarea id="message" name="message" rows={4} className="field" />
      </div>
      {status === "error" && <p className="text-sm font-semibold text-red-600" role="alert">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="btn-brand disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Book discovery call"}
      </button>
    </form>
  );
}
