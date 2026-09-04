import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { ArticleContent } from '../components/ArticleContent'
import { TableOfContents } from '../components/TableOfContents'
import { getPageBySlug, isPublicPage } from '../utils/content'
import { useFeaturePanels, scrollToTocTarget } from '../hooks/useFeaturePanels'
import { useLightbox } from '../hooks/useLightbox'
import { useInternalLinks } from '../hooks/useInternalLinks'
import { useAccordion } from '../hooks/useAccordion'

import crmHtml from '../content/crm.html?raw'
import logisticsHtml from '../content/logistics.html?raw'
import ecommerceHtml from '../content/ecommerce.html?raw'
import hoaDonHtml from '../content/hoa-don.html?raw'
import batXacThuc2LopHtml from '../content/bat-xac-thuc-2-lop.html?raw'
import khoHangHtml from '../content/kho-hang.html?raw'
import muaHangHtml from '../content/mua-hang.html?raw'
import nhanVienHtml from '../content/nhan-vien.html?raw'
import nghiPhepHtml from '../content/nghi-phep.html?raw'
import chamCongHtml from '../content/cham-cong.html?raw'
import tangCaHtml from '../content/tang-ca.html?raw'
import tuyenDungHtml from '../content/tuyen-dung.html?raw'
import elearningHtml from '../content/elearning.html?raw'
import bangLuongHtml from '../content/bang-luong.html?raw'
import affiliateHtml from '../content/affiliate.html?raw'

const CONTENT_MAP: Record<string, string> = {
  crm: crmHtml,
  logistics: logisticsHtml,
  ecommerce: ecommerceHtml,
  'hoa-don': hoaDonHtml,
  'bat-xac-thuc-2-lop': batXacThuc2LopHtml,
  'kho-hang': khoHangHtml,
  'mua-hang': muaHangHtml,
  'nhan-vien': nhanVienHtml,
  'nghi-phep': nghiPhepHtml,
  'cham-cong': chamCongHtml,
  'tang-ca': tangCaHtml,
  'tuyen-dung': tuyenDungHtml,
  'elearning': elearningHtml,
  'bang-luong': bangLuongHtml,
  'affiliate': affiliateHtml,
}

export const DocPage: React.FC = () => {
  const { slug, feature } = useParams<{ slug: string; feature?: string }>()
  const foundPage = slug ? getPageBySlug(slug) : undefined
  const page = foundPage && isPublicPage(foundPage) ? foundPage : undefined
  const activeFeature = feature ? decodeURIComponent(feature) : ''
  const containerRef = useRef<HTMLDivElement>(null)
  const featureIds = page?.toc.map((t) => t.id) ?? []

  const { tocItems, activeTocId } = useFeaturePanels(containerRef, featureIds, activeFeature)
  useLightbox(containerRef)
  useInternalLinks(containerRef, slug, featureIds)
  useAccordion(containerRef)

  if (!page) {
    return (
      <div className="shell shell--no-toc">
        <Sidebar />
        <main className="shell-main">
          <h1>Trang không tìm thấy</h1>
          <p>Xin lỗi, trang bạn tìm kiếm không tồn tại.</p>
        </main>
      </div>
    )
  }

  const html = slug ? CONTENT_MAP[slug] : undefined

  return (
    <div className={html ? 'shell' : 'shell shell--no-toc'}>
      <Sidebar />
      <main className="shell-main">
        {html ? (
          <ArticleContent ref={containerRef} html={html} />
        ) : (
          <PlaceholderArticle title={page.title} group={page.group} toc={page.toc} />
        )}
      </main>
      {html && (
        <TableOfContents
          items={tocItems}
          activeId={activeTocId}
          onSelect={(id) => scrollToTocTarget(containerRef.current, id)}
        />
      )}
    </div>
  )
}

// Non-pilot modules don't have ported content yet (see IMPLEMENTED_SLUGS);
// show a clearly-labeled stand-in instead of a broken/empty page.
const PlaceholderArticle: React.FC<{ title: string; group: string; toc: { id: string; label: string }[] }> = ({ title, group, toc }) => (
  <div className="article">
    <div className="article-toolbar">
      <nav className="crumbs" aria-label="Breadcrumb">
        <span className="crumbs-current">{group}</span>
      </nav>
    </div>
    <h1>{title}</h1>
    <p className="article-lede">
      Nội dung trang này chưa được chuyển đổi từ thiết kế gốc trong đợt triển khai thí điểm này
      (chỉ có Trang chủ, CRM, Logistics và E-commerce).
    </p>
    <div className="doc-placeholder">
      <div className="doc-placeholder-icon" />
      <p>Nội dung sẽ được cập nhật ở các đợt triển khai tiếp theo.</p>
    </div>
    {toc.map((item) => (
      <h2 key={item.id} id={item.id}>{item.label}</h2>
    ))}
  </div>
)
