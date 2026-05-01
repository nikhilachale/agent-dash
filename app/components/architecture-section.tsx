type ArchitectureSectionProps = {
  operatingFlow: string[]
}

const web3Benefits = [
  'It gives agent builders a way to ship automation without giving bots unconstrained treasury access.',
  'It gives protocols and funds clearer operational limits around swaps, staking, treasury management, and delegated workflows.',
  'It gives users confidence that autonomous behavior is still bounded by hard on-chain rules, not just off-chain promises.',
]

export default function ArchitectureSection({
  operatingFlow,
}: ArchitectureSectionProps) {
  return (
    <section
      id="architecture"
      className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12"
    >
      <div className="mb-14 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary-soft">
          Architecture
        </p>
        <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
          Built to make policy enforcement{' '}
          <span className="bg-gradient-to-r from-primary-soft to-primary bg-clip-text text-transparent">
            visible, auditable, and fast.
          </span>
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <OperatingFlowCard operatingFlow={operatingFlow} />
        <Web3BenefitsCard />
      </div>
    </section>
  )
}

function OperatingFlowCard({ operatingFlow }: { operatingFlow: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(155deg,rgb(255_255_255/0.05),rgb(255_255_255/0.02))] p-8 sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/45">
            Operating flow
          </p>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-primary-soft">
            guarded_execute
          </span>
        </div>

        <div className="relative mt-8 space-y-3">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-primary via-foreground/15 to-transparent"
          />
          {operatingFlow.map((step, index) => (
            <FlowStep key={step} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FlowStep({ step, index }: { step: string; index: number }) {
  return (
    <div className="group relative z-0 flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 ease-out will-change-transform hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary-soft/40 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_-20px_rgb(var(--primary-rgb)/0.5)]">
      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary-strong),var(--primary))] font-mono text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgb(var(--primary-rgb)/0.4)]">
        {index + 1}
      </div>
      <div className="pt-1">
        <p className="text-base leading-7 text-slate-100">{step}</p>
      </div>
      <span className="ml-auto self-center font-mono text-[10px] uppercase tracking-[0.24em] text-white/30 transition group-hover:text-primary-soft">
        step {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}

function Web3BenefitsCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgb(var(--primary-rgb)/0.16),var(--background-deep)_95%)] p-8 sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"
      />
      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-foreground/55">
          What it helps with in Web3
        </p>
        <div className="mt-6 space-y-4">
          {web3Benefits.map((line, i) => (
            <div
              key={i}
              className="group relative z-0 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 ease-out will-change-transform hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary-soft/40 hover:bg-white/[0.05] hover:shadow-[0_18px_40px_-20px_rgb(var(--primary-rgb)/0.5)]"
            >
              <span className="absolute left-0 top-5 h-8 w-[3px] rounded-r-full bg-gradient-to-b from-primary-soft to-primary-soft/0 transition-all duration-300 group-hover:h-10" />
              <p className="pl-3 text-base leading-7 text-slate-200">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
