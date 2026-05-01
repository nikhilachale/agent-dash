'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || !cardRef.current) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, {
        y: 180,
        scale: 0.76,
        opacity: 0.45,
        transformOrigin: '50% 50%',
      })

      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative mx-auto flex min-h-[80vh] w-full max-w-7xl items-center px-6 py-10 sm:px-10 lg:px-12"
    >
      <div
        ref={cardRef}
        className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 will-change-transform xl:grid-cols-[0.9fr_1.1fr] xl:p-10"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary-soft">
            The problem
          </p>
          <h2 className="mt-4 max-w-md font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Web3 agents move fast.{` `}
            <span className="bg-linear-to-r from-secondary-soft to-secondary bg-clip-text text-transparent">
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
      </div>
    </section>
  )
}
