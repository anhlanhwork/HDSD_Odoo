# Quick Start Guide — Zotech Docs React Implementation

## ✅ What's Been Implemented

A **fully-functional React + TypeScript documentation site** with:

### Features ✨
- ✅ All 27 documentation pages from the original design
- ✅ Responsive sidebar with hierarchical navigation (expand/collapse groups)
- ✅ Sticky header with search input and branding
- ✅ Scroll-spy Table of Contents for each page
- ✅ Design system from original prototype (colors, typography, spacing)
- ✅ React Router for smooth client-side navigation
- ✅ CSS Modules for component styling
- ✅ Production-ready build with Vite

### Modules Included 📚

**Kế toán (Accounting)**
- Đối soát dữ liệu

**Chuỗi cung ứng (Supply Chain)**
- Mua hàng, Kho hàng, Logistics, Tài sản

**Bán hàng & Khách hàng (Sales & Customer)**
- CRM, Bán hàng, E-commerce, Booking, Zalo, Call center

**Nhân sự (HR)**
- Nhân viên, Nghỉ phép, Tăng ca, Chấm công, Tuyển dụng, E-learning, Bảng lương

**Vận hành (Operations)**
- Phê duyệt, Dự án, Tài liệu, MISA

## 🚀 Getting Started

### Start Development Server
```bash
npm run dev
```
This opens the site at `http://localhost:5173` with hot module replacement.

### Build for Production
```bash
npm run build
```
Output goes to the `dist/` folder. Deploy this folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
zotech-docs/
├── src/
│   ├── components/          # Reusable components
│   │   ├── TopNav.tsx       # Header with search
│   │   ├── Sidebar.tsx      # Navigation tree
│   │   ├── TableOfContents.tsx  # Scroll-spy TOC
│   │   └── CodeCopyButton.tsx   # Code copy utility
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx     # Home/index page
│   │   └── DocPage.tsx      # Individual doc pages
│   ├── styles/
│   │   ├── tokens.css       # Design system (colors, typography, spacing)
│   │   └── tokens.ts        # CSS tokens as TypeScript object
│   ├── utils/
│   │   └── content.ts       # Page definitions and navigation structure
│   ├── App.tsx              # Main app with routing
│   ├── App.css              # Global layout styles
│   └── main.tsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── dist/                    # Production build output
```

## 🎨 Design System

All tokens from the original prototype are preserved in `src/styles/tokens.css`:

**Colors:**
- Primary: Warm orange (#f97316)
- Neutrals: Warm grays (neutral-50 to neutral-950)
- Status: Blue (info), Amber (warn), Green (success), Red (danger)

**Typography:**
- Sans-serif: Inter (regular, medium, semibold, bold)
- Monospace: JetBrains Mono (code blocks)
- Sizes: Display, H1-H4, body, small, caption, code

**Spacing:** 4px grid scale (4px to 96px)

**Components:** Buttons, links, forms, sidebar, modals

## 📝 Customization

### Add New Page
1. Edit `src/utils/content.ts`
2. Add entry to `docPages` array:
   ```typescript
   {
     slug: 'new-page',
     title: 'New Page Title',
     group: 'Group Name',
     toc: [
       { id: 'section-1', label: 'Section 1' },
     ],
   }
   ```
3. Content auto-renders from page structure

### Change Colors/Fonts
Edit `src/styles/tokens.css` CSS custom properties (variables)

### Update Navigation Groups
Modify `docPages` array in `src/utils/content.ts` — the sidebar auto-generates from group names

## 🔧 Technology Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool & dev server (fastest modern build tool)
- **React Router 6** — Client-side routing
- **CSS Modules** — Scoped component styles
- **Vanilla JavaScript** — No external UI library dependencies

## 📊 Build Output

**Development:** ~180 KB JS + ~12 KB CSS (gzipped: 58 KB + 3 KB)
**Production:** Optimized with tree-shaking, minification

## 🌍 Deployment Options

1. **Vercel** (recommended for React):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify:**
   - Connect GitHub repo
   - Build: `npm run build`
   - Publish: `dist`

3. **GitHub Pages:**
   ```bash
   npm install gh-pages --save-dev
   ```

4. **Any Static Host:**
   - Run `npm run build`
   - Upload `dist/` folder

## ❓ FAQ

**Q: How do I add real content to pages?**
A: Edit the placeholder section in `src/pages/DocPage.tsx` or load content from an API/CMS.

**Q: Can I add more features (dark mode, multiple languages)?**
A: Yes! The design system is flexible. Add CSS variables for dark mode, or implement i18n with react-i18next.

**Q: How do I customize the search?**
A: The search input is in `TopNav.tsx`. Connect it to your backend API or use a client-side library like Fuse.js.

**Q: Can I deploy on a subdirectory?**
A: Yes, add `base: '/subdirectory/'` to `vite.config.ts`

## 📞 Support

For issues or questions about React/TypeScript, refer to:
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/)

---

**Ready to go!** Start with `npm run dev` and begin customizing. 🎉
