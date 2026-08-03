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
    toc: [
      { id: 'yeu-cau-mua-hang', label: 'Yêu cầu mua hàng' },
      { id: 'quan-ly-nha-cung-cap', label: 'Quản lý Nhà cung cấp' },
      { id: 'bang-gia-nha-cung-cap', label: 'Bảng giá Nhà cung cấp' },
      { id: 'yeu-cau-bao-gia-don-hang', label: 'Yêu cầu báo giá/đơn hàng' },
      { id: 'xu-ly-don-hang', label: 'Xử lý đơn hàng' },
      { id: 'tao-hoa-don-mua-hang-theo-doi-cong-no-ncc', label: 'Tạo hóa đơn mua hàng / Theo dõi công nợ NCC' },
      { id: 'tra-hang', label: 'Trả hàng' },
    ],
  },
  {
    slug: 'kho-hang',
    title: 'Kho hàng',
    group: 'Chuỗi cung ứng',
    toc: [
      { id: 'tao-san-pham', label: 'Tạo sản phẩm' },
      { id: 'quan-ly-san-pham-theo-lo-se-ri-truong-hop-kho', label: 'Quản lý sản phẩm theo Lô / Sê-ri (trường hợp không quản lý sản phẩm theo Lô/Seriel thì bỏ qua)' },
      { id: 'nhap-hang-ve-kho', label: 'Nhập hàng về kho' },
      { id: 'dieu-chuyen-noi-bo-kho', label: 'Điều chuyển nội bộ kho' },
      { id: 'xuat-kho-giao-hang-cho-khach', label: 'Xuất kho giao hàng cho khách' },
      { id: 'hoan-tra-hang', label: 'Hoàn trả hàng' },
      { id: 'kiem-ke-kho', label: 'Kiểm kê kho' },
    ],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    group: 'Chuỗi cung ứng',
    toc: [
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
    // NOTE: unlike CRM, this grouping is NOT confirmed against a real
    // sidebar screenshot — it's a reasonable best guess (flat, no 3rd
    // nesting level) pending the actual source. Revisit if it turns out
    // logistics also nests like CRM's "Tính năng mở rộng".
    sidebarTree: [
      {
        label: 'Thiết lập & cấu hình',
        children: [
          'cfg-hang-van-chuyen', 'cfg-cang', 'cfg-tuyen-van-chuyen', 'cfg-loai-hang-hoa', 'cfg-hang-hoa-item',
          'cfg-cuoc-van-chuyen', 'cfg-mau-kien-hang', 'cfg-kieu-dong-goi', 'cfg-hs-code', 'cfg-lop-hang-nguy-hiem',
          'cfg-un-number', 'cfg-loai-phi', 'cfg-phuong-thuc-van-chuyen', 'cfg-phuong-thuc-dong-goi',
          'cfg-giai-doan-lo-hang', 'cfg-trang-thai-lo-hang', 'cfg-incoterms', 'cfg-dieu-khoan-dich-vu',
          'cfg-dieu-khoan-thanh-toan', 'cfg-trang-thai-van-chuyen', 'cfg-trang-thai-don-giao-hang',
        ].map((id) => ({ id })),
      },
      {
        label: 'Thông tin liên quan',
        children: [
          'tt-co-hoi', 'tt-don-hang', 'tt-job', 'tt-pickup', 'tt-theo-doi-lo-trinh', 'tt-ma-van-don',
          'tt-lh-khach-hang', 'tt-lh-ncc', 'tt-lh-shipper', 'tt-kh-hoa-don', 'tt-kh-thanh-toan', 'tt-ncc-hoa-don',
        ].map((id) => ({ id })),
      },
      {
        label: 'Các tính năng & quy trình',
        children: ['tao-lenh-van-chuyen', 'theo-doi-lo-trinh', 'quan-ly-cuoc-phi', 'doi-soat-bao-cao'].map((id) => ({ id })),
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
        label: 'Tạo liên hệ',
        children: [{ id: 'tao-lien-he' }, { id: 'chia-so' }, { id: 'cham-soc-co-hoi' }, { id: 'kho-so-chung' }],
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
      { id: 'chuc-vu-la-nhung-cong-viec-nhiem-vu-gan-voi-c', label: 'Chức vụ' },
      { id: 'cau-hinh-file-hop-dong-duoc-dung-de-thiet-lap', label: 'Cấu hình File hợp đồng' },
      { id: 'quy-trinh-tao-va-xu-ly-thong-tin-01-nhan-su-m', label: 'Quy trình tạo và xử lý thông tin 01 nhân sự mới' },
      { id: 'cap-nhat-hop-dong', label: 'Cập nhật hợp đồng' },
      { id: 'yeu-cau-cap-phat-tk-erp', label: 'Yêu cầu cấp phát TK ERP' },
      { id: 'de-xuat-tang-luong', label: 'Đề xuất tăng lương' },
      { id: 'quy-trinh-tao-va-xu-ly-phieu-thuyen-chuyen-bo', label: 'Quy trình tạo và xử lý phiếu thuyên chuyển bổ nhiệm' },
      { id: 'lich-su-nguoi-quan-ly', label: 'Lịch sử người quản lý' },
      { id: 'cac-thong-tin-can-luu-y', label: 'Các thông tin cần lưu ý' },
    ],
  },
  {
    slug: 'nghi-phep',
    title: 'Nghỉ phép',
    group: 'Nhân sự',
    toc: [
      { id: 'ke-hoach-tich-luy', label: 'Kế hoạch tích luỹ' },
      { id: 'phieu-xin-nghi-phep', label: 'Phiếu xin nghỉ phép' },
      { id: 'dieu-kien-de-duoc-xin-nghi-phep-nghi-co-luong', label: 'Điều kiện để được xin nghỉ phép' },
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
      { id: 'hieu-suat-san', label: 'Hiệu suất sàn' },
      { id: 'doanh-so-du-kien', label: 'Doanh số dự kiến' },
      { id: 'dinh-bien-nhan-su', label: 'Định biên nhân sự' },
      { id: 'yeu-cau-tuyen-dung', label: 'Yêu cầu tuyển dụng' },
      { id: 'ke-hoach-tuyen-dung', label: 'Kế hoạch tuyển dụng' },
      { id: 'chi-phi-tuyen-dung', label: 'Chi phí tuyển dụng' },
      { id: 'quy-trinh-tao-va-xu-ly-ho-so-ung-vien', label: 'Quy trình tạo và xử lý hồ sơ ứng viên' },
    ],
  },
  {
    slug: 'elearning',
    title: 'E-learning',
    group: 'Nhân sự',
    toc: [
      { id: 'cau-hinh', label: 'Cấu hình' },
      { id: 'khoa-hoc', label: 'Khoá học' },
      { id: 'hoc-vien-tham-gia-khoa-hoc', label: 'Học viên tham gia khoá học' },
    ],
  },
  {
    slug: 'bang-luong',
    title: 'Bảng lương',
    group: 'Nhân sự',
    toc: [
      { id: 'phu-cap-hop-dong', label: 'Phụ cấp hợp đồng' },
      { id: 'kieu-dong-gop-tu-luong', label: 'Kiểu đóng góp từ lương' },
      { id: 'dang-ky-dong-gop', label: 'Đăng ký đóng góp' },
      { id: 'kiem-tra-phieu-luong', label: 'Kiểm tra Phiếu lương' },
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
export const GROUP_ORDER = ['Kế toán', 'Chuỗi cung ứng', 'Bán hàng & Khách hàng', 'Nhân sự', 'Vận hành']

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
export const IMPLEMENTED_SLUGS = new Set(['crm', 'logistics', 'ecommerce', 'hoa-don'])

// Deploy-time visibility gate: only these modules appear on the homepage
// and sidebar, and are reachable at all (other slugs 404 via DocPage) —
// used to publish a subset of modules (e.g. just Ecommerce) while the
// rest are still in progress. Set to `null` to show everything again.
export const PUBLIC_SLUGS: Set<string> | null = new Set(['ecommerce', 'hoa-don'])

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
  if (page.sidebarTree?.length) {
    return [overview, ...page.sidebarTree.map((n) => resolveSidebarNode(n, byId))]
  }
  return [
    overview,
    {
      kind: 'group',
      label: 'Các tính năng & quy trình',
      children: page.toc.map((t) => ({ kind: 'leaf' as const, id: t.id, label: t.label })),
    },
  ]
}
