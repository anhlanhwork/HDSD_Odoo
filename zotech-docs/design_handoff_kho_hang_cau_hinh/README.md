# Handoff: Kho hàng — Thiết lập & cấu hình

## Overview
Trang tài liệu hướng dẫn cấu hình module **Kho hàng (Inventory/WMS)** trên Odoo 19 cho hệ thống Zotech Docs. Nội dung gồm nhóm "Thiết lập & cấu hình": 1 mục cấu hình hệ thống chung + 15 mục cấu hình chi tiết (kho, vị trí, đơn vị tính, danh mục sản phẩm, thuộc tính, tuyến cung ứng, hoạt động kho, quy tắc, danh mục/quy tắc lưu kho, danh pháp mã vạch, vai trò & phân công công việc, quy cách kiện hàng, shipper, phương thức giao hàng, tiền tố mã bưu chính). Mỗi mục có: mô tả mục đích, bảng trường dữ liệu, các bước thực hiện dạng numbered steps, và ảnh chụp màn hình minh hoạ.

## About the Design Files
Các file trong bundle này là **design reference viết bằng HTML** — prototype thể hiện look & behavior mong muốn, **không phải production code để copy nguyên**. Nhiệm vụ là **tái tạo lại các thiết kế HTML này trong codebase đích** (React/Vue/Next/docs engine như Docusaurus, VitePress, Astro Starlight…) theo pattern và component library sẵn có của codebase đó. Nếu chưa có môi trường nào, hãy chọn framework phù hợp nhất (khuyến nghị: một static-site docs generator hỗ trợ MDX) và implement thiết kế ở đó.

Nội dung tiếng Việt trong file là **nội dung thật (production copy)** — giữ nguyên chữ, không dịch, không viết lại.

## Fidelity
**High-fidelity (hifi).** Màu, typography, spacing, radius, shadow đều dùng design token thật trong `styles/tokens.css`. Recreate pixel-perfect bằng component sẵn có của codebase; token nào codebase đã có thì map sang, không hard-code lại giá trị.

## Screens / Views

### 1. Docs page — Module Kho hàng (shell 3 cột)
- **Purpose**: người dùng cuối đọc hướng dẫn cấu hình kho, tra cứu theo mục lục.
- **Layout**: `.topnav` fixed trên cùng (height ~56px, border-bottom 1px). Bên dưới là `.shell` — CSS grid 3 cột: `aside.sidebar` (mục lục module, sticky, scroll riêng, no-scrollbar) | `main.shell-main` (nội dung, max-width ~var(--article-max)) | `nav.toc` (anchor "Trên trang này", sticky). Dưới breakpoint tablet: TOC ẩn; dưới mobile: sidebar thu thành drawer (xem `styles/layout.css`).
- **Components**:
  - `.topnav-brand` — mark chữ "Z" nền accent, tên brand + subtitle.
  - `.sb-tree` — sidebar tree: `.sb-node` > `button.sb-row.sb-group` (nhóm, có `aria-expanded`, caret rotate khi mở) và `a.sb-row.sb-link` (mục lá, có state `.is-active`). Nhóm lồng tối đa 3 cấp (root > group > subgroup).
  - `.article-toolbar` + `.crumbs` — breadcrumb "Tài liệu / <Module> / <Trang>".
  - `h1` + `.badge.badge-neutral` (mã module) + `.lead`.
  - `h2` flat làm mốc từng mục cấu hình; `h3` "Các bước thực hiện".
  - `.steps` / step badge — badge số tròn nền accent-500, chữ trắng, `font-weight:700`.
  - `.ui-btn` — inline pill mô phỏng nút trong Odoo (padding .12em .6em, radius var(--radius-sm), font-size .88em, weight 600, nền/border theo biến thể).
  - `table.tbl` — bảng trường dữ liệu: header nền accent nhạt, chữ đậm; body border-subtle 1px; cell padding ~10px 14px.
  - `figure.shot` — ảnh screenshot + `figcaption` caption nhỏ, border 1px + radius var(--radius-md).
  - `.accordion` — FAQ (details/summary pattern), 1 mục mở tại 1 thời điểm không bắt buộc.
  - `.wms` — sơ đồ quy trình kho tự vẽ bằng CSS grid (lane theo vai trò × step card). CSS đầy đủ nằm inline trong `kho-hang.html`.

## Sections trong bundle này

| Anchor | Tiêu đề |
|---|---|
| `#cau-hinh-he-thong` | Cấu hình hệ thống |
| `#thiet-lap-kho-hang` | Thiết lập kho hàng (Warehouse) |
| `#cau-hinh-vi-tri-kho` | Cấu hình vị trí kho (Locations) |
| `#thiet-lap-don-vi-tinh` | Thiết lập đơn vị tính |
| `#danh-muc-san-pham` | Danh mục sản phẩm |
| `#thuoc-tinh` | Thuộc tính |
| `#cau-hinh-tuyen-duong` | Cấu hình tuyến đường (Routes) |
| `#hoat-dong-kho` | Hoạt động Kho |
| `#quy-tac-kho` | Quy tắc |
| `#danh-muc-luu-kho` | Danh mục lưu kho |
| `#quy-tac-luu-kho` | Quy tắc lưu kho |
| `#danh-phap-ma-vach` | Danh pháp mã vạch |
| `#vai-tro-cong-viec` | Vai trò Công việc |
| `#phan-cong-cong-viec` | Phân công Công việc |
| `#quy-cach-kien-hang` | Quy cách kiện hàng |
| `#danh-sach-shipper` | Danh sách Shipper |
| `#phuong-thuc-giao-hang` | Phương thức giao hàng |
| `#tien-to-ma-buu-chinh` | Tiền tố mã bưu chính |

## Interactions & Behavior
- **Sidebar tree**: click `.sb-group` toggle `aria-expanded` → expand/collapse `.sb-children` (height animation ~180ms ease); trạng thái mở lưu vào `localStorage`. Xem `scripts/main.js`.
- **Active link**: mục sidebar khớp trang hiện tại nhận `.is-active` (nền accent nhạt, chữ accent-700, thanh chỉ thị bên trái).
- **TOC scroll-spy**: IntersectionObserver theo `h2/h3` → highlight `.toc-link.is-active`.
- **Anchor navigation**: click TOC → smooth scroll với offset bằng chiều cao topnav (dùng `scroll-margin-top`, KHÔNG dùng scrollIntoView).
- **Search**: `<script type="application/json" id="search-index">` chứa index (slug/title/group/toc) cho ô tìm kiếm ở topnav — client-side filter, hiện dropdown kết quả.
- **Accordion FAQ**: toggle mở/đóng, animation chiều cao.
- **Hover states**: `.sb-row:hover` nền neutral-100; `.toc-link:hover` chữ fg-strong; ảnh `figure.shot:hover` nâng shadow nhẹ.
- **Responsive**: ≥1280px 3 cột; 1024–1280px ẩn TOC; <1024px sidebar → drawer có overlay; <640px sơ đồ `.wms` chuyển 1 cột.

## State Management
- `sidebarOpenGroups: string[]` — id các nhóm đang mở (persist localStorage).
- `activeSlug: string` — trang hiện tại, suy ra từ URL.
- `activeHeading: string` — heading đang trong viewport (scroll-spy).
- `searchQuery: string` + `searchResults` — lọc từ search-index JSON, không cần fetch.
- `isDrawerOpen: boolean` — mobile sidebar.
- Không có data fetching runtime: toàn bộ nội dung là static.

## Design Tokens
Nguồn chuẩn: `styles/tokens.css` (copy trong bundle). Nhóm chính:
- **Color**: `--color-accent-300/400/500/700` (accent cam thương hiệu), `--color-neutral-100…900`, `--bg-page`, `--bg-surface`, `--fg-strong`, `--fg-default`, `--fg-muted`, `--fg-subtle`, `--border-subtle`, `--border-default`, `--border-strong`.
- **Spacing**: `--space-1 … --space-8`.
- **Radius**: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`.
- **Type**: font family Inter (UI) + JetBrains Mono (code), weight token `--fw-medium/semibold/bold`; scale text 11.5px → 15px cho chi tiết UI, heading theo `styles/base.css`.
- **Shadow**: token shadow trong `tokens.css`.
Lấy giá trị hex/px chính xác từ file token — đừng đoán.

## Assets
- **Screenshots** (59 ảnh, thư mục `images/`): ảnh chụp UI Odoo thật cho từng bước cấu hình, đặt tên theo pattern `kho<viết-tắt-mục>-b<N>-<nội-dung>.png`, ví dụ `khohang-thietlap-b1-menu.png`. Đây là ảnh minh hoạ tài liệu, cần copy nguyên vào asset pipeline của codebase (không tái tạo).
- **Fonts**: Inter + JetBrains Mono qua Google Fonts.
- Không dùng icon font; icon là inline SVG trong markup.

## Files
- `kho_hang_cau_hinh_snippet.html` — trang thiết kế đã trích riêng phần "Thiết lập & cấu hình" (mở trực tiếp bằng browser).
- `styles/tokens.css`, `base.css`, `components.css`, `layout.css`, `module.css`, `docs-page.css` — CSS gốc.
- `scripts/main.js` — sidebar tree, TOC scroll-spy, search, accordion.
- `images/` — screenshot.
- File gốc đầy đủ trong project: `kho-hang.html` (bao gồm cả sidebar toàn module, TOC, search index và các nhóm nội dung khác).
