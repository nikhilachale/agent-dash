import ScrollReveal from "./components/scroll-reveal";

export default function Home() {
  const guardrailLayers = [
    {
      id: "01",
      title: "Program allow-listing",
      copy:
        "Every agent transaction is constrained to approved Solana programs only. Unknown destinations never get execution rights.",
    },
    {
      id: "02",
      title: "Spending budgets",
      copy:
        "Per-transaction ceilings and rolling daily limits stop treasury drain attempts before they become catastrophic.",
    },
    {
      id: "03",
      title: "AI kill switch",
      copy:
        "Realtime monitoring evaluates behavior, flags anomalies, and can pause an agent on-chain in under three seconds.",
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
    <main className="relative overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(18,182,153,0.18),_transparent_32%),linear-gradient(180deg,_#07111d_0%,_#0b1523_48%,_#06101a_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[8%] top-28 h-56 w-56 rounded-full bg-[rgba(18,182,153,0.18)] blur-3xl" />
        <div className="absolute right-[6%] top-72 h-72 w-72 rounded-full bg-[rgba(255,122,89,0.12)] blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[rgba(89,122,255,0.12)] blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
        <ScrollReveal className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur">
            Solana Frontier Hackathon
            <span className="h-1.5 w-1.5 rounded-full bg-[#12b699]" />
            On-chain agent defense
          </div>
          <h1 className="max-w-5xl font-sans text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
            Guardrails for autonomous agents before a bad prompt becomes an on-chain loss.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Agent Guardrails Protocol is an on-chain policy layer for Solana AI
            agents. It lets builders enforce what an agent can call, how much
            it can spend, and how fast it can be paused when behavior drifts.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 flex flex-col gap-4 sm:flex-row" delay={120}>
          <a
            href="#defense-layers"
            className="inline-flex h-13 items-center justify-center rounded-full bg-[#12b699] px-7 text-sm font-semibold text-slate-950 transition hover:bg-[#3ce0bc]"
          >
            Explore the protocol
          </a>
          <a
            href="#architecture"
            className="inline-flex h-13 items-center justify-center rounded-full border border-white/15 bg-white/6 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See how it works
          </a>
        </ScrollReveal>

        <ScrollReveal
          className="mt-16 grid gap-5 md:grid-cols-[1.3fr_0.7fr]"
          delay={220}
        >
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
              <span>Runtime policy surface</span>
              <span>guarded_execute</span>
            </div>
            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/8 p-5">
                <p className="font-mono text-white/60">
                  Allow-list
                </p>
                <p className="mt-3 text-base font-medium text-white">
                  Only approved programs receive CPI access from the policy PDA.
                </p>
              </div>
              <div className="rounded-3xl border border-orange-300/20 bg-orange-300/8 p-5">
                <p className="font-mono text-white/60">
                  Budget caps
                </p>
                <p className="mt-3 text-base font-medium text-white">
                  Treasury movement is bounded by tx caps and rolling daily
                  limits.
                </p>
              </div>
              <div className="rounded-3xl border border-sky-300/20 bg-sky-300/8 p-5">
                <p className="font-mono text-white/60">
                  Kill switch
                </p>
                <p className="mt-3 text-base font-medium text-white">
                  Suspicious activity can be judged and paused in real time.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-white/12 bg-[#0d1726] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                Why it matters
              </p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                250,000+
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                AI agents are already active on Solana, and too many still hold
                unconstrained signing power.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-[#0d1726] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                Response target
              </p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                &lt; 3 sec
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                From suspicious event to on-chain pause through Helius, server
                analysis, and automated execution.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="problem"
        className="relative mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12"
      >
        <ScrollReveal className="grid gap-8 rounded-[2rem] border border-white/10 bg-black/20 p-8 backdrop-blur xl:grid-cols-[0.9fr_1.1fr] xl:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7ce7cf]">
              The problem
            </p>
            <h2 className="mt-4 max-w-md font-sans text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Web3 agents move fast. Their failure modes move faster.
            </h2>
          </div>
          <div className="grid gap-4 text-base leading-8 text-slate-300">
            <p>
              Today, an agent compromise usually means the treasury and
              permissions are compromised too. If the key can sign, it can drain.
            </p>
            <p>
              Agent Guardrails Protocol separates intent from execution. The
              agent can request an action, but the policy layer decides whether
              that action is legal, affordable, and safe enough to reach Solana.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="defense-layers"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7ce7cf]">
              Three layers of defense
            </p>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              A policy firewall between any autonomous agent and the chain.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {guardrailLayers.map((layer, index) => (
            <ScrollReveal key={layer.id} delay={index * 120}>
              <article className="group h-full rounded-[2rem] border border-white/12 bg-white/6 p-7 transition hover:-translate-y-1 hover:border-[#7ce7cf]/40 hover:bg-white/10">
                <p className="font-mono text-sm text-[#7ce7cf]">
                  {layer.id}
                </p>
                <h3 className="mt-5 font-sans text-2xl font-semibold text-white">
                  {layer.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {layer.copy}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        id="architecture"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal className="rounded-[2rem] border border-white/10 bg-[#091321] p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7ce7cf]">
              Architecture
            </p>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Built to make policy enforcement visible, auditable, and fast.
            </h2>
            <div className="mt-8 space-y-4">
              {operatingFlow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-3xl border border-white/8 bg-white/5 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#12b699] font-mono text-sm text-slate-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-slate-200">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,182,153,0.16),rgba(8,15,26,0.95))] p-8 sm:p-10" delay={140}>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/55">
              What it helps with in Web3
            </p>
            <div className="mt-6 space-y-6 text-base leading-8 text-slate-200">
              <p>
                It gives agent builders a way to ship automation without giving
                bots unconstrained treasury access.
              </p>
              <p>
                It gives protocols and funds clearer operational limits around
                swaps, staking, treasury management, and delegated workflows.
              </p>
              <p>
                It gives users confidence that autonomous behavior is still
                bounded by hard on-chain rules, not just off-chain promises.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="relative border-t border-white/10 pb-10 pt-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <ScrollReveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(124,231,207,0.14),rgba(7,17,29,0.92)_45%,rgba(255,122,89,0.1))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7ce7cf]">
                  Final layer
                </p>
                <h2 className="mt-4 max-w-2xl font-sans text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Autonomous agents should feel powerful, not impossible to
                  control.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
                  Agent Guardrails Protocol brings hard execution limits,
                  realtime oversight, and on-chain pause controls to AI-native
                  products building on Solana.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                    Navigate
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {footerLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium text-slate-200 transition hover:text-[#7ce7cf]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                    Built for
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    <p>Solana AI agents</p>
                    <p>Protocol treasuries</p>
                    <p>High-trust Web3 automation</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="mt-8 flex flex-col gap-5 border-t border-white/8 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"
            delay={120}
          >
            <p>
              Agent Guardrails Protocol
              <span className="mx-2 text-white/20">/</span>
              On-chain policy enforcement for Solana agents
            </p>
            <p>Built for Solana Frontier hackathon.</p>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  );
}
