import ScrollReveal from "./components/scroll-reveal";

export default function Home() {
  const guardrailLayers = [
    {
      id: "01",
      title: "Program allow-listing",
      copy:
        "Every agent transaction is constrained to approved Solana programs only. Unknown destinations never get execution rights.",
      accent: "from-emerald-400/30 to-emerald-400/0",
    },
    {
      id: "02",
      title: "Spending budgets",
      copy:
        "Per-transaction ceilings and rolling daily limits stop treasury drain attempts before they become catastrophic.",
      accent: "from-orange-300/30 to-orange-300/0",
    },
    {
      id: "03",
      title: "AI kill switch",
      copy:
        "Realtime monitoring evaluates behavior, flags anomalies, and can pause an agent on-chain in under three seconds.",
      accent: "from-sky-300/30 to-sky-300/0",
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
      <style>{`
        @keyframes float-slow { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(0,-28px,0) scale(1.06); } }
        @keyframes float-medium { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(18px,-22px,0) scale(1.04); } }
        @keyframes float-reverse { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-22px,24px,0) scale(1.05); } }
        @keyframes gradient-shift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes shimmer { 0% { transform: translateX(-120%) skewX(-12deg); } 100% { transform: translateX(220%) skewX(-12deg); } }
        @keyframes pulse-dot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.2); } }
        @keyframes drift-grid { 0% { background-position: 0 0; } 100% { background-position: 60px 60px; } }

        .gradient-text {
          background: linear-gradient(120deg,#fff 0%,#7ce7cf 38%,#fff 62%,#ffb39a 100%);
          background-size: 220% 220%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient-shift 9s ease-in-out infinite;
        }
        .grid-overlay {
          background-image:
            linear-gradient(rgba(124,231,207,0.06) 1px,transparent 1px),
            linear-gradient(90deg,rgba(124,231,207,0.06) 1px,transparent 1px);
          background-size: 60px 60px;
          animation: drift-grid 22s linear infinite;
        }
        .card-sheen { position: relative; overflow: hidden; }
        .card-sheen::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(124,231,207,0.18), transparent 40%);
          opacity: 0;
          transition: opacity 320ms ease;
          pointer-events: none;
        }
        .card-sheen:hover::before { opacity: 1; }
        .glow-on-hover { transition: transform 280ms ease, box-shadow 320ms ease, border-color 280ms ease; }
        .glow-on-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(18,182,153,0.18), 0 0 0 1px rgba(124,231,207,0.35);
        }
        .shimmer-button { position: relative; overflow: hidden; isolation: isolate; }
        .shimmer-button::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%);
          transform: translateX(-120%) skewX(-12deg);
          pointer-events: none;
        }
        .shimmer-button:hover::after { animation: shimmer 0.9s ease-out; }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .gradient-text,
          .grid-overlay,
          .pulse-dot { animation: none; }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />

      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div
          className="absolute left-[8%] top-28 h-56 w-56 rounded-full bg-[rgba(18,182,153,0.22)] blur-3xl"
          style={{ animation: "float-slow 14s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[6%] top-72 h-72 w-72 rounded-full bg-[rgba(255,122,89,0.16)] blur-3xl"
          style={{ animation: "float-medium 11s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[rgba(89,122,255,0.16)] blur-3xl"
          style={{ animation: "float-reverse 13s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[20%] bottom-1/3 h-40 w-40 rounded-full bg-[rgba(124,231,207,0.14)] blur-3xl"
          style={{ animation: "float-medium 11s ease-in-out infinite" }}
        />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
        <ScrollReveal className="max-w-3xl" direction="fade">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur transition hover:border-[#7ce7cf]/50 hover:bg-white/10">
            Solana Frontier Hackathon
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#12b699] opacity-75 pulse-dot" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#12b699]" />
            </span>
            On-chain agent defense
          </div>
          <h1 className="max-w-5xl font-sans text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            <span className="gradient-text">Guardrails</span> for autonomous
            agents before a bad prompt becomes an on-chain loss.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Agent Guardrails Protocol is an on-chain policy layer for Solana AI
            agents. It lets builders enforce what an agent can call, how much
            it can spend, and how fast it can be paused when behavior drifts.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          delay={140}
          direction="up"
        >
          <a
            href="#defense-layers"
            className="shimmer-button group inline-flex h-13 items-center justify-center rounded-full bg-[#12b699] px-7 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(18,182,153,0.35)] transition hover:scale-[1.03] hover:bg-[#3ce0bc] hover:shadow-[0_18px_60px_rgba(18,182,153,0.55)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore the protocol
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
          <a
            href="#architecture"
            className="group inline-flex h-13 items-center justify-center rounded-full border border-white/15 bg-white/6 px-7 text-sm font-semibold text-white backdrop-blur transition hover:border-[#7ce7cf]/40 hover:bg-white/10 hover:scale-[1.02]"
          >
            See how it works
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </ScrollReveal>

        <ScrollReveal
          className="mt-16 grid gap-5 md:grid-cols-[1.3fr_0.7fr]"
          delay={260}
          direction="up"
        >
          <div className="card-sheen glow-on-hover rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
              <span>Runtime policy surface</span>
              <span className="font-mono text-[#7ce7cf]">guarded_execute</span>
            </div>
            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              <div className="group/card relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-emerald-400/8 p-5 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-400/15">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/0 opacity-0 transition-opacity duration-500 group-hover/card:from-emerald-400/20 group-hover/card:opacity-100" />
                <p className="relative font-mono text-white/60">Allow-list</p>
                <p className="relative mt-3 text-base font-medium text-white">
                  Only approved programs receive CPI access from the policy PDA.
                </p>
              </div>
              <div className="group/card relative overflow-hidden rounded-3xl border border-orange-300/20 bg-orange-300/8 p-5 transition hover:-translate-y-1 hover:border-orange-300/50 hover:bg-orange-300/15">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300/0 to-orange-300/0 opacity-0 transition-opacity duration-500 group-hover/card:from-orange-300/20 group-hover/card:opacity-100" />
                <p className="relative font-mono text-white/60">Budget caps</p>
                <p className="relative mt-3 text-base font-medium text-white">
                  Treasury movement is bounded by tx caps and rolling daily
                  limits.
                </p>
              </div>
              <div className="group/card relative overflow-hidden rounded-3xl border border-sky-300/20 bg-sky-300/8 p-5 transition hover:-translate-y-1 hover:border-sky-300/50 hover:bg-sky-300/15">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/0 to-sky-300/0 opacity-0 transition-opacity duration-500 group-hover/card:from-sky-300/20 group-hover/card:opacity-100" />
                <p className="relative font-mono text-white/60">Kill switch</p>
                <p className="relative mt-3 text-base font-medium text-white">
                  Suspicious activity can be judged and paused in real time.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="card-sheen glow-on-hover rounded-[2rem] border border-white/12 bg-[#0d1726] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                Why it matters
              </p>
              <p className="mt-4 bg-gradient-to-r from-white to-[#7ce7cf] bg-clip-text text-4xl font-semibold tracking-[-0.05em] text-transparent">
                250,000+
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                AI agents are already active on Solana, and too many still hold
                unconstrained signing power.
              </p>
            </div>
            <div className="card-sheen glow-on-hover rounded-[2rem] border border-white/12 bg-[#0d1726] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                Response target
              </p>
              <p className="mt-4 bg-gradient-to-r from-white to-[#ffb39a] bg-clip-text text-4xl font-semibold tracking-[-0.05em] text-transparent">
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
        <ScrollReveal
          className="card-sheen grid gap-8 rounded-[2rem] border border-white/10 bg-black/20 p-8 backdrop-blur xl:grid-cols-[0.9fr_1.1fr] xl:p-10"
          direction="scale"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7ce7cf]">
              The problem
            </p>
            <h2 className="mt-4 max-w-md font-sans text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Web3 agents move fast.{" "}
              <span className="bg-gradient-to-r from-[#ffb39a] to-[#ff7a59] bg-clip-text text-transparent">
                Their failure modes move faster.
              </span>
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
              A policy firewall between any autonomous agent and{" "}
              <span className="gradient-text">the chain.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {guardrailLayers.map((layer, index) => (
            <ScrollReveal
              key={layer.id}
              delay={index * 140}
              direction="up"
            >
              <article className="card-sheen group relative h-full overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 p-7 transition duration-500 hover:-translate-y-2 hover:border-[#7ce7cf]/40 hover:bg-white/10 hover:shadow-[0_24px_70px_rgba(18,182,153,0.18)]">
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${layer.accent} blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />
                <p className="relative font-mono text-sm text-[#7ce7cf]">
                  {layer.id}
                </p>
                <h3 className="relative mt-5 font-sans text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#7ce7cf]">
                  {layer.title}
                </h3>
                <p className="relative mt-4 text-base leading-8 text-slate-300">
                  {layer.copy}
                </p>
                <div className="relative mt-6 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#7ce7cf] via-[#12b699] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
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
          <ScrollReveal
            className="card-sheen rounded-[2rem] border border-white/10 bg-[#091321] p-8 sm:p-10"
            direction="left"
          >
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7ce7cf]">
              Architecture
            </p>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Built to make policy enforcement{" "}
              <span className="gradient-text">visible, auditable, and fast.</span>
            </h2>
            <div className="relative mt-8 space-y-4">
              <div className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-[#12b699] via-white/10 to-transparent" />
              {operatingFlow.map((step, index) => (
                <div
                  key={step}
                  className="group relative flex items-start gap-4 rounded-3xl border border-white/8 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:border-[#7ce7cf]/30 hover:bg-white/10"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#12b699] font-mono text-sm text-slate-950 shadow-[0_0_20px_rgba(18,182,153,0.4)] transition group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(18,182,153,0.7)]">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-slate-200 transition group-hover:text-white">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="card-sheen rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,182,153,0.16),rgba(8,15,26,0.95))] p-8 sm:p-10"
            delay={160}
            direction="right"
          >
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/55">
              What it helps with in Web3
            </p>
            <div className="mt-6 space-y-6 text-base leading-8 text-slate-200">
              <p className="border-l-2 border-[#7ce7cf]/40 pl-4 transition hover:border-[#7ce7cf] hover:pl-5">
                It gives agent builders a way to ship automation without giving
                bots unconstrained treasury access.
              </p>
              <p className="border-l-2 border-[#7ce7cf]/40 pl-4 transition hover:border-[#7ce7cf] hover:pl-5">
                It gives protocols and funds clearer operational limits around
                swaps, staking, treasury management, and delegated workflows.
              </p>
              <p className="border-l-2 border-[#7ce7cf]/40 pl-4 transition hover:border-[#7ce7cf] hover:pl-5">
                It gives users confidence that autonomous behavior is still
                bounded by hard on-chain rules, not just off-chain promises.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="relative border-t border-white/10 pb-10 pt-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <ScrollReveal
            className="card-sheen rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(124,231,207,0.14),rgba(7,17,29,0.92)_45%,rgba(255,122,89,0.1))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-10"
            direction="scale"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#7ce7cf]">
                  Final layer
                </p>
                <h2 className="mt-4 max-w-2xl font-sans text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Autonomous agents should feel{" "}
                  <span className="gradient-text">powerful</span>, not impossible
                  to control.
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
                        className="group flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-[#7ce7cf]"
                      >
                        <span className="h-px w-3 bg-[#7ce7cf]/40 transition-all duration-300 group-hover:w-6 group-hover:bg-[#7ce7cf]" />
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
            direction="fade"
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
