import ProblemSection from './components/problem-section'

export default function Home() {
  const guardrailLayers = [
    {
      id: "01",
      title: "Program allow-listing",
      copy:
        "Every agent transaction is constrained to approved Solana programs only. Unknown destinations never get execution rights.",
      accent: "from-primary/30 to-primary/0",
    },
    {
      id: "02",
      title: "Spending budgets",
      copy:
        "Per-transaction ceilings and rolling daily limits stop treasury drain attempts before they become catastrophic.",
      accent: "from-secondary/30 to-secondary/0",
    },
    {
      id: "03",
      title: "AI kill switch",
      copy:
        "Realtime monitoring evaluates behavior, flags anomalies, and can pause an agent on-chain in under three seconds.",
      accent: "from-accent/30 to-accent/0",
    },
  ];

  const operatingFlow = [
    "Agent signs intent",
    "Guardrails PDA validates policy",
    "Approved CPI reaches target program",
    "Helius streams events to the monitor",
    "Claude judges anomalies and can trigger PAUSE",
  ];

  const footerLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Defense Layers", href: "#defense-layers" },
    { label: "Architecture", href: "#architecture" },
  ];

  return (
    <main className="relative overflow-x-hidden bg-[radial-gradient(circle_at_top,rgb(var(--primary-rgb)/0.18),transparent_32%),linear-gradient(180deg,var(--background-deep)_0%,var(--background-mid)_48%,var(--background)_100%)] text-foreground">
      <section className="relative mx-auto flex h-screen w-full max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            On-chain agent defense
          </div>
          <h1 className="max-w-5xl font-sans text-5xl font-semibold leading-[0.92] tracking-tighter sm:text-6xl lg:text-8xl">
            Agent 
            <span className="text-primary-soft"> Guardrails</span> Protocol 
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Agent Guardrails Protocol is an on-chain policy layer for Solana AI
            agents. It lets builders enforce what an agent can call, how much
            it can spend, and how fast it can be paused when behavior drifts.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#defense-layers"
            className="inline-flex h-13 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-slate-950"
          >
            Explore the protocol →
          </a>
          <a
            href="#architecture"
            className="inline-flex h-13 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white"
          >
            See how it works
            <span className="ml-2">↗</span>
          </a>
        </div>

    
      </section>

      {/* <section>
            <div className="mt-16 grid gap-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
              <span>Runtime policy surface</span>
              <span className="font-mono text-primary-soft">guarded_execute</span>
            </div>
              <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <p className="font-mono text-white/60">Allow-list</p>
                <p className="mt-3 text-base font-medium text-white">
                  Only approved programs receive CPI access from the policy PDA.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
                <p className="font-mono text-white/60">Budget caps</p>
                <p className="mt-3 text-base font-medium text-white">
                  Treasury movement is bounded by tx caps and rolling daily
                  limits.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                <p className="font-mono text-white/60">Kill switch</p>
                <p className="mt-3 text-base font-medium text-white">
                  Suspicious activity can be judged and paused in real time.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                Why it matters
              </p>
              <p className="mt-4 text-4xl font-semibold text-primary-soft">
                250,000+
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                AI agents are already active on Solana, and too many still hold
                unconstrained signing power.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                Response target
              </p>
              <p className="mt-4 text-4xl font-semibold text-secondary-soft">
                &lt; 3 sec
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                From suspicious event to on-chain pause through Helius, server
                analysis, and automated execution.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <ProblemSection />

      <section
        id="defense-layers"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary-soft">
              Three layers of defense
            </p>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              A policy firewall between any autonomous agent and{" "}
              <span className="text-primary-soft">the chain.</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {guardrailLayers.map((layer) => (
            <div key={layer.id}>
              <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="font-mono text-sm text-primary-soft">
                  {layer.id}
                </p>
                <h3 className="mt-5 font-sans text-2xl font-semibold text-white">
                  {layer.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {layer.copy}
                </p>
                <div className="mt-6 h-px w-full bg-primary-soft/20" />
              </article>
            </div>
          ))}
        </div>
      </section>

      <section
        id="architecture"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary-soft">
              Architecture
            </p>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              Built to make policy enforcement{" "}
              <span className="text-primary-soft">visible, auditable, and fast.</span>
            </h2>
            <div className="relative mt-8 space-y-4">
              <div className="pointer-events-none absolute left-4.5 top-2 bottom-2 w-px bg-linear-to-b from-primary via-foreground/10 to-transparent" />
              {operatingFlow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm text-slate-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-slate-200">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgb(var(--primary-rgb)/0.16),var(--background-deep)_95%)] p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-foreground/55">
              What it helps with in Web3
            </p>
            <div className="mt-6 space-y-6 text-base leading-8 text-slate-200">
              <p className="border-l-2 border-primary-soft/40 pl-4 transition hover:border-primary-soft hover:pl-5">
                It gives agent builders a way to ship automation without giving
                bots unconstrained treasury access.
              </p>
              <p className="border-l-2 border-primary-soft/40 pl-4 transition hover:border-primary-soft hover:pl-5">
                It gives protocols and funds clearer operational limits around
                swaps, staking, treasury management, and delegated workflows.
              </p>
              <p className="border-l-2 border-primary-soft/40 pl-4 transition hover:border-primary-soft hover:pl-5">
                It gives users confidence that autonomous behavior is still
                bounded by hard on-chain rules, not just off-chain promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-border pb-10 pt-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgb(var(--primary-soft-rgb)/0.14),var(--background-deep)_45%,rgb(var(--secondary-rgb)/0.1))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary-soft">
                  Final layer
                </p>
                <h2 className="mt-4 max-w-2xl font-sans text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
                  Autonomous agents should feel{" "}
                  <span className="text-primary-soft">powerful</span>, not impossible
                  to control.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-foreground-dim">
                  Agent Guardrails Protocol brings hard execution limits,
                  realtime oversight, and on-chain pause controls to AI-native
                  products building on Solana.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-foreground/45">
                    Navigate
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {footerLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-2 text-sm font-medium text-foreground-dim transition hover:text-primary-soft"
                      >
                        <span className="h-px w-3 bg-primary-soft/40 transition-all duration-300 group-hover:w-6 group-hover:bg-primary-soft" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-foreground/45">
                    Built for
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-foreground-dim">
                    <p>Solana AI agents</p>
                    <p>Protocol treasuries</p>
                    <p>High-trust Web3 automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-border/60 pt-6 text-sm text-foreground-dim md:flex-row md:items-center md:justify-between">
            <p>
              Agent Guardrails Protocol
              <span className="mx-2 text-foreground/20">/</span>
              On-chain policy enforcement for Solana agents
            </p>
            <p>Built for Solana Frontier hackathon.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
