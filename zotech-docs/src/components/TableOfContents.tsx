import React, { useEffect, useState } from 'react'
import styles from './TableOfContents.module.css'

interface TocItem {
  id: string
  label: string
  level?: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Find the first heading that's in the viewport
      const headings = items.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }))

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = headings[i].element
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.5) {
            setActiveId(headings[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 120 // sticky header height
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.toc}>
      <h4 className={styles.title}>Trên trang này</h4>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <button
              type="button"
              className={`${styles.link} ${
                activeId === item.id ? styles.active : ''
              }`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
