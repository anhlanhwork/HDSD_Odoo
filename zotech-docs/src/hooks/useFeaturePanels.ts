import { useEffect, useState } from 'react'

export interface TocEntry {
  id: string
  label: string
  depth: 2 | 3
}

interface UseFeaturePanelsResult {
  view: string
  tocItems: TocEntry[]
  activeTocId: string | null
}

const SCROLL_OFFSET = 128
const SPY_OFFSET = 152

/**
 * React port of initFeaturePanels() in user_guide/project/scripts/main.js.
 * Given the container the raw article HTML was mounted into, shows only the
 * section matching the current URL's :feature path segment (or the
 * overview, when there is none), and builds a "Trên trang này" TOC scoped
 * to that section's h3s.
 */
export function useFeaturePanels(
  containerRef: React.RefObject<HTMLDivElement | null>,
  featureIds: string[],
  activeFeature: string,
): UseFeaturePanelsResult {
  const view = featureIds.includes(activeFeature) ? activeFeature : 'overview'
  const [activeTocId, setActiveTocId] = useState<string | null>(null)
  const featureIdsKey = featureIds.join(',')

  // Show/hide direct children of .article based on which feature (if any)
  // owns them, mirroring the grouping rule in main.js: a direct child
  // belongs to the nearest preceding h2[id], or wraps one itself (e.g. a
  // <section class="yc-doc"> feature card).
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const featureSet = new Set(featureIds)
    const children = Array.from(root.children) as HTMLElement[]
    let group = 'overview'
    children.forEach((el) => {
      if (el.classList.contains('article-toolbar')) {
        el.style.display = ''
        return
      }
      if (el.tagName === 'H2' && el.id) {
        group = featureSet.has(el.id) ? el.id : 'overview'
      } else {
        const innerH2 = el.querySelector('h2[id]')
        if (innerH2?.id) group = featureSet.has(innerH2.id) ? innerH2.id : 'overview'
      }
      el.style.display = view === 'overview' ? (group === 'overview' ? '' : 'none') : group === view ? '' : 'none'
    })
    window.scrollTo({ top: 0, behavior: 'auto' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, featureIdsKey, view])

  // Build the TOC for the active view: its h3/h4 headings (matching main.js's
  // buildFeatureToc, which harvests both levels by direct element reference
  // rather than requiring pre-authored ids), falling back to step titles if
  // the view has neither. This runs in an effect (not useMemo) because
  // containerRef.current is only populated after commit, and a ref alone
  // never triggers a re-render to let a memo pick that up.
  const [tocItems, setTocItems] = useState<TocEntry[]>([])
  useEffect(() => {
    const root = containerRef.current
    if (!root) { setTocItems([]); return }
    const children = Array.from(root.children) as HTMLElement[]
    const featureSet = new Set(featureIds)
    let group = 'overview'
    const scopes: HTMLElement[] = []
    children.forEach((el) => {
      if (el.classList.contains('article-toolbar')) return
      if (el.tagName === 'H2' && el.id) {
        group = featureSet.has(el.id) ? el.id : 'overview'
      } else {
        const innerH2 = el.querySelector('h2[id]')
        if (innerH2?.id) group = featureSet.has(innerH2.id) ? innerH2.id : 'overview'
      }
      if (group === view) scopes.push(el)
    })
    const entries: TocEntry[] = []
    let anchorIdx = 0
    const harvest = (h: Element) => {
      const depth = h.tagName === 'H3' ? 2 : 3
      let id = h.id
      if (!id) {
        id = `__toc-${anchorIdx++}`
        h.setAttribute('data-toc-anchor', id)
      }
      entries.push({ id, label: h.textContent?.trim() || '', depth })
    }
    scopes.forEach((scope) => {
      if (scope.tagName === 'H3' || scope.tagName === 'H4') harvest(scope)
      scope.querySelectorAll('h3, h4').forEach(harvest)
    })
    if (!entries.length) {
      let i = 0
      scopes.forEach((scope) => {
        scope.querySelectorAll('.step').forEach((stepEl) => {
          const title = stepEl.querySelector('.step-title')
          if (!title) return
          const id = `__step-${i++}`
          stepEl.setAttribute('data-toc-anchor', id)
          entries.push({ id, label: title.textContent?.trim() || '', depth: 2 })
        })
      })
    }
    setTocItems(entries)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, featureIdsKey, view])

  // Scroll-spy: highlight whichever TOC entry's target has scrolled past SPY_OFFSET.
  useEffect(() => {
    const root = containerRef.current
    if (!root || !tocItems.length) { setActiveTocId(null); return }
    const targets = tocItems
      .map((t) => ({ id: t.id, el: root.querySelector(`[id="${t.id}"], [data-toc-anchor="${t.id}"]`) as HTMLElement | null }))
      .filter((t): t is { id: string; el: HTMLElement } => !!t.el)
    if (!targets.length) return
    const onScroll = () => {
      let active = targets[0]
      for (const t of targets) {
        if (t.el.getBoundingClientRect().top - SPY_OFFSET <= 0) active = t
      }
      setActiveTocId(active.id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [containerRef, tocItems])

  return { view, tocItems, activeTocId }
}

export function scrollToTocTarget(container: HTMLElement | null, id: string) {
  if (!container) return
  const el = container.querySelector(`[id="${id}"], [data-toc-anchor="${id}"]`) as HTMLElement | null
  if (!el) return
  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET)
  window.scrollTo({ top, behavior: 'smooth' })
}
