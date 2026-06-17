export interface DocPage {
  slug: string
  title: string
  group: string
  description?: string
  toc: Array<{
    id: string
    label: string
    level?: number
  }>
}

export const docPages: DocPage[] = [
  // Kế toán (Accounting)
  {
    slug: 'doi-soat-du-lieu',
    title: 'Đối soát dữ liệu',
    group: 'Kế toán',
    description: 'Đối soát dữ liệu từ các nguồn khác nhau',
    toc: [
      { id: 'tao-phien-doi-soat', label: 'Tạo mới phiên đối soát' },
      { id: 'doc-du-lieu', label: 'Cách đọc dữ liệu sau đối soát' },
      { id: 'doc-dashboard', label: 'Cách đọc dashboard' },
      { id: 'tab-chi-tiet-don', label: 'Tab Chi tiết đơn đối soát' },
    ],
  },

  // Chuỗi cung ứng (Supply Chain)
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
      { id: 'tao-hoa-don-mua-hang', label: 'Tạo hóa đơn mua hàng' },
      { id: 'tra-hang', label: 'Trả hàng' },
    ],
  },
  {
    slug: 'kho-hang',
    title: 'Kho hàng',
    group: 'Chuỗi cung ứng',
    toc: [
      { id: 'tao-san-pham', label: 'Tạo sản phẩm' },
      { id: 'quan-ly-lo-se-ri', label: 'Quản lý sản phẩm theo Lô/Sê-ri' },
      { id: 'nhap-hang-ve-kho', label: 'Nhập hàng về kho' },
      { id: 'dieu-chuyen-noi-bo', label: 'Điều chuyển nội bộ kho' },
      { id: 'xuat-kho-giao-hang', label: 'Xuất kho giao hàng cho khách' },
      { id: 'hoan-tra-hang', label: 'Hoàn trả hàng' },
      { id: 'kiem-ke-kho', label: 'Kiểm kê kho' },
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
    ],
  },
  {
    slug: 'tai-san',
    title: 'Tài sản',
    group: 'Chuỗi cung ứng',
    toc: [
      { id: 'tao-tai-san', label: 'Tạo tài sản' },
      { id: 'quan-ly-tai-san', label: 'Quản lý tài sản' },
      { id: 'khau-hao-tai-san', label: 'Khấu hao tài sản' },
    ],
  },

  // Bán hàng & Khách hàng (Sales & Customer)
  {
    slug: 'crm',
    title: 'Liên hệ – CRM',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'tao-lien-he', label: 'Tạo liên hệ' },
      { id: 'chia-so', label: 'Chia số' },
      { id: 'theo-doi-lich-su', label: 'Theo dõi lịch sử giao dịch' },
    ],
  },
  {
    slug: 'ban-hang',
    title: 'Bán hàng',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'tao-don-hang', label: 'Tạo đơn hàng' },
      { id: 'xu-ly-don-hang', label: 'Xử lý đơn hàng' },
      { id: 'tao-hoa-don', label: 'Tạo hóa đơn' },
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'quan-ly-san-pham-ecommerce', label: 'Quản lý sản phẩm' },
      { id: 'xu-ly-don-hang-ecommerce', label: 'Xử lý đơn hàng' },
    ],
  },
  {
    slug: 'booking',
    title: 'Booking',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'tao-booking', label: 'Tạo đơn booking' },
      { id: 'quan-ly-booking', label: 'Quản lý booking' },
    ],
  },
  {
    slug: 'zalo',
    title: 'Zalo',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'ket-noi-zalo', label: 'Kết nối Zalo' },
      { id: 'quan-ly-tin-nhan', label: 'Quản lý tin nhắn' },
    ],
  },
  {
    slug: 'call-center',
    title: 'Call center',
    group: 'Bán hàng & Khách hàng',
    toc: [
      { id: 'quan-ly-cuoc-goi', label: 'Quản lý cuộc gọi' },
      { id: 'phan-tich-cuoc-goi', label: 'Phân tích cuộc gọi' },
    ],
  },

  // Nhân sự (HR)
  {
    slug: 'nhan-vien',
    title: 'Nhân viên',
    group: 'Nhân sự',
    toc: [
      { id: 'tao-nhan-vien', label: 'Tạo nhân viên' },
      { id: 'quan-ly-ho-so', label: 'Quản lý hồ sơ' },
    ],
  },
  {
    slug: 'nghi-phep',
    title: 'Nghỉ phép',
    group: 'Nhân sự',
    toc: [
      { id: 'yeu-cau-nghi-phep', label: 'Yêu cầu nghỉ phép' },
      { id: 'phe-duyet-nghi-phep', label: 'Phê duyệt nghỉ phép' },
    ],
  },
  {
    slug: 'tang-ca',
    title: 'Tăng ca',
    group: 'Nhân sự',
    toc: [
      { id: 'dang-ky-tang-ca', label: 'Đăng ký tăng ca' },
      { id: 'phe-duyet-tang-ca', label: 'Phê duyệt tăng ca' },
    ],
  },
  {
    slug: 'cham-cong',
    title: 'Chấm công',
    group: 'Nhân sự',
    toc: [
      { id: 'tao-cham-cong', label: 'Tạo chấm công' },
      { id: 'quan-ly-cham-cong', label: 'Quản lý chấm công' },
    ],
  },
  {
    slug: 'tuyen-dung',
    title: 'Tuyển dụng',
    group: 'Nhân sự',
    toc: [
      { id: 'tao-tin-tuyen-dung', label: 'Tạo tin tuyển dụng' },
      { id: 'quan-ly-ung-vien', label: 'Quản lý ứng viên' },
    ],
  },
  {
    slug: 'elearning',
    title: 'E-learning',
    group: 'Nhân sự',
    toc: [
      { id: 'tao-khoa-hoc', label: 'Tạo khóa học' },
      { id: 'quan-ly-khoa-hoc', label: 'Quản lý khóa học' },
    ],
  },
  {
    slug: 'bang-luong',
    title: 'Bảng lương',
    group: 'Nhân sự',
    toc: [
      { id: 'tao-bang-luong', label: 'Tạo bảng lương' },
      { id: 'phe-duyet-bang-luong', label: 'Phê duyệt bảng lương' },
    ],
  },

  // Vận hành (Operations)
  {
    slug: 'phe-duyet',
    title: 'Phê duyệt',
    group: 'Vận hành',
    toc: [
      { id: 'quy-trinh-phe-duyet', label: 'Quy trình phê duyệt' },
      { id: 'quan-ly-phe-duyet', label: 'Quản lý phê duyệt' },
    ],
  },
  {
    slug: 'du-an',
    title: 'Dự án',
    group: 'Vận hành',
    toc: [
      { id: 'tao-du-an', label: 'Tạo dự án' },
      { id: 'quan-ly-du-an', label: 'Quản lý dự án' },
    ],
  },
  {
    slug: 'tai-lieu',
    title: 'Tài liệu',
    group: 'Vận hành',
    toc: [
      { id: 'tao-tai-lieu', label: 'Tạo tài liệu' },
      { id: 'quan-ly-tai-lieu', label: 'Quản lý tài liệu' },
    ],
  },
  {
    slug: 'misa',
    title: 'MISA',
    group: 'Vận hành',
    toc: [
      { id: 'ket-noi-misa', label: 'Kết nối MISA' },
      { id: 'dong-bo-du-lieu', label: 'Đồng bộ dữ liệu' },
    ],
  },
]

export const getPagesByGroup = (group: string): DocPage[] => {
  return docPages.filter((page) => page.group === group)
}

export const getGroups = (): string[] => {
  return Array.from(new Set(docPages.map((page) => page.group)))
}

export const getPageBySlug = (slug: string): DocPage | undefined => {
  return docPages.find((page) => page.slug === slug)
}
