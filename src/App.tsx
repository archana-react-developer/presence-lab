import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, Gauge, MousePointerClick, CheckCircle2, Play, Code2, Palette, Zap } from "lucide-react";
const Button = ({ children, className = "", variant, ...props }: any) => (
  <button
    className={`px-4 py-2 rounded-xl font-medium transition ${
      variant === "outline"
        ? "border border-white/20 text-white bg-transparent hover:bg-white/10"
        : "bg-white text-black hover:opacity-90"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }: any) => (
  <div className={`rounded-2xl border border-white/10 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }: any) => (
  <div className={className}>{children}</div>
);

const Badge = ({ children, className = "" }: any) => (
  <span
    className={`px-3 py-1 text-sm rounded-full border border-white/20 ${className}`}
  >
    {children}
  </span>
);

const Input = ({ className = "", ...props }: any) => (
  <input
    className={`px-3 py-2 rounded-xl border border-white/20 bg-black text-white ${className}`}
    {...props}
  />
);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
  viewport: { once: true, amount: 0.2 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(8px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7 },
};

const chips = [
  "React",
  "TypeScript",
  "Design Systems",
  "Motion",
  "Accessibility",
  "Performance",
];

const principles = [
  {
    icon: Palette,
    title: "Crafted UI",
    text: "Interfaces that feel polished, intentional, and visually calm.",
  },
  {
    icon: Gauge,
    title: "Fast by default",
    text: "Performance-aware patterns that keep experiences responsive.",
  },
  {
    icon: Layers,
    title: "System thinking",
    text: "Reusable components and scalable design decisions from day one.",
  },
  {
    icon: MousePointerClick,
    title: "Thoughtful interaction",
    text: "Micro-interactions that guide attention without distracting users.",
  },
];

const showcases = [
  {
    title: "Content Discovery Platform",
    label: "Search-driven UI",
    stat: "Live demo",
    filename: "moviemate-app",
    link: "https://archana-moviemate-reactjs.netlify.app/",
    desc: "A modern movie discovery platform with filtering, routing, and performance-optimized rendering.",
  },
  {
    title: "Financial Analytics Dashboard",
    label: "Data dashboard",
    stat: "Live demo",
    filename: "expense-tracker",
    link: "https://ai-expensetracker26.netlify.app/",
    desc: "Real-time expense tracking dashboard with clean UX and efficient data visualization.",
  },
  {
    title: "Commerce Platform",
    label: "E-commerce UI",
    stat: "Live demo",
    filename: "ebookify-store",
    link: "https://ebookify.netlify.app/",
    desc: "End-to-end shopping experience with product discovery, cart flow, and checkout interactions.",
  },
];

const timeline = [
  {
    phase: "Discover",
    text: "Define user intent, primary story beats, and where motion should support—not dominate—the page.",
  },
  {
    phase: "Design",
    text: "Create modular sections, interaction states, typography hierarchy, and a reusable visual language.",
  },
  {
    phase: "Build",
    text: "Implement in React with composable components, performance-aware motion, and accessibility checks.",
  },
  {
    phase: "Refine",
    text: "Tune spacing, timing, responsiveness, and interaction detail until the experience feels effortless.",
  },
];

function AnimatedCount({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);
  React.useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = 16;
    const increment = value / (duration / stepTime);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StripeDesignEngineerPortfolioDemo() {
  const [email, setEmail] = useState("");
  const valid = useMemo(() => /.+@.+\..+/.test(email), [email]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-white/60">Archana Potnis</p>
              <p className="font-medium">
                Frontend Systems & UI Engineering Demo
              </p>
            </div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="hidden items-center gap-3 md:flex"
          >
            {[
              { href: "#work", label: "Work" },
              { href: "#system", label: "System" },
              { href: "#process", label: "Process" },
            ].map((item) => (
              <motion.a
                key={item.href}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                href={item.href}
                className="text-sm text-white/70 hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="rounded-2xl">View portfolio</Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <motion.div {...fadeUp} className="max-w-3xl">
            <Badge className="mb-6 rounded-full border-white/10 bg-white/10 px-4 py-1 text-white hover:bg-white/10">
              React • Motion • Storytelling UI
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Building product experiences where{" "}
              <span className="text-fuchsia-300">design craft</span> and{" "}
              <span className="text-sky-300">engineering rigor</span> meet.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              A portfolio concept for a Frontend Systems & UI Engineering role:
              polished web storytelling, reusable systems, subtle motion, and
              performance-aware implementation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl px-6 text-base">
                Explore case study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" /> Watch prototype
              </Button>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="mt-8 flex flex-wrap gap-2"
            >
              {chips.map((chip) => (
                <motion.span
                  key={chip}
                  variants={fadeUp}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/75"
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            {...scaleIn}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-16 grid gap-6 lg:grid-cols-[1.35fr_0.85fr]"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl shadow-black/30">
                <CardContent className="p-0">
                  <div className="border-b border-white/10 px-6 py-4 text-sm text-white/60">
                    Featured concept · Frontend System landing experience
                  </div>
                  <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="p-6 md:p-8">
                      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                        <CheckCircle2 className="h-4 w-4" /> Live system status:
                        smooth, responsive, accessible
                      </div>
                      <h2 className="text-3xl font-semibold">
                        A marketing surface that feels premium without feeling
                        heavy.
                      </h2>
                      <p className="mt-4 max-w-xl text-white/70">
                        This demo page uses layered hierarchy, lightweight
                        motion, strong contrast, and modular sections to turn a
                        static landing page into an interaction-led product
                        story.
                      </p>
                      <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        className="mt-8 grid grid-cols-3 gap-3"
                      >
                        {[
                          { label: "Lighthouse", value: 96, suffix: "" },
                          { label: "Reusable blocks", value: 24, suffix: "+" },
                          {
                            label: "Animation budget",
                            value: 180,
                            suffix: "ms",
                          },
                        ].map((item) => (
                          <motion.div
                            key={item.label}
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            className="rounded-2xl border border-white/10 bg-black/20 p-4"
                          >
                            <p className="text-sm text-white/50">
                              {item.label}
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-white">
                              <AnimatedCount
                                value={item.value}
                                suffix={item.suffix}
                              />
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="border-l border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-6 md:p-8"
                    >
                      <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/90 p-4 shadow-xl">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm text-white/50">
                              Interaction panel
                            </p>
                            <p className="font-medium">Motion system</p>
                          </div>
                          <div className="rounded-full bg-fuchsia-400/15 px-3 py-1 text-xs text-fuchsia-200">
                            Refined
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[78, 62, 90].map((w, i) => (
                            <motion.div
                              key={i}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${w}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.12 }}
                              className="h-3 rounded-full bg-gradient-to-r from-sky-300 via-fuchsia-300 to-violet-300"
                            />
                          ))}
                        </div>
                        <div className="mt-6 grid gap-3">
                          {[
                            "Motion is subtle and purposeful",
                            "Components scale across sections",
                            "Typography supports narrative flow",
                          ].map((line) => (
                            <div
                              key={line}
                              className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-white/75"
                            >
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid gap-6">
              <Card className="rounded-[2rem] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <p className="text-sm text-white/50">Why this role</p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Design-minded engineering, not just implementation.
                  </h3>
                  <p className="mt-4 text-white/70">
                    The best product surfaces come from engineers who care about
                    motion, rhythm, accessibility, and system-level consistency.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-sky-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Code2 className="h-5 w-5 text-white/80" />
                    <p className="font-medium">Build philosophy</p>
                  </div>
                  <ul className="mt-4 space-y-3 text-white/75">
                    <li>Compose from primitives, not page-specific hacks.</li>
                    <li>Use motion to guide understanding.</li>
                    <li>
                      Protect responsiveness with measured animation budgets.
                    </li>
                    <li>
                      Keep systems elegant enough for designers and engineers
                      alike.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section
          id="work"
          className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20"
        >
          <motion.div
            {...fadeUp}
            className="flex items-end justify-between gap-4"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                Selected highlights
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                A portfolio demo shaped for design engineering.
              </h2>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 md:block">
              Case-study style sections
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {showcases.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="block h-full"
>
  <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 hover:bg-white/[0.07] transition hover:scale-[1.02]">
    <CardContent className="p-6">
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-white/40 uppercase tracking-wide">
            {item.title}
          </p>
          <p className="text-sm text-white/50">{item.label}</p>
        </div>
        <Zap className="h-4 w-4 text-white/40" />
      </div>

      <h3 className="mt-5 text-2xl font-semibold">
        {item.title}
      </h3>

      <p className="mt-3 text-white/70">{item.desc}</p>

      <div className="mt-6 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/85">
        {item.stat} →
      </div>

    </CardContent>
  </Card>
</a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section
          id="system"
          className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                Principles
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Systems that scale the page and the team.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-white/70">
                A Frontend Systems & UI Engineering should be able to zoom into
                spacing and interaction details, then zoom back out to see
                component reuse, content rhythm, and implementation cost.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid gap-4 md:grid-cols-2"
            >
              {principles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  >
                    <Card className="h-full rounded-[2rem] border-white/10 bg-white/5">
                      <CardContent className="p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-white/70">{item.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section
          id="process"
          className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                From idea to polished surface.
              </h2>
              <p className="mt-5 text-lg text-white/70">
                The workflow below mirrors how I would approach a presence or
                design engineering project: clear narrative, modular
                implementation, then relentless refinement.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-4"
            >
              {timeline.map((step, idx) => (
                <motion.div key={step.phase} variants={fadeUp}>
                  <Card className="rounded-[2rem] border-white/10 bg-white/5">
                    <CardContent className="flex gap-5 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white/85">
                        0{idx + 1}
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

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
          <motion.div {...fadeUp}>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-gradient-to-br from-white/10 to-white/5">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                    Demo CTA
                  </p>
                  <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-5xl">
                    Want a frontend systems engineer who obsesses over craft and
                    still ships fast?
                  </h2>
                  <p className="mt-4 max-w-2xl text-white/70">
                    This section is intentionally built like a hiring-facing
                    call to action—clear, polished, and easy to extend into a
                    real portfolio site.
                  </p>
                </div>
                <div className="min-w-[18rem] space-y-3">
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for portfolio updates"
                    className="h-12 rounded-2xl border-white/10 bg-black/20 text-white placeholder:text-white/35"
                  />
                  <motion.div
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="h-12 w-full rounded-2xl text-base">
                      {valid ? "Looks good — send" : "Preview contact flow"}
                    </Button>
                  </motion.div>
                  <p className="text-xs text-white/45">
                    Prototype UI only — no backend connected.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
