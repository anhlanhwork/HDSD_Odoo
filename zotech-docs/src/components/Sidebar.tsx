import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getGroups, getPagesByGroup } from '../utils/content'
import styles from './Sidebar.module.css'

export const Sidebar: React.FC = () => {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(getGroups()),
  )
  const location = useLocation()

  const toggleGroup = (group: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(group)) {
      newExpanded.delete(group)
    } else {
      newExpanded.add(group)
    }
    setExpandedGroups(newExpanded)
  }

  const isActive = (slug: string) => {
    return location.pathname === `/docs/${slug}`
  }

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.tree}>
        <div className={styles.node}>
          <button
            type="button"
            className={`${styles.row} ${styles.rootGroup}`}
            aria-expanded={true}
          >
            <span className={styles.icon}>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
              </svg>
            </span>
            <span className={styles.label}>Tài liệu hướng dẫn sử dụng</span>
          </button>

          <div className={styles.children}>
            {getGroups().map((group) => (
              <div key={group} className={styles.node}>
                <button
                  type="button"
                  className={`${styles.row} ${styles.group}`}
                  onClick={() => toggleGroup(group)}
                  aria-expanded={expandedGroups.has(group)}
                >
                  <span className={styles.chev}>
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </span>
                  <span className={styles.label}>{group}</span>
                </button>

                {expandedGroups.has(group) && (
                  <div className={styles.children}>
                    {getPagesByGroup(group).map((page) => (
                      <div key={page.slug} className={styles.node}>
                        <Link
                          to={`/docs/${page.slug}`}
                          className={`${styles.row} ${styles.module} ${
                            isActive(page.slug) ? styles.active : ''
                          }`}
                        >
                          <span className={styles.label}>{page.title}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
