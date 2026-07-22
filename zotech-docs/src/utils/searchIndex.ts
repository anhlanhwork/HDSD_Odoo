import { docPages } from './content'

export interface SearchEntry {
  label: string
  path: string
  href: string
  group: string
}

// Port of the ENTRIES flattening in user_guide/project/scripts/main.js initSearch().
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = []
  docPages.forEach((page) => {
    entries.push({ label: `${page.title} — Tổng quan`, path: page.group, href: `/docs/${page.slug}`, group: page.title })
    page.toc.forEach((t) => {
      entries.push({ label: t.label, path: page.title, href: `/docs/${page.slug}/${t.id}`, group: page.title })
    })
  })
  return entries
}

const DIACRITICS_RE = /[̀-ͯ]/g

export function normalizeSearch(s: string): string {
  return (s || '').toLowerCase().normalize('NFD').replace(DIACRITICS_RE, '')
}
