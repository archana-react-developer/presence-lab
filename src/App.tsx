import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Gauge,
  MousePointerClick,
  CheckCircle2,
  ExternalLink,
  Code2,
  Palette,
  Zap,
  BrainCircuit,
  Activity,
  ShieldCheck,
  Workflow,
  LineChart,
} from "lucide-react";

/**
 * Senior Frontend / AI Systems Portfolio Landing Page
 * Upgraded for senior frontend roles at AI startups and enterprise product teams.
 * Focus areas: React + TypeScript, AI workflows, real-time dashboards,
 * visualization systems, performance, accessibility, architecture ownership.
 */

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const Button = ({ children, className = "", variant = "primary", ...props }: ButtonProps) => {
  const variantClass = {
    primary:
      "bg-white text-neutral-950 hover:bg-white/90 shadow-lg shadow-white/10",
    outline:
      "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25",
    ghost: "text-white/75 hover:text-white hover:bg-white/10",
  }[variant];

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 disabled:pointer-events-none disabled:opacity-50",
        variantClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={cn("rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20", className)}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={className}>{children}</div>
);

const Badge = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => (
  <span className={cn("inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/80", className)}>
    {children}
  </span>
);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
  viewport: { once: true, amount: 0.2 },
};

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const chips = [
  "React",
  "TypeScript",
  "Next.js",
  "AI Workflows",
  "Data Visualization",
  "Real-Time UI",
  "Performance",
  "Accessibility",
];

const metrics = [
  { label: "Frontend performance improvement", value: 40, suffix: "%" },
  { label: "Production-style apps shipped", value: 6, suffix: "+" },
  { label: "Reusable UI patterns", value: 24, suffix: "+" },
];

const principles = [
  {
    icon: BrainCircuit,
    title: "AI-native UX",
    text: "Interfaces for AI recommendations, conversational workflows, streaming states, and decision support.",
  },
  {
    icon: Activity,
    title: "Real-time systems",
    text: "Dashboards designed around live events, telemetry, optimistic updates, and responsive state synchronization.",
  },
  {
    icon: Layers,
    title: "Component architecture",
    text: "Reusable primitives, typed data models, composable layouts, and scalable patterns that support fast iteration.",
  },
  {
    icon: Gauge,
    title: "Performance by default",
    text: "Memoization, lazy loading, code splitting, virtualization, and measured motion budgets to keep UX fast.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise readiness",
    text: "Accessibility-minded UI, role-based experience thinking, resilient flows, and production-quality polish.",
  },
  {
    icon: MousePointerClick,
    title: "Interaction craft",
    text: "Motion and micro-interactions that clarify hierarchy without making the interface feel heavy.",
  },
];

const showcases = [
  {
    title: "3D Drone Operations Dashboard",
    label: "Telemetry + Mapping UI",
    link: "https://drone-operations-mapping-dashboard.netlify.app/",
    icon: Activity,
    desc: "Real-time mission-planning interface with telemetry panels, 3D visualization, operational overlays, and optimized WebGL rendering.",
    stack: ["React", "TypeScript", "Three.js", "WebGL"],
    impact: "Built to demonstrate operational visibility, live state monitoring, and performance-aware visualization architecture.",
  },
  {
    title: "AI Financial Insights Platform",
    label: "AI Workflow Dashboard",
    link: "https://ai-expensetracker26.netlify.app/",
    icon: BrainCircuit,
    desc: "AI-powered analytics dashboard with recommendation workflows, dynamic filtering, conversational insights, and async data states.",
    stack: ["React", "TypeScript", "OpenAI", "Node.js"],
    impact: "Designed AI interaction flows that convert raw financial data into actionable user-facing insights.",
  },
  {
    title: "Movie Discovery Platform",
    label: "Search + Content UX",
    link: "https://archana-moviemate-reactjs.netlify.app/",
    icon: LineChart,
    desc: "Media discovery experience with filtering, routing, API integration, reusable UI patterns, and performance-focused rendering.",
    stack: ["React", "TMDB API", "Routing", "Custom Hooks"],
    impact: "Shows strong product UX, search flows, dynamic content rendering, and responsive frontend implementation.",
  },
  {
    title: "Ebook Commerce Platform",
    label: "Commerce UI",
    link: "https://ebookify.netlify.app/",
    icon: Workflow,
    desc: "Shopping experience with product browsing, cart interactions, conversion-focused layout, and responsive product surfaces.",
    stack: ["React", "Commerce UX", "Responsive UI", "Netlify"],
    impact: "Demonstrates product thinking across discovery, evaluation, and checkout-adjacent interaction patterns.",
  },
];

const timeline = [
  {
    phase: "Frame the workflow",
    text: "Clarify user goals, system constraints, critical states, and the business decision the interface needs to support.",
  },
  {
    phase: "Model the experience",
    text: "Define data structures, component boundaries, loading states, errors, accessibility requirements, and core interaction patterns.",
  },
  {
    phase: "Build the system",
    text: "Implement composable React components with TypeScript, reusable primitives, state management, and performance-safe rendering.",
  },
  {
    phase: "Measure and refine",
    text: "Tune responsiveness, motion, bundle weight, Lighthouse signals, interaction polish, and real-world usability.",
  },
];

function AnimatedCount({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const totalFrames = 60;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));

      if (progress === 1) window.clearInterval(timer);
    }, 16);

    return () => window.clearInterval(timer);
  }, [value, prefersReducedMotion]);

  return (
    <span aria-label={`${value}${suffix}`}>
      {display}
      {suffix}
    </span>
  );
}

function ExternalAnchor({ href, children, className = "" }: React.PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function SeniorFrontendPortfolioLanding() {
  const [email, setEmail] = useState("");
  const validEmail = useMemo(() => /.+@.+\..+/.test(email), [email]);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-neutral-950 text-white selection:bg-fuchsia-300 selection:text-neutral-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-neutral-950"
      >
        Skip to content
      </a>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-8rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/75 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <ExternalAnchor href="https://archana-react-ai-portfolio.netlify.app/" className="flex items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-white/60">Archana Potnis</p>
              <p className="font-semibold">Senior Frontend · AI Product UX</p>
            </div>
          </ExternalAnchor>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-sm text-white/65 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300">
                {item.label}
              </a>
            ))}
          </nav>

          <ExternalAnchor href="https://archana-react-ai-portfolio.netlify.app/" className="hidden md:block">
            <Button>View portfolio <ExternalLink className="h-4 w-4" aria-hidden="true" /></Button>
          </ExternalAnchor>
        </div>
      </motion.header>

      <main id="main">
        <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <motion.div {...fadeUp} className="max-w-4xl">
            <Badge className="mb-6">
              <Zap className="h-4 w-4 text-fuchsia-200" aria-hidden="true" />
              React • TypeScript • AI Systems • Real-Time Dashboards
            </Badge>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Senior frontend engineer building
              <span className="text-fuchsia-300"> AI-native</span>,
              <span className="text-sky-300"> data-rich</span> product experiences.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
              I design and build high-performance React + TypeScript interfaces for AI workflows,
              enterprise dashboards, real-time systems, visualization-heavy products, and polished user experiences that move from prototype to production.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalAnchor href="https://archana-react-ai-portfolio.netlify.app/">
                <Button className="px-6 text-base">
                  Explore portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </ExternalAnchor>
              <ExternalAnchor href="https://drone-operations-mapping-dashboard.netlify.app/">
                <Button variant="outline" className="px-6 text-base">
                  View drone dashboard <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Button>
              </ExternalAnchor>
            </div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <motion.span key={chip} variants={fadeUp} whileHover={{ y: -2 }} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/75">
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.75, delay: 0.08 }} className="mt-16 grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-sm text-white/60">
                  <span>Featured system · AI workflow command surface</span>
                  <span className="hidden rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-200 md:inline-flex">Production-minded</span>
                </div>

                <div className="grid gap-0 md:grid-cols-[1.08fr_0.92fr]">
                  <div className="p-6 md:p-8">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      Fast, accessible, real-time ready
                    </div>

                    <h2 className="text-3xl font-semibold md:text-4xl">
                      Frontend architecture for complex AI and enterprise workflows.
                    </h2>
                    <p className="mt-4 max-w-xl text-white/70">
                      The strongest product UIs are not just beautiful. They make complex systems understandable: live data, model states, user actions, failures, permissions, and business context all working together.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {metrics.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                          <p className="text-sm text-white/50">{item.label}</p>
                          <p className="mt-2 text-2xl font-semibold text-white">
                            <AnimatedCount value={item.value} suffix={item.suffix} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="border-t border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-6 md:border-l md:border-t-0 md:p-8"
                  >
                    <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/90 p-4 shadow-xl">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <p className="text-sm text-white/50">System panel</p>
                          <p className="font-semibold">AI workflow health</p>
                        </div>
                        <div className="rounded-full bg-fuchsia-400/15 px-3 py-1 text-xs text-fuchsia-200">Live</div>
                      </div>

                      <div className="space-y-3">
                        {[
                          { label: "Model response state", width: "82%" },
                          { label: "Data sync", width: "68%" },
                          { label: "Render budget", width: "91%" },
                        ].map((row, index) => (
                          <div key={row.label}>
                            <div className="mb-1 flex justify-between text-xs text-white/50">
                              <span>{row.label}</span>
                              <span>{row.width}</span>
                            </div>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: row.width }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                              className="h-3 rounded-full bg-gradient-to-r from-sky-300 via-fuchsia-300 to-violet-300"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-3">
                        {[
                          "Typed state models for predictable UI behavior",
                          "Optimistic updates for faster perceived performance",
                          "Reusable primitives for fast product iteration",
                        ].map((line) => (
                          <div key={line} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm text-white/75">
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-white/50">Positioning</p>
                  <h3 className="mt-2 text-2xl font-semibold">More than implementation: product-minded frontend ownership.</h3>
                  <p className="mt-4 text-white/70">
                    I can take ambiguous AI product ideas and turn them into useful interfaces with crisp hierarchy, scalable architecture, and startup-speed execution.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-fuchsia-500/10 to-sky-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Code2 className="h-5 w-5 text-white/80" aria-hidden="true" />
                    <p className="font-semibold">Engineering philosophy</p>
                  </div>
                  <ul className="mt-4 space-y-3 text-white/75">
                    <li>• Compose from primitives, not page-specific hacks.</li>
                    <li>• Make complex data feel understandable and actionable.</li>
                    <li>• Protect performance with measured rendering decisions.</li>
                    <li>• Ship fast while preserving maintainable architecture.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <motion.div {...fadeUp} className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Projects shaped like real product systems.</h2>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 md:block">
              Live demos + architecture signals
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="mt-10 grid gap-6 md:grid-cols-2">
            {showcases.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
                  <ExternalAnchor href={item.link} className="block h-full rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300">
                    <Card className="h-full transition hover:border-white/20 hover:bg-white/[0.07]">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-white/40">{item.label}</p>
                            <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                          </div>
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                        </div>

                        <p className="mt-4 text-white/70">{item.desc}</p>
                        <p className="mt-4 text-sm text-white/55">{item.impact}</p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/65">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/85">
                          View live demo <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </div>
                      </CardContent>
                    </Card>
                  </ExternalAnchor>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section id="systems" className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">Systems thinking</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">How I build senior-level frontend systems.</h2>
              <p className="mt-5 max-w-xl text-lg text-white/70">
                Senior frontend work is the ability to zoom into pixels, state, and accessibility details — then zoom out to architecture, velocity, and business value.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid gap-4 md:grid-cols-2">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-white/70">{item.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">Process</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">From ambiguous idea to polished product surface.</h2>
              <p className="mt-5 text-lg text-white/70">
                My process is optimized for fast-moving teams: clarify the system, ship a strong first version, measure what matters, and refine with intent.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-4">
              {timeline.map((step, index) => (
                <motion.div key={step.phase} variants={fadeUp}>
                  <Card>
                    <CardContent className="flex gap-5 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white/85">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{step.phase}</h3>
                        <p className="mt-2 text-white/70">{step.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 pt-8 lg:px-8">
          <motion.div {...fadeUp}>
            <Card className="overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/45">Hiring CTA</p>
                  <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-5xl">
                    Looking for a frontend engineer who can build AI product interfaces and still sweat the details?
                  </h2>
                  <p className="mt-4 max-w-2xl text-white/70">
                    I bring React + TypeScript depth, product judgment, performance discipline, and the ability to turn complex workflows into clear, usable interfaces.
                  </p>
                </div>

                <div className="min-w-[18rem] space-y-3">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter email for contact flow"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-white placeholder:text-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
                  />
                  <Button className="h-12 w-full text-base" disabled={email.length > 0 && !validEmail}>
                    {validEmail ? "Ready to connect" : "Preview contact flow"}
                  </Button>
                  <p className="text-xs text-white/45">Prototype UI only — connect this to Formspree, Netlify Forms, or your backend.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
