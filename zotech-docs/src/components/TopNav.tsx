import React, { useState } from 'react'
import styles from './TopNav.module.css'

interface TopNavProps {
  onSearchChange?: (query: string) => void
}

export const TopNav: React.FC<TopNavProps> = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearchChange?.(query)
  }

  return (
    <header className={styles.topnav}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand}>
          <div className={styles.mark}>Z</div>
          <span>
            <span className={styles.name}>Zotech</span>
            <span className={styles.sub}>docs</span>
          </span>
        </a>
        <div className={styles.search}>
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="text"
            className={styles.input}
            placeholder="Bạn đang tìm gì?"
            value={searchQuery}
            onChange={handleSearchChange}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div className={styles.actions}>
          <a href="#" className={styles.btn}>
            Mở hệ thống
          </a>
        </div>
      </div>
    </header>
  )
}
