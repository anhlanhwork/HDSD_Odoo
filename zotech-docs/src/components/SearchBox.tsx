import React, { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buildSearchIndex, normalizeSearch, type SearchEntry } from '../utils/searchIndex'

interface SearchBoxProps {
  variant: 'topnav' | 'hero'
  placeholder?: string
}

// Port of wireSearchBox() in user_guide/project/scripts/main.js.
export const SearchBox: React.FC<SearchBoxProps> = ({ variant, placeholder = 'Bạn đang tìm gì?' }) => {
  const navigate = useNavigate()
  const entries = useMemo(buildSearchIndex, [])
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [focusIdx, setFocusIdx] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  const groups = useMemo(() => {
    const ql = normalizeSearch(query)
    const byGroup: Record<string, SearchEntry[]> = {}
    const order: string[] = []
    entries.forEach((e) => {
      if (query && !(normalizeSearch(e.label).indexOf(ql) >= 0 || normalizeSearch(e.group).indexOf(ql) >= 0)) return
      if (!query && e.label.indexOf('— Tổng quan') < 0) return
      const g = query ? e.group : 'Tất cả module'
      if (!byGroup[g]) { byGroup[g] = []; order.push(g) }
      byGroup[g].push(e)
    })
    return { byGroup, order }
  }, [entries, query])

  const flat = useMemo(() => groups.order.flatMap((g) => groups.byGroup[g]), [groups])

  const commit = (href: string) => {
    setOpen(false)
    navigate(href)
  }

  const wrapClass = variant === 'topnav' ? 'search' : 'hero-search'

  return (
    <div className={wrapClass} ref={wrapRef}>
      {variant === 'topnav' ? (
        <span className="search-icon">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </span>
      ) : (
        <span className="hero-search-icon">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </span>
      )}
      <input
        type="text"
        className={variant === 'topnav' ? 'search-input' : undefined}
        placeholder={placeholder}
        value={query}
        autoComplete="off"
        spellCheck={false}
        onFocus={() => setOpen(true)}
        onChange={(e) => { setQuery(e.target.value); setFocusIdx(0); setOpen(true) }}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={(e) => {
          if (!open) return
          if (e.key === 'ArrowDown') { e.preventDefault(); setFocusIdx((i) => Math.min(i + 1, flat.length - 1)) }
          else if (e.key === 'ArrowUp') { e.preventDefault(); setFocusIdx((i) => Math.max(i - 1, 0)) }
          else if (e.key === 'Enter') { e.preventDefault(); const t = flat[focusIdx]; if (t) commit(t.href) }
          else if (e.key === 'Escape') { setOpen(false) }
        }}
      />
      {open && (
        <div className="search-pop" role="listbox">
          {groups.order.length === 0 ? (
            <div style={{ padding: '16px 18px', textAlign: 'center', color: 'var(--fg-muted)', fontSize: 13 }}>
              Không tìm thấy kết quả cho <strong style={{ color: 'var(--fg-strong)' }}>&quot;{query}&quot;</strong>
            </div>
          ) : (
            groups.order.map((g) => (
              <div className="search-group" key={g}>
                <div className="search-group-label">{g}</div>
                {groups.byGroup[g].map((e) => {
                  const idx = flat.indexOf(e)
                  return (
                    <a
                      key={e.href}
                      href={e.href}
                      role="option"
                      className={`search-result${idx === focusIdx ? ' is-focused' : ''}`}
                      onMouseEnter={() => setFocusIdx(idx)}
                      onMouseDown={(ev) => { ev.preventDefault(); commit(e.href) }}
                    >
                      <span className="search-result-icon">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />
                        </svg>
                      </span>
                      <span className="search-result-text">
                        <div>{e.label}</div>
                        <div className="search-result-path">{e.path}</div>
                      </span>
                      <span className="search-result-kbd">&#8629;</span>
                    </a>
                  )
                })}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
