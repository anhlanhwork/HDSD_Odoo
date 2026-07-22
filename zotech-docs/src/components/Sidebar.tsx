import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPublicGroups, getPublicPagesByGroup, getSidebarTree, type DocPage, type RenderedSidebarNode } from '../utils/content'

const BookIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
  </svg>
)

const Chev: React.FC<{ open: boolean }> = ({ open }) => (
  <span className={`sb-chev${open ? ' is-open' : ''}`}>
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  </span>
)

// Does this group (recursively) contain the currently active id/hash?
function groupContainsActive(node: RenderedSidebarNode, activeFeature: string): boolean {
  if (node.kind === 'leaf') return (node.id ?? '') === activeFeature
  return node.children.some((c) => groupContainsActive(c, activeFeature))
}

interface SidebarNodeViewProps {
  node: RenderedSidebarNode
  slug: string
  isCurrentPage: boolean
  activeFeature: string
  openSet: Set<string>
  onToggle: (path: string) => void
  path: string
}

// Renders one node of a module's sidebar tree — a clickable leaf, or a
// collapsible group that recurses into its own children (groups can
// nest inside groups, e.g. CRM's "Tính năng mở rộng").
const SidebarNodeView: React.FC<SidebarNodeViewProps> = ({ node, slug, isCurrentPage, activeFeature, openSet, onToggle, path }) => {
  if (node.kind === 'leaf') {
    const href = node.id ? `/docs/${slug}/${node.id}` : `/docs/${slug}`
    const active = isCurrentPage && (node.id ?? '') === activeFeature
    return (
      <div className="sb-node">
        <Link to={href} className={`sb-row sb-sub${active ? ' is-active' : ''}`} title={node.label}>
          <span className="sb-row-label">{node.label}</span>
        </Link>
      </div>
    )
  }

  const open = openSet.has(path)
  const onPath = isCurrentPage && groupContainsActive(node, activeFeature)
  return (
    <div className="sb-node">
      <button
        type="button"
        className={`sb-row sb-group sb-subgroup${onPath ? ' is-onpath' : ''}`}
        aria-expanded={open}
        onClick={() => onToggle(path)}
      >
        <Chev open={open} />
        <span className="sb-row-label">{node.label}</span>
      </button>
      {open && (
        <div className="sb-children">
          {node.children.map((child, i) => (
            <SidebarNodeView
              key={child.kind === 'leaf' ? (child.id ?? '__overview') : `${path}.${i}.${child.label}`}
              node={child}
              slug={slug}
              isCurrentPage={isCurrentPage}
              activeFeature={activeFeature}
              openSet={openSet}
              onToggle={onToggle}
              path={`${path}.${i}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Finds the dot-path (matching the `path` scheme above) of every group
// that contains the active id, so it — and its ancestors — auto-expand.
function activePathsIn(nodes: RenderedSidebarNode[], activeFeature: string, base: string): string[] {
  const paths: string[] = []
  nodes.forEach((node, i) => {
    if (node.kind !== 'group') return
    const path = `${base}${i}`
    if (groupContainsActive(node, activeFeature)) {
      paths.push(path)
      paths.push(...activePathsIn(node.children, activeFeature, `${path}.`))
    }
  })
  return paths
}

interface ModuleSubtreeProps {
  page: DocPage
  isCurrentPage: boolean
  activeFeature: string
}

const ModuleSubtree: React.FC<ModuleSubtreeProps> = ({ page, isCurrentPage, activeFeature }) => {
  const tree = useMemo(() => getSidebarTree(page), [page])
  const activePaths = useMemo(
    () => (isCurrentPage ? activePathsIn(tree, activeFeature, '') : []),
    [tree, isCurrentPage, activeFeature],
  )

  const [openSet, setOpenSet] = useState<Set<string>>(() => new Set(activePaths))

  useEffect(() => {
    if (!activePaths.length) return
    setOpenSet((prev) => {
      const missing = activePaths.filter((p) => !prev.has(p))
      if (!missing.length) return prev
      return new Set([...prev, ...missing])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePaths.join('|')])

  const toggle = (path: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      next.has(path) ? next.delete(path) : next.add(path)
      return next
    })
  }

  return (
    <div className="sb-children">
      {tree.map((node, i) => (
        <SidebarNodeView
          key={node.kind === 'leaf' ? (node.id ?? '__overview') : `${i}.${node.label}`}
          node={node}
          slug={page.slug}
          isCurrentPage={isCurrentPage}
          activeFeature={activeFeature}
          openSet={openSet}
          onToggle={toggle}
          path={`${i}`}
        />
      ))}
    </div>
  )
}

export const Sidebar: React.FC = () => {
  const { slug: activeSlug, feature } = useParams<{ slug: string; feature?: string }>()
  const activeFeature = feature ? decodeURIComponent(feature) : ''
  const groups = getPublicGroups()

  const activeGroup = useMemo(() => {
    const page = groups.flatMap((g) => getPublicPagesByGroup(g)).find((p) => p.slug === activeSlug)
    return page?.group
  }, [groups, activeSlug])

  const [openGroups, setOpenGroups] = useState<Set<string>>(() => new Set(activeGroup ? [activeGroup] : []))
  const [openMods, setOpenMods] = useState<Set<string>>(() => new Set(activeSlug ? [activeSlug] : []))

  // Reveal the current page in the tree if it was reached via search, a
  // direct link, or the browser back/forward buttons rather than a click
  // inside the sidebar itself.
  useEffect(() => {
    if (!activeSlug || !activeGroup) return
    setOpenGroups((prev) => (prev.has(activeGroup) ? prev : new Set(prev).add(activeGroup)))
    setOpenMods((prev) => (prev.has(activeSlug) ? prev : new Set(prev).add(activeSlug)))
  }, [activeSlug, activeGroup])

  const toggleGroup = (g: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev)
      next.has(g) ? next.delete(g) : next.add(g)
      return next
    })
  }
  const toggleMod = (slug: string) => {
    setOpenMods((prev) => {
      const next = new Set(prev)
      next.has(slug) ? next.delete(slug) : next.add(slug)
      return next
    })
  }

  return (
    <aside className="sidebar no-scrollbar" aria-label="Mục lục tài liệu">
      <nav className="sb-tree">
        <div className="sb-node sb-root-node">
          <div className="sb-row sb-group sb-root-group sb-root-static" aria-expanded="true">
            <span className="sb-rootg-mark"><BookIcon /></span>
            <span className="sb-row-label">Tài liệu hướng dẫn sử dụng</span>
          </div>
          <div className="sb-children sb-root-children">
            {groups.map((group) => {
              const groupOpen = openGroups.has(group)
              const onPath = activeGroup === group
              return (
                <div className="sb-node" key={group}>
                  <button
                    type="button"
                    className={`sb-row sb-group${onPath ? ' is-onpath' : ''}`}
                    aria-expanded={groupOpen}
                    onClick={() => toggleGroup(group)}
                  >
                    <Chev open={groupOpen} />
                    <span className="sb-row-label">{group}</span>
                  </button>
                  {groupOpen && (
                    <div className="sb-children">
                      {getPublicPagesByGroup(group).map((page) => {
                        const modOpen = openMods.has(page.slug)
                        const isCurrentPage = activeSlug === page.slug
                        return (
                          <div className="sb-node" key={page.slug}>
                            <Link
                              to={`/docs/${page.slug}`}
                              className={`sb-row sb-group sb-mod${isCurrentPage ? ' is-onpath' : ''}`}
                              aria-expanded={modOpen}
                              onClick={() => toggleMod(page.slug)}
                            >
                              <Chev open={modOpen} />
                              <span className="sb-row-label">{page.title}</span>
                            </Link>
                            {modOpen && (
                              <ModuleSubtree page={page} isCurrentPage={isCurrentPage} activeFeature={activeFeature} />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </nav>
    </aside>
  )
}
