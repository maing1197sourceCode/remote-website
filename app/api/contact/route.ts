const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const company = String(body?.company ?? "").trim();

  if (!name || !company || !emailRe.test(email)) {
    return Response.json({ error: "Please provide your name, company and a valid email." }, { status: 400 });
  }

  // TODO: send via an email provider (Resend, Postmark) or store in a database.
  console.log("[contact]", { name, email, company, roles: body?.roles, message: body?.message });
  return Response.json({ ok: true });
}
