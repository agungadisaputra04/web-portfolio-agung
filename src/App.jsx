import { useState } from "react";
import Nav from "./components/Nav";
import SectionTitle from "./components/SectionTitle";
import Badge from "./components/Badge";
import { PROFILE } from "./data/profile";
import { EDUCATION, EXPERIENCE, CERTIFICATES, PROJECTS } from "./data/content";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

function Card({ children }) {
  return <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">{children}</div>;
}

export default function App() {
  const [showResume, setShowResume] = useState(false);
  return (
    <div className="min-h-screen">
      {/* glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 -left-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <Nav />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-20 md:space-y-24">
        {/* HERO */}
   <section className="grid gap-10 md:grid-cols-2 items-center">
  {/* LEFT: TEXT */}
  <div className="space-y-6">
    <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
      {PROFILE.headline}
    </p>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
      {PROFILE.name}
      <br />
      <span className="text-cyan-400">Ops-first. DevOps-next.</span>
    </h1>

    <p className="text-sm md:text-base text-slate-300 max-w-xl">
      {PROFILE.tagline}
    </p>

    <div className="flex flex-wrap gap-3">
      <a
        href={PROFILE.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
      >
        <Github className="w-4 h-4" />
        GitHub
        <ArrowUpRight className="w-3 h-3" />
      </a>

      <a
        href={PROFILE.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors"
      >
        Download CV
        <ArrowUpRight className="w-3 h-3" />
      </a>
    </div>

<div className="flex flex-wrap gap-4 text-xs text-slate-400">
      <span>📍 {PROFILE.location}</span>
      <span className="font-mono">automation • observability • reliability</span>
    </div>

    {/* ✅ MINI IMPACT CHIPS (isi space dengan rapi) */}
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
        <p className="text-[10px] text-slate-500">Role</p>
        <p className="text-xs font-semibold text-slate-200">L1 Support</p>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
        <p className="text-[10px] text-slate-500">Focus</p>
        <p className="text-xs font-semibold text-cyan-300">Automation</p>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
        <p className="text-[10px] text-slate-500">Ops</p>
        <p className="text-xs font-semibold text-indigo-300">Monitoring</p>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
        <p className="text-[10px] text-slate-500">Next</p>
        <p className="text-xs font-semibold text-emerald-300">DevOps</p>
      </div>
    </div>
  </div>

  {/* RIGHT: PHOTO */}
  <div className="flex justify-center md:justify-end">
      <div className="relative">
      {/* glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/40 to-indigo-500/40 blur-2xl" />
      <img
        src="/profile.jpg"
        alt="Agung Adi Saputra"
        width={256}
        height={256}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="relative h-64 w-64 rounded-3xl object-cover border border-slate-800 shadow-lg"
      />
    </div>
  </div>
</section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <SectionTitle
            eyebrow="About"
            title="Support Engineer with a DevOps mindset."
            subtitle="I work close to production systems, and I love turning repetitive ops tasks into automation."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Card><p className="text-sm text-slate-300">Daily: monitoring, incident checks, and log-driven troubleshooting.</p></Card>
            <Card><p className="text-sm text-slate-300">Automation: Bash/Python tooling for checks, reporting, and alerts.</p></Card>
            <Card><p className="text-sm text-slate-300">Next: containers, CI/CD, infrastructure basics, and deeper observability.</p></Card>
          </div>
        </section>

        {/* IMPACT METRICS */}
<section id="impact" className="scroll-mt-24">
  <SectionTitle
    eyebrow="Impact"
    title="Operational impact"
    subtitle="Measured outcomes from my daily support and automation work."
  />

  <div className="grid gap-6 md:grid-cols-4">
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center">
      <p className="text-2xl font-semibold text-cyan-300">10+</p>
      <p className="mt-1 text-xs text-slate-400">Automation scripts</p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center">
      <p className="text-2xl font-semibold text-indigo-300">Multi</p>
      <p className="mt-1 text-xs text-slate-400">Servers monitored</p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center">
      <p className="text-2xl font-semibold text-emerald-300">Daily</p>
      <p className="mt-1 text-xs text-slate-400">Incident triage</p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center">
      <p className="text-2xl font-semibold text-amber-300">↓</p>
      <p className="mt-1 text-xs text-slate-400">Manual work reduced</p>
    </div>
  </div>
</section>


        {/* TOOLBOX */}
<section id="toolbox" className="scroll-mt-24">
  <SectionTitle
    eyebrow="Toolbox"
    title="Tools I use in production & learning"
    subtitle="Hands-on tools from daily L1 support work and my DevOps learning path."
  />

  <div className="grid gap-6 md:grid-cols-3">
    {/* DAILY */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-sm font-semibold text-cyan-300 mb-3">Daily (Production)</h3>
      <div className="flex flex-wrap gap-2">
        <Badge>Linux</Badge>
        <Badge>Bash</Badge>
        <Badge>Log Analysis</Badge>
        <Badge>Monitoring</Badge>
        <Badge>Incident Handling</Badge>
        <Badge>SQL</Badge>
      </div>
    </div>

    {/* WEEKLY */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-sm font-semibold text-indigo-300 mb-3">Weekly</h3>
      <div className="flex flex-wrap gap-2">
        <Badge>Python Automation</Badge>
        <Badge>Git</Badge>
        <Badge>Reporting</Badge>
        <Badge>System Validation</Badge>
      </div>
    </div>

    {/* LEARNING */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-sm font-semibold text-emerald-300 mb-3">Learning / Exploring</h3>
      <div className="flex flex-wrap gap-2">
        <Badge>Docker</Badge>
        <Badge>CI/CD</Badge>
        <Badge>GitHub Actions</Badge>
        <Badge>Cloud Fundamentals</Badge>
        <Badge>Observability</Badge>
      </div>
    </div>
  </div>
</section>


        {/* EDUCATION */}
        <section id="education" className="scroll-mt-24">
          <SectionTitle eyebrow="Education" title="Education journey" subtitle="Formal learning that supports my growth." />
          <div className="space-y-4">
            {EDUCATION.map((e) => (
              <Card key={e.school + e.program}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold">{e.school}</h3>
                    <p className="text-xs text-slate-400">{e.program}</p>
                  </div>
                  <p className="text-xs font-mono text-slate-400">{e.year}</p>
                </div>
                {e.notes?.length ? (
                  <ul className="mt-3 text-xs text-slate-300 space-y-1">
                    {e.notes.map((n) => <li key={n}>• {n}</li>)}
                  </ul>
                ) : null}
              </Card>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24">
          <SectionTitle eyebrow="Experience" title="Work experience" subtitle="Hands-on production support with automation initiatives." />
          <div className="space-y-4">
            {EXPERIENCE.map((x) => (
              <Card key={x.company + x.role}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold">{x.role}</h3>
                    <p className="text-xs text-slate-400">{x.company}</p>
                  </div>
                  <p className="text-xs font-mono text-slate-400">{x.year}</p>
                </div>

                <ul className="mt-3 text-xs text-slate-300 space-y-1">
                  {x.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {x.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
              </Card>
            ))}
          </div>
        </section>
        {/* ROADMAP */}
<section id="roadmap" className="scroll-mt-24">
  <SectionTitle
    eyebrow="Roadmap"
    title="From L1 Support to DevOps"
    subtitle="A clear and realistic learning path based on my current role."
  />

  <div className="grid gap-6 md:grid-cols-3">
    {/* NOW */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-sm font-semibold text-slate-100 mb-2">Now</h3>
      <p className="text-xs text-slate-400 mb-3">Current focus</p>
      <ul className="text-xs text-slate-300 space-y-1">
        <li>• Production monitoring & log analysis</li>
        <li>• Incident triage & escalation</li>
        <li>• Bash & Python automation</li>
      </ul>
    </div>

    {/* NEXT */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-sm font-semibold text-cyan-300 mb-2">Next (30–60 days)</h3>
      <p className="text-xs text-slate-400 mb-3">Short-term goals</p>
      <ul className="text-xs text-slate-300 space-y-1">
        <li>• Dockerize 1–2 internal tools</li>
        <li>• GitHub Actions CI pipeline</li>
        <li>• Basic service monitoring dashboard</li>
      </ul>
    </div>

    {/* FUTURE */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-sm font-semibold text-emerald-300 mb-2">Later (90+ days)</h3>
      <p className="text-xs text-slate-400 mb-3">Mid-term goals</p>
      <ul className="text-xs text-slate-300 space-y-1">
        <li>• CI/CD for multi-service apps</li>
        <li>• Infrastructure fundamentals</li>
        <li>• Reliability & observability best practices</li>
      </ul>
    </div>
  </div>
</section>


        {/* CERTIFICATES */}
        <section id="certificates" className="scroll-mt-24">
          <SectionTitle eyebrow="Certificates" title="Learning proof" subtitle="Certifications & courses supporting my DevOps transition." />
          <div className="grid gap-5 md:grid-cols-3">
            {CERTIFICATES.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-cyan-500/70 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-sm font-semibold group-hover:text-cyan-300">{c.name}</h3>
                <p className="text-xs text-slate-400">{c.issuer}</p>
                <div className="mt-4 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{c.year}</span>
                  <span
                    className={`rounded-full px-2 py-1 border text-[10px] ${
                      c.status === "Completed"
                        ? "border-emerald-500/40 text-emerald-400"
                        : "border-amber-500/40 text-amber-400"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <SectionTitle eyebrow="Portfolio" title="Projects" subtitle="Built from real operational pain points." />
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-cyan-500/60 transition-colors">
                <div className="h-36 bg-slate-900 border-b border-slate-800">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="h-36 w-full object-cover"
                    />
                  ) : (
                    <div className="h-36 w-full flex items-center justify-center text-xs text-slate-500">
                      Add thumbnail in /public/projects/
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold">{p.name}</h3>
                    <p className="text-xs text-slate-400">{p.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs pt-2">
                    <a className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300" href={p.github} target="_blank" rel="noreferrer">
                      GitHub <ArrowUpRight className="w-3 h-3" />
                    </a>
                    {p.demo && p.demo !== "#" ? (
                      <a className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100" href={p.demo} target="_blank" rel="noreferrer">
                        Demo <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT CASE STUDY */}
<section id="case-studies" className="scroll-mt-24">
  <SectionTitle
    eyebrow="Case Studies"
    title="Selected project deep dives"
    subtitle="How I approach real problems with practical solutions."
  />

  <div className="space-y-6">
    {/* CASE 1 */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-sm font-semibold text-cyan-300">
        Hoodnote Monitoring System
      </h3>

      <div className="mt-3 grid gap-4 md:grid-cols-3 text-xs text-slate-300">
        <div>
          <p className="font-semibold text-slate-100 mb-1">Problem</p>
          <p>
            Error logs across multiple servers were checked manually, causing
            delayed detection and repetitive work.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-100 mb-1">Solution</p>
          <p>
            Built Bash and Python automation to scan logs, apply error
            thresholds, capture snapshots, and send alerts via Telegram.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-100 mb-1">Result</p>
          <p>
            Faster error visibility and reduced manual monitoring effort during
            daily operations.
          </p>
        </div>
      </div>
    </div>

    {/* CASE 2 */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-sm font-semibold text-indigo-300">
        NGRS Reporting Automation
      </h3>

      <div className="mt-3 grid gap-4 md:grid-cols-3 text-xs text-slate-300">
        <div>
          <p className="font-semibold text-slate-100 mb-1">Problem</p>
          <p>
            Daily reports required repetitive manual processing and were prone
            to inconsistency.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-100 mb-1">Solution</p>
          <p>
            Developed Python scripts to automate data parsing and report
            generation.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-100 mb-1">Result</p>
          <p>
            Reporting became faster, repeatable, and easier to maintain.
          </p>
        </div>
      </div>
    </div>

    {/* CASE 3 */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-sm font-semibold text-emerald-300">
        Web Attendance System (Capstone)
      </h3>

      <div className="mt-3 grid gap-4 md:grid-cols-3 text-xs text-slate-300">
        <div>
          <p className="font-semibold text-slate-100 mb-1">Problem</p>
          <p>
            Manual attendance was difficult to verify and vulnerable to misuse.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-100 mb-1">Solution</p>
          <p>
            Built a web-based attendance system using dynamic QR codes and
            geolocation validation.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-100 mb-1">Result</p>
          <p>
            Attendance validation improved with clearer and more transparent
            records.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* RESUME */}
        <section id="resume" className="scroll-mt-24">
          <SectionTitle eyebrow="Resume" title="Resume" subtitle="Preview or download the latest version." />
          <div className="grid gap-6 md:grid-cols-[2fr,3fr] items-start">
            <Card>
              <p className="text-sm text-slate-300">
                Place your PDF at <span className="font-mono">public/resume/cv-agung.pdf</span>.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors">
                  Download CV <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-cyan-500/70 hover:text-cyan-300 transition-colors">
                  Open in new tab <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </Card>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden p-4">
              {showResume ? (
                <iframe
                  title="resume"
                  src={`${PROFILE.resumeUrl}#page=1`}
                  className="w-full h-[520px]"
                  loading="lazy"
                />
              ) : (
                <div className="p-6 text-center">
                  <p className="text-sm text-slate-300 mb-4">Preview is lazy-loaded to keep the page light. Click below to load the embedded resume.</p>
                  <button
                    onClick={() => setShowResume(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
                  >
                    Load Resume Preview
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24">
          <SectionTitle eyebrow="Contact" title="Let’s connect" subtitle="Open for opportunities related to Ops, automation, and DevOps." />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-sm text-slate-300">
                If you need someone who understands production pressure from support side and is actively growing into DevOps, I’m happy to talk.
              </p>
            </Card>
            <Card>
              <div className="space-y-3 text-xs">
                <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href={`mailto:${PROFILE.email}`}>
                  <Mail className="w-4 h-4" /> {PROFILE.email}
                </a>
                <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href={PROFILE.github} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4" /> {PROFILE.github}
                </a>
                <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4" /> {PROFILE.linkedin}
                </a>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/80">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with Vite + React + Tailwind.</p>
          <p>Deploy only the dist/ folder for a lightweight server.</p>
        </div>
      </footer>
    </div>
  );
}
