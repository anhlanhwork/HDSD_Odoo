import React from 'react'
import type { TocEntry } from '../hooks/useFeaturePanels'

interface TableOfContentsProps {
  items: TocEntry[]
  activeId: string | null
  onSelect: (id: string) => void
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, activeId, onSelect }) => {
  return (
    <nav className="toc no-scrollbar" aria-label="Trên trang này">
      <div className="toc-title">Trên trang này</div>
      <ul className="toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`toc-link depth-${item.depth}${activeId === item.id ? ' is-active' : ''}`}
              onClick={(e) => { e.preventDefault(); onSelect(item.id) }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
