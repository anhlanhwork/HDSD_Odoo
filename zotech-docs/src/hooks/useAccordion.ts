import { useEffect } from 'react'

/**
 * React port of initAccordion() in user_guide/project/scripts/main.js.
 * Clicking a .accordion-trigger toggles the .is-open state (and
 * aria-expanded) on its parent .accordion-item.
 */
export function useAccordion(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement).closest('.accordion-trigger') as HTMLButtonElement | null
      if (!trigger || !root.contains(trigger)) return
      const item = trigger.closest('.accordion-item')
      if (!item) return
      const isOpen = item.classList.toggle('is-open')
      trigger.setAttribute('aria-expanded', String(isOpen))
    }

    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [containerRef])
}
