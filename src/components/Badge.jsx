export default function Badge({ children }) {
  return (
    <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-slate-300 border border-slate-700">
      {children}
    </span>
  );
}
