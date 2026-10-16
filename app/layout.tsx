import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Erasight Talent — Vetted remote talent from Vietnam",
    template: "%s · Erasight Talent",
  },
  description:
    "Erasight Talent is a vetted remote-talent marketplace in Vietnam. English-fluent, AI-fluent professionals scored on 100 points before they reach your shortlist.",
  icons: { icon: "/erasight-symbol.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={beVietnam.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
