import { useEffect, useState, useRef } from "react";

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
  // Initialize active from the URL hash when possible to avoid calling
  // setState synchronously inside an effect (which ESLint flags).
  const [active, setActive] = useState(() => {
    try {
      const h = typeof window !== "undefined" && window.location.hash ? window.location.hash.slice(1) : null;
      return h && navItems.some(([nid]) => nid === h) ? h : "";
    } catch {
      return "";
    }
  });

const handleNavClick = (e, id) => {
  e.preventDefault();
  e.stopPropagation();

  const el = document.getElementById(id);
  if (!el) return;

  // Use scrollIntoView with smooth behavior and rely on CSS
  // `scroll-margin-top` (Tailwind `scroll-mt-*`) on sections so the
  // target lands below the sticky header. This is more reliable than
  // manual offset calculations and avoids instant jumps.
  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // do NOT update the hash here; we'll update it when the section
  // becomes active via the IntersectionObserver so the URL matches
  // the scroll position.
};

  const activeRef = useRef(active);
  const mountedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When multiple sections are intersecting (common during
        // smooth scroll), pick the one with the largest
        // intersectionRatio — this avoids briefly selecting a section
        // that only barely appears in the viewport.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        let best = visible.reduce((a, b) => (a.intersectionRatio >= b.intersectionRatio ? a : b));
        const id = best.target.id;
        if (activeRef.current !== id) {
          setActive(id);
          if (mountedRef.current) {
            history.replaceState(null, "", `#${id}`);
          }
          activeRef.current = id;
        }
      },
      {
        // update active when ~60% of the section is visible — this
        // prevents a section that's only slightly visible at the top
        // of the page from immediately becoming active.
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    navItems.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // respond to manual hash changes (back/forward)
    const onHashChange = () => {
      const h = window.location.hash ? window.location.hash.slice(1) : null;
      if (h) setActive(h);
    };

    window.addEventListener("hashchange", onHashChange);

    // mark ready after a short delay so initial observer events don't
    // cause a hash replaceState.
    const readyTimer = setTimeout(() => {
      mountedRef.current = true;
    }, 120);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
      clearTimeout(readyTimer);
    };
  }, []);

  // keep ref in sync with state
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // smooth scroll to top (hero) instead of to #about
            window.scrollTo({ top: 0, behavior: "smooth" });
            // remove hash from URL (keep it clean)
            history.replaceState(null, "", "#");
          }}
          className="hidden md:flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
            <span className="font-mono text-xs">AG</span>
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">AgungOps</div>
            <div className="text-[11px] text-slate-400 leading-tight">
              Support → DevOps
            </div>
          </div>
        </a>

        {/* Nav */}
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

                {/* underline */}
                <span
                  className={`
                    pointer-events-none
                    absolute left-0 -bottom-1 h-[2px] w-full
                    origin-left bg-gradient-to-r from-cyan-400/80 to-indigo-400/80
                    transition-transform duration-200 ease-out
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-cyan-500/80 hover:text-cyan-300 transition-colors"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
