import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPageBySlug } from '../utils/content'
import { TableOfContents } from '../components/TableOfContents'
import styles from './DocPage.module.css'

export const DocPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const page = slug ? getPageBySlug(slug) : null

  useEffect(() => {
    // Add code copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('pre')
    codeBlocks.forEach((block) => {
      if (!block.querySelector('button[class*="copy"]')) {
        const button = document.createElement('button')
        button.className = 'code-copy-btn'
        button.textContent = 'Copy'
        button.onclick = () => {
          const code = block.textContent || ''
          navigator.clipboard.writeText(code)
          button.textContent = 'Copied!'
          setTimeout(() => {
            button.textContent = 'Copy'
          }, 2000)
        }
        block.appendChild(button)
      }
    })
  }, [])

  if (!page) {
    return (
      <main className={styles.main}>
        <div className={styles.notFound}>
          <h1>Trang không tìm thấy</h1>
          <p>Xin lỗi, trang bạn tìm kiếm không tồn tại.</p>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.topbar}>
        <nav className={styles.crumbs}>
          <span className={styles.current}>{page.group}</span>
        </nav>
        <a href="#" className={styles.editLink} title="Đề xuất chỉnh sửa">
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
            <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z" />
          </svg>
          Sửa trên GitHub
        </a>
      </div>

      <div className={styles.head}>
        <h1>{page.title}</h1>
        {page.description && <p className={styles.lede}>{page.description}</p>}
      </div>

      <div className={styles.content}>
        <article className={styles.article}>
          <section>
            <h2 id="overview">Tổng quan</h2>
            <p>
              Tài liệu hướng dẫn sử dụng cho chủ đề <strong>{page.title}</strong>{' '}
              trong hệ thống Zotech trên nền Odoo 19.0. Bên dưới là các bước hướng
              dẫn chi tiết.
            </p>
          </section>

          {page.toc.map((item) => (
            <section key={item.id} id={item.id}>
              <h2>{item.label}</h2>
              <p>
                Hướng dẫn chi tiết cho <em>{item.label}</em> sẽ được cập nhật
                trong phần này.
              </p>
              <div className={styles.placeholder}>
                <p>Nội dung sẽ được cung cấp từ hệ thống hoặc tệp CMS.</p>
              </div>
            </section>
          ))}
        </article>

        <aside className={styles.toc}>
          <TableOfContents items={page.toc} />
        </aside>
      </div>
    </main>
  )
}
