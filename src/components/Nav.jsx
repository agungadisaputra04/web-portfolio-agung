import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Server } from "lucide-react";

const navItems = [
  ["about", "About"],
  ["education", "Education"],
  ["experience", "Experience"],
  ["certificates", "Certificates"],
  ["projects", "Projects"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];

export default function Nav() {
  const [active, setActive] = useState(() => {
    try {
      const h =
        typeof window !== "undefined" && window.location.hash
          ? window.location.hash.slice(1)
          : null;
      return h && navItems.some(([nid]) => nid === h) ? h : "";
    } catch {
      return "";
    }
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    const el = document.getElementById(id);
    if (!el) return;

    // close mobile menu first (feels snappier)
    setMobileOpen(false);

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // do NOT update hash here; observer will do it
  };

  const activeRef = useRef(active);
  const mountedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const best = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b
        );

        const id = best.target.id;
        if (activeRef.current !== id) {
          setActive(id);
          if (mountedRef.current) history.replaceState(null, "", `#${id}`);
          activeRef.current = id;
        }
      },
      { rootMargin: "0px", threshold: 0.6 }
    );

    navItems.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onHashChange = () => {
      const h = window.location.hash ? window.location.hash.slice(1) : null;
      if (h) setActive(h);
    };
    window.addEventListener("hashchange", onHashChange);

    const readyTimer = setTimeout(() => {
      mountedRef.current = true;
    }, 120);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
      clearTimeout(readyTimer);
    };
  }, []);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // prevent background scroll when mobile menu open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand (Desktop) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", "#");
            setMobileOpen(false);
          }}
          className="hidden md:flex items-center gap-2"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
          <Server className="h-4 w-4 text-slate-950" />
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">AgungOps</div>
            <div className="text-[11px] text-slate-400 leading-tight">
              Operations Support Engineer
            </div>
          </div>
        </a>

        {/* Brand (Mobile) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", "#");
            setMobileOpen(false);
          }}
          className="md:hidden flex items-center gap-2"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
          <Server className="h-4 w-4 text-slate-950" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">AgungOps</div>
            <div className="text-[11px] text-slate-400">Ops Support</div>
          </div>
        </a>

        {/* Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium">
          {navItems.map(([id, label]) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`
                  group relative py-1 transition-all duration-200 ease-out
                  ${isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"}
                  hover:-translate-y-[1px]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40
                `}
              >
                {label}
                <span
                  className={`
                    pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full
                    origin-left bg-gradient-to-r from-cyan-400/80 to-indigo-400/80
                    transition-transform duration-200 ease-out
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA (Desktop) */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-cyan-500/80 hover:text-cyan-300 transition-colors"
        >
          Let&apos;s talk
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 p-2 text-slate-100 hover:border-cyan-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-30">
          {/* backdrop */}
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          {/* panel */}
          <div className="absolute top-0 left-0 right-0 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-100">Menu</div>
              <button
                aria-label="Close menu"
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-2"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5 text-slate-100" />
              </button>
            </div>

            <div className="mt-3 grid gap-1">
              {navItems.map(([id, label]) => {
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`
                      flex items-center justify-between rounded-xl px-3 py-2 text-sm
                      ${isActive ? "bg-cyan-500/10 text-cyan-200" : "text-slate-200 hover:bg-slate-900/70"}
                    `}
                  >
                    <span>{label}</span>
                    <span
                                className={`h-2 w-2 rounded-full ${
                                  isActive ? "bg-cyan-400" : "bg-slate-700"
                                }`}
                              />
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-100 hover:border-cyan-500/80 hover:text-cyan-300 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
