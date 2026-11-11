const html = document.documentElement

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

const boot = () => {
  const reduceMotion = prefersReducedMotion()
  const finePointer = window.matchMedia('(pointer: fine)').matches

  const progressBar = document.querySelector<HTMLElement>('[data-scroll-progress]')
  const header = document.querySelector<HTMLElement>('[data-header]')
  const footerMark = document.querySelector<HTMLElement>('.footer-mark')

  const heroSections = Array.from(
    document.querySelectorAll<HTMLElement>('[data-scroll-hero]'),
  )
  const scrubItems = Array.from(
    document.querySelectorAll<HTMLElement>('[data-scrub]'),
  )
  const indexItems = Array.from(
    document.querySelectorAll<HTMLElement>('.section-title[data-index]'),
  )
  const parallaxItems = Array.from(
    document.querySelectorAll<HTMLElement>('[data-parallax]'),
  ).map((element) => ({
    element,
    range: Number.parseFloat(element.dataset.parallax ?? '') || 0.08,
    distance: Number.parseFloat(element.dataset.parallaxRange ?? '') || 42,
  }))

  const processSteps = Array.from(
    document.querySelectorAll<HTMLElement>('[data-process-step]'),
  )
  const processTrack = document.querySelector<HTMLElement>('[data-process-track]')

  const setupPointerEffects = () => {
    if (reduceMotion || !finePointer) return

    const pointerMedia = Array.from(
      document.querySelectorAll<HTMLElement>('[data-pointer-media]'),
    )

    for (const element of pointerMedia) {
      let frame: number | null = null
      let clientX = 0
      let clientY = 0

      const render = () => {
        frame = null
        const rect = element.getBoundingClientRect()
        const x = clamp(
          ((clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2,
          -1,
          1,
        )
        const y = clamp(
          ((clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2,
          -1,
          1,
        )

        element.style.setProperty('--pointer-x', `${(x * 4).toFixed(2)}px`)
        element.style.setProperty('--pointer-y', `${(y * 4).toFixed(2)}px`)
      }

      const move = (event: PointerEvent) => {
        if (event.pointerType === 'touch') return
        clientX = event.clientX
        clientY = event.clientY
        if (frame === null) frame = window.requestAnimationFrame(render)
      }

      const leave = () => {
        if (frame !== null) {
          window.cancelAnimationFrame(frame)
          frame = null
        }
        element.style.removeProperty('--pointer-x')
        element.style.removeProperty('--pointer-y')
      }

      element.addEventListener('pointermove', move, { passive: true })
      element.addEventListener('pointerleave', leave)
      element.addEventListener('pointercancel', leave)
    }

    const spotlightItems = Array.from(
      document.querySelectorAll<HTMLElement>('[data-spotlight]'),
    )

    for (const element of spotlightItems) {
      let frame: number | null = null
      let clientX = 0
      let clientY = 0

      const render = () => {
        frame = null
        const rect = element.getBoundingClientRect()
        const x = clamp((clientX - rect.left) / Math.max(rect.width, 1), 0, 1)
        const y = clamp((clientY - rect.top) / Math.max(rect.height, 1), 0, 1)

        element.style.setProperty('--spot-x', `${(x * 100).toFixed(2)}%`)
        element.style.setProperty('--spot-y', `${(y * 100).toFixed(2)}%`)
      }

      const move = (event: PointerEvent) => {
        if (event.pointerType === 'touch') return
        clientX = event.clientX
        clientY = event.clientY
        if (frame === null) frame = window.requestAnimationFrame(render)
      }

      const leave = () => {
        if (frame !== null) {
          window.cancelAnimationFrame(frame)
          frame = null
        }
        element.style.removeProperty('--spot-x')
        element.style.removeProperty('--spot-y')
      }

      element.addEventListener('pointermove', move, { passive: true })
      element.addEventListener('pointerleave', leave)
      element.addEventListener('pointercancel', leave)
    }

    const magneticItems = Array.from(
      document.querySelectorAll<HTMLElement>('[data-magnetic]'),
    )

    for (const element of magneticItems) {
      let frame: number | null = null
      let clientX = 0
      let clientY = 0

      const render = () => {
        frame = null
        const rect = element.getBoundingClientRect()
        const x = clamp(
          (clientX - (rect.left + rect.width / 2)) / Math.max(rect.width / 2, 1),
          -1,
          1,
        )
        const y = clamp(
          (clientY - (rect.top + rect.height / 2)) / Math.max(rect.height / 2, 1),
          -1,
          1,
        )

        element.style.setProperty('--magnet-x', `${(x * 5).toFixed(2)}px`)
        element.style.setProperty('--magnet-y', `${(y * 4).toFixed(2)}px`)
      }

      const move = (event: PointerEvent) => {
        if (event.pointerType === 'touch') return
        clientX = event.clientX
        clientY = event.clientY
        if (frame === null) frame = window.requestAnimationFrame(render)
      }

      const leave = () => {
        if (frame !== null) {
          window.cancelAnimationFrame(frame)
          frame = null
        }
        element.style.removeProperty('--magnet-x')
        element.style.removeProperty('--magnet-y')
      }

      element.addEventListener('pointermove', move, { passive: true })
      element.addEventListener('pointerleave', leave)
      element.addEventListener('pointercancel', leave)
    }
  }

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const allTargets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    const hasRevealedAncestor = (element: HTMLElement) => {
      let parent = element.parentElement
      while (parent) {
        if (parent.hasAttribute('data-reveal')) return true
        parent = parent.parentElement
      }
      return false
    }

    const nestedTargets = allTargets.filter(hasRevealedAncestor)
    const revealTargets = allTargets.filter((element) => !hasRevealedAncestor(element))

    for (const target of nestedTargets) target.classList.add('is-visible')

    for (const target of revealTargets) {
      const group = target.parentElement?.closest<HTMLElement>('[data-stagger]')
      if (!group) continue

      const siblings = Array.from(
        group.querySelectorAll<HTMLElement>(':scope > [data-reveal]'),
      )
      const index = siblings.indexOf(target)
      if (index > 0) {
        target.style.setProperty('--reveal-delay', `${Math.min(index, 8) * 85}ms`)
      }
    }

    html.classList.add('motion-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08,
      },
    )

    for (const target of revealTargets) observer.observe(target)

    setupPointerEffects()
  }

  const updateHero = () => {
    for (const section of heroSections) {
      const rect = section.getBoundingClientRect()
      const progress = clamp(-rect.top / Math.max(rect.height, 1), 0, 1)
      section.style.setProperty('--hero-progress', progress.toFixed(4))
    }
  }

  const updateScrub = (viewportHeight: number) => {
    for (const item of scrubItems) {
      const rect = item.getBoundingClientRect()
      if (rect.bottom < -160 || rect.top > viewportHeight + 160) continue

      const progress = clamp(
        (viewportHeight - rect.top) / Math.max(viewportHeight + rect.height, 1),
        0,
        1,
      )
      item.style.setProperty('--scrub-shift', `${((progress - 0.5) * 5).toFixed(2)}%`)
    }
  }

  const updateIndexes = (viewportHeight: number) => {
    for (const item of indexItems) {
      const rect = item.getBoundingClientRect()
      if (rect.bottom < -160 || rect.top > viewportHeight + 160) continue

      const progress = clamp(
        (viewportHeight - rect.top) / Math.max(viewportHeight + rect.height, 1),
        0,
        1,
      )
      item.style.setProperty('--index-shift', `${((progress - 0.5) * 18).toFixed(2)}px`)
    }
  }

  const updateFooterMark = (viewportHeight: number) => {
    if (!footerMark) return

    const rect = footerMark.getBoundingClientRect()
    if (rect.bottom < -160 || rect.top > viewportHeight + 160) return

    const progress = clamp(
      (viewportHeight - rect.top) / Math.max(viewportHeight + rect.height, 1),
      0,
      1,
    )
    footerMark.style.setProperty('--footer-shift', `${((progress - 0.5) * 42).toFixed(2)}px`)
  }

  const updateParallax = (viewportHeight: number) => {
    if (reduceMotion) return

    for (const item of parallaxItems) {
      const rect = item.element.getBoundingClientRect()
      if (rect.bottom < -120 || rect.top > viewportHeight + 120) continue

      const progress = clamp(
        (viewportHeight - rect.top) / (viewportHeight + rect.height),
        0,
        1,
      )
      const offset = (progress - 0.5) * item.distance
      item.element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`)
      item.element.style.setProperty('--parallax-factor', String(item.range))
    }
  }

  const updateProcess = () => {
    if (processSteps.length === 0) return

    const activationLine = window.innerHeight * 0.6
    let activeIndex = -1

    processSteps.forEach((step, index) => {
      const rect = step.getBoundingClientRect()
      if (rect.top <= activationLine) activeIndex = index
    })

    processSteps.forEach((step, index) => {
      step.classList.toggle('is-active', index === activeIndex)
      step.classList.toggle('is-past', index < activeIndex)
    })

    if (processTrack) {
      const rect = processTrack.getBoundingClientRect()
      const progress = clamp(
        (activationLine - rect.top) / Math.max(rect.height, 1),
        0,
        1,
      )
      processTrack.style.setProperty('--process-progress', String(progress))
    }
  }

  const update = () => {
    const viewportHeight = window.innerHeight
    const scrollTop = window.scrollY
    const scrollRange = document.documentElement.scrollHeight - viewportHeight
    const progress = scrollRange > 0 ? clamp(scrollTop / scrollRange, 0, 1) : 0

    if (progressBar) {
      progressBar.style.clipPath = `inset(0 ${((1 - progress) * 100).toFixed(2)}% 0 0)`
    }
    header?.classList.toggle('is-scrolled', scrollTop > 12)

    if (!reduceMotion) {
      updateHero()
      updateScrub(viewportHeight)
      updateIndexes(viewportHeight)
      updateFooterMark(viewportHeight)
    }

    updateParallax(viewportHeight)
    updateProcess()
  }

  let ticking = false
  const requestUpdate = () => {
    if (ticking) return
    ticking = true
    window.requestAnimationFrame(() => {
      update()
      ticking = false
    })
  }

  update()
  window.addEventListener('scroll', requestUpdate, { passive: true })
  window.addEventListener('resize', requestUpdate, { passive: true })
  window.addEventListener('load', requestUpdate, { once: true })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}
