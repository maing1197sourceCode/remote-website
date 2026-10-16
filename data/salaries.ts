// ILLUSTRATIVE placeholder figures (monthly, USD). Replace with real market data before launch.
export type SalaryRole = { id: string; title: string; vn: number; us: number };

export const salaryRoles: SalaryRole[] = [
  { id: "backend", title: "Back-end Developer", vn: 2200, us: 9500 },
  { id: "frontend", title: "Front-end Developer", vn: 2000, us: 9000 },
  { id: "designer", title: "UI/UX Designer", vn: 1600, us: 7500 },
  { id: "marketer", title: "Digital Marketer", vn: 1400, us: 6000 },
  { id: "cs", title: "Customer Support", vn: 800, us: 3800 },
  { id: "va", title: "Virtual Assistant", vn: 700, us: 3500 },
  { id: "data", title: "Data Analyst", vn: 1800, us: 8000 },
];

// Assumptions (placeholders): employer overhead on top of salary, and a monthly management fee per hire.
export const US_OVERHEAD = 0.25;
export const VN_BENEFITS = 0.2;
export const VN_FEE_PER_MONTH = 400;
