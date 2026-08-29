import React from 'react'

const Chevron: React.FC = () => (
  <span className="chev">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </span>
)

export const SubBar: React.FC = () => {
  return (
    <div className="subbar">
      <div className="subbar-inner">
        <button type="button" className="subbar-select" title="Đổi ngôn ngữ">
          <span>Tiếng Việt</span>
          <Chevron />
        </button>
        <div className="subbar-divider" />
        <button type="button" className="subbar-select" title="Phiên bản tài liệu">
          <span>Odoo 18.0</span>
          <Chevron />
        </button>
      </div>
    </div>
  )
}
