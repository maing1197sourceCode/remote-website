import { jobs } from "@/data/jobs";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const link = String(body?.link ?? "").trim();
  const jobSlug = String(body?.jobSlug ?? "");

  if (!jobs.some((j) => j.slug === jobSlug)) {
    return Response.json({ error: "Unknown job." }, { status: 400 });
  }
  if (!name || !emailRe.test(email) || !/^https?:\/\//.test(link)) {
    return Response.json({ error: "Please provide your name, a valid email and a link starting with http(s)://." }, { status: 400 });
  }

  // TODO: send via an email provider or store in a database.
  console.log("[apply]", { jobSlug, name, email, link, note: body?.note });
  return Response.json({ ok: true });
}
