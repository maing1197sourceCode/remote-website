import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-brand py-16 md:py-20">
      <div className="container-x text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
          Ready to hire talent that's already proven?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Tell us the role. We'll come back with a scored shortlist of Verified and Elite candidates.
        </p>
        <Link href="/contact" className="btn-primary mt-8">Book a discovery call</Link>
      </div>
    </section>
  );
}
