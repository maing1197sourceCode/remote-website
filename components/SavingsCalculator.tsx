"use client";

import { useState } from "react";
import { salaryRoles, US_OVERHEAD, VN_BENEFITS, VN_FEE_PER_MONTH } from "@/data/salaries";

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function SavingsCalculator({ dark = false }: { dark?: boolean }) {
  const [roleId, setRoleId] = useState(salaryRoles[0].id);
  const [count, setCount] = useState(1);

  const role = salaryRoles.find((r) => r.id === roleId)!;
  const us = role.us * (1 + US_OVERHEAD) * 12 * count;
  const vn = (role.vn * (1 + VN_BENEFITS) + VN_FEE_PER_MONTH) * 12 * count;
  const saved = us - vn;
  const pct = Math.round((saved / us) * 100);

  return (
    <div className={`rounded-2xl p-6 md:p-8 ${dark ? "bg-white/5 ring-1 ring-white/10" : "bg-cloud ring-1 ring-lilac"}`}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="calc-role" className={`label ${dark ? "!text-white/60" : ""}`}>Role</label>
          <select id="calc-role" className="field" value={roleId} onChange={(e) => setRoleId(e.target.value)}>
            {salaryRoles.map((r) => (
              <option key={r.id} value={r.id}>{r.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="calc-count" className={`label ${dark ? "!text-white/60" : ""}`}>Number of hires</label>
          <input
            id="calc-count"
            type="number"
            min={1}
            max={50}
            className="field"
            value={count}
            onChange={(e) => setCount(Math.min(50, Math.max(1, Number(e.target.value) || 1)))}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Stat dark={dark} label="Annual cost, US hire" value={fmt(us)} />
        <Stat dark={dark} label="Annual cost, via Erasight" value={fmt(vn)} />
        <div className="rounded-xl bg-teal p-4 text-ink">
          <div className="data text-[10px] opacity-70">You save</div>
          <div className="mt-1 text-2xl font-black tabular-nums">{fmt(saved)}</div>
          <div className="text-xs font-bold">{pct}% less per year</div>
        </div>
      </div>
      <p className={`mt-4 text-xs leading-relaxed ${dark ? "text-white/40" : "text-slate"}`}>
        Illustrative estimate. Assumes {Math.round(US_OVERHEAD * 100)}% US employer overhead, {Math.round(VN_BENEFITS * 100)}% Vietnam
        benefits and a {fmt(VN_FEE_PER_MONTH)}/month management fee per hire. Placeholder figures — confirm with a discovery call.
      </p>
    </div>
  );
}

function Stat({ label, value, dark }: { label: string; value: string; dark: boolean }) {
  return (
    <div className={`rounded-xl p-4 ${dark ? "bg-white/5" : "bg-white ring-1 ring-lilac"}`}>
      <div className={`data text-[10px] ${dark ? "text-white/50" : "text-slate"}`}>{label}</div>
      <div className={`mt-1 text-2xl font-black tabular-nums ${dark ? "text-white" : "text-ink"}`}>{value}</div>
    </div>
  );
}
