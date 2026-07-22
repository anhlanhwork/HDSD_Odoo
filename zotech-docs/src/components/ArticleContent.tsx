import React, { forwardRef } from 'react'

interface ArticleContentProps {
  html: string
}

// Mounts a raw HTML article fragment ported from the design source
// (src/content/<slug>.html) inside the .article wrapper that layout.css
// styles rely on. The ref is consumed by useFeaturePanels/useLightbox in
// DocPage to drive the panel-switching interaction.
export const ArticleContent = forwardRef<HTMLDivElement, ArticleContentProps>(({ html }, ref) => {
  return <div className="article" ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
})
ArticleContent.displayName = 'ArticleContent'
