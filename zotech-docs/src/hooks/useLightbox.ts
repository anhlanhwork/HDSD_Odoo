import { useEffect } from 'react'

/**
 * React port of initLightbox() in user_guide/project/scripts/main.js.
 * Intercepts clicks on .doc-shot screenshot links within the container and
 * opens them in a full-screen overlay instead of navigating.
 */
export function useLightbox(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const overlay = document.createElement('div')
    overlay.className = 'lightbox'
    overlay.innerHTML = '<button class="lightbox-close" aria-label="Đóng">&times;</button><img alt="">'
    overlay.style.display = 'none'
    document.body.appendChild(overlay)
    const img = overlay.querySelector('img') as HTMLImageElement

    const close = () => {
      overlay.style.display = 'none'
      document.body.style.overflow = ''
    }
    const onOverlayClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target === overlay || target.classList.contains('lightbox-close')) close()
    }
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const onRootClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('.doc-shot a') as HTMLAnchorElement | null
      if (!link || !root.contains(link)) return
      e.preventDefault()
      img.src = link.getAttribute('href') || ''
      overlay.style.display = 'flex'
      document.body.style.overflow = 'hidden'
    }

    overlay.addEventListener('click', onOverlayClick)
    document.addEventListener('keydown', onKeydown)
    root.addEventListener('click', onRootClick)

    return () => {
      overlay.removeEventListener('click', onOverlayClick)
      document.removeEventListener('keydown', onKeydown)
      root.removeEventListener('click', onRootClick)
      overlay.remove()
    }
  }, [containerRef])
}
