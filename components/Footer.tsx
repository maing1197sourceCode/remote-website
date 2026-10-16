import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink py-14">
      <div className="container-x">
        <Logo />
        <p className="mt-5 max-w-2xl text-[13px] leading-relaxed text-white/45">
          Erasight Talent is a vetted remote-talent marketplace in Vietnam. We source, assess and place
          English-fluent, AI-fluent professionals — developers, designers, marketers, CS and VAs — for
          international companies hiring remotely. Talent is trained and certified by the Remote Ready VN
          community.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/60">
          <Link href="/how-it-works" className="hover:text-white">How it works</Link>
          <Link href="/salary-guide" className="hover:text-white">Salary guide</Link>
          <Link href="/careers" className="hover:text-white">Careers</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
        <p className="mt-8 text-[11px] tracking-wide text-white/30">
          © Erasight Talent · an Erasight brand
        </p>
      </div>
    </footer>
  );
}
