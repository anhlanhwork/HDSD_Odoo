export interface TocEntry {
  id: string
  label: string
}

// A sidebar node is either a clickable leaf (id references a toc entry) or
// a named collapsible group holding more nodes — groups can nest inside
// groups (e.g. CRM's "Tính năng mở rộng" contains a "Cấu hình Kho số
// chung" sub-subgroup), matching the real source tree.
export interface SidebarLeaf {
  id: string
}
export interface SidebarGroup {
  label: string
  children: SidebarNode[]
}
export type SidebarNode = SidebarLeaf | SidebarGroup

export const isSidebarGroup = (n: SidebarNode): n is SidebarGroup => 'children' in n

export interface DocPage {
  slug: string
  title: string
  group: string
  // Flat list — drives useFeaturePanels (which id is a "feature"), the
  // right-hand TOC, and search. Sidebar *display* grouping is separate,
  // see sidebarTree below.
  toc: TocEntry[]
  // The sidebar's nested sub-menu tree, matching the real source pattern
  // found under every module (see e.g. CRM: Cấu hình ban đầu / Tạo liên hệ
  // / Tính năng mở rộng, the last containing further sub-subgroups). When
  // omitted, all toc items are shown flat under a single "Các tính năng &
  // quy trình" group.
  sidebarTree?: SidebarNode[]
  // Extra ids shown inside the synthetic "Giới thiệu hệ thống" group,
  // after the bare overview link (e.g. CRM also lists "Phân quyền ứng
  // dụng" there).
  overviewExtra?: string[]
}

// Ported verbatim from the design source's #search-index manifest
// (user_guide/project/_src/_index.js, embedded in every prototype page).
// Logistics' toc is expanded beyond that manifest to match the real h2
// section ids in the handoff bundle's logistics.html (the "file gốc" per
// its CLAUDE.md, actively ahead of the manifest and of the older copy
// under user_guide/ in this repo) — the manifest's 5-item version is
// stale, missing the ~30 granular config/reference sub-sections that
// now exist as their own h2s in the current source page.
export const docPages: DocPage[] = [
  // Tài khoản & Bảo mật
  {
    slug: 'bat-xac-thuc-2-lop',
    title: 'Bật xác thực 2 lớp',
    group: 'Tài khoản & Bảo mật',
    // Single continuous guide (not a multi-feature module) — toc is
    // intentionally empty so none of its h2 sections gets treated as a
    // routable feature panel by useFeaturePanels, which would otherwise
    // hide every section except whichever one matches the URL. All 4
    // sections stay visible together, matching the source's one-page
    // walkthrough. Trade-off: the right-hand "Trên trang này" rail (which
    // only auto-harvests h3/h4) is empty here, same as other overview-only
    // pages in this app (e.g. logistics' FAQ section).
    toc: [],
  },
  // Kế toán
  {
    slug: 'doi-soat-du-lieu',
    title: 'Đối soát dữ liệu',
    group: 'Kế toán',
    toc: [
      { id: 'tao-phien-doi-soat', label: 'Tạo mới phiên đối soát' },
      { id: 'doc-du-lieu', label: 'Cách đọc dữ liệu sau đối soát' },
      { id: 'doc-dashboard', label: 'Cách đọc dashboard' },
      { id: 'tab-chi-tiet-don', label: 'Tab Chi tiết đơn đối soát' },
    ],
  },
  {
    slug: 'hoa-don',
    title: 'Hóa đơn điện tử',
    group: 'Kế toán',
    // Matches the real hoa-don.html source exactly (provided directly by the
    // user, ahead of user_guide/). Overview-only h2s ('muc-dich',
    // 'so-do-quy-trinh', 'cau-hinh', 'cau-hinh-hddt', 'quy-trinh-tinh-nang')
    // are intentionally excluded from toc, same pattern as CRM's 'muc-dich'
    // etc. — only the ids wrapped in <section class="yc-doc"> become their
    // own feature panel/sidebar leaf.
    toc: [
      { id: 'du-lieu-hoa-don-dien-tu', label: 'Dữ liệu hóa đơn điện tử' },
      { id: 'cau-hinh-tich-hop-gian-hang', label: 'Cấu hình tích hợp HĐĐT trên gian hàng' },
      { id: 'dich-vu-hoa-don', label: 'Dịch vụ hóa đơn điện tử' },
      { id: 'trang-thai-hoa-don', label: 'Trạng thái hóa đơn' },
      { id: 'mau-hoa-don-misa', label: 'Mẫu hóa đơn Misa' },
      { id: 'mau-hoa-don-minvoice', label: 'Mẫu hóa đơn Minvoice' },
      { id: 'chi-tiet-trang-thai-hoa-don', label: 'Chi tiết trạng thái hóa đơn' },
      { id: 'quy-trinh-xuat-hoa-don-tmdt', label: 'Quy trình xuất HĐĐT từ sàn TMĐT' },
    ],
    // Matches the source's embedded sidebar: two module-level groups, each
    // itself a bare (non-clickable) h2 whose intro text stays in the
    // overview — same trade-off as CRM/ecommerce group headers.
    sidebarTree: [
      {
        label: 'Cấu hình hóa đơn điện tử',
        children: [
          { id: 'dich-vu-hoa-don' },
          { id: 'trang-thai-hoa-don' },
          { id: 'mau-hoa-don-misa' },
          { id: 'mau-hoa-don-minvoice' },
          { id: 'chi-tiet-trang-thai-hoa-don' },
        ],
      },
      {
        label: 'Quy trình và tính năng',
        children: [
          { id: 'du-lieu-hoa-don-dien-tu' },
          { id: 'cau-hinh-tich-hop-gian-hang' },
          { id: 'quy-trinh-xuat-hoa-don-tmdt' },
        ],
      },
    ],
  },

  // Chuỗi cung ứng
  {
    slug: 'mua-hang',
    title: 'Mua hàng',
    group: 'Chuỗi cung ứng',
    // Matches the real mua-hang.html sidebar tree exactly (confirmed via
    // screenshot). "Cấu hình hệ thống" is a bare h2 in the source that's
    // just a module-grid hub linking to the other sections — it isn't its
    // own sidebar leaf in the real tree, so it's left out of toc/sidebarTree
    // (its content still renders as part of the overview view). The
    // "Quản lý quy trình mua hàng" / "Thanh toán đơn mua hàng" sections'
    // text came from the legacy _src/mua-hang.js content (the new
    // mua-hang.html design source truncates before reaching them), ported
    // over onto the real ids/labels and paired with the new named
    // screenshots by matching filename to described action.
    toc: [
      { id: 'cai-dat-ung-dung', label: 'Cài đặt ứng dụng' },
      { id: 'phan-quyen-ung-dung', label: 'Hướng dẫn phân quyền' },
      { id: 'quy-tac-tai-cung-ung', label: 'Quy tắc Tái cung ứng sản phẩm' },
      { id: 'don-vi-mua-hang', label: 'Thiết lập đơn vị mua hàng' },
      { id: 'bang-gia-san-pham-ncc', label: 'Thiết lập bảng giá sản phẩm theo nhà cung cấp' },
      { id: 'thiet-lap-nha-cung-cap', label: 'Thiết lập nhà cung cấp' },
      { id: 'yeu-cau-mua-hang', label: 'Yêu cầu mua hàng' },
      { id: 'yeu-cau-bao-gia-don-hang', label: 'Yêu cầu báo giá/đơn hàng' },
      { id: 'xu-ly-don-hang', label: 'Xử lý đơn hàng' },
      { id: 'tra-hang', label: 'Trả hàng' },
      { id: 'tao-hoa-don-mua-hang', label: 'Tạo hóa đơn' },
      { id: 'theo-doi-cong-no-ncc', label: 'Theo dõi công nợ NCC' },
    ],
    overviewExtra: ['cai-dat-ung-dung'],
    sidebarTree: [
      {
        label: 'Thiết lập & cấu hình',
        children: [
          {
            label: 'Cấu hình sản phẩm',
            children: [{ id: 'quy-tac-tai-cung-ung' }, { id: 'don-vi-mua-hang' }, { id: 'bang-gia-san-pham-ncc' }],
          },
          { id: 'phan-quyen-ung-dung' },
          { id: 'thiet-lap-nha-cung-cap' },
        ],
      },
      {
        label: 'Quản lý quy trình mua hàng',
        children: [
          { id: 'yeu-cau-mua-hang' },
          { id: 'yeu-cau-bao-gia-don-hang' },
          { id: 'xu-ly-don-hang' },
          { id: 'tra-hang' },
        ],
      },
      {
        label: 'Thanh toán đơn mua hàng',
        children: [{ id: 'tao-hoa-don-mua-hang' }, { id: 'theo-doi-cong-no-ncc' }],
      },
    ],
  },
  {
    slug: 'kho-hang',
    title: 'Kho hàng',
    group: 'Chuỗi cung ứng',
    // Ported from the Claude Design project's real source articles:
    // _src/kho-article.html (the fully-written, 62-screenshot workflow
    // version) and design_handoff_kho_hang_cau_hinh/kho_hang_cau_hinh_snippet.html
    // (the setup/config section, split out separately since the top-level
    // kho-hang.html file is too large for whole-file fetches). Every id
    // below has full step-by-step content with real screenshots.
    // "Điều chuyển nội bộ kho" keeps the pre-existing site version (more
    // detailed — includes a Trả hàng/discrepancy-handling subsection and a
    // video not present in the design source's shorter version of that
    // section). 'muc-dich' / 'cau-hinh-he-thong' (overview headings) are
    // excluded from toc, same pattern as CRM/mua-hang.
    toc: [
      { id: 'thiet-lap-kho-hang', label: 'Kho hàng' },
      { id: 'hoat-dong-kho', label: 'Hoạt động Kho' },
      { id: 'cau-hinh-vi-tri-kho', label: 'Vị trí' },
      { id: 'cau-hinh-tuyen-duong', label: 'Tuyến cung ứng' },
      { id: 'quy-tac-kho', label: 'Quy tắc' },
      { id: 'danh-muc-luu-kho', label: 'Danh mục lưu kho' },
      { id: 'quy-tac-luu-kho', label: 'Quy tắc lưu kho' },
      { id: 'danh-muc-san-pham', label: 'Danh mục sản phẩm' },
      { id: 'thuoc-tinh', label: 'Thuộc tính' },
      { id: 'danh-phap-ma-vach', label: 'Danh pháp mã vạch' },
      { id: 'thiet-lap-don-vi-tinh', label: 'Danh mục đơn vị tính' },
      { id: 'vai-tro-cong-viec', label: 'Vai trò Công việc' },
      { id: 'phan-cong-cong-viec', label: 'Phân công Công việc' },
      { id: 'quy-cach-kien-hang', label: 'Quy cách kiện hàng' },
      { id: 'danh-sach-shipper', label: 'Danh sách Shipper' },
      { id: 'phuong-thuc-giao-hang', label: 'Phương thức giao hàng' },
      { id: 'tien-to-ma-buu-chinh', label: 'Tiền tố mã bưu chính' },
      { id: 'tao-san-pham', label: 'Tạo sản phẩm' },
      { id: 'quan-ly-san-pham-theo-lo-se-ri-truong-hop-kho', label: 'Quản lý sản phẩm theo Lô / Sê-ri' },
      { id: 'nhap-hang-ve-kho', label: 'Nhập hàng về kho' },
      { id: 'dieu-chuyen-noi-bo-kho', label: 'Điều chuyển nội bộ kho' },
      { id: 'xuat-kho-giao-hang-cho-khach', label: 'Xuất kho giao hàng cho khách' },
      { id: 'hoan-tra-hang', label: 'Hoàn trả hàng' },
      { id: 'kiem-ke-kho', label: 'Kiểm kê kho' },
    ],
    sidebarTree: [
      {
        label: 'Thiết lập & cấu hình',
        children: [
          {
            label: 'Quản lý kho hàng',
            children: [
              { id: 'thiet-lap-kho-hang' },
              { id: 'hoat-dong-kho' },
              { id: 'cau-hinh-vi-tri-kho' },
              { id: 'cau-hinh-tuyen-duong' },
              { id: 'quy-tac-kho' },
              { id: 'danh-muc-luu-kho' },
              { id: 'quy-tac-luu-kho' },
            ],
          },
          {
            label: 'Sản phẩm',
            children: [{ id: 'danh-muc-san-pham' }, { id: 'thuoc-tinh' }, { id: 'danh-phap-ma-vach' }],
          },
          {
            label: 'Đơn vị tính',
            children: [
              { id: 'thiet-lap-don-vi-tinh' },
              { id: 'vai-tro-cong-viec' },
              { id: 'phan-cong-cong-viec' },
              { id: 'quy-cach-kien-hang' },
              { id: 'danh-sach-shipper' },
            ],
          },
          {
            label: 'Giao hàng',
            children: [{ id: 'phuong-thuc-giao-hang' }, { id: 'tien-to-ma-buu-chinh' }],
          },
        ],
      },
      {
        label: 'Quy trình và tính năng',
        children: [
          {
            label: 'Sản phẩm',
            children: [{ id: 'tao-san-pham' }, { id: 'quan-ly-san-pham-theo-lo-se-ri-truong-hop-kho' }],
          },
          {
            label: 'Quy trình kho vận',
            children: [
              { id: 'nhap-hang-ve-kho' },
              { id: 'dieu-chuyen-noi-bo-kho' },
              { id: 'xuat-kho-giao-hang-cho-khach' },
              { id: 'hoan-tra-hang' },
            ],
          },
          {
            label: 'Kiểm kê',
            children: [{ id: 'kiem-ke-kho' }],
          },
        ],
      },
    ],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    group: 'Chuỗi cung ứng',
    toc: [
      { id: 'thiet-lap-don-vi-van-chuyen', label: 'Thiết lập đơn vị vận chuyển' },
      { id: 'tao-lenh-van-chuyen', label: 'Tạo lệnh vận chuyển' },
      { id: 'theo-doi-lo-trinh', label: 'Theo dõi lộ trình giao hàng' },
      { id: 'quan-ly-cuoc-phi', label: 'Quản lý cước phí vận chuyển' },
      { id: 'doi-soat-bao-cao', label: 'Đối soát & báo cáo logistics' },
      { id: 'cfg-hang-van-chuyen', label: 'Hãng vận chuyển' },
      { id: 'cfg-cang', label: 'Cảng' },
      { id: 'cfg-tuyen-van-chuyen', label: 'Tuyến vận chuyển' },
      { id: 'cfg-loai-hang-hoa', label: 'Loại hàng hóa' },
      { id: 'cfg-hang-hoa-item', label: 'Hàng hóa' },
      { id: 'cfg-cuoc-van-chuyen', label: 'Cước vận chuyển' },
      { id: 'cfg-mau-kien-hang', label: 'Mẫu kiện hàng' },
      { id: 'cfg-kieu-dong-goi', label: 'Kiểu đóng gói' },
      { id: 'cfg-hs-code', label: 'HS code' },
      { id: 'cfg-lop-hang-nguy-hiem', label: 'Lớp hàng hoá nguy hiểm' },
      { id: 'cfg-un-number', label: 'Danh sách UN number' },
      { id: 'cfg-loai-phi', label: 'Danh sách loại phí' },
      { id: 'cfg-phuong-thuc-van-chuyen', label: 'Phương thức vận chuyển' },
      { id: 'cfg-phuong-thuc-dong-goi', label: 'Phương thức đóng gói' },
      { id: 'cfg-giai-doan-lo-hang', label: 'Giai đoạn lô hàng' },
      { id: 'cfg-trang-thai-lo-hang', label: 'Trạng thái lô hàng' },
      { id: 'cfg-incoterms', label: 'Incoterms' },
      { id: 'cfg-dieu-khoan-dich-vu', label: 'Điều khoản dịch vụ' },
      { id: 'cfg-dieu-khoan-thanh-toan', label: 'Điều khoản thanh toán' },
      { id: 'cfg-trang-thai-van-chuyen', label: 'Trạng thái hãng vận chuyển' },
      { id: 'cfg-trang-thai-don-giao-hang', label: 'Trạng thái đơn giao hàng' },
      { id: 'tt-co-hoi', label: 'Cơ hội kinh doanh' },
      { id: 'tt-don-hang', label: 'Báo giá & Đơn hàng' },
      { id: 'tt-job', label: 'Job (Lô hàng vận hành)' },
      { id: 'tt-pickup', label: 'Pickup (Lấy hàng)' },
      { id: 'tt-theo-doi-lo-trinh', label: 'Theo dõi lộ trình (vận đơn)' },
      { id: 'tt-ma-van-don', label: 'Mã vận đơn (Waybill Profile)' },
      { id: 'tt-lh-khach-hang', label: 'Khách hàng' },
      { id: 'tt-lh-ncc', label: 'Nhà cung cấp' },
      { id: 'tt-lh-shipper', label: 'Shipper' },
      { id: 'tt-kh-hoa-don', label: 'Hoá đơn bán hàng (Khách hàng)' },
      { id: 'tt-kh-thanh-toan', label: 'Thanh toán (Khách hàng)' },
      { id: 'tt-ncc-hoa-don', label: 'Hoá đơn phải trả (Nhà cung cấp)' },
    ],
    // Matches the real sidebar tree exactly (confirmed via the source
    // Claude Design project, logistics.html). Note two ids that exist as
    // in-page h2s (via toc, reachable from the right-hand TOC) but are
    // NOT exposed as their own left-sidebar leaves in the real tree:
    // 'thiet-lap-don-vi-van-chuyen' and the four feature-walkthrough ids
    // (tao-lenh-van-chuyen / theo-doi-lo-trinh / quan-ly-cuoc-phi /
    // doi-soat-bao-cao) — same pattern as CRM's overview-only sections.
    // 'cfg-hang-hoa-item' is likewise in-page-only (not in the real tree).
    sidebarTree: [
      {
        label: 'Thiết lập & cấu hình',
        children: [
          { label: 'Hành trình', children: ['cfg-hang-van-chuyen', 'cfg-cang', 'cfg-tuyen-van-chuyen'].map((id) => ({ id })) },
          { label: 'Cấu hình bảng giá vận chuyển', children: ['cfg-cuoc-van-chuyen', 'cfg-loai-phi'].map((id) => ({ id })) },
          {
            label: 'Cấu hình hàng hóa & đóng gói',
            children: [
              {
                label: 'Cấu hình hàng hóa nhận vận chuyển',
                children: ['cfg-loai-hang-hoa', 'cfg-hs-code', 'cfg-lop-hang-nguy-hiem', 'cfg-un-number'].map((id) => ({ id })),
              },
              {
                label: 'Cấu hình phương thức đóng gói kiện hàng',
                children: ['cfg-mau-kien-hang', 'cfg-kieu-dong-goi', 'cfg-phuong-thuc-dong-goi'].map((id) => ({ id })),
              },
            ],
          },
          {
            label: 'Theo dõi & trạng thái lô hàng',
            children: ['cfg-giai-doan-lo-hang', 'cfg-trang-thai-lo-hang', 'cfg-trang-thai-van-chuyen', 'cfg-trang-thai-don-giao-hang'].map((id) => ({ id })),
          },
          {
            label: 'Điều khoản & phương thức vận chuyển',
            children: ['cfg-phuong-thuc-van-chuyen', 'cfg-incoterms', 'cfg-dieu-khoan-dich-vu', 'cfg-dieu-khoan-thanh-toan'].map((id) => ({ id })),
          },
        ],
      },
      {
        label: 'Quy trình và tính năng',
        children: [
          { label: 'Kinh doanh', children: ['tt-co-hoi', 'tt-don-hang'].map((id) => ({ id })) },
          { label: 'Vận hành', children: ['tt-job', 'tt-pickup', 'tt-theo-doi-lo-trinh', 'tt-ma-van-don'].map((id) => ({ id })) },
          {
            label: 'Kế toán',
            children: [
              { label: 'Khách hàng', children: ['tt-kh-hoa-don', 'tt-kh-thanh-toan'].map((id) => ({ id })) },
              { label: 'Nhà cung cấp', children: ['tt-ncc-hoa-don'].map((id) => ({ id })) },
            ],
          },
          { label: 'Liên hệ', children: ['tt-lh-khach-hang', 'tt-lh-ncc', 'tt-lh-shipper'].map((id) => ({ id })) },
        ],
      },
    ],
  },
  {
    slug: 'tai-san',
    title: 'Tài sản',
    group: 'Chuỗi cung ứng',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'mua-sam-tai-san', label: 'Mua sắm tài sản' },
      { id: 'quan-ly-tai-san', label: 'Quản lý tài sản' },
    ],
  },

  // Bán hàng & Khách hàng
  {
    slug: 'crm',
    title: 'CRM',
    group: 'Bán hàng & Khách hàng',
    // Matches the current crm.html (provided directly, ahead of both the
    // handoff zip and user_guide/ — see content.ts header note). Note the
    // real source now has a separate sibling "Liên hệ – Contacts" module
    // next to this one (visible in the real sidebar) that hasn't been
    // ported — out of scope for now, this page only covers "CRM" itself.
    toc: [
      { id: 'phan-quyen-ung-dung', label: 'Phân quyền ứng dụng' },
      { id: 'cau-hinh-doi-ngu-ban-hang', label: 'Cấu hình đội ngũ bán hàng' },
      { id: 'cau-hinh-thanh-vien-bo-phan', label: 'Cấu hình thành viên bộ phận' },
      { id: 'cau-hinh-giai-doan', label: 'Cấu hình Giai đoạn bán hàng' },
      { id: 'cau-hinh-the', label: 'Cấu hình Thẻ (Tags)' },
      { id: 'kho-so-cau-hinh-ban-dau', label: 'Cấu hình ban đầu' },
      { id: 'kho-so-cau-hinh-quy-tac', label: 'Cấu hình quy tắc' },
      { id: 'kho-so-luu-y-van-hanh', label: 'Lưu ý khi vận hành' },
      { id: 'quy-tac-gan-lead', label: 'Quy tắc gán KD cho Lead' },
      { id: 'tao-lien-he', label: 'Tạo liên hệ' },
      { id: 'pos-cake-day-don-tu-dong', label: 'Kết nối Pancake và Poscake' },
      { id: 'chia-so', label: 'Chia số' },
      { id: 'cham-soc-co-hoi', label: 'Chăm sóc cơ hội' },
      { id: 'kho-so-chung', label: 'Kho số chung' },
      { id: 'cau-hinh-ban-dau', label: 'Cấu hình ban đầu' },
      { id: 'cau-hinh-quy-tac-sinh', label: 'Cấu hình quy tắc sinh cơ hội tối ưu' },
      { id: 'quy-tac-luong', label: 'Nguyên tắc vận hành luồng' },
      { id: 'chia-so-cau-hinh-ban-dau', label: 'Cấu hình ban đầu' },
      { id: 'chia-so-cau-hinh-quy-tac', label: 'Cấu hình quy tắc' },
      { id: 'chia-so-luu-y-van-hanh', label: 'Lưu ý khi vận hành' },
      { id: 'resale-cau-hinh-ban-dau', label: 'Cấu hình ban đầu' },
      { id: 'resale-cau-hinh-quy-tac', label: 'Cấu hình quy tắc' },
      { id: 'resale-luu-y-van-hanh', label: 'Lưu ý khi vận hành' },
    ],
    // Matches the real sidebar tree exactly (confirmed via screenshot):
    // 3 top-level groups, the last ("Tính năng mở rộng") holding 4
    // further sub-subgroups.
    overviewExtra: ['phan-quyen-ung-dung'],
    sidebarTree: [
      {
        label: 'Cấu hình ban đầu',
        children: [
          { id: 'cau-hinh-doi-ngu-ban-hang' },
          { id: 'cau-hinh-thanh-vien-bo-phan' }, { id: 'cau-hinh-giai-doan' }, { id: 'cau-hinh-the' },
        ],
      },
      {
        label: 'Tạo và chăm sóc cơ hội',
        children: [
          { id: 'tao-lien-he' },
          { id: 'pos-cake-day-don-tu-dong' },
          { id: 'chia-so' },
          { id: 'cham-soc-co-hoi' },
        ],
      },
      {
        label: 'Tính năng mở rộng',
        children: [
          {
            label: 'Cấu hình Kho số chung',
            children: [{ id: 'kho-so-cau-hinh-ban-dau' }, { id: 'kho-so-cau-hinh-quy-tac' }, { id: 'kho-so-luu-y-van-hanh' }],
          },
          { id: 'quy-tac-gan-lead' },
          {
            label: 'Luồng cơ hội tối ưu',
            children: [{ id: 'cau-hinh-ban-dau' }, { id: 'cau-hinh-quy-tac-sinh' }, { id: 'quy-tac-luong' }],
          },
          {
            label: 'Chia số tự động',
            children: [{ id: 'chia-so-cau-hinh-ban-dau' }, { id: 'chia-so-cau-hinh-quy-tac' }, { id: 'chia-so-luu-y-van-hanh' }],
          },
          {
            label: 'Quy tắc chia cơ hội Resale',
            children: [{ id: 'resale-cau-hinh-ban-dau' }, { id: 'resale-cau-hinh-quy-tac' }, { id: 'resale-luu-y-van-hanh' }],
          },
        ],
      },
    ],
  },
  {
    slug: 'ban-hang',
    title: 'Bán hàng',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'quan-ly-gia-san-pham', label: 'Quản lý giá sản phẩm' },
      { id: 'chiet-khau-va-khach-hang-than-thiet', label: 'Chiết khấu và Khách hàng thân thiết' },
      { id: 'gioi-han-chiet-khau', label: 'Giới hạn chiết khấu' },
      { id: 'quan-ly-khach-hang', label: 'Quản lý khách hàng' },
      { id: 'don-hang', label: 'Đơn hàng' },
      { id: 'su-dung-chuong-trinh-khuyen-mai-tren-don', label: 'Sử dụng Chương trình khuyến mãi trên đơn' },
      { id: 'xuat-kho-ban-hang', label: 'Xuất kho bán hàng' },
      { id: 'giuc-don', label: 'Giục đơn' },
      { id: 'don-giao-hang', label: 'Đơn giao hàng' },
      { id: 'yeu-cau-doi-tra-hang', label: 'Yêu cầu đổi trả hàng' },
      { id: 'hop-dong', label: 'Hợp đồng' },
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce',
    group: 'Bán hàng & Khách hàng',
    // Matches the real ecommerce.html + its embedded sidebar exactly
    // (provided directly by the user, confirmed byte-for-byte).
    toc: [
      { id: 'cau-hinh-he-thong', label: 'Cấu hình tài khoản kết nối của các sàn' },
      { id: 'trang-thai-don-hang', label: 'Trạng thái đơn hàng đồng bộ từ sàn' },
      { id: 'mapping-trang-thai', label: 'Mapping trạng thái đơn hàng' },
      { id: 'tao-moi-gian-hang', label: 'Khai báo và xác thực gian hàng TMĐT' },
      { id: 'cap-nhat-gian-hang', label: 'Cập nhật thông tin gian hàng' },
      { id: 'lay-id-shop', label: 'Hướng dẫn lấy ID Shop' },
      { id: 'import-san-pham', label: 'Import và mapping sản phẩm' },
      { id: 'mapping-san-pham-kho', label: 'Import Kho và mapping kho' },
      { id: 'cap-nhat-ton-len-san', label: 'Cập nhật tồn kho lên sàn' },
      { id: 'cap-nhat-nguong-ton-kho', label: 'Cấu hình ngưỡng đồng bộ tồn kho Odoo → Sàn TMĐT' },
      { id: 'dong-bo-don-hang', label: 'Tổng quan luồng đồng bộ' },
      { id: 'dong-bo-don-hang-import', label: 'Đồng bộ đơn hàng từ sàn về module E-com' },
      { id: 'cap-nhat-chi-tiet-don-section', label: 'Cập nhật chi tiết đơn Ecom' },
      { id: 'danh-sach-khach-hang', label: 'Đồng bộ danh sách khách hàng' },
      { id: 'tao-don-noi-bo', label: 'Tạo đơn nội bộ từ đơn Ecom' },
      { id: 'bang-ke-quyet-toan', label: 'Bảng kê quyết toán' },
      { id: 'giao-dich-phi-san', label: 'Giao dịch phí sàn' },
    ],
    sidebarTree: [
      {
        label: 'Thiết lập & cấu hình',
        children: [{ id: 'cau-hinh-he-thong' }, { id: 'trang-thai-don-hang' }, { id: 'mapping-trang-thai' }],
      },
      {
        label: 'Tính năng và quy trình',
        children: [
          {
            label: 'Khai báo và xác thực gian hàng TMĐT',
            children: [{ id: 'tao-moi-gian-hang' }, { id: 'cap-nhat-gian-hang' }, { id: 'lay-id-shop' }],
          },
          {
            label: 'Đồng bộ Sản phẩm & Kho',
            children: [
              { id: 'import-san-pham' },
              { id: 'mapping-san-pham-kho' },
              { id: 'cap-nhat-ton-len-san' },
              { id: 'cap-nhat-nguong-ton-kho' },
            ],
          },
          {
            label: 'Đồng bộ Đơn hàng & Khách hàng',
            children: [
              { id: 'dong-bo-don-hang' },
              { id: 'dong-bo-don-hang-import' },
              { id: 'cap-nhat-chi-tiet-don-section' },
              { id: 'danh-sach-khach-hang' },
              { id: 'tao-don-noi-bo' },
            ],
          },
          // Matches the real sidebar's "Dữ liệu đối soát sàn TMĐT" subgroup.
          {
            label: 'Dữ liệu đối soát sàn TMĐT',
            children: [{ id: 'bang-ke-quyet-toan' }, { id: 'giao-dich-phi-san' }],
          },
        ],
      },
    ],
  },
  {
    slug: 'booking',
    title: 'Booking',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'loai-tai-nguyen', label: 'Loại tài nguyên' },
      { id: 'tai-nguyen', label: 'Tài nguyên' },
      { id: 'booking-tai-nguyen', label: 'Booking tài nguyên' },
      { id: 'phe-duyet-booking', label: 'Phê duyệt booking' },
      { id: 'tinh-trang-muon-tra-sach', label: 'Tình trạng mượn-trả sách' },
    ],
  },
  {
    slug: 'zalo',
    title: 'Zalo',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'tai-khoan-zalo-oa', label: 'Tài khoản Zalo OA' },
      { id: 'zns', label: 'ZNS' },
      { id: 'cau-hinh', label: 'Cấu hình' },
    ],
  },
  {
    slug: 'call-center',
    title: 'Call center',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'kiem-tra-trang-web', label: 'Kiểm tra trang web' },
      { id: 'goi-dien', label: 'Gọi điện' },
    ],
  },

  // Nhân sự
  {
    slug: 'nhan-vien',
    title: 'Nhân viên',
    group: 'Nhân sự',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'tao-ho-so-va-hop-dong', label: 'Tạo & xử lý nhân sự mới' },
      { id: 'cap-nhat-hop-dong', label: 'Cập nhật hợp đồng' },
      { id: 'yeu-cau-cap-phat-tk-erp', label: 'Yêu cầu cấp phát TK ERP' },
      { id: 'de-xuat-tang-luong', label: 'Đề xuất tăng lương' },
      { id: 'thuyen-chuyen-bo-nhiem', label: 'Thuyên chuyển bổ nhiệm' },
      { id: 'lich-su-nguoi-quan-ly', label: 'Lịch sử người quản lý' },
      { id: 'trang-thai-can-luu-y', label: 'Trạng thái cần lưu ý' },
    ],
  },
  {
    slug: 'nghi-phep',
    title: 'Nghỉ phép',
    group: 'Nhân sự',
    toc: [
      { id: 'ke-hoach-tich-luy', label: 'Kế hoạch tích luỹ' },
      { id: 'phieu-xin-nghi-phep', label: 'Phiếu xin nghỉ phép' },
      { id: 'dieu-kien-de-duoc-xin-nghi-phep-nghi-co-luong', label: 'Điều kiện xin nghỉ phép' },
      { id: 'yeu-cau-cap-phat-phep', label: 'Yêu cầu cấp phát phép' },
    ],
  },
  {
    slug: 'tang-ca',
    title: 'Tăng ca',
    group: 'Nhân sự',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'ke-hoach-tang-ca', label: 'Kế hoạch tăng ca' },
      { id: 'giai-trinh-cong-tang-ca', label: 'Giải trình công tăng ca' },
      { id: 'tinh-toan-lai-tang-ca', label: 'Tính toán lại tăng ca' },
    ],
  },
  {
    slug: 'cham-cong',
    title: 'Chấm công',
    group: 'Nhân sự',
    toc: [
      { id: 'tao-lich-lam-viec', label: 'Tạo lịch làm việc' },
      { id: 'giai-trinh-cong-thuong', label: 'Giải trình công thường' },
      { id: 'cong-theo-point', label: 'Công theo point' },
      { id: 'dang-ky-lam-online', label: 'Đăng ký làm online' },
    ],
  },
  {
    slug: 'tuyen-dung',
    title: 'Tuyển dụng',
    group: 'Nhân sự',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'ke-hoach-tuyen-dung', label: 'Kế hoạch tuyển dụng' },
      { id: 'xu-ly-ho-so-ung-vien', label: 'Xử lý hồ sơ ứng viên' },
    ],
  },
  {
    slug: 'elearning',
    title: 'E-learning',
    group: 'Nhân sự',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'khoa-hoc', label: 'Khoá học' },
      { id: 'hoc-vien-tham-gia', label: 'Học viên tham gia khoá học' },
    ],
  },
  {
    slug: 'bang-luong',
    title: 'Bảng lương',
    group: 'Nhân sự',
    // Matches the real bang-luong.html h2 ids exactly — the source has no
    // standalone "Cấu hình" section (it's a module-grid hub only, same
    // pattern as cham-cong/nghi-phep), and adds two sections
    // ('thay-doi-ty-le', 'thay-doi-co-so') not yet in the older manifest.
    toc: [
      { id: 'phu-cap-hop-dong', label: 'Phụ cấp hợp đồng' },
      { id: 'kieu-dong-gop', label: 'Kiểu đóng góp từ lương' },
      { id: 'dang-ky-dong-gop', label: 'Đăng ký đóng góp' },
      { id: 'thay-doi-ty-le', label: 'Thay đổi tỷ lệ đóng góp' },
      { id: 'thay-doi-co-so', label: 'Thay đổi cơ sở tính toán' },
      { id: 'kiem-tra-phieu-luong', label: 'Kiểm tra phiếu lương' },
    ],
  },

  // Vận hành
  {
    slug: 'tai-lieu',
    title: 'Tài liệu',
    group: 'Vận hành',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'tai-len-tai-lieu-va-cong-van', label: 'Tải lên tài liệu và công văn' },
    ],
  },
  {
    slug: 'phe-duyet',
    title: 'Phê duyệt',
    group: 'Vận hành',
    toc: [
      { id: 'tao-luong-duyet', label: 'Tạo luồng duyệt' },
      { id: 'xem-cac-phieu-cho-toi-duyet', label: 'Xem các phiếu chờ tôi duyệt' },
    ],
  },
  {
    slug: 'misa',
    title: 'MISA',
    group: 'Vận hành',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'danh-muc-misa', label: 'Danh mục misa' },
      { id: 'danh-muc-he-thong', label: 'Danh mục hệ thống' },
      { id: 'tao-chung-tu-ban-hang', label: 'Tạo chứng từ bán hàng' },
      { id: 'tao-phieu-xuat-kho', label: 'Tạo phiếu xuất kho' },
      { id: 'tao-phieu-nhap-kho', label: 'Tạo phiếu nhập kho' },
      { id: 'tao-phieu-chuyen-kho-noi-bo', label: 'Tạo phiếu chuyển kho nội bộ' },
      { id: 'huy-tren-misa-dong-bo-lai', label: 'Huỷ trên MISA & Đồng bộ lại' },
    ],
  },
  {
    slug: 'du-an',
    title: 'Dự án',
    group: 'Vận hành',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'tao-du-an', label: 'Tạo dự án' },
      { id: 'tao-nhiem-vu', label: 'Tạo nhiệm vụ' },
      { id: 'dashboard', label: 'Dashboard' },
    ],
  },
]

// Category order as it appears in the source sidebar/homepage.
export const GROUP_ORDER = ['Tài khoản & Bảo mật', 'Nhân sự', 'Kế toán', 'Chuỗi cung ứng', 'Bán hàng & Khách hàng', 'Vận hành']

export const getPagesByGroup = (group: string): DocPage[] => {
  return docPages.filter((page) => page.group === group)
}

export const getGroups = (): string[] => {
  return GROUP_ORDER.filter((g) => docPages.some((page) => page.group === g))
}

export const getPageBySlug = (slug: string): DocPage | undefined => {
  return docPages.find((page) => page.slug === slug)
}

// Slugs that have real ported article content (see src/content/<slug>.html).
// Everything else falls back to a placeholder in DocPage.
export const IMPLEMENTED_SLUGS = new Set(['crm', 'logistics', 'ecommerce', 'hoa-don', 'bat-xac-thuc-2-lop', 'kho-hang', 'mua-hang'])

// Deploy-time visibility gate: only these modules appear on the homepage
// and sidebar, and are reachable at all (other slugs 404 via DocPage) —
// used to publish a subset of modules (e.g. just Ecommerce) while the
// rest are still in progress. Set to `null` to show everything again.
export const PUBLIC_SLUGS: Set<string> | null = new Set(['ecommerce', 'hoa-don', 'logistics', 'bat-xac-thuc-2-lop', 'kho-hang', 'crm', 'mua-hang', 'nhan-vien', 'nghi-phep', 'tang-ca', 'cham-cong', 'tuyen-dung', 'elearning', 'bang-luong'])

export const isPublicPage = (page: DocPage): boolean => !PUBLIC_SLUGS || PUBLIC_SLUGS.has(page.slug)

export const getPublicGroups = (): string[] => {
  return getGroups().filter((g) => getPagesByGroup(g).some(isPublicPage))
}

export const getPublicPagesByGroup = (group: string): DocPage[] => {
  return getPagesByGroup(group).filter(isPublicPage)
}

// A resolved sidebar node ready to render: a leaf (id === null for the
// bare overview link) or a group of more resolved nodes (recursive, so
// groups can nest inside groups).
export type RenderedSidebarNode =
  | { kind: 'leaf'; id: string | null; label: string }
  | { kind: 'group'; label: string; children: RenderedSidebarNode[] }

const resolveSidebarNode = (node: SidebarNode, byId: Map<string, string>): RenderedSidebarNode =>
  isSidebarGroup(node)
    ? { kind: 'group', label: node.label, children: node.children.map((c) => resolveSidebarNode(c, byId)) }
    : { kind: 'leaf', id: node.id, label: byId.get(node.id) ?? node.id }

// Builds the sidebar's nested tree for a module: always a "Giới thiệu hệ
// thống" group with the overview link, then either the page's explicit
// sidebarTree (which may itself contain nested sub-subgroups) or a single
// fallback group holding all toc items flat.
export const getSidebarTree = (page: DocPage): RenderedSidebarNode[] => {
  const byId = new Map(page.toc.map((t) => [t.id, t.label]))
  const overview: RenderedSidebarNode = {
    kind: 'group',
    label: 'Giới thiệu hệ thống',
    children: [
      { kind: 'leaf', id: null, label: `Tổng quan ứng dụng ${page.title}` },
      ...(page.overviewExtra ?? []).map((id) => ({ kind: 'leaf' as const, id, label: byId.get(id) ?? id })),
    ],
  }
  // Nhân sự modules skip the "Giới thiệu hệ thống" group — their overview
  // content lives directly in the page's lede, so the sidebar goes
  // straight to the feature list.
  const isNhanSu = page.group === 'Nhân sự'
  const prefix = isNhanSu ? [] : [overview]
  if (page.sidebarTree?.length) {
    return [...prefix, ...page.sidebarTree.map((n) => resolveSidebarNode(n, byId))]
  }
  const featureLeaves: RenderedSidebarNode[] = page.toc.map((t) => ({ kind: 'leaf' as const, id: t.id, label: t.label }))
  // Nhân sự modules also skip the "Các tính năng & quy trình" wrapper —
  // its feature ids are listed as plain top-level links instead.
  if (isNhanSu) {
    return [...prefix, ...featureLeaves]
  }
  return [
    ...prefix,
    {
      kind: 'group',
      label: 'Các tính năng & quy trình',
      children: featureLeaves,
    },
  ]
}
