export default function HeroBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[110vh] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] z-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--primary-rgb) / 0.32), transparent 70%)',
        }}
      />
    </>
  )
}
