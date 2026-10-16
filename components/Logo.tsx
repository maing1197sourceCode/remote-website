export function Symbol({ size = 36, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M8 52 L24 10" stroke={color} strokeWidth="9" strokeLinecap="round" />
      <path d="M24 56 L40 14" stroke={color} strokeWidth="9" strokeLinecap="round" />
      <path d="M40 60 L56 18" stroke={color} strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Symbol size={34} color={dark ? "#5B4CE0" : "#fff"} />
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-wide ${dark ? "text-ink" : "text-white"}`}>
          ERASIGHT TALENT
        </span>
        <span className={`mt-1 block text-[9px] font-medium uppercase tracking-[2px] ${dark ? "text-slate" : "text-white/50"}`}>
          Remote talent · Vietnam
        </span>
      </span>
    </span>
  );
}
