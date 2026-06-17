import React from 'react'
import { Link } from 'react-router-dom'
import { getGroups, getPagesByGroup } from '../utils/content'
import styles from './HomePage.module.css'

export const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.topbar}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <span className={styles.current}>Tài liệu</span>
        </nav>
        <a className={styles.editLink} href="#" title="Đề xuất chỉnh sửa">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z" />
          </svg>
          Sửa trên GitHub
        </a>
      </div>

      <div className={styles.head}>
        <h1>Tài liệu hướng dẫn sử dụng</h1>
        <p className={styles.lede}>
          Khám phá hướng dẫn sử dụng và cấu hình cho từng phân hệ nghiệp vụ trên
          hệ thống Zotech — nền Odoo 19.0.
        </p>
      </div>

      <div className={styles.cols}>
        {getGroups().map((group) => (
          <section key={group} className={styles.group} data-screen-label={group}>
            <h2 className={styles.groupTitle}>{group}</h2>
            <div className={styles.links}>
              {getPagesByGroup(group).map((page) => (
                <Link
                  key={page.slug}
                  to={`/docs/${page.slug}`}
                  className={styles.link}
                  title={page.title}
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
