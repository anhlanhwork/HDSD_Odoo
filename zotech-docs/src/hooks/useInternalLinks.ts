import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { scrollToTocTarget } from './useFeaturePanels'

/**
 * Ported content sometimes links to another feature's section from within
 * an overview or a different panel (e.g. logistics.html's "#cfg-cang").
 * Since each feature now lives at its own /docs/:slug/:feature path, a
 * plain same-page `href="#id"` needs to become a real navigation when the
 * target belongs to a different feature; otherwise it's just a same-panel
 * scroll.
 */
// Walks up from `el` to find the direct child of `root` that owns it (the
// unit useFeaturePanels shows/hides as a whole), then resolves which
// feature panel that child belongs to — same grouping rule as
// useFeaturePanels: a direct child is either the feature's own h2[id], or
// wraps one (e.g. a <section class="yc-doc"> feature card), otherwise it's
// part of the overview.
function ownerFeatureOf(root: HTMLElement, el: Element, featureSet: Set<string>): string {
  let child: Element | null = el
  while (child && child.parentElement !== root) child = child.parentElement
  if (!child) return 'overview'
  if (child.tagName === 'H2' && child.id && featureSet.has(child.id)) return child.id
  const innerH2 = child.querySelector('h2[id]')
  if (innerH2?.id && featureSet.has(innerH2.id)) return innerH2.id
  return 'overview'
}

export function useInternalLinks(
  containerRef: React.RefObject<HTMLDivElement | null>,
  slug: string | undefined,
  featureIds: string[],
  view: string,
) {
  const navigate = useNavigate()
  const featureIdsKey = featureIds.join(',')

  useEffect(() => {
    const root = containerRef.current
    if (!root || !slug) return
    const featureSet = new Set(featureIds)

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!link || !root.contains(link)) return
      const id = decodeURIComponent(link.getAttribute('href')!.slice(1))
      if (!id) return
      e.preventDefault()
      if (featureSet.has(id)) {
        navigate(`/docs/${slug}/${id}`)
        return
      }
      const target = root.querySelector(`[id="${id}"], [data-toc-anchor="${id}"]`)
      const owner = target ? ownerFeatureOf(root, target, featureSet) : view
      if (owner !== view) {
        // Target lives inside a different feature panel (a sub-heading, not
        // itself a routable id) — navigate there first, then let
        // useFeaturePanels' hash handling scroll to it once that panel is
        // the one actually rendered.
        navigate(owner === 'overview' ? `/docs/${slug}#${id}` : `/docs/${slug}/${owner}#${id}`)
      } else {
        scrollToTocTarget(root, id)
      }
    }

    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, slug, featureIdsKey, view, navigate])
}
