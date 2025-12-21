export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="space-y-2 mb-7">
      {eyebrow && (
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-slate-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">{title}</h2>
      {subtitle && <p className="text-sm md:text-base text-slate-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
