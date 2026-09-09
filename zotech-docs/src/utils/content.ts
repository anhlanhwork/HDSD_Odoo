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
  // Ported from the Claude Design project's lien-he.html — the "Liên hệ –
  // Contacts" module the crm.html porting note flagged as a separate
  // sibling of CRM in the real sidebar, not yet ported at the time. The
  // design source models it the same way as affiliate's 'tong-quan-*'
  // pattern: two <section class="yc-doc"> blocks (overview + permissions),
  // both wrapped rather than left bare. 'tong-quan-ung-dung' is left out of
  // toc/overviewExtra (same trade-off as affiliate's 'tong-quan-affiliate')
  // — it still renders, just as part of the overview panel, and
  // overviewExtra's synthetic "Tổng quan ứng dụng {title}" link already
  // covers it. The get_file fetch hit its 256KiB cap partway through the
  // last sentence of the permissions section's closing callout; that
  // sentence is a verbatim repeat of the section's own opening lede
  // (confirmed by the matching prefix up to the cut point) and was
  // completed on that basis rather than guessed. The design source's
  // "Luồng 1&4 / Luồng 2&3" process breakdown used a JS tab widget
  // (onclick="switchTab(...)") that has no runtime support in this app (no
  // switchTab() function, no tab-handling hook) — ported as two
  // always-visible table blocks with a heading each instead of an
  // interactive tab pair. The design source's own accordion wrapper div in
  // the FAQ was missing its closing </div> (relies on browsers'
  // implicit-close recovery); fixed when porting since dangerouslySetInnerHTML
  // gets the same browser HTML-parser leniency but there's no reason to
  // carry the typo forward. No screenshots — the module is all diagrams/
  // cards, so no "ảnh minh họa" badge.
  {
    slug: 'lien-he',
    title: 'Liên hệ',
    group: 'Bán hàng & Khách hàng',
    toc: [{ id: 'phan-quyen-lien-he', label: 'Phân quyền ứng dụng' }],
    overviewExtra: ['phan-quyen-lien-he'],
    sidebarTree: [],
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
  {
    slug: 'tam-ung-nhan-vien',
    title: 'Tạm ứng nhân viên',
    group: 'Bán hàng & Khách hàng',
    // Ported incrementally, same pattern as affiliate: the design source
    // models this module as an overview file ('muc-dich', 'so-do-quy-trinh',
    // 'phan-he-tinh-nang', 'gia-tri-mang-lai', 'danh-muc-chuc-nang' — all bare
    // h2s, not routable) plus 7 separate per-menu files (per CLAUDE.md:
    // tunv-tam-ung, tunv-ke-toan, tunv-bao-cao, tunv-phan-loai-tam-ung,
    // tunv-phan-loai-thanh-toan, tunv-ly-do-tu-choi, tunv-danh-muc-chung-tu).
    // Each gets merged here as its own <section class="yc-doc"> feature panel
    // (h1 -> h2, its own breadcrumb/article-meta dropped) rather than a
    // separate docPages entry, matching how crm/affiliate absorb their
    // multi-file design sources into one module page. 'phan-loai-tam-ung',
    // 'phan-loai-thanh-toan', 'tunv-ly-do-tu-choi' and 'danh-muc-chung-tu'
    // are ported so far; the overview's module-grid cards and callout for
    // them now link to '#phan-loai-tam-ung' / '#phan-loai-thanh-toan' /
    // '#tunv-ly-do-tu-choi' / '#danh-muc-chung-tu' (same-page anchors,
    // rewritten by useInternalLinks) — the remaining module-grid card
    // (tunv-bao-cao) keeps the design source's raw *.html href (same as
    // crm.html's still-unrouted "ban-hang.html" link) until it's ported too.
    // 'tam-ung' (the design source's tunv-tam-ung.html) is now ported the
    // same way: merged in as its own <section class="yc-doc"> (h1 -> h2,
    // article-meta dropped), its module-grid card rewritten to '#tam-ung',
    // and its own cross-link to Phân loại tạm ứng rewritten to
    // '#phan-loai-tam-ung'. Its link to the not-yet-ported "Chi phí" module
    // (chi-phi.html, employee bank accounts) is left as a raw href, same
    // pattern as chi-phi.html itself being out of scope for now. 3 of its
    // 14 screenshots (tunv-dt-p3-boloc, tunv-dt-p4-motphan,
    // tunv-dt-p4-tab-datt) hit the design-sync image fetch's 256KiB cap (no
    // PNG IEND chunk) and are text-only until re-supplied.
    // 'tunv-ke-toan' (design source's tunv-ke-toan.html, h1 id="ke-toan"
    // renamed to avoid clashing with the "Kế toán" group's other module
    // slugs) is ported the same way; its own first screenshot
    // (tunv-kt-ds-01) hit the same 256KiB cap and is text-only until
    // re-supplied.
    toc: [
      { id: 'phan-loai-tam-ung', label: 'Phân loại tạm ứng' },
      { id: 'phan-loai-thanh-toan', label: 'Phân loại thanh toán' },
      { id: 'tunv-ly-do-tu-choi', label: 'Lý do từ chối tạm ứng' },
      { id: 'danh-muc-chung-tu', label: 'Danh mục chứng từ' },
      { id: 'tam-ung', label: 'Tạm ứng' },
      { id: 'tunv-ke-toan', label: 'Kế toán' },
    ],
    sidebarTree: [
      {
        label: 'Cấu hình ban đầu',
        children: [
          { id: 'phan-loai-tam-ung' },
          { id: 'phan-loai-thanh-toan' },
          { id: 'tunv-ly-do-tu-choi' },
          { id: 'danh-muc-chung-tu' },
        ],
      },
      {
        label: 'Quy trình & tính năng',
        children: [{ id: 'tam-ung' }, { id: 'tunv-ke-toan' }],
      },
    ],
  },
  {
    slug: 'affiliate',
    title: 'Affiliate',
    group: 'Bán hàng & Khách hàng',
    // Ported incrementally from the Claude Design project's affiliate.html,
    // split into per-section files (e.g. affiliate-tong-quan-affiliate.html,
    // one per real sidebar leaf below) to work around the design-sync
    // fetch's 256 KiB cap. Each split file's own embedded sidebar copy
    // reveals the module's full real IA (confirmed straight from the
    // source, not guessed):
    //   Giới thiệu hệ thống: tong-quan-affiliate, phan-quyen-affiliate,
    //     quy-trinh-van-hanh-aff
    //   Cấu hình ban đầu: cai-dat-affiliate, app-affiliate,
    //     chinh-sach-hoa-hong, phan-loai-nha-sang-tao, nen-tang,
    //     loai-booking, giai-doan-booking, link-bieu-mau, kpi-affiliate
    //   Quy trình & tính năng: tong-quan-aff, chuong-trinh-cong-tac, shop,
    //     + subgroup "Booking": bk-nha-sang-tao, bk-ho-so-creator,
    //       bk-cau-hinh-nhan-su, bk-chien-dich, bk-deal, bk-do-luong-video
    //     + subgroup "Đơn hàng Affiliate": dh-don-lien-ket,
    //       dh-doanh-so-booking
    // The entire "Giới thiệu hệ thống" group (tong-quan-affiliate,
    // phan-quyen-affiliate, quy-trinh-van-hanh-aff), 8 of the 9 items of
    // "Cấu hình ban đầu" (cai-dat-affiliate, app-affiliate,
    // chinh-sach-hoa-hong, nen-tang, loai-booking, giai-doan-booking,
    // link-bieu-mau, kpi-affiliate), 2 of the "Quy trình & tính năng" items
    // (chuong-trinh-cong-tac, shop), its entire "Booking" subgroup
    // (bk-nha-sang-tao, bk-ho-so-creator, bk-deal, bk-cau-hinh-nhan-su,
    // bk-chien-dich, bk-do-luong-video), and its entire "Đơn hàng Affiliate"
    // subgroup (dh-don-lien-ket, dh-doanh-so-booking) are now ported with
    // real content — each
    // wrapped in <section class="yc-doc"> (not left bare like CRM's
    // 'muc-dich') because that's how the source models it: fully routed
    // sidebar leaves with the "feature page" treatment (big accent h2,
    // uppercase accent h3 dividers, gradient table header), not a flat
    // module intro. toc/sidebarTree below only list what's actually
    // implemented; only 'phan-loai-nha-sang-tao' (the sole remaining "Cấu
    // hình ban đầu" item) and 'tong-quan-aff' (real position before
    // chuong-trinh-cong-tac in "Quy trình & tính năng" — a different id
    // from 'tong-quan-affiliate' below) are left out until ported so
    // clicking a sidebar item never lands on a blank panel — every other
    // real IA leaf is now live.
    // 'tong-quan-affiliate' is intentionally NOT in toc/overviewExtra even
    // though its content (id="tong-quan-affiliate" in affiliate.html) is
    // ported: listing it would duplicate the synthetic bare "Tổng quan ứng
    // dụng Affiliate" link that getSidebarTree() already prepends to
    // "Giới thiệu hệ thống" (user-reported as "thừa menu tổng quan ứng
    // dụng"). Leaving it out of toc means useFeaturePanels treats it as
    // ordinary overview content (same trade-off as CRM's 'muc-dich') — it
    // still renders, just always as part of the overview panel rather than
    // its own routed sidebar leaf.
    // Note: 'bk-chien-dich' references one image (aff-cdbk-04.png, "Tab
    // Booking deals"), 'dh-don-lien-ket' references two more
    // (aff-donlienket-step1-access.png, aff-donlienket-form-tab-affiliate.png)
    // and 'dh-doanh-so-booking' references one more
    // (aff-doanhso-step1-access.png) that the design-sync image fetch
    // truncated past its cap (no PNG IEND chunk) — those steps are
    // text-only until the images can be re-supplied.
    // 'bk-nha-sang-tao' was re-synced against the current design source
    // (affiliate-bk-nha-sang-tao.html): the "Lấy link biểu mẫu" walkthrough
    // was missing its final 3 steps (duyệt hồ sơ biểu mẫu + kết quả áp dụng),
    // now added. aff-nst-form-04.png is embedded; aff-nst-form-05.png hit the
    // design-sync image fetch's 256KiB cap (no PNG IEND chunk) and is
    // text-only until re-supplied.
    // All screenshots for 'bk-nha-sang-tao' and 'bk-deal' are now embedded,
    // including the 7 that the design-sync image fetch originally
    // truncated past its 256KiB cap (no PNG IEND chunk) — the user supplied
    // those directly as local files (aff-nst-04.png, aff-nst-form-03.png,
    // aff-deal-step4-popup-benA/benB/noidung/giatri/chiadot.png,
    // aff-deal-step5-danhdau-air.png).
    toc: [
      { id: 'phan-quyen-affiliate', label: 'Phân quyền ứng dụng' },
      { id: 'quy-trinh-van-hanh-aff', label: 'Quy trình vận hành' },
      { id: 'cai-dat-affiliate', label: 'Cài đặt Affiliate' },
      { id: 'app-affiliate', label: 'App Affiliate' },
      { id: 'chinh-sach-hoa-hong', label: 'Chính sách hoa hồng' },
      { id: 'nen-tang', label: 'Nền tảng' },
      { id: 'loai-booking', label: 'Loại booking' },
      { id: 'giai-doan-booking', label: 'Giai đoạn booking' },
      { id: 'link-bieu-mau', label: 'Link biểu mẫu' },
      { id: 'kpi-affiliate', label: 'KPI Affiliate' },
      { id: 'chuong-trinh-cong-tac', label: 'Chương trình cộng tác' },
      { id: 'shop', label: 'Shop' },
      { id: 'bk-nha-sang-tao', label: 'Nhà sáng tạo' },
      { id: 'bk-ho-so-creator', label: 'Hồ sơ Creator' },
      { id: 'bk-deal', label: 'Deal Booking' },
      { id: 'bk-cau-hinh-nhan-su', label: 'Cấu hình nhân sự booking' },
      { id: 'bk-chien-dich', label: 'Chiến dịch booking' },
      { id: 'bk-do-luong-video', label: 'Đo lường chỉ số Videos' },
      { id: 'dh-don-lien-ket', label: 'Đơn hàng liên kết' },
      { id: 'dh-doanh-so-booking', label: 'Doanh số booking' },
    ],
    overviewExtra: ['phan-quyen-affiliate', 'quy-trinh-van-hanh-aff'],
    // An explicit tree (rather than omitting sidebarTree) opts out of the
    // "Các tính năng & quy trình" fallback group, which would otherwise
    // list every toc id a second time flat. Fill in the rest of "Cấu hình
    // ban đầu" and "Quy trình & tính năng" (with its Booking / Đơn hàng
    // Affiliate subgroups) as their sections get ported — see the real IA
    // note above.
    sidebarTree: [
      {
        label: 'Cấu hình ban đầu',
        children: [
          { id: 'cai-dat-affiliate' },
          { id: 'app-affiliate' },
          { id: 'chinh-sach-hoa-hong' },
          { id: 'nen-tang' },
          { id: 'loai-booking' },
          { id: 'giai-doan-booking' },
          { id: 'link-bieu-mau' },
          { id: 'kpi-affiliate' },
        ],
      },
      {
        label: 'Quy trình & tính năng',
        children: [
          { id: 'chuong-trinh-cong-tac' },
          { id: 'shop' },
          {
            label: 'Booking',
            children: [
              { id: 'bk-nha-sang-tao' },
              { id: 'bk-ho-so-creator' },
              { id: 'bk-deal' },
              { id: 'bk-cau-hinh-nhan-su' },
              { id: 'bk-chien-dich' },
              { id: 'bk-do-luong-video' },
            ],
          },
          {
            label: 'Đơn hàng Affiliate',
            children: [{ id: 'dh-don-lien-ket' }, { id: 'dh-doanh-so-booking' }],
          },
        ],
      },
    ],
  },
  {
    slug: 'quan-ly-quang-cao',
    title: 'Quản lý quảng cáo',
    group: 'Bán hàng & Khách hàng',
    // Overview-only hub (design source quan-ly-quang-cao.html) whose
    // "Danh mục chức năng" grid links to 8 per-menu design files — same
    // incremental-porting trade-off as affiliate/tam-ung-nhan-vien.
    // 'tk-ket-noi', 'tk-quang-cao', 'danh-sach-trang', 'ch-danh-muc-chi-phi',
    // 'ch-thong-tin-ket-noi', 'ch-nguon', 'ch-mapping-nguon-khach-hang',
    // 'ch-mapping-nhom-san-pham' and 'chien-dich' (design sources'
    // qlqc-tk-ket-noi.html, qlqc-tk-quang-cao.html,
    // qlqc-danh-sach-trang.html, qlqc-ch-danh-muc-chi-phi.html,
    // qlqc-ch-thong-tin-ket-noi.html, qlqc-ch-nguon.html,
    // qlqc-ch-mapping-nguon-khach-hang.html,
    // qlqc-ch-mapping-nhom-san-pham.html, qlqc-chien-dich.html) are now
    // ported: each merged in as its own <section class="yc-doc"> (h1 -> h2,
    // breadcrumb/article-meta dropped), module-grid cards rewritten to
    // '#tk-ket-noi' / '#tk-quang-cao' / '#danh-sach-trang' / '#chien-dich'
    // (the "Cấu hình" card stays a raw href to qlqc-cau-hinh.html since
    // that hub page itself isn't ported — the 5 'ch-*' ids above are
    // children of it, reachable from the sidebar and their own breadcrumbs
    // still link to "qlqc-cau-hinh.html" in the design source, left
    // as-is). Cross-links back to 'tk-ket-noi' (from tk-quang-cao,
    // danh-sach-trang and ch-thong-tin-ket-noi) and to 'tk-quang-cao' (from
    // chien-dich) are rewritten to same-page anchors; links to
    // "cp-tai-khoan.html" (Chi phí module) are left as raw hrefs (see the
    // 'hoa-don' and 'chi-tieu' porting notes below for those two screens,
    // now also ported). Several screenshots hit the design-sync image
    // fetch's 256KiB cap (no PNG IEND chunk) on the first attempt and were
    // initially left text-only (their <figure>s dropped rather than left
    // pointing at a missing file); full versions were later supplied
    // directly by the user into public/images/ and wired back in with
    // their <figure>s restored — every previously-missing screenshot is
    // now present: all 5 of chien-dich's (qlqc-cd-danhsach, qlqc-cd-noibo,
    // qlqc-cd-mapping, qlqc-cd-mapping-dialog, qlqc-cd-budget), both of
    // tk-quang-cao's (qlqc-tkqc-taonhanh-tacvu was the last gap), both of
    // ch-danh-muc-chi-phi's (qlqc-ch-cp-truycap, qlqc-ch-cp-form),
    // ch-thong-tin-ket-noi's qlqc-ch-ttkn-truycap, both of ch-nguon's
    // (qlqc-ch-nguon-truycap, qlqc-ch-nguon-form), and both of
    // ch-mapping-nguon-khach-hang's (qlqc-ch-mapnkh-truycap,
    // qlqc-ch-mapnkh-quytac). ch-mapping-nhom-san-pham's screenshots all
    // fetched under the cap on the first try and were always fully
    // embedded.
    // 'muc-dich'/'so-do-quy-trinh'/'gia-tri-mang-lai'/'danh-muc-chuc-nang'
    // are all bare overview h2s, excluded from toc same as CRM's
    // 'muc-dich'. Sidebar nesting matches the real design source exactly
    // (confirmed via qlqc-tk-ket-noi.html's and qlqc-chien-dich.html's own
    // embedded sidebar copies): "Cấu hình ban đầu" > "Tài khoản" >
    // [tk-ket-noi, tk-quang-cao], with 'danh-sach-trang' as a direct
    // sibling leaf of "Tài khoản", and a "Cấu hình" subgroup (also a
    // sibling of "Tài khoản") holding 'ch-danh-muc-chi-phi' plus a nested
    // "Thiết lập chung" subgroup now fully populated: 'ch-thong-tin-ket-noi',
    // 'ch-nguon', 'ch-mapping-nguon-khach-hang' and
    // 'ch-mapping-nhom-san-pham' — no unported siblings remain in that
    // subgroup. 'chien-dich' sits in a separate top-level "Quy trình và
    // tính năng" group (sibling of "Giới thiệu hệ thống" and "Cấu hình ban
    // đầu").
    // 'hoa-don' (design source qlqc-hoa-don.html) is now ported too: merged
    // in as its own <section class="yc-doc"> (h1 -> h2, breadcrumb/
    // article-meta dropped), the module-grid card and its two cross-links
    // from tk-ket-noi (the "Lấy hoá đơn" button description) rewritten to
    // '#hoa-don', and its own cross-links back to tk-ket-noi rewritten to
    // '#tk-ket-noi'. It joins 'chien-dich' as a sibling leaf in the
    // "Quy trình và tính năng" group. Its single screenshot
    // (qlqc-hd-danhsach) fetched under the 256KiB cap and is fully
    // embedded.
    // 'chi-tieu' (design source qlqc-chi-tieu.html) is now ported too,
    // making all 9 per-menu design files (plus the still-unported
    // qlqc-cau-hinh.html hub) merged in: same treatment (h1 -> h2,
    // breadcrumb/article-meta dropped), the module-grid card and its two
    // cross-links from tk-ket-noi/tk-quang-cao (the "Lấy hoá đơn" and "Lấy
    // chi tiêu" button descriptions) rewritten to '#chi-tieu', and its own
    // cross-links to tk-quang-cao/chien-dich/ch-nguon/ch-mapping-nguon-
    // khach-hang rewritten to same-page anchors. It joins 'chien-dich' and
    // 'hoa-don' as a sibling leaf in "Quy trình và tính năng". All 5 of its
    // screenshots (qlqc-ct-danhsach, qlqc-ct-chitiet, qlqc-ct-noibo-trong,
    // qlqc-ct-tacvu-dongbo, qlqc-ct-ketqua) initially hit the design-sync
    // image fetch's 256KiB cap (no PNG IEND chunk, deterministic on retry);
    // the user then supplied all 5 files directly and they're now fully
    // embedded. The only module-grid card left with a raw design-source
    // href is now qlqc-cau-hinh.html.
    toc: [
      { id: 'tk-ket-noi', label: 'Tài khoản kết nối' },
      { id: 'tk-quang-cao', label: 'Tài khoản quảng cáo' },
      { id: 'danh-sach-trang', label: 'Danh sách trang' },
      { id: 'ch-danh-muc-chi-phi', label: 'Danh mục chi phí' },
      { id: 'ch-thong-tin-ket-noi', label: 'Thông tin kết nối' },
      { id: 'ch-nguon', label: 'Nguồn' },
      { id: 'ch-mapping-nguon-khach-hang', label: 'Mapping nguồn khách hàng' },
      { id: 'ch-mapping-nhom-san-pham', label: 'Mapping nhóm sản phẩm' },
      { id: 'chien-dich', label: 'Chiến dịch' },
      { id: 'hoa-don', label: 'Hoá đơn' },
      { id: 'chi-tieu', label: 'Chi tiêu' },
    ],
    sidebarTree: [
      {
        label: 'Cấu hình ban đầu',
        children: [
          { label: 'Tài khoản', children: [{ id: 'tk-ket-noi' }, { id: 'tk-quang-cao' }] },
          { id: 'danh-sach-trang' },
          {
            label: 'Cấu hình',
            children: [
              { id: 'ch-danh-muc-chi-phi' },
              {
                label: 'Thiết lập chung',
                children: [
                  { id: 'ch-thong-tin-ket-noi' },
                  { id: 'ch-nguon' },
                  { id: 'ch-mapping-nguon-khach-hang' },
                  { id: 'ch-mapping-nhom-san-pham' },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Quy trình và tính năng',
        children: [{ id: 'chien-dich' }, { id: 'hoa-don' }, { id: 'chi-tieu' }],
      },
    ],
  },
  {
    slug: 'chi-phi',
    title: 'Chi phí',
    group: 'Bán hàng & Khách hàng',
    // Overview hub ported from the design source's chi-phi.html — same
    // incremental-porting trade-off as quan-ly-quang-cao/affiliate/
    // tam-ung-nhan-vien: the "Danh mục chức năng" module-grid links to 20
    // per-menu design files (cp-tai-khoan, cp-tk-ngan-hang,
    // cp-cfg-danh-muc-chi-phi, cp-cfg-thoi-gian, cp-cfg-loai-tkqc,
    // cp-cfg-ngan-hang, cp-cfg-so-nhat-ky, cp-cpct-chi-tieu,
    // cp-cpct-chi-phi-cua-toi, cp-cpct-ke-khai-cua-toi, cp-ke-khai-chi-phi,
    // cp-kt-hoa-don-cpqc, cp-kt-hoa-don, cp-kt-thanh-toan, cp-dsa-dashboard,
    // cp-dsa-phien-doi-soat, cp-dsa-phien-sao-ke, cp-dsa-chi-tiet-sao-ke,
    // cp-dsa-cfg-phan-loai-sao-ke, cp-bao-cao per the design source's own
    // embedded search-index manifest and sidebar tree). 'cp-tai-khoan' is
    // the first one ported in (h1 -> h2, breadcrumb/article-meta dropped,
    // module-grid card rewritten to '#cp-tai-khoan'); its own cross-link to
    // "Tài khoản ngân hàng" (cp-tk-ngan-hang.html) is left as a raw href,
    // same as the rest. All 4 screenshots are now embedded: cp-tkqc-04
    // fetched under the design-sync image fetch's 256KiB cap on the first
    // try; cp-tkqc-01/02/03 hit that cap (no PNG IEND chunk, deterministic
    // on retry) — their <figure>s were briefly dropped (having been left
    // pointing at a missing file first, which caused broken-image icons on
    // the live page) and are now restored with the user's directly
    // supplied local files. 'cp-tk-ngan-hang' (design source cp-tk-ngan-hang.html,
    // h1 id="tk-ngan-hang") is now ported too: merged in the same way (h1 ->
    // h2, breadcrumb/article-meta dropped), module-grid card and
    // cp-tai-khoan's cross-link both rewritten to '#tk-ngan-hang'. All 9
    // screenshots (cp-tknh-01 through 09) are now embedded: 06 and 09
    // fetched under the design-sync image fetch's 256KiB cap on the first
    // try, and the remaining 7 (01-05, 07, 08) — which had hit that cap
    // (no PNG IEND chunk) — were later supplied directly by the user as
    // local files.
    // 'muc-dich',
    // 'so-do-quy-trinh', 'gia-tri-mang-lai' and 'danh-muc-chuc-nang' are all
    // bare overview h2s, excluded from toc same as CRM's 'muc-dich'.
    // 'cfg-danh-muc' (design source cp-cfg-danh-muc-chi-phi.html) is now
    // ported too: merged in the same way (h1 -> h2, breadcrumb/article-meta
    // dropped), the "Cấu hình" module-grid card and the intro callout's
    // cross-link both rewritten to '#cfg-danh-muc'. All 3 screenshots are
    // now embedded: cp-cfg-dm-truycap.png and cp-cfg-dm-luu.png fetched
    // under the design-sync image fetch's 256KiB cap; cp-cfg-dm-form.png
    // hit that cap (no PNG IEND chunk) and was later supplied directly by
    // the user as a local file.
    // 'cfg-loai-tkqc' (design source cp-cfg-loai-tkqc.html) is now ported
    // too: appended as its own <section class="yc-doc"> (h1 -> h2,
    // breadcrumb/article-meta dropped) after 'tk-ngan-hang', since its
    // natural parent (the "Cấu hình" hub, cp-cfg-danh-muc-chi-phi.html) only
    // exposes it via the design source's own sidebar, not via a chi-phi.html
    // module-grid card — reached here only through toc/sidebar. Its
    // cross-link to "Tài khoản quảng cáo" (qlqc-tk-quang-cao.html, part of
    // the separate quan-ly-quang-cao module) is left as a raw href, same
    // pattern as other cross-module links. All 3 screenshots are now
    // embedded: cp-cfg-tkqc-dong-moi.png and cp-cfg-tkqc-luu.png fetched
    // under the design-sync image fetch's 256KiB cap; cp-cfg-tkqc-truycap.png
    // hit that cap (no PNG IEND chunk) and was later supplied directly by
    // the user as a local file.
    // 'cfg-thoi-gian' (design source cp-cfg-thoi-gian.html) is now ported
    // too: appended the same way (h1 -> h2, breadcrumb/article-meta
    // dropped) as its own <section class="yc-doc">, reached only via
    // toc/sidebar same as 'cfg-loai-tkqc'. All 3 screenshots are now
    // embedded: cp-cfg-tg-luu.png fetched under the design-sync image
    // fetch's 256KiB cap; cp-cfg-tg-truycap.png and cp-cfg-tg-form.png both
    // hit that cap (no PNG IEND chunk) and were later supplied directly by
    // the user as local files.
    // 'dsa-phan-loai-sao-ke' (design source cp-dsa-cfg-phan-loai-sao-ke.html)
    // is now ported too: merged in the same way (h1 -> h2, breadcrumb/
    // article-meta dropped), the "Phân loại chi tiết sao kê" module-grid
    // card rewritten to '#dsa-phan-loai-sao-ke'. This one belongs to a
    // separate top-level "Đối soát ads" sidebar group (sibling of "Cấu hình
    // ban đầu", confirmed via this file's own embedded sidebar copy), which
    // itself has a nested "Cấu hình" subgroup holding this single leaf.
    // "Đối soát ads" also has 3 more direct leaves (Dashboard, Phiên đối
    // soát, Phiên sao kê — cp-dsa-dashboard, cp-dsa-phien-doi-soat,
    // cp-dsa-phien-sao-ke) that stay unrouted until ported. All 3 of its
    // screenshots (cp-dsa-pl-01/02/03) fetched under the design-sync image
    // fetch's 256KiB cap and are fully embedded.
    // 'dsa-chi-tiet-sao-ke' (design source cp-dsa-chi-tiet-sao-ke.html) is
    // now ported too: merged in the same way (h1 -> h2, breadcrumb/
    // article-meta dropped), the "Chi tiết sao kê" module-grid card
    // rewritten to '#dsa-chi-tiet-sao-ke'. Placed as a direct leaf of
    // "Đối soát ads" (sibling of the "Cấu hình" subgroup), matching the
    // design source's own embedded sidebar. Both of its screenshots
    // (cp-dsa-ctsk-01/02) hit the design-sync image fetch's 256KiB cap (no
    // PNG IEND chunk) and are text-only until re-supplied.
    // sidebarTree matches the real design source's nesting (confirmed via
    // cp-cfg-danh-muc-chi-phi.html's own embedded sidebar copy): a
    // "Cấu hình ban đầu" top group holding cp-tai-khoan and tk-ngan-hang as
    // direct leaves plus a "Cấu hình" subgroup. That subgroup has 5 real
    // leaves (Danh mục chi phí, Thời gian, Loại tài khoản quảng cáo, Ngân
    // hàng, Sổ nhật ký) — 'cfg-danh-muc', 'cfg-thoi-gian', 'cfg-loai-tkqc'
    // and 'cfg-ngan-hang' are ported so far (listed here in the real
    // sidebar's order); the remaining leaf (Sổ nhật ký) stays unrouted
    // until ported (same incremental trade-off as elsewhere).
    // 'cfg-ngan-hang' (design source cp-cfg-ngan-hang.html) is ported the
    // same way: appended as its own <section class="yc-doc"> (h1 -> h2,
    // article-meta dropped) right after 'cfg-loai-tkqc'. All 3
    // screenshots are now embedded: cp-cfg-nh-form.png and cp-cfg-nh-luu.png
    // fetched under the design-sync image fetch's 256KiB cap;
    // cp-cfg-nh-truycap.png hit that cap (no PNG IEND chunk) and was later
    // supplied directly by the user as a local file.
    // 'cpct-chi-phi-cua-toi' (design source cp-cpct-chi-phi-cua-toi.html) is
    // now ported too: appended as its own <section class="yc-doc"> at the
    // end of the file (h1 -> h2, article-meta dropped), and the overview's
    // "Chi phí của tôi" module-grid card rewritten to '#cpct-chi-phi-cua-toi'.
    // Its own cross-links to "Chi tiêu" (cp-cpct-chi-tieu) and "Kê khai của
    // tôi" (cp-cpct-ke-khai-cua-toi) — later ported too, see below — are
    // rewritten to same-page anchors. Per the design source's own embedded
    // sidebar, this leaf sits inside a "Chi phí của tôi" subgroup (siblings:
    // Chi tiêu, Kê khai của tôi) under a top-level "Quy trình và tính năng"
    // group, itself a sibling of "Cấu hình ban đầu" and "Đối soát ads". All
    // 3 screenshots are now embedded: cp-cpct-cpct-01.png and
    // cp-cpct-cpct-03.png fetched under the design-sync image fetch's
    // 256KiB cap; cp-cpct-cpct-02.png hit that cap (no PNG IEND chunk) and
    // was later supplied directly by the user as a local file.
    // 'cpct-chi-tieu' and 'cpct-ke-khai-cua-toi' (design sources
    // cp-cpct-chi-tieu.html and cp-cpct-ke-khai-cua-toi.html) are now ported
    // too, filling out the "Chi phí của tôi" subgroup (real sidebar order,
    // confirmed via cp-cpct-ke-khai-cua-toi.html's own embedded sidebar
    // copy: Chi tiêu, Chi phí của tôi, Kê khai của tôi). 'cpct-chi-tieu' is
    // inserted as its own <section> right before 'cpct-chi-phi-cua-toi';
    // 'cpct-ke-khai-cua-toi' is appended after it at the end of the file.
    // Same treatment as the rest (h1 -> h2, breadcrumb/article-meta
    // dropped); the overview's "Chi tiêu" and "Kê khai của tôi" module-grid
    // cards and 'cpct-chi-phi-cua-toi''s two raw cross-links are all
    // rewritten to '#cpct-chi-tieu' / '#cpct-ke-khai-cua-toi'.
    // 'cpct-ke-khai-cua-toi''s own cross-links back to 'cpct-chi-phi-cua-toi'
    // and 'cpct-chi-tieu' are rewritten the same way. 'cpct-chi-tieu' has no
    // cross-links of its own. get_file truncated cp-cpct-chi-tieu.html at
    // its 256KiB cap, but the cut fell inside the page's trailing embedded
    // search-index script, well after </main> — the article content itself
    // was intact. All 5 screenshots (cp-cpct-ct-01/02, cp-cpct-kk-01/02/03)
    // fetched under the design-sync image fetch's 256KiB cap and are fully
    // embedded.
    // 'dsa-phien-sao-ke' (design source cp-dsa-phien-sao-ke.html) is now
    // ported too: inserted as its own <section> right before
    // 'dsa-chi-tiet-sao-ke', same treatment (h1 -> h2, breadcrumb/
    // article-meta dropped), and placed as a direct leaf of "Đối soát ads"
    // ahead of 'dsa-chi-tiet-sao-ke' (real order: Dashboard, Phiên đối
    // soát, Phiên sao kê, Chi tiết sao kê — the first two remain unrouted).
    // It has no cross-links of its own. All 4 screenshots are now embedded:
    // cp-dsa-psk-01/02/03 fetched under the design-sync image fetch's
    // 256KiB cap; cp-dsa-psk-04 hit that cap (no PNG IEND chunk) and was
    // later supplied directly by the user as a local file.
    // 'dsa-phien-doi-soat' (design source cp-dsa-phien-doi-soat.html) is now
    // ported too: inserted as its own <section> right after
    // 'dsa-phan-loai-sao-ke', same treatment (h1 -> h2, breadcrumb/
    // article-meta dropped), and placed as a direct leaf of "Đối soát ads"
    // ahead of 'dsa-phien-sao-ke' (real order: Dashboard, Phiên đối soát,
    // Phiên sao kê, Chi tiết sao kê — only Dashboard remains unrouted now).
    // Its cross-link to "Chi phí" (cp-cpct-chi-tieu.html) is left as a raw
    // href, same pattern as other cross-links to screens ported elsewhere
    // but not re-verified against this section. All 8 of its screenshots
    // (cp-dsa-pds-01 through 08) originally hit the design-sync image
    // fetch's 256KiB cap (no PNG IEND chunk, deterministic on retry); the
    // user then supplied all 8 directly as local files and they're now
    // fully embedded.
// 'kt-hoa-don-cpqc' (design source cp-kt-hoa-don-cpqc.html) is now
    // ported too: appended as its own <section> at the end of the file (h1
    // -> h2, breadcrumb/article-meta dropped), the overview's "Hóa đơn
    // CPQC" module-grid card rewritten to '#kt-hoa-don-cpqc'. It has no
    // cross-links of its own. Per the design source's own embedded sidebar,
    // it opens a new "Kế toán" subgroup (menu mẹ, không có file riêng —
    // same convention as CLAUDE.md's note) sitting inside "Quy trình và
    // tính năng" as a sibling of "Chi phí của tôi", right after the
    // still-unported "Kê khai chi phí" leaf; its siblings inside "Kế toán"
    // (Hóa đơn, Thanh toán — cp-kt-hoa-don, cp-kt-thanh-toan) stay unrouted
    // until ported. All 4 screenshots (cp-kt-hdcpqc-01/02/03/04) fetched
    // under the design-sync image fetch's 256KiB cap and are fully
    // embedded.
    // 'kt-hoa-don' (design source cp-kt-hoa-don.html) is now ported too:
    // appended as its own <section> at the end of the file (h1 -> h2,
    // breadcrumb/article-meta dropped) right after 'kt-hoa-don-cpqc', the
    // overview's "Hóa đơn" module-grid card rewritten to '#kt-hoa-don'.
    // Joins 'kt-hoa-don-cpqc' as a sibling leaf inside the "Kế toán"
    // subgroup — 'kt-thanh-toan' (Thanh toán) is the only remaining
    // unrouted sibling there. It has no cross-links of its own. All 4
    // screenshots (cp-kt-hd-01/02/03/04) fetched under the design-sync
    // image fetch's 256KiB cap and are fully embedded.
    // 'ke-khai-chi-phi' (design source cp-ke-khai-chi-phi.html) is now
    // ported too: inserted as its own <section> right after
    // 'cpct-ke-khai-cua-toi' and before 'kt-hoa-don-cpqc' (h1 -> h2,
    // breadcrumb/article-meta dropped), the overview's "Kê khai chi phí"
    // module-grid card rewritten to '#ke-khai-chi-phi'. Its article body is
    // word-for-word identical to 'cpct-ke-khai-cua-toi' (same design-source
    // duplication, confirmed by fetching both design files directly — not a
    // porting mistake), reusing the same 3 screenshots
    // (cp-cpct-kk-01/02/03); its own h3 ids ('kkcp-thao-tac',
    // 'kkcp-trang-thai') are kept distinct from that section's
    // ('cpct-kk-thao-tac', 'cpct-kk-trang-thai') to avoid an id collision.
    // Its two cross-links (to "Chi phí của tôi" / "Chi tiêu") are rewritten
    // to '#cpct-chi-phi-cua-toi' / '#cpct-chi-tieu'. Per this design
    // source's own embedded sidebar (depth-traced directly from the DOM,
    // not inferred from CSS class names, which don't encode depth here),
    // it's a direct leaf of "Quy trình và tính năng" — a sibling of the
    // "Chi phí của tôi" subgroup and the "Kế toán" subgroup, sitting between
    // them. That same trace also caught a pre-existing structural bug in
    // sidebarTree below: "Đối soát ads" was modeled as a top-level group
    // sibling of "Cấu hình ban đầu", but it's actually nested *inside*
    // "Quy trình và tính năng" (sibling of "Chi phí của tôi" / "Kế toán" /
    // this new leaf, in that order) — fixed here alongside the new leaf.
    toc: [
      { id: 'cp-tai-khoan', label: 'Tài khoản quảng cáo nội bộ' },
      { id: 'tk-ngan-hang', label: 'Tài khoản ngân hàng' },
      { id: 'cfg-danh-muc', label: 'Danh mục chi phí' },
      { id: 'cfg-thoi-gian', label: 'Thời gian' },
      { id: 'cfg-loai-tkqc', label: 'Loại tài khoản quảng cáo' },
      { id: 'cfg-ngan-hang', label: 'Ngân hàng' },
      { id: 'dsa-phan-loai-sao-ke', label: 'Phân loại chi tiết sao kê' },
      { id: 'dsa-phien-doi-soat', label: 'Phiên đối soát' },
      { id: 'dsa-phien-sao-ke', label: 'Phiên sao kê' },
      { id: 'dsa-chi-tiet-sao-ke', label: 'Chi tiết sao kê' },
      { id: 'cpct-chi-tieu', label: 'Chi tiêu' },
      { id: 'cpct-chi-phi-cua-toi', label: 'Chi phí của tôi' },
      { id: 'cpct-ke-khai-cua-toi', label: 'Kê khai của tôi' },
      { id: 'ke-khai-chi-phi', label: 'Kê khai chi phí' },
      { id: 'kt-hoa-don-cpqc', label: 'Hóa đơn CPQC' },
      { id: 'kt-hoa-don', label: 'Hóa đơn' },
    ],
    sidebarTree: [
      {
        label: 'Cấu hình ban đầu',
        children: [
          { id: 'cp-tai-khoan' },
          { id: 'tk-ngan-hang' },
          {
            label: 'Cấu hình',
            children: [{ id: 'cfg-danh-muc' }, { id: 'cfg-thoi-gian' }, { id: 'cfg-loai-tkqc' }, { id: 'cfg-ngan-hang' }],
          },
        ],
      },
      {
        label: 'Quy trình và tính năng',
        children: [
          {
            label: 'Chi phí của tôi',
            children: [{ id: 'cpct-chi-tieu' }, { id: 'cpct-chi-phi-cua-toi' }, { id: 'cpct-ke-khai-cua-toi' }],
          },
          { id: 'ke-khai-chi-phi' },
          { label: 'Kế toán', children: [{ id: 'kt-hoa-don-cpqc' }, { id: 'kt-hoa-don' }] },
          {
            label: 'Đối soát ads',
            children: [
              { id: 'dsa-phien-doi-soat' },
              { id: 'dsa-phien-sao-ke' },
              { id: 'dsa-chi-tiet-sao-ke' },
              { label: 'Cấu hình', children: [{ id: 'dsa-phan-loai-sao-ke' }] },
            ],
          },
        ],
      },
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
export const IMPLEMENTED_SLUGS = new Set(['crm', 'logistics', 'ecommerce', 'hoa-don', 'bat-xac-thuc-2-lop', 'kho-hang', 'mua-hang', 'affiliate', 'tam-ung-nhan-vien', 'quan-ly-quang-cao', 'chi-phi'])

// Deploy-time visibility gate: only these modules appear on the homepage
// and sidebar, and are reachable at all (other slugs 404 via DocPage) —
// used to publish a subset of modules (e.g. just Ecommerce) while the
// rest are still in progress. Set to `null` to show everything again.
export const PUBLIC_SLUGS: Set<string> | null = new Set(['ecommerce', 'hoa-don', 'logistics', 'bat-xac-thuc-2-lop', 'kho-hang', 'crm', 'mua-hang', 'nhan-vien', 'nghi-phep', 'tang-ca', 'cham-cong', 'tuyen-dung', 'elearning', 'bang-luong', 'affiliate', 'tam-ung-nhan-vien', 'quan-ly-quang-cao', 'chi-phi', 'lien-he'])

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
  // Checks presence, not truthiness of .length: an explicit sidebarTree: []
  // means "everything is already placed via overviewExtra, no fallback
  // group" — distinct from omitting sidebarTree entirely (which does want
  // the fallback below).
  if (page.sidebarTree) {
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
