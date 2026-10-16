import type { Metadata } from "next";
import CTA from "@/components/CTA";
import SavingsCalculator from "@/components/SavingsCalculator";
import { salaryRoles } from "@/data/salaries";

export const metadata: Metadata = {
  title: "Salary guide",
  description: "Illustrative monthly salary ranges for remote roles in Vietnam compared with the US.",
};

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function SalaryGuide() {
  return (
    <>
      <section className="bg-ink py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow !text-teal">Salary guide</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            What remote talent in Vietnam <span className="text-teal">really costs</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light text-white/60">
            Transparent monthly figures by role. Illustrative placeholders — we'll confirm current market rates on your discovery call.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="overflow-x-auto rounded-xl ring-1 ring-lilac">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-cloud">
                <tr className="data text-[11px] text-slate">
                  <th className="px-5 py-4">Role</th>
                  <th className="px-5 py-4">Vietnam / month</th>
                  <th className="px-5 py-4">US / month</th>
                  <th className="px-5 py-4">Difference</th>
                </tr>
              </thead>
              <tbody>
                {salaryRoles.map((r) => (
                  <tr key={r.id} className="border-t border-lilac">
                    <td className="px-5 py-4 font-bold text-ink">{r.title}</td>
                    <td className="px-5 py-4 tabular-nums">{usd(r.vn)}</td>
                    <td className="px-5 py-4 tabular-nums text-slate">{usd(r.us)}</td>
                    <td className="px-5 py-4 font-bold tabular-nums text-teal-dark">−{Math.round((1 - r.vn / r.us) * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="h2 mt-16">Estimate your savings</h2>
          <div className="mt-6">
            <SavingsCalculator />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
