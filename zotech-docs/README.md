# Zotech Docs — React + TypeScript Implementation

A fully-functional documentation site for Zotech Docs (Vietnamese Odoo 19.0 guide).

## Features

✅ **27 Documentation Pages** — All modules from the original design
✅ **Responsive Sidebar** — Hierarchical navigation with expand/collapse
✅ **Sticky Header** — Search and branding
✅ **Table of Contents** — Scroll-spy TOC for each page
✅ **Design System** — Warm orange accent, Inter + JetBrains Mono typography
✅ **Smooth Navigation** — React Router with client-side routing
✅ **Mobile Responsive** — Grid layout adapts to smaller screens

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
zotech-docs/
├── src/
│   ├── components/
│   │   ├── TopNav.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TableOfContents.tsx
│   │   └── CodeCopyButton.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── DocPage.tsx
│   ├── styles/
│   │   ├── tokens.css
│   │   └── tokens.ts
│   ├── utils/
│   │   └── content.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Design System

All design tokens from the original prototype are preserved:
- **Colors**: Warm orange accent (#f97316), neutral grays
- **Typography**: Inter (regular) + JetBrains Mono (code)
- **Spacing**: 4px grid
- **Components**: Buttons, links, input fields, sidebar tree

## Pages Implemented

### Accounting (Kế toán)
- Đối soát dữ liệu

### Supply Chain (Chuỗi cung ứng)
- Mua hàng
- Kho hàng
- Logistics
- Tài sản

### Sales & Customer (Bán hàng & Khách hàng)
- Liên hệ – CRM
- Bán hàng
- E-commerce
- Booking
- Zalo
- Call center

### HR (Nhân sự)
- Nhân viên
- Nghỉ phép
- Tăng ca
- Chấm công
- Tuyển dụng
- E-learning
- Bảng lương

### Operations (Vận hành)
- Phê duyệt
- Dự án
- Tài liệu
- MISA

## Customization

To update content, modify [src/utils/content.ts](src/utils/content.ts) — it contains all page definitions and hierarchies.

To customize styling, edit [src/styles/tokens.css](src/styles/tokens.css) — all CSS variables are defined there.

## Technology Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool & dev server
- **React Router 6** — Client-side routing
- **CSS Modules** — Scoped styling
