import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-earth-200 bg-white/80 px-4 py-2 text-sm font-semibold text-earth-700 shadow-sm">
      {children}
    </span>
  );
}
