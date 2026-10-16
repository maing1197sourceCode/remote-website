import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/salary-guide", label: "Salary guide" },
  { href: "/careers", label: "Careers" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Erasight Talent home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-white/70 hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5">
            Book a discovery call
          </Link>
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 flex w-56 flex-col gap-1 rounded-xl border border-white/10 bg-ink p-3 shadow-xl">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2 !py-2.5">
              Book a discovery call
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
