export const GrayTitle = ({ children }: { children: React.ReactNode }) => {
  return <span className="bg-linear-to-b from-stone-100 via-stone-300 to stroke-stone-500 bg-clip-text text-transparent">{children}</span>;
};

export const GoldTitle = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-linear-to-br from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
    {children}
  </span>
);
export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-[0.14em] uppercase mb-4">
    <span className="w-4 h-px bg-amber-400" />
    {children}
  </p>
);
