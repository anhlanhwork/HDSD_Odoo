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
export function useInternalLinks(
  containerRef: React.RefObject<HTMLDivElement | null>,
  slug: string | undefined,
  featureIds: string[],
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
      } else {
        scrollToTocTarget(root, id)
      }
    }

    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, slug, featureIdsKey, navigate])
}
