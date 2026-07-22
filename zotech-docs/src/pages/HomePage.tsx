import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { getPublicGroups, getPublicPagesByGroup } from '../utils/content'

export const HomePage: React.FC = () => {
  return (
    <div className="shell shell--no-toc">
      <Sidebar />
      <main className="shell-main">
        <div className="idx-topbar">
          <nav className="crumbs" aria-label="Breadcrumb">
            <span className="crumbs-current">Tài liệu</span>
          </nav>
          <a className="idx-edit-link" href="#" title="Đề xuất chỉnh sửa">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z" />
            </svg>
            Sửa trên GitHub
          </a>
        </div>

        <div className="idx-head">
          <h1>Tài liệu hướng dẫn sử dụng</h1>
          <p className="idx-lede">
            Khám phá hướng dẫn sử dụng và cấu hình cho từng phân hệ nghiệp vụ trên hệ thống Zotech — nền Odoo 19.0.
          </p>
        </div>

        <div className="idx-cols">
          {getPublicGroups().map((group) => (
            <section className="idx-group" data-screen-label={group} key={group}>
              <h2 className="idx-group-title">{group}</h2>
              <div className="idx-links">
                {getPublicPagesByGroup(group).map((page) => (
                  <Link key={page.slug} to={`/docs/${page.slug}`} className="idx-link" title={page.title}>
                    {page.title}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
