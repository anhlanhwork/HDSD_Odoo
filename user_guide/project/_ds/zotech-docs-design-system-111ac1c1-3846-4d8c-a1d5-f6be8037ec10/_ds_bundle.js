/* @ds-bundle: {"format":3,"namespace":"ZotechDocsDesignSystem_111ac1","components":[],"sourceHashes":{"content/ban-hang.js":"a67656a382fe","content/bang-luong.js":"9082af173b1b","content/booking.js":"e25b29e1df10","content/call-center.js":"f71b44c2343c","content/cham-cong.js":"3f78b1af5b3f","content/crm.js":"c252b2874da7","content/du-an.js":"1e816ab4c6a1","content/ecommerce.js":"49611dce0a1d","content/elearning.js":"c683d6d94408","content/kho-hang.js":"6e09118a4f5a","content/misa.js":"0e80442e603f","content/mua-hang.js":"31b42ebb1750","content/nghi-phep.js":"3cc5673ba2a9","content/nhan-vien.js":"5d6e1281f415","content/phe-duyet.js":"eb8573350381","content/tai-lieu.js":"d41d19ec3fae","content/tai-san.js":"cf292dcc1d2e","content/tang-ca.js":"75b09f0c97a4","content/tuyen-dung.js":"dbff45d65d0f","content/zalo.js":"777f01009490","scripts/components.jsx":"accea5cf1051","scripts/design-system-app.jsx":"259bf1c0dbe6","scripts/docs-demo.jsx":"7a64ae60ed20","scripts/docs-home-index.jsx":"0dfacc7e960e","scripts/docs-home.jsx":"a6f309ef9202","scripts/icons.jsx":"6ab1319bf8f6","scripts/module-page.jsx":"2baa5a693dc5","scripts/nav.jsx":"48cfe14e3042","scripts/tweaks-panel.jsx":"7f64c6909a8b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZotechDocsDesignSystem_111ac1 = window.ZotechDocsDesignSystem_111ac1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// content/ban-hang.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["ban-hang"] = {
  "slug": "ban-hang",
  "title": "Bán hàng",
  "icon": "Receipt",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Module</strong>: Quản lý toàn bộ quy trình bán hàng – từ lúc tiếp nhận nhu cầu của khách hàng cho đến khi đơn hàng được xác nhận, giao hàng và xuất hóa đơn."
  }, {
    "t": "h2",
    "id": "quan-ly-gia-san-pham",
    "text": "Quản lý giá sản phẩm"
  }, {
    "t": "h3",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "h3",
    "id": "bang-gia-dung-de",
    "text": "Bảng giá dùng để"
  }, {
    "t": "ul",
    "items": ["Quản lý nhiều chính sách giá.", "Tự động áp dụng giá khi tạo đơn bán.", "Linh hoạt: giá cố định, chiết khấu %, công thức tính, theo số lượng, theo thời gian.", "Giúp bán hàng nhanh, chuẩn, không nhầm giá."]
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "Truy cập vào Bán hàng <strong>→</strong> Sản phẩm <strong>→</strong> Bảng giá, ấn Mới để tạo mới một bảng giá",
    "children": [{
      "t": "img",
      "id": 124
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin trên form tạo bảng giá",
    "children": [{
      "t": "img",
      "id": 125
    }]
  }, {
    "t": "h3",
    "id": "nhom-quoc-gia-thiet-lap-nhom-quoc-gia-se-duoc",
    "text": "→ Nhóm quốc gia: thiết lập nhóm quốc gia sẽ được áp dụng bảng giá này. Nếu có thiết lập, mỗi liên hệ của khách hàng được tạo mới mà có quốc gia thuộc nhóm này thì bảng giá sẽ được tự động nhận diện để áp dụng. (Để thiết lập nhóm quốc gia, truy cập Vị trí địa lý &gt; Bản địa hoá &gt; Nhóm Quốc gia, tạo mới và lựa chọn các quốc gia vào nhóm.)"
  }, {
    "t": "h3",
    "id": "tai-tab-quy-tac-gia-an-them-mot-dong-de-thuc-",
    "text": "Tại Tab quy tắc giá, ấn Thêm một dòng để thực hiện khai báo những quy tắc giá mới"
  }, {
    "t": "img",
    "id": 126
  }, {
    "t": "p",
    "html": "<strong>Diễn giải:</strong>"
  }, {
    "t": "table",
    "headers": ["Trường thông tin", "Diễn giải"],
    "rows": [["Sản phẩm", "Sản phẩm áp dụng bảng giá"], ["Loại giá", "Chiết khấu: Giảm giá theo phần trăm so với giá gốc (list price). Công thức: đặt ra công thức tính giá  Giá cố định: Đặt thẳng một mức giá mới cho sản phẩm."], ["Số lượng tối thiểu", "Số lượng tối thiểu của sản phẩm để được áp dụng bảng giá"], ["Thời hạn hiệu lực", "Thời gian áp dụng bảng giá"]]
  }, {
    "t": "p",
    "html": "<strong>Tab Thương mại điện tử:</strong> kiểm soát cách giá hiển thị và áp dụng trên website bán hàng. (phân biệt được giá khi bán online và giá bán offline)"
  }, {
    "t": "img",
    "id": 127
  }, {
    "t": "step",
    "num": "1",
    "html": "Ấn Lưu để lưu thông tin bảng giá",
    "children": [{
      "t": "img",
      "id": 128
    }]
  }, {
    "t": "h2",
    "id": "chiet-khau-va-khach-hang-than-thiet",
    "text": "Chiết khấu và Khách hàng thân thiết"
  }, {
    "t": "h3",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Chiết khấu và Khách hàng thân thiết xây dựng các chương trình khuyến mãi và áp dụng chương trình khuyến mãi trong hoạt động bán hàng, từ đó đẩy mạnh doanh số, đạt được các mục tiêu kinh doanh."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-2",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "Để tạo Chương trình Chiết khấu &amp; Khách hàng thân thiết, truy cập Bán hàng <strong>→</strong> Sản Phẩm <strong>→</strong> Chiết khấu &amp; Khách hàng thân thiết và ấn nút Mới.",
    "children": [{
      "t": "img",
      "id": 129
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Điền các thông tin trên form:",
    "children": [{
      "t": "img",
      "id": 130
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Loại chương trình", "Phiếu giảm giá: xác định giá trị điểm cụ thể có thể đổi lấy phần thưởng. Thẻ khách hàng thân thiết: <code>Khách tích điểm qua các đơn mua → dùng điểm đó đổi thưởng</code> (chiết khấu, sản phẩm miễn phí, miễn phí vận chuyển…) cho đơn hàng hiện tại hoặc đơn hàng trong tương lai. Khuyến mãi: cấp điểm cho khách hàng mà họ sẽ có thể đổi lấy phần thưởng (VD: mua đủ số lượng…) Mã giảm giá: Xác định Mã giảm giá theo các quy tắc có điều kiện, sau đó chia sẻ mã đó với khách hàng của bạn để nhận phần thưởng. Mua X tặng Y: thiết lập quy tắc tích lũy điểm cho mặt hàng đã mua, sau đó thưởng cho khách hàng Y mặt hàng để đổi lấy X điểm tích lũy. Phiếu giảm giá cho đơn hàng tiếp theo: Thúc đẩy mua hàng lặp lại bằng cách gửi mã phiếu giảm giá duy nhất, sử dụng một lần cho lần mua tiếp theo khi khách hàng mua thứ gì đó trong cửa hàng."], ["Bảng giá", "Bảng giá cụ thể sẽ được áp dụng trong chương trình này. Nếu không thiết lập, chương trình tạo ra sẽ áp dụng cho mọi bảng giá."], ["Đơn vị điểm", "Đơn vị quy đổi để khách hàng hiểu khi mua hàng mình đang tích luỹ gì để đổi thưởng/áp dụng chương trình tương ứng. VD: điểm (mặc định); đồng; xu; coin…."], ["Hiển thị điểm đơn vị", "Hiển thị điểm số có sẵn và được sử dụng làm phần thưởng trong thanh toán Thương mại điện tử, POS hoặc các đơn đặt hàng thông thường"], ["Ngày bắt đầu/Ngày kết thúc", "Thời gian áp dụng chương trình"], ["Tab Quy tắc và phần thưởng", "Thiết lập quy tắc và phần thưởng khi khách hàng đạt điều kiện."]]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Ấn Lưu để lưu thông tin vừa tạo",
    "children": [{
      "t": "img",
      "id": 131
    }]
  }, {
    "t": "h2",
    "id": "gioi-han-chiet-khau",
    "text": "Giới hạn chiết khấu"
  }, {
    "t": "h3",
    "id": "mo-ta-3",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Kiểm soát việc giảm giá trên đơn hàng (thiết lập điều kiện giảm giá)"
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-3",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Bán hàng → Cấu hình → Chiết khấu giới hạn → Mới</code>",
    "children": [{
      "t": "img",
      "id": 132
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Điền các thông tin trên form",
    "children": [{
      "t": "img",
      "id": 133
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Giới hạn chiết khấu theo", "tiêu chí để áp dụng mức giới hạn chiết khấu."], ["Tab giới hạn chiết khấu theo giá trị đơn", "Giá trị đơn tối thiểu để áp dụng giới hạn chiết khấu Giá trị đơn tối đa để áp dụng chiết khấu Giá trị chiết khấu tối đa: giá trị tối đa có thể chiết khấu cho đơn hàng đu"]]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Ấn Lưu để lưu thông tin vừa tạo",
    "children": [{
      "t": "img",
      "id": 134
    }]
  }, {
    "t": "h2",
    "id": "quan-ly-khach-hang",
    "text": "Quản lý khách hàng"
  }, {
    "t": "h3",
    "id": "mo-ta-4",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Chức năng này giúp người dùng quản lý được thông tin khách hàng, từ đó đưa ra các chính sách bán hàng hợp lý."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-4",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng chọn menu Bán hàng → Đơn hàng → Khách hàng</code>",
    "children": [{
      "t": "img",
      "id": 135
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Kích nút Mới để mở màn hình tạo mới khách hàng",
    "children": [{
      "t": "img",
      "id": 136
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Nhập các thông tin của khách hàng: tên, mã, địa chỉ, mã số thuế, số điện thoại, email,…",
    "children": [{
      "t": "ul",
      "items": ["<strong>Các liên hệ và địa chỉ</strong>: Kích vào nút Thêm để mở màn hình tạo các liên hệ, địa chỉ xuất hóa đơn, địa chỉ giao hàng, địa chỉ khác hay địa chỉ cá nhân liên quan đến khách hàng. Một khách hàng có thể có nhiều liên hệ hay địa chỉ liên quan.", "<strong>Bán và mua:</strong> chứa các thông tin liên quan đến hoạt động mua và bán liên quan đến khách hàng như nhóm khách hàng, thông tin chăm sóc khi mua hàng, thông tin điều khoản mua hàng (nếu cũng là nhà cung cấp), vị thế tài chính,…"]
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Kích nút Lưu để lưu khách hàng vừa tạo",
    "children": [{
      "t": "img",
      "id": 137
    }]
  }, {
    "t": "h2",
    "id": "don-hang",
    "text": "Đơn hàng"
  }, {
    "t": "h3",
    "id": "mo-ta-5",
    "text": "Mô tả"
  }, {
    "t": "h3",
    "id": "chuc-nang-nay-giup-nguoi-dung-quan-ly-hoat-do",
    "text": "Chức năng này giúp người dùng quản lý hoạt động bán hàng trên hệ thống, từ đó có thể quản lý được các đơn hàng, doanh thu và khách hàng của doanh nghiệp. Từ đó đưa ra các chính sách bán hàng hợp lý."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-5",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng chọn menu Bán hàng → Đơn hàng → Đơn hàng → Mới để mở màn hình đơn hàng</code>",
    "children": [{
      "t": "img",
      "id": 138
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin của đơn hàng:",
    "children": [{
      "t": "img",
      "id": 139
    }, {
      "t": "p",
      "html": "<strong>Khách hàng:</strong> Nếu khách hàng được chọn có hợp đồng nguyên tắc còn hiệu lực, hệ thống tự động lấy ra thông tin hợp đồng, bảng giá và điều khoản thanh toán theo hợp đồng đã ký. Người dùng vẫn có thể lựa chọn lại các thông tin này."
    }, {
      "t": "img",
      "id": 140
    }, {
      "t": "p",
      "html": "<strong>Mục Chi tiết đơn hàng</strong>: kích Thêm sản phẩm để thêm các sản phẩm muốn bán cho khách hàng."
    }, {
      "t": "img",
      "id": 141
    }, {
      "t": "p",
      "html": "<strong>Mục Sản phẩm tùy chọn:</strong> Kích Thêm một dòng để thêm các sản phẩm tùy chọn (gợi ý bán) cho khách hàng. Các sản phẩm này chỉ mang tính chất tham khảo cho khách hàng, không tính vào giá trị của đơn hàng."
    }, {
      "t": "img",
      "id": 142
    }, {
      "t": "p",
      "html": "<strong>Mục Thông tin khác:</strong> chứa các thông tin về kho hàng, chính sách vận chuyển, người giao hàng và trạng thái giao hàng cũng như ngày đóng hàng, ngày vận chuyển hay ngày hoàn thành đơn hàng"
    }, {
      "t": "img",
      "id": 143
    }, {
      "t": "p",
      "html": "<strong>Mục Thông tin nội bộ</strong> chứa thông tin nội bộ công ty liên quan đến đơn hàng: nhân viên chăm sóc đơn, trạng thái nhận đơn…"
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Kích Lưu để lưu đơn hàng trạng thái Báo giá.",
    "children": [{
      "t": "img",
      "id": 144
    }, {
      "t": "p",
      "html": "<strong>Bước 4</strong>: Xác nhận đơn hàng, <code>kích Xác nhận → Đơn chuyển sang trạng thái Đơn bán hàng</code>."
    }, {
      "t": "img",
      "id": 145
    }, {
      "t": "p",
      "html": "<strong>Bước 5</strong>: Cập nhật phiếu giao hàng. Sau khi xác nhận đơn hàng, hệ thống tự động tạo phiếu giao hàng tương ứng với số lượng sản phẩm tại tab Chi tiết đơn hàng"
    }, {
      "t": "img",
      "id": 146
    }, {
      "t": "p",
      "html": "<strong><em>Lưu ý:</em></strong>"
    }, {
      "t": "ul",
      "items": ["<em>Chỉ cập nhật phiếu giao hàng khi đã xác nhận đơn hàng</em>", "<em>Tổng số lượng sản phẩm giao hàng phải bằng số lượng sản phẩm tại Tab chi tiết đơn hàng</em>", "<em><code>Nếu muốn sửa phiếu giao hàng → Chọn sửa đơn hàng và cập nhật lại phiếu hoặc tiến hành thêm mới phiếu</code></em>"]
    }]
  }, {
    "t": "h2",
    "id": "su-dung-chuong-trinh-khuyen-mai-tren-don",
    "text": "Sử dụng Chương trình khuyến mãi trên đơn"
  }, {
    "t": "h3",
    "id": "ap-dung-zns-voucher-tren-don-ban",
    "text": "Áp dụng ZNS Voucher trên đơn bán"
  }, {
    "t": "step",
    "num": "1",
    "html": "Nhận QR voucher khách hàng gửi",
    "children": [{
      "t": "img",
      "id": 147
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Upload QR voucher lên web <a href=\"https://vi.qrgateway.com/qr-code-scanner\" target=\"_blank\" rel=\"noopener\">ViQR</a> /app icheck về điện thoại <a href=\"https://play.google.com/store/apps/details?id=vn.icheck.android&hl=vi\" target=\"_blank\" rel=\"noopener\">Icheck</a> /hoặc nhập tay để lấy mã code voucher",
    "children": [{
      "t": "img",
      "id": 148
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Truy cập Module Bán hàng → Tạo đơn hàng → Chọn</code> <strong>Mã phiếu giảm giá</strong>",
    "children": [{
      "t": "img",
      "id": 149
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "<code>Nhập mã code voucher đã lấy được tại bước 2 → Bấm</code> <strong>Áp dụng</strong>",
    "children": [{
      "t": "img",
      "id": 150
    }]
  }, {
    "t": "step",
    "num": "5",
    "html": "Chọn voucher cần sử dụng -&gt; Bấm Áp dụng",
    "children": [{
      "t": "img",
      "id": 151
    }, {
      "t": "p",
      "html": "<strong>Lưu ý:</strong> Voucher của khách nào chỉ sử dụng được cho khách đó, không sử dụng được voucher của khách khác"
    }]
  }, {
    "t": "h2",
    "id": "xuat-kho-ban-hang",
    "text": "Xuất kho bán hàng"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng kích vào biểu tượng giao hàng trên đơn hàng để mở phiếu giao hàng của đơn.",
    "children": [{
      "t": "img",
      "id": 152
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Kích nút Xác nhận để <strong>xác nhận</strong> xuất hàng",
    "children": [{
      "t": "img",
      "id": 153
    }, {
      "t": "p",
      "html": "→ <code>Sau khi xác nhận → hệ thống tạo ra 2 phiếu kho</code> (Pick; Out), trong đó phiếu Pick (chứng từ hướng dẫn nhân viên kho <strong>lấy (pick) đúng sản phẩm, đúng số lượng, đúng vị trí</strong> từ kho để chuẩn bị cho đóng gói (pack) và giao hàng (ship)) auto hoàn tất"
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Xác nhận phiếu Out (Là chứng từ ghi nhận việc <strong>xuất hàng ra khỏi kho</strong> – có thể để bán cho khách, để điều chuyển, hoặc để xuất dùng nội bộ).",
    "children": [{
      "t": "img",
      "id": 154
    }, {
      "t": "img",
      "id": 155
    }]
  }, {
    "t": "h2",
    "id": "giuc-don",
    "text": "Giục đơn"
  }, {
    "t": "h3",
    "id": "mo-ta-6",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Giục đơn là việc tạo nhắc nhở / thông báo / thúc giục các bộ phận liên quan xử lý đơn hàng sớm hơn. Đồng thời theo dõi đơn hàng từ khi đóng hàng đến bước vận chuyển cho tới khi đơn hàng được giao thành công tới tay khách hàng hoặc đơn hoàn về kho nếu khách hàng hoàn đơn không nhận"
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-6",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Bán hàng → Vận đơn → Giục đơn</code>",
    "children": [{
      "t": "img",
      "id": 156
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Trong Menu giục đơn nhân viên vận đơn bấm vào ô “Định vị” để theo dõi hành trình của đơn hàng. Các vấn đề liên quan tới các bên Vận đơn chủ động liên hệ, vấn đề với việc chuyển phát liên hệ làm việc với bưu điện \\+ bưu cục và bưu tá giao hàng, vấn đề liên quan tới khách hàng thì kết hợp với người chốt đơn để xử lý",
    "children": [{
      "t": "img",
      "id": 157
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Theo dõi và chuyển đổi trạng thái của đơn hàng và cập nhật trạng thái đơn hàng trong “Giục đơn”",
    "children": [{
      "t": "img",
      "id": 158
    }]
  }, {
    "t": "h2",
    "id": "don-giao-hang",
    "text": "Đơn giao hàng"
  }, {
    "t": "h3",
    "id": "mo-ta-7",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Đơn giao hàng là công cụ để sale theo dõi, quản lý và phối hợp giao nhận hàng với kho vận, nhằm đảm bảo đơn bán được thực hiện trọn vẹn, chủ động báo tình trạng đơn hàng cho khách."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-7",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Bán hàng → Đơn giao hàng</code>",
    "children": [{
      "t": "img",
      "id": 159
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Ấn Định vị để định vị đơn giao hàng",
    "children": [{
      "t": "img",
      "id": 160
    }]
  }, {
    "t": "h2",
    "id": "yeu-cau-doi-tra-hang",
    "text": "Yêu cầu đổi trả hàng"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Bán hàng → Đơn hàng → Yêu cầu đổi trả hàng</code>",
    "children": [{
      "t": "img",
      "id": 161
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin trên phiếu yêu cầu đổi trả hàng",
    "children": [{
      "t": "img",
      "id": 162
    }, {
      "t": "p",
      "html": "<strong>Bước 3</strong>: Ấn Lưu và Xác nhận để xác nhận thông tin yêu cầu đổi trả hàng"
    }, {
      "t": "img",
      "id": 163
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Sau khi yêu cầu đổi trả hàng được phê duyệt → Hệ thống sinh ra phiếu hoàn hàng → Bấm button Phiếu hoàn hàng để truy cập phiếu</code>",
    "children": [{
      "t": "img",
      "id": 164
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Ấn xác nhận để xác nhận phiếu trả hàng",
    "children": [{
      "t": "img",
      "id": 165
    }]
  }, {
    "t": "h2",
    "id": "hop-dong",
    "text": "Hợp đồng"
  }, {
    "t": "h3",
    "id": "mo-ta-8",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Hợp đồng cho phép thiết lập thỏa thuận với khách hàng về số lượng và đơn giá cố định. Các đơn hàng tạo ra từ hợp đồng sẽ tự động áp dụng giá đã ký, đảm bảo nhất quán trong suốt quá trình thực hiện dù giá niêm yết có thay đổi."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-8",
    "text": "Các bước thực hiện"
  }, {
    "t": "h3",
    "id": "tao-moi-hop-dong",
    "text": "Tạo mới hợp đồng"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Đăng nhập tài khoản Odoo → Chọn module</code> <strong>Bán hàng</strong>",
    "children": [{
      "t": "img",
      "id": 166
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn Bán hàng → Hợp đồng → Click Button</code> <strong>Mới</strong>",
    "children": [{
      "t": "img",
      "id": 167
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Nhập các thông tin yêu cầu trên hợp đồng",
    "children": [{
      "t": "ul",
      "items": ["Thông tin chung trên form view: điền các thông tin cơ bản của hợp đồng", "Tab chi tiết hợp đồng: các sản phẩm của hợp đồng", "Tab thông tin hợp đồng: thông tin đại diện ký kết của 2 bên"]
    }, {
      "t": "img",
      "id": 168
    }, {
      "t": "p",
      "html": "⚠️ <strong>Lưu ý:</strong> Có thể <strong>thay đổi đơn giá sản phẩm</strong> trong trường hợp bán theo đơn giá khác so với giá mặc định trên phần mềm."
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Bấm <strong>Lưu</strong> → <strong>Trình duyệt hợp đồng</strong>",
    "children": [{
      "t": "img",
      "id": 169
    }]
  }, {
    "t": "h3",
    "id": "phe-duyet-hop-dong",
    "text": "Phê duyệt hợp đồng"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Đăng nhập tài khoản Odoo được cấp → Chọn module</code> <strong>Phê duyệt</strong>",
    "children": [{
      "t": "img",
      "id": 170
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Chọn Phân hệ: <strong>Hợp đồng mua bán</strong> → Bấm vào hợp đồng cần duyệt",
    "children": [{
      "t": "img",
      "id": 171
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bấm <strong>phê duyệt/từ chối</strong> để xác nhận hợp đồng",
    "children": [{
      "t": "img",
      "id": 172
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "<code>Sau khi hợp đồng được duyệt → Quay lại module Bán hàng → Đơn hàng → Hợp đồng → Click vào hợp đồng được duyệt → Bấm</code> <strong>Xác nhận</strong>",
    "children": [{
      "t": "img",
      "id": 173
    }]
  }, {
    "t": "h3",
    "id": "tao-don-hang-tu-hop-dong",
    "text": "Tạo đơn hàng từ hợp đồng"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Đăng nhập tài khoản Odoo → Chọn module</code> <strong>Bán hàng</strong>",
    "children": [{
      "t": "img",
      "id": 166
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn menu Đơn hàng → Báo giá → Bấm</code> <strong>Mới</strong>",
    "children": [{
      "t": "img",
      "id": 174
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Nhập các thông tin trên đơn hàng → Click</code> <strong>Hợp đồng</strong>",
    "children": [{
      "t": "img",
      "id": 175
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Chọn hợp đồng áp dụng",
    "children": [{
      "t": "img",
      "id": 176
    }, {
      "t": "p",
      "html": "⚠️ Lưu ý: Khi chọn hợp đồng, hệ thống sẽ tự động gợi ý sản phẩm và số lượng theo hợp đồng. Có thể chỉnh sửa lại số lượng nếu cần. Đơn giá sản phẩm sẽ được lấy theo giá trong hợp đồng, không phải giá mặc định trên phần mềm."
    }]
  }],
  "toc": [{
    "id": "quan-ly-gia-san-pham",
    "label": "Quản lý giá sản phẩm"
  }, {
    "id": "chiet-khau-va-khach-hang-than-thiet",
    "label": "Chiết khấu và Khách hàng thân thiết"
  }, {
    "id": "gioi-han-chiet-khau",
    "label": "Giới hạn chiết khấu"
  }, {
    "id": "quan-ly-khach-hang",
    "label": "Quản lý khách hàng"
  }, {
    "id": "don-hang",
    "label": "Đơn hàng"
  }, {
    "id": "su-dung-chuong-trinh-khuyen-mai-tren-don",
    "label": "Sử dụng Chương trình khuyến mãi trên đơn"
  }, {
    "id": "xuat-kho-ban-hang",
    "label": "Xuất kho bán hàng"
  }, {
    "id": "giuc-don",
    "label": "Giục đơn"
  }, {
    "id": "don-giao-hang",
    "label": "Đơn giao hàng"
  }, {
    "id": "yeu-cau-doi-tra-hang",
    "label": "Yêu cầu đổi trả hàng"
  }, {
    "id": "hop-dong",
    "label": "Hợp đồng"
  }],
  "faq": [{
    "q": "Bảng giá tự động áp dụng cho khách hàng nước ngoài như thế nào?",
    "a": "Nếu bảng giá có thiết lập <strong>Nhóm quốc gia</strong>, mỗi liên hệ khách hàng được tạo mới có quốc gia thuộc nhóm này sẽ tự động được nhận diện và áp dụng bảng giá tương ứng."
  }, {
    "q": "Làm sao phân biệt giá bán online và giá bán offline?",
    "a": "Dùng <strong>Tab Thương mại điện tử</strong> trên bảng giá để kiểm soát cách giá hiển thị và áp dụng trên website bán hàng, tách riêng với giá bán offline."
  }, {
    "q": "Đơn hàng mới tạo ra ở trạng thái nào?",
    "a": "Sau khi nhập thông tin và bấm <strong>Lưu</strong>, đơn ở trạng thái <strong>Báo giá</strong>; cần xác nhận và thực hiện các bước tiếp theo để xuất kho và giao hàng."
  }, {
    "q": "Áp dụng voucher ZNS trên đơn bán thế nào?",
    "a": "Lấy mã code voucher từ QR khách gửi (qua ViQR/iCheck hoặc nhập tay), vào đơn hàng chọn <strong>Mã phiếu giảm giá</strong>, nhập code rồi bấm <strong>Áp dụng</strong>."
  }, {
    "q": "Đơn hàng tạo từ hợp đồng có tự áp giá đã ký không?",
    "a": "Có. Hợp đồng thiết lập số lượng và đơn giá cố định; các đơn hàng tạo từ hợp đồng sẽ tự động áp dụng giá đã ký, đảm bảo nhất quán."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/ban-hang.js", error: String((e && e.message) || e) }); }

// content/bang-luong.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["bang-luong"] = {
  "slug": "bang-luong",
  "title": "Bảng lương",
  "icon": "Money",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "phu-cap-hop-dong",
    "text": "Phụ cấp hợp đồng"
  }, {
    "t": "h3",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Tổng hợp danh sách phụ cấp của công ty"
  }, {
    "t": "h3",
    "id": "cac-buoc-tao-phu-cap",
    "text": "Các bước tạo phụ cấp"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Bảng lương → Cấu hình → Phụ cấp hợp đồng → Mới</code>",
    "children": [{
      "t": "img",
      "id": 422
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên form tạo phụ cấp → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 423
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Số tiền hàng tháng", "Số tiền được cấp hàng tháng cho nhân sự. Nếu điền số tiền ở đây thì khi thêm mới phụ cấp cho nhân viên trên hợp đồng \\=&gt; tổng tiền phụ cấp tự động được điền bằng số tiền cấu hình ở đây"], ["Số tiền giới hạn dưới", "Nếu điền số tiền ở đây thì khi chỉnh sửa tổng tiền phụ cấp trên hợp đồng, số tiền chỉnh sửa không được bé hơn số tiền cấu hình ở đây"], ["Số tiền giới hạn trên", "Nếu điền số tiền ở đây thì khi chỉnh sửa tổng tiền phụ cấp trên hợp đồng, số tiền chỉnh sửa không được lớn hơn số tiền cấu hình ở đây"]]
    }]
  }, {
    "t": "h2",
    "id": "kieu-dong-gop-tu-luong",
    "text": "Kiểu đóng góp từ lương"
  }, {
    "t": "h3",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Tổng hợp các kiểu đóng góp từ lương, VD: BHXH, BHTN, BHYT, Công đoàn, thiết lập tỷ lệ đóng góp của từng kiểu đóng góp \\=&gt; khi tính lương sẽ tính bảo hiểm theo tỷ lệ được thiết lập tại đây"
  }, {
    "t": "h3",
    "id": "cac-buoc-tao-kieu-dong-gop-tu-luong",
    "text": "Các bước tạo kiểu đóng góp từ lương"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Bảng lương → Đóng góp</code> &amp; <code>Bảo hiểm → Kiểu đóng góp từ lương → Mới</code>",
    "children": [{
      "t": "img",
      "id": 424
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên form tạo kiểu đóng góp → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 425
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Số ngày không hưởng lương tối đa", "Nếu thiết lập số ngày này thì khi tính lương, phần mềm sẽ so sánh số ngày làm việc thực tế của nhân sự để tính bảo hiểm. Nếu số ngày làm việc của nhân sự bé hơn hoặc bằng số ngày được thiết lập ở đây thì nhân viên sẽ không được tính bảo hiểm"]]
    }]
  }, {
    "t": "h2",
    "id": "dang-ky-dong-gop",
    "text": "Đăng ký đóng góp"
  }, {
    "t": "h3",
    "id": "mo-ta-3",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Tổng hợp danh sách nhân sự đóng bảo hiểm, theo dõi lịch sử đóng, cơ sở tính toán và các tỷ lệ đóng góp tương ứng"
  }, {
    "t": "h3",
    "id": "tao-dong-gop-tu-luong",
    "text": "Tạo đóng góp từ lương"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Bảng lương → Đóng góp</code> &amp; <code>Bảo hiểm → Đăng ký đóng góp → Mới</code>",
    "children": [{
      "t": "img",
      "id": 426
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên form đăng ký đóng góp → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 427
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Cơ sở tính toán", "Giá trị tính toán bảo hiểm. Tự động fill \\= lương bảo hiểm trên hợp đồng nhân sự, có thể chỉnh sửa"], ["Ngày tham dự", "Ngày bắt đầu tính bảo hiểm. Sau khi ấn xác nhận, ngày tham dự tự động fill bằng ngày ngày bắt đầu dưới chi tiết lịch sử đóng góp"]]
    }, {
      "t": "p",
      "html": "<strong>Lưu ý:</strong> 1 nhân sự chỉ có duy nhất một đăng ký đóng góp tương ứng với 1 kiểu đóng góp đã xác nhận. Trong trường hợp nhân sự thay đổi tỷ lệ đóng góp hoặc cơ sở tính toán \\=&gt; dùng button tương ứng."
    }]
  }, {
    "t": "h3",
    "id": "thay-doi-ty-le-dong-gop",
    "text": "Thay đổi tỷ lệ đóng góp"
  }, {
    "t": "h3",
    "id": "cach-1",
    "text": "Cách 1"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Trên form đăng ký đóng góp → Ấn button thay đổi tỷ lệ đóng góp</code>",
    "children": []
  }, {
    "t": "img",
    "id": 428
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên form thay đổi → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 429
    }]
  }, {
    "t": "h3",
    "id": "cach-2",
    "text": "Cách 2"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Trên listview đăng ký đóng góp → chọn nhân sự muốn thay đổi tỷ lệ đóng góp → Tác vụ → Thay đổi tỷ lệ đóng góp</code>",
    "children": []
  }, {
    "t": "h3",
    "id": "luu-y-chi-chon-nhung-nhan-su-thay-doi-cung-1-",
    "text": "Lưu ý: Chỉ chọn những nhân sự thay đổi cùng 1 tỷ lệ"
  }, {
    "t": "img",
    "id": 430
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Điền thông tin trên form thay đổi → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 431
    }]
  }, {
    "t": "h3",
    "id": "thay-doi-co-so-tinh-toan",
    "text": "Thay đổi cơ sở tính toán"
  }, {
    "t": "h3",
    "id": "cach-1-2",
    "text": "Cách 1"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Trên form đăng ký đóng góp → Ấn button thay đổi cơ sở tính toán</code>",
    "children": []
  }, {
    "t": "img",
    "id": 432
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên form thay đổi → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 433
    }]
  }, {
    "t": "h3",
    "id": "cach-2-2",
    "text": "Cách 2"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Trên listview đăng ký đóng góp → chọn nhân sự muốn thay đổi cơ sở tính toán → Tác vụ → Thay đổi cơ sở tính toán hàng loạt</code>",
    "children": []
  }, {
    "t": "h3",
    "id": "luu-y-chi-chon-nhung-nhan-su-thay-doi-cung-1--2",
    "text": "Lưu ý: Chỉ chọn những nhân sự thay đổi cùng 1 cơ sở tính toán"
  }, {
    "t": "img",
    "id": 434
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Điền thông tin trên form thay đổi → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 435
    }]
  }, {
    "t": "h2",
    "id": "kiem-tra-phieu-luong",
    "text": "Kiểm tra Phiếu lương"
  }, {
    "t": "step",
    "num": "1",
    "html": "Kiểm tra thông tin chung",
    "children": [{
      "t": "ul",
      "items": ["Là thông tin của nhân sự được thiết lập theo hợp đồng", "Lưu ý: Cấu trúc lương. Mỗi cấu trúc lương khác nhau sẽ ảnh hưởng đến cách tính trên từng phiếu lương", "Smart button:", "Chi tiết kế hoạch tăng ca: Chi tiết kế hoạch tăng ca của nhân sự ở trạng thái đã phê duyệt theo tháng tính lương", "Chi tiết chấm công: Dữ liệu chấm công của nhân sự theo tháng tính lương", "Chi tiết nghỉ: Tổng hợp phiếu nghỉ phép của nhân sự trong tháng tính lương"]
    }, {
      "t": "img",
      "id": 436
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Kiểm tra thông tin trên Tab thời gian làm việc",
    "children": []
  }, {
    "t": "h3",
    "id": "mo-ta-4",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Đây là các master data để tính lương, được tổng hợp từ các module liên quan bao gồm: Nhân viên, Hợp đồng, Chấm công, Tăng ca, Ngày nghỉ"
  }, {
    "t": "h3",
    "id": "thong-tin-cac-truong",
    "text": "Thông tin các trường"
  }, {
    "t": "p",
    "html": "1. <strong>Thông tin thời gian làm việc</strong>"
  }, {
    "t": "img",
    "id": 437
  }, {
    "t": "ul",
    "items": ["Số giờ làm việc theo lịch: Số giờ công định mức nhân sự phải làm theo thiết lập của lịch làm việc", "Số giờ phải làm: Số giờ nhân sự phải làm theo hợp đồng", "Số giờ đã làm (thực tế) \\= số giờ làm việc hợp lệ của nhân sự trên module chấm công ( bao gồm số giờ của ngày công bình thường \\+ công lễ \\+ công phép)", "Lưu ý logic lấy max 2-3 thứ 7 đối với khối BP ăn lịch được thiết lập cơ chế tính công định mức linh hoạt và có đi làm thứ 7 - có chặn theo ngày bắt đầu và ngày kết thúc hợp đồng"]
  }, {
    "t": "p",
    "html": "2. <strong>Thông tin nghỉ</strong>"
  }, {
    "t": "img",
    "id": 438
  }, {
    "t": "ul",
    "items": ["Tổng số giờ nghỉ: tổng số giờ nghỉ có lương của nhân sự"]
  }, {
    "t": "p",
    "html": "3. <strong>Thông tin tóm tắt có mặt</strong>"
  }, {
    "t": "img",
    "id": 439
  }, {
    "t": "ul",
    "items": ["Số giờ có mặt hợp lệ \\= Số giờ đi làm thực tế của nhân sự có chấm công (không bao gồm nghỉ có lương)", "Quỹ thời gian đi muộn về sớm (chỉ áp dụng với khối BP)", "Số giờ bù chế độ sau sinh (chỉ áp dụng với nhân sự được thiết lập thời gian nghỉ sinh trên hợp đồng): chỉ bù trên những ngày nhân sự có công &gt; 0 trên module chấm công và theo lịch làm việc", "Số giờ tăng ca bù định mức \\= số giờ phải làm - số giờ đi làm thực tế - quỹ thời gian đi muộn về sớm - số giờ bù chế độ sau sinh (ca tối không bù vào cđm)"]
  }, {
    "t": "p",
    "html": "4. <strong>Chi tiết lịch làm việc</strong>"
  }, {
    "t": "img",
    "id": 440
  }, {
    "t": "ul",
    "items": ["Số giờ có mặt hợp lệ \\= số giờ có mặt hợp lệ trên thông tin tóm tắt có mặt \\+ quỹ thời gian đi muộn về sớm \\+ Số giờ bù chế độ sau sinh - Số giờ tăng ca bù định mức", "<strong>Tỷ lệ chi trả</strong> \\= (số giờ có mặt hợp lệ \\+ tổng số giờ nghỉ <em>có lương</em>)/ Số giờ làm việc theo lịch  (Tỷ lệ hưởng lương của nhân sự trong tháng tính lương)"]
  }, {
    "t": "p",
    "html": "5. <strong>Chi tiết hoạt động</strong>"
  }, {
    "t": "img",
    "id": 441
  }, {
    "t": "ul",
    "items": ["Phân loại công của nhân sự theo tháng tính lương"]
  }, {
    "t": "p",
    "html": "6. <strong>Dữ liệu input ngoài</strong>"
  }, {
    "t": "img",
    "id": 442
  }, {
    "t": "ul",
    "items": ["Dữ liệu được bổ sung thêm trên phiếu lương bằng cách import hoặc từ module nhân viên:", "Khen", "Thưởng", "Truy thu", "Truy lĩnh", "Phạt khác", "Thu cọc…."]
  }, {
    "t": "p",
    "html": "7. <strong>Chi tiết đóng góp từ lương</strong>"
  }, {
    "t": "img",
    "id": 443
  }, {
    "t": "ul",
    "items": ["Các khoản đóng góp của nhân sự được thiết lập trên hợp đồng: Bảo hiểm xã hội…"]
  }, {
    "t": "p",
    "html": "8. <strong>Bảng dữ liệu tăng ca</strong>"
  }, {
    "t": "img",
    "id": 444
  }, {
    "t": "ul",
    "items": ["Ngày giờ bắt đầu- ngày giờ kết thúc: Ngày tăng ca theo kế hoạch tăng ca của nhân sự", "Số giờ thực tế \\= Số giờ thực tế trên chi tiết kế hoạch tăng ca của nhân sự ngày tương ứng", "Số giờ bù định mức \\= tổng giờ được tính theo công thức: số giờ phải làm -số giờ đi làm thực tế - quỹ thời gian đi muộn về sớm - số giờ bù chế độ sau sinh \\=&gt; sau đó phân bổ vào từng line trên bảng dữ liệu tăng ca theo cột số giờ thực tế", "Số giờ được tính \\= số giờ thực tế - số giờ bù định mức", "Tiền tiêu chuẩn mỗi giờ \\= tiền tiêu chuẩn mỗi giờ trên chi tiết kế hoạch tăng ca của nhân sự ngày tương ứng. Công thức tính \\= tổng tiền trên hợp đồng / số giờ làm việc theo lịch", "Số giờ tăng ca quy đổi \\= số giờ tăng ca sau khi đã nhân tỷ lệ chi trả \\= số giờ được tính * tỷ lệ chi trả", "Số giờ tăng ca khả dụng: số giờ tăng ca cuối cùng được tính của nhân sự sau khi đã áp dụng quy tắc chặn 5% không.", "Số giờ vượt định mức \\= chỉ áp dụng với khối BP có chặn 5% OT \\= Tổng Số giờ tăng ca quy đổi - Số giờ tăng ca khả dụng", "Tổng tiền tăng ca \\= Số giờ tăng ca khả dụng * Tiền tiêu chuẩn mỗi giờ"]
  }, {
    "t": "step",
    "num": "1",
    "html": "Kiểm tra thông tin trên Tab Chi tiết tính lương",
    "children": []
  }, {
    "t": "h3",
    "id": "mo-ta-5",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Tính toán lương dựa trên dữ liệu đầu vào của Tab thông tin thời gian làm việc"
  }, {
    "t": "h3",
    "id": "cac-quy-tac-tinh-luong",
    "text": "Các quy tắc tính lương"
  }, {
    "t": "table",
    "headers": ["STT", "", "NỘI DUNG", "CÁCH GHI NHẬN/CÁCH TÍNH", "Ghi chú"],
    "rows": [["", "<strong>LOẠI TÍNH THUẾ TNCN</strong>", "", "có 2 loại: Luỹ tiến/ Khấu trừ 10%", "Lấy theo loại HĐ: HĐLĐ theo cách tính luỹ tiến, HĐTV và HDDV: khấu trừ 10%"], ["<strong>1</strong>", "<strong>TỶ LỆ THỬ VIỆC</strong>", "", "", ""], ["<strong>2</strong>", "<strong>MỨC THU NHẬP</strong>", "<strong>TỔNG CỘNG (LƯƠNG GROSS)</strong>", "<strong>\\[3\\] \\+ \\[4\\] \\+ \\[5\\]</strong>", ""], ["<strong>3</strong>", "", "<strong>LƯƠNG CHÍNH (P1)</strong>", "\\= Mức lương đóng BHXH C\\&amp;B nhập thông tin", ""], ["<strong>4</strong>", "", "<strong>LƯƠNG HIỆU SUẤT (P2)</strong>", "\\= Tách từ tổng lương của nhân sự ( \\= Lương Gross - Lương chính - Thưởng tuân thủ) C\\&amp;B nhập thông tin", ""], ["<strong>5</strong>", "", "<strong>THƯỞNG TUÂN THỦ</strong>", "Cấp 1,2: 2 triệu Cấp 3,4,5,6: 1 triệu Cấp 7,8,9: 500k C\\&amp;B nhập thông tin", ""], ["<strong>6</strong>", "<strong>PHỤ CẤP</strong>", "<strong>PHỤ CẤP ĂN CA</strong>", "Hiện mới có bên kênh Sale GT (khoản này đang đi tiền bên ngoài - theo ĐNTT tiền công tác phí, chưa đưa vào bảng lương do cũng không tính thuế TNCN trên khoản này)", ""], ["<strong>7</strong>", "", "<strong>PHỤ CẤP KHÁC</strong>", "", ""], ["<strong>8</strong>", "<strong>CÔNG CHUẨN</strong>", "", "Full time \\= Số ngày trong tháng - SL ngày chủ nhật - 02 thứ 7/tháng (HCNS, CN, KT, Trợ lý - Ngọc) Full time \\= Số ngày trong tháng - SL ngày chủ nhật (các bộ phận còn lại) Partime \\= Fulltime/2 <a href=\"https://docs.google.com/spreadsheets/d/1AT8uX1aWLQm5qX8d-f36viqktOHuKlp4Mu1SqQXmxA8/edit?gid=180441419#gid=180441419\" target=\"_blank\" rel=\"noopener\">Link</a>", ""], ["<strong>9</strong>", "<strong>Σ CÔNG TÍNH LƯƠNG</strong>", "", "", ""], ["<strong>10</strong>", "<strong>CÔNG HƯỞNG LƯƠNG CHÍNH THỨC</strong>", "<strong>CÔNG LV TT</strong>", "Theo chấm công trên phần mềm", ""], ["<strong>11</strong>", "", "<strong>PHÉP</strong>", "Theo dữ liệu ngày phép có hưởng lương trên phần mềm (Nhân viên chính thức/Ký HDLD được hưởng 01 phép/tháng, thử việc được ghi nhận phép &gt;&gt; Chính thức được sử dụng các phép trong thời gian thử việc)", ""], ["<strong>12</strong>", "", "<strong>CHẾ ĐỘ</strong>", "Công phép nghỉ hiếu/hỉ được duyệt", "Phần này e phải bóc riêng để đổ ra bảng chấm công nhé Thủy, vì theo luật phần công nghỉ chế độ theo luật phải được theo dõi riêng trên BCC (Công chế độ là công nghỉ hiếu, hỉ)"], ["<strong>13</strong>", "", "<strong>LỄ</strong>", "Theo quy định của luật &gt;&gt; Nhờ Thủy HD set ngày nghỉ lễ", ""], ["<strong>14</strong>", "<strong>CÔNG HƯỞNG LƯƠNG THỬ VIỆC</strong>", "<strong>CÔNG LV TT</strong>", "Theo chấm công trên phần mềm", ""], ["<strong>15</strong>", "", "<strong>LỄ</strong>", "Theo quy định của luật &gt;&gt; Nhờ Thủy HD set ngày nghỉ lễ", ""], ["", "<strong>THU NHẬP THEO NGÀY CÔNG</strong>", "<strong>LƯƠNG CHÍNH THEO NGÀY CÔNG</strong>", "\\= \\[3\\]/\\[8\\]* Công hưởng lương chính thức \\+ \\[3\\]/\\[8\\]*Công hưởng lương thử việc *\\[1\\]", "Chú ý công theo giai đoạn thử viêc, chính thức"], ["<strong>17</strong>", "", "<strong>% HOÀN THÀNH CV</strong>", "", ""], ["<strong>18</strong>", "", "<strong>LƯƠNG HIỆU SUẤT</strong>", "\\= \\[4\\]*\\[17\\] * Tổng công làm việc thực tế/Tổng công định mức", "Chú ý tách rõ giai đoạn thử việc chính thửc"], ["<strong>19</strong>", "", "<strong>THƯỞNG TUÂN THỦ</strong>", "\\= Thưởng tuân thủ - phạt đi muộn/về sớm - phạt không đeo thẻ tên/đồng phục -.... khoản Thưởng tuân thủ (thử việc) \\= tỷ lệ thử việc*Tổng công tính lương*Thưởng tuân thủ/Công chuẩn Thưởng tuân thủ (chính thức) \\= 100%*Tổng công tính lương*Thưởng tuân thủ/Công chuẩn", ""], ["<strong>20</strong>", "<strong>TIỀN LƯƠNG LÀM THÊM GIỜ</strong>", "<strong>TỔNG GIỜ LÀM THÊM</strong>", "Cập nhật từ phần mềm", ""], ["<strong>21</strong>", "", "<strong>LƯƠNG THÊM GIỜ KHÔNG CHỊU THUẾ</strong>", "Tính trên lương Gross Tổng lương thêm giờ theo hệ số 1", "Tổng lương thêm giờ theo hệ số 1. Chú ý thử việc - chính thức"], ["<strong>22</strong>", "", "<strong>LƯƠNG THÊM GIỜ CHỊU THUẾ</strong>", "Tính trên lương Gross Tổng lương thêm giờ theo hệ số tăng thêm (tỷ lệ - 100%)", "Tổng lương thêm giờ theo hệ số tăng thêm. Chú ý thử việc - chính thức"], ["<strong>23</strong>", "", "<strong>TỔNG LƯƠNG THÊM GIỜ</strong>", "<strong>\\=\\[21\\]+\\[22\\]</strong>", ""], ["<strong>24</strong>", "<strong>PHỤ CẤP</strong>", "<strong>PHỤ CẤP ĂN CA</strong>", "chưa có", ""], ["<strong>25</strong>", "", "<strong>PHỤ CẤP KHÁC</strong>", "chưa có", ""], ["<strong>26</strong>", "", "<strong>TỔNG PHỤ CẤP</strong>", "\\[24\\] \\+\\[25\\]", ""], ["<strong>27</strong>", "<strong>TIỀN THƯỞNG</strong>", "<strong>THƯỞNG HOA HỒNG</strong>", "Thưởng theo chính sách &gt;&gt; Import lên", ""], ["<strong>28</strong>", "", "<strong>THƯỞNG NÓNG</strong>", "Thưởng theo chính sách &gt;&gt; Import lên", ""], ["<strong>29</strong>", "", "<strong>THƯỞNG LỄ TẾT</strong>", "Thưởng theo chính sách &gt;&gt; Import lên", ""], ["<strong>30</strong>", "", "<strong>TỔNG THƯỞNG</strong>", "\\=\\[27\\] \\+ \\[28\\] \\+\\[29\\]", ""], ["<strong>31</strong>", "<strong>TRUY LĨNH (+)</strong>", "", "theo phát sinh", ""], ["<strong>32</strong>", "<strong>KHOẢN BỔ SUNG KHÁC (NẾU CÓ) (+)</strong>", "", "theo phát sinh", ""], ["<strong>33</strong>", "<strong>TRUY THU (-)</strong>", "", "theo phát sinh", ""], ["<strong>34</strong>", "<strong>TỔNG THU NHẬP</strong>", "", "\\= Tổng thu nhập theo ngày công \\+ Tổng lương thêm giờ \\+ Tổng phụ cấp \\+ Tổng thưởng \\+ Truy lĩnh \\+ Các khoản bổ sung khác - Truy thu", ""], ["<strong>35</strong>", "<strong>BẢO HIỂM XÃ HỘI</strong>", "<strong>BHXH CÔNG TY (21.5%)</strong>", "21,5%* Lương chính", ""], ["<strong>36</strong>", "", "<strong>BHXH NLĐ (10.5%) (-)</strong>", "10,5%* Lương chính", ""], ["<strong>37</strong>", "<strong>CÁC KHOẢN MIỄN THUẾ</strong>", "", "\\= Các khoản ăn ca, điện thoại (chưa có) \\+ OT miễn thuế", ""], ["<strong>38</strong>", "<strong>THU NHẬP CHỊU THUẾ</strong>", "", "\\= Tổng thu nhập - Các khoản miễn thuế", ""], ["<strong>39</strong>", "<strong>KHOẢN GIẢM TRỪ</strong>", "<strong>GTBT</strong>", "15.500.000 đồng", "Đối với loại tính thuế luỹ tiến"], ["<strong>40</strong>", "", "<strong>SL NPT</strong>", "", ""], ["<strong>41</strong>", "", "<strong>GT NPT</strong>", "6.200.000 đồng", "Đối với loại tính thuế luỹ tiến"], ["<strong>42</strong>", "", "<strong>BHXH - NLD (10,5%)</strong>", "10,5%* Lương chính", ""], ["<strong>43</strong>", "<strong>THU NHẬP TÍNH THUẾ</strong>", "", "\\= Thu nhập chịu thuế - Tổng các khoản giảm trừ", ""], ["<strong>44</strong>", "<strong>THUẾ TNCN</strong>", "", "10% hoặc Lũy tiến Xem lại công thức và mốc đã được điều chỉnh từ 01/01/2026 theo luật mới", ""], ["<strong>45</strong>", "<strong>THU NHẬP THỰC LĨNH</strong>", "", "\\= Tổng thu nhập - 10,5%BHXH - Thuế TNCN", ""], ["<strong>46</strong>", "<strong>LƯƠNG CK</strong>", "", "\\= Lấy theo trạng thái từ checklis hồ sơ đầu vào/nghỉ việc Đang làm việc: chuyển khoản áp dụng với nhân sự đã nộp đủ hồ sơ đầu vào Nghỉ việc: chuyển khoản áp dụng với nhân sự đã nộp đủ hồ sơ đầu vào \\+ đủ hồ sơ nghỉ việc", ""], ["<strong>47</strong>", "<strong>LƯƠNG TẠM GIỮ</strong>", "", "Đang làm việc: Chưa hoàn thiện hồ sơ đầu vào Nghỉ việc: Chưa nộp đủ đủ hồ sơ đầu vào \\+ hồ sơ nghỉ việc", ""], ["<strong>48</strong>", "<strong>TÌNH TRẠNG TRẢ LƯƠNG (GL/CK)</strong>", "", "Note: GIỮ LƯƠNG hoặc CHUYỂN KHOẢN", ""], ["<strong>49</strong>", "<strong>THÔNG TIN TẠM GIỮ \\+ THÔNG TIN CHUYỂN KHOẢN</strong>", "<strong>GL (do thiếu hồ sơ nhân sự)</strong>", "Fill lý do bị giữ lương: Thiếu hồ sơ nhân sự", ""], ["<strong>50</strong>", "", "<strong>GL (Do chưa hoàn thiện hồ sơ nghỉ việc)</strong>", "Fill lý do bị giữ lương: Thiếu hồ sơ nghỉ việc", ""], ["<strong>51</strong>", "", "<strong>LÝ DO TRUY THU</strong>", "Fill lý do truy thu", ""], ["<strong>52</strong>", "", "<strong>LÝ DO TRUY LĨNH</strong>", "Fill lý do truy lĩnh", ""], ["<strong>53</strong>", "", "<strong>SỐ TÀI KHOẢN</strong>", "Fill theo thông tin trong hồ sơ nhân viên C\\&amp;B nhập thông tin", ""], ["<strong>54</strong>", "", "<strong>TÊN NGÂN HÀNG</strong>", "Fill theo thông tin trong hồ sơ nhân viên C\\&amp;B nhập thông tin", ""], ["<strong>55</strong>", "", "<strong>GHI CHÚ</strong>", "Bổ sung thêm trường này", ""]]
  }],
  "toc": [{
    "id": "phu-cap-hop-dong",
    "label": "Phụ cấp hợp đồng"
  }, {
    "id": "kieu-dong-gop-tu-luong",
    "label": "Kiểu đóng góp từ lương"
  }, {
    "id": "dang-ky-dong-gop",
    "label": "Đăng ký đóng góp"
  }, {
    "id": "kiem-tra-phieu-luong",
    "label": "Kiểm tra Phiếu lương"
  }],
  "faq": [{
    "q": "Dữ liệu để tính lương được lấy từ đâu?",
    "a": "Phiếu lương tổng hợp master data từ các module liên quan: <strong>Nhân viên, Hợp đồng, Chấm công, Tăng ca, Ngày nghỉ</strong>."
  }, {
    "q": "Thiết lập các khoản BHXH, BHYT, BHTN ở đâu?",
    "a": "Tại <code>Bảng lương → Đóng góp &amp; Bảo hiểm → Kiểu đóng góp từ lương</code>, thiết lập tỷ lệ đóng góp cho từng kiểu; khi tính lương hệ thống sẽ tính bảo hiểm theo tỷ lệ này."
  }, {
    "q": "Thay đổi tỷ lệ đóng góp cho nhiều nhân sự cùng lúc được không?",
    "a": "Được. Trên listview Đăng ký đóng góp, chọn các nhân sự (lưu ý chỉ chọn nhóm cùng 1 tỷ lệ) → <strong>Tác vụ → Thay đổi tỷ lệ đóng góp</strong>. Cách thay đổi cơ sở tính toán cũng tương tự."
  }, {
    "q": "Kiểm tra phiếu lương cần xem những tab nào?",
    "a": "Kiểm tra thông tin chung, <strong>Tab thời gian làm việc</strong> (thời gian làm, nghỉ, tăng ca, đóng góp từ lương…) và <strong>Tab Chi tiết tính lương</strong> (các quy tắc tính lương)."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/bang-luong.js", error: String((e && e.message) || e) }); }

// content/booking.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["booking"] = {
  "slug": "booking",
  "title": "Booking",
  "icon": "Calendar",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "ul",
    "items": ["<strong>Booking tài nguyên</strong> là việc đặt trước quyền sử dụng một nguồn lực trong công ty như phòng họp, xe công tác, thiết bị, hay máy móc. Nhân viên hoặc phòng ban sẽ đăng ký trên hệ thống để đảm bảo tài nguyên đó được giữ chỗ cho đúng thời gian và mục đích sử dụng, tránh trùng lặp hay lãng phí."]
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "loai-tai-nguyen",
    "text": "Loại tài nguyên"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong>"
  }, {
    "t": "p",
    "html": "Phân loại tài nguyên công ty thành từng nhóm, dễ dàng quản lý."
  }, {
    "t": "p",
    "html": "2. <strong>Các bước tạo loại tài nguyên</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Lịch → Cấu hình → Loại tài nguyên → Mới</code>",
    "children": [{
      "t": "img",
      "id": 326
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Điền tên loại tài nguyên",
    "children": [{
      "t": "p",
      "html": "Lưu ý:"
    }, {
      "t": "p",
      "html": "+ Không checkbox \\=&gt; không cho điền số lượng ban đầu khi khai báo tài nguyên, không thực hiện tính toán số lượng khả dụng của tài nguyên theo công thức, vẫn thực hiện check trùng theo thời gian và tài nguyên khi thực hiện booking."
    }, {
      "t": "p",
      "html": "+ Có checkbox Tính toán số lượng khả dụng cho phép điền số lượng ban đầu bên cấu hình tài nguyên, thực hiện tính toán số lượng khả dụng để check trùng khi đặt tài nguyên. Nếu: Số lượng khả dụng &gt; 0: Cho phép lưu phiếu"
    }, {
      "t": "img",
      "id": 327
    }]
  }, {
    "t": "h2",
    "id": "tai-nguyen",
    "text": "Tài nguyên"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả</strong>"
  }, {
    "t": "p",
    "html": "Khai báo tài nguyên của công ty"
  }, {
    "t": "p",
    "html": "2. <strong>Cách tạo tài nguyên mới</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Lịch → Cấu hình → Tài nguyên → Mới</code>",
    "children": [{
      "t": "img",
      "id": 328
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Điền tên tài nguyên",
    "children": [{
      "t": "p",
      "html": "Lưu ý: Với tài nguyên thuộc loại có checkbox tính toán số lượng khả dụng:"
    }, {
      "t": "ul",
      "items": ["Số lượng ban đầu: khai báo số lượng của tài nguyên​", "Số lượng khả dụng \\= Số lượng ban đầu - Tổng số sách ở trạng thái Đang mượn tại bảng Tỉnh trạng mượn - trả"]
    }, {
      "t": "img",
      "id": 329
    }]
  }, {
    "t": "h2",
    "id": "booking-tai-nguyen",
    "text": "Booking tài nguyên"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Lịch → Booking → Mới</code>",
    "children": [{
      "t": "img",
      "id": 330
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập các thông tin trên phiếu booking → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 331
    }]
  }, {
    "t": "h2",
    "id": "phe-duyet-booking",
    "text": "Phê duyệt booking"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng truy cập menu Phê duyệt",
    "children": [{
      "t": "img",
      "id": 332
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Người quản lý ấn chọn phân hệ tương ứng → phê duyệt/từ chối phiếu</code>",
    "children": [{
      "t": "img",
      "id": 333
    }]
  }, {
    "t": "h2",
    "id": "tinh-trang-muon-tra-sach",
    "text": "Tình trạng mượn-trả sách"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong>"
  }, {
    "t": "p",
    "html": "Theo dõi tình trạng sách, lịch sử mượn trả sách và cảnh báo quá hạn trả sách"
  }, {
    "t": "p",
    "html": "2. <strong>Tình trạng mượn - trả</strong>"
  }, {
    "t": "ul",
    "items": ["Ngày mượn: \\= thời gian từ của trường start trên form booking", "Hạn trả: \\= thời gian đến của trường start trên form booking", "Ngày trả: fill sau khi cập nhật trên form sau khi bấm button trả sách", "Tình trạng: fill khi cập nhật trên form sau khi bấm button trả sách", "Trạng thái:", "Đang mượn: Booking sách được phê duyệt và đang trong thời gian mượn (trong ngày mượn - hạn trả)", "Quá hạn: Khi đến hạn trả nhưng chưa bấm trả sách \\=&gt; gửi thông báo đến cho nhân viên book: \"Bạn đang có sách đến hạn trả. Vui lòng sắp xếp trả sách trong thời gian sớm nhất.\"", "Đã trả", "Button: Trả sách.", "Khi click \\=&gt; popup ra form gồm các thông tin:", "Ngày trả (default ngày hôm nay)", "Tình trạng: Note trạng thái", "Sau khi ấn xác nhận \\=&gt; ghi lại các trường vào bản ghi và update trạng thái \\= Đã trả sách"]
  }],
  "toc": [{
    "id": "loai-tai-nguyen",
    "label": "Loại tài nguyên"
  }, {
    "id": "tai-nguyen",
    "label": "Tài nguyên"
  }, {
    "id": "booking-tai-nguyen",
    "label": "Booking tài nguyên"
  }, {
    "id": "phe-duyet-booking",
    "label": "Phê duyệt booking"
  }, {
    "id": "tinh-trang-muon-tra-sach",
    "label": "Tình trạng mượn-trả sách"
  }],
  "faq": [{
    "q": "Loại tài nguyên dùng để làm gì?",
    "a": "Phân loại tài nguyên của công ty thành từng nhóm để dễ quản lý; tạo tại <code>Lịch → Cấu hình → Loại tài nguyên</code>."
  }, {
    "q": "Tạo phiếu booking tài nguyên ở đâu?",
    "a": "Vào <code>Lịch → Booking → Mới</code>, nhập thông tin trên phiếu → <strong>Lưu → Xác nhận</strong>."
  }, {
    "q": "Phiếu booking có cần phê duyệt không?",
    "a": "Có. Phiếu được duyệt tại module <strong>Phê duyệt</strong>; người quản lý chọn phân hệ tương ứng để phê duyệt hoặc từ chối."
  }, {
    "q": "Theo dõi mượn - trả sách thế nào?",
    "a": "Mục <strong>Tình trạng mượn - trả sách</strong> theo dõi tình trạng sách, lịch sử mượn trả và cảnh báo khi quá hạn trả."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/booking.js", error: String((e && e.message) || e) }); }

// content/call-center.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["call-center"] = {
  "slug": "call-center",
  "title": "Call center",
  "icon": "Phone",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồng tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "kiem-tra-trang-web",
    "text": "Kiêm tra trang web"
  }, {
    "t": "p",
    "html": "<strong>Lưu ý:</strong>"
  }, {
    "t": "p",
    "html": "1. Chỉ sử dụng chrome để thực hiện gọi điện"
  }, {
    "t": "p",
    "html": "2. Trước khi gọi điện cần kiểm tra trước cài đặt trang web như sau"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Chọn dấu 2 gạch → Bấm cài đặt</code>",
    "children": [{
      "t": "img",
      "id": 558
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Chọn <strong>Các quyền và tùy chọn cài đặt khác</strong>",
    "children": [{
      "t": "img",
      "id": 559
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bật <strong>Cho phép</strong> 3 hạng mục này lên",
    "children": [{
      "t": "img",
      "id": 560
    }, {
      "t": "ul",
      "items": ["Âm thanh", "Micro", "Cửa sổ bật lên và chuyển hướng"]
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Kiểm tra trang web đã thiết lập đủ hay chưa",
    "children": [{
      "t": "img",
      "id": 561
    }]
  }, {
    "t": "h2",
    "id": "goi-dien",
    "text": "Gọi điện"
  }, {
    "t": "p",
    "html": "<strong>Lưu ý:</strong>"
  }, {
    "t": "p",
    "html": "1. Gọi cho cơ hội nào thì ở trong màn cơ hội đó -&gt; hệ thống mới lưu được lịch sử cuộc gọi gắn với cơ hội"
  }, {
    "t": "p",
    "html": "2. Muốn quay số ngoài thoát khỏi màn chi tiết cơ hội -&gt; bấm gọi điện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập CRM → Cơ hội cần gọi điện → Bấm button</code> <strong>Gọi điện</strong>",
    "children": []
  }, {
    "t": "img",
    "id": 562
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập số điện thoại cần gọi điện → Bấm gọi thoại</code>",
    "children": [{
      "t": "img",
      "id": 563
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Sau khi gọi Lịch sử cuộc gọi sẽ lưu tại Tab Lịch sử cuộc gọi (Đang update)",
    "children": [{
      "t": "img",
      "id": 564
    }]
  }],
  "toc": [{
    "id": "kiem-tra-trang-web",
    "label": "Kiêm tra trang web"
  }, {
    "id": "goi-dien",
    "label": "Gọi điện"
  }],
  "faq": [{
    "q": "Dùng trình duyệt nào để gọi điện?",
    "a": "Chỉ sử dụng <strong>Chrome</strong> để thực hiện gọi điện."
  }, {
    "q": "Cần chuẩn bị gì trước khi gọi điện?",
    "a": "Kiểm tra cài đặt trang web: vào <strong>Cài đặt → Các quyền và tùy chọn cài đặt khác</strong> → bật cho phép các quyền cần thiết, rồi kiểm tra trang web đã thiết lập đủ chưa."
  }, {
    "q": "Vì sao cuộc gọi không được lưu vào cơ hội?",
    "a": "Phải gọi từ trong màn chi tiết của cơ hội đó thì hệ thống mới lưu lịch sử cuộc gọi gắn với cơ hội. Muốn quay số ngoài thì thoát khỏi màn chi tiết cơ hội rồi bấm Gọi điện."
  }, {
    "q": "Xem lịch sử cuộc gọi ở đâu?",
    "a": "Lịch sử cuộc gọi được lưu tại <strong>Tab Lịch sử cuộc gọi</strong> trên cơ hội."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/call-center.js", error: String((e && e.message) || e) }); }

// content/cham-cong.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["cham-cong"] = {
  "slug": "cham-cong",
  "title": "Chấm công",
  "icon": "Calendar",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "tao-lich-lam-viec",
    "text": "Tạo lịch làm việc"
  }, {
    "t": "h3",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Lịch làm việc của công ty, nhân viên theo quy định của Ban lãnh đạo công ty. Thời gian làm việc có tác dụng trong việc tính công cho nhân sự"
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Chấm công → Cấu hình → Thời gian làm việc → Mới</code>",
    "children": [{
      "t": "img",
      "id": 313
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form tạo lịch làm việc → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 314
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Giờ trung bình mỗi ngày", "\\= Tổng số giờ làm việc trong 1 tuần / Số ngày làm việc trong tuần."], ["Cơ chế tính công định mức", "Thiết lập công định mức / tháng của nhân sự, hiển thị trên phiếu lương Linh hoạt: Số ngày làm việc theo lịch trừ đi 2 thứ 7 Cố định: Thiết lập cố định số ngày phải làm Null: Đếm số ngày làm việc theo lịch của nhân sự"], ["Định mức công chi tiết", "Phục vụ các bạn ăn theo lịch công ca, không quan tâm thời gian trên lịch làm việc, chỉ tính đủ thời gian quy định theo <strong>số giờ làm việc mỗi ca</strong> để tính công"], ["Tab thời gian nghỉ chung", "Thiết lập ngày nghỉ lễ cho nhân viên ăn lịch tương ứng, tự động tạo một công lễ trên model attendance"], ["Tab thời gian nghỉ Philipines", "Nhân sự ăn lịch tương ứng mà đi làm những ngày được thiết lập trong này thì không sinh công lễ bên model \\= hr.attendance Ưu tiên ăn theo quy tắc tăng ca được thiết lập có checkbox \"Là ngày lễ Phi\""]]
    }]
  }, {
    "t": "h2",
    "id": "giai-trinh-cong-thuong",
    "text": "Giải trình công thường"
  }, {
    "t": "h3",
    "id": "tao-giai-trinh-cong-thuong",
    "text": "Tạo giải trình công thường"
  }, {
    "t": "h4",
    "id": "truong-hop-duoc-tao-giai-trinh-cong",
    "text": "Trường hợp được tạo giải trình công"
  }, {
    "t": "h3",
    "id": "khi-nhan-vien-khong-co-du-cong-theo-lich-lam-",
    "text": "Khi nhân viên không có đủ công theo lịch làm việc (công nhỏ hơn 1\\) trên attendance."
  }, {
    "t": "h4",
    "id": "luu-y-khi-tao-giai-trinh-cong",
    "text": "Lưu ý khi tạo giải trình công"
  }, {
    "t": "ul",
    "items": ["<em>Nhân sự tạo giải trình công theo first in và last out chứ không giải trình công mỗi giờ chấm công bị thiếu</em>"]
  }, {
    "t": "p",
    "html": "VD: Nhân sự cần giải trình đầy đủ giờ đến và về để được ghi nhận 1 công làm việc của 1 ngày trong các trường hợp sau"
  }, {
    "t": "p",
    "html": "(1) Nhân sự đi làm quên chấm công buổi sáng hoặc buổi chiều"
  }, {
    "t": "p",
    "html": "(2) Nhân sự sáng đi làm tại văn phòng, chiều đi đào tạo hoặc ngược lại"
  }, {
    "t": "p",
    "html": "(3) Nhân sự làm việc tại các văn phòng khác nhau nhưng quên chấm công…"
  }, {
    "t": "ul",
    "items": ["<em>Nhân sự cần hoàn tất mọi thủ tục ở công ty trước khi nghỉ bao gồm các việc liên quan đến công ca (tính lương nhân sự)</em>"]
  }, {
    "t": "h4",
    "id": "cac-buoc-thuc-hien-2",
    "text": "Các bước thực hiện"
  }, {
    "t": "p",
    "html": "1. Cách 1"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Nhân viên truy cập menu Chấm công → Giải trình công → Giải trình công → Mới</code>",
    "children": [{
      "t": "img",
      "id": 315
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập các thông tin trên form → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 316
    }, {
      "t": "p",
      "html": "2. Cách 2: Nhân sự có thể tạo giải trình công bình thường trực tiếp khi xem dữ liệu chấm công. Tất cả các công nhỏ hơn 1 đều sẽ hiện button Giải trình công để nhân sự tiến hành tạo giải trình."
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Người dùng truy cập menu Chấm công → Giải trình công → Giải trình công → Mới</code>",
    "children": [{
      "t": "img",
      "id": 317
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "<code>Nhập các thông tin trên form → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 316
    }]
  }, {
    "t": "h3",
    "id": "phe-duyet-giai-trinh-cong-thuong",
    "text": "Phê duyệt giải trình công thường"
  }, {
    "t": "h4",
    "id": "cach-1",
    "text": "Cách 1"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Tại màn hình Dashboard → Phê duyệt cần làm → Giải trình công</code>",
    "children": [{
      "t": "img",
      "id": 318
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người quản lý ấn phê duyệt hoặc từ chối phiếu của nhân sự mình quản lý",
    "children": [{
      "t": "img",
      "id": 319
    }]
  }, {
    "t": "h4",
    "id": "cach-2",
    "text": "Cách 2"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng truy cập menu Phê duyệt",
    "children": [{
      "t": "img",
      "id": 292
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Người quản lý ấn chọn phân hệ tương ứng → phê duyệt/từ chối phiếu</code>",
    "children": [{
      "t": "img",
      "id": 320
    }]
  }, {
    "t": "h2",
    "id": "cong-theo-point",
    "text": "Công theo point"
  }, {
    "t": "p",
    "html": "1. Mô tả: Công theo <strong>point</strong> có tác dụng chuẩn hoá cách tính công, giúp công ty linh hoạt quy đổi giờ làm, ca làm hay tăng ca thành điểm thống nhất. Nhờ vậy, việc tính lương, thưởng hay đánh giá hiệu suất trở nên minh bạch, dễ so sánh giữa các vị trí, đồng thời tạo cơ sở để áp dụng chính sách nội bộ như KPI hoặc thưởng phạt công bằng hơn."
  }, {
    "t": "p",
    "html": "2. Import công theo point: <a href=\"https://docs.google.com/document/d/1DC4mTawD-MqxUYJQW3o47qFzKMAZoTBwooNZQba2-Zs/edit?tab=t.0#bookmark=id.24wq6kenrlrf\" target=\"_blank\" rel=\"noopener\">Link</a>"
  }, {
    "t": "p",
    "html": "3. Công thức tính lương theo point: Tổng Số point phát sinh trong chu kỳ lương * Tiền tiêu chuẩn / point"
  }, {
    "t": "h2",
    "id": "dang-ky-lam-online",
    "text": "Đăng ký làm online"
  }, {
    "t": "h3",
    "id": "tao-dang-ky-lam-online",
    "text": "Tạo đăng ký làm online"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Chấm công → Giải trình công → ĐK làm online</code>",
    "children": [{
      "t": "img",
      "id": 321
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form tạo đăng ký làm online → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 322
    }]
  }, {
    "t": "h3",
    "id": "phe-duyet-dang-ky-lam-online",
    "text": "Phê duyệt đăng ký làm online"
  }, {
    "t": "h4",
    "id": "cach-1-2",
    "text": "Cách 1"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Tại màn hình Dashboard → Phê duyệt cần làm → Giải trình công</code>",
    "children": [{
      "t": "img",
      "id": 323
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người quản lý ấn phê duyệt hoặc từ chối phiếu của nhân sự mình quản lý",
    "children": [{
      "t": "img",
      "id": 324
    }]
  }, {
    "t": "h4",
    "id": "cach-2-2",
    "text": "Cách 2"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng truy cập menu Phê duyệt",
    "children": [{
      "t": "img",
      "id": 292
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Người quản lý ấn chọn phân hệ tương ứng → phê duyệt/từ chối phiếu</code>",
    "children": [{
      "t": "img",
      "id": 325
    }]
  }],
  "toc": [{
    "id": "tao-lich-lam-viec",
    "label": "Tạo lịch làm việc"
  }, {
    "id": "giai-trinh-cong-thuong",
    "label": "Giải trình công thường"
  }, {
    "id": "cong-theo-point",
    "label": "Công theo point"
  }, {
    "id": "dang-ky-lam-online",
    "label": "Đăng ký làm online"
  }],
  "faq": [{
    "q": "Lịch làm việc dùng để làm gì?",
    "a": "Lịch làm việc quy định thời gian làm việc của công ty/nhân viên và là cơ sở để tính công; tạo tại <code>Chấm công → Cấu hình → Thời gian làm việc</code>."
  }, {
    "q": "Khi nào cần tạo giải trình công thường?",
    "a": "Khi nhân viên không đủ công theo lịch làm việc (công nhỏ hơn 1), ví dụ: quên chấm công sáng/chiều, sáng làm văn phòng - chiều đi đào tạo, hoặc làm ở nhiều văn phòng khác nhau nhưng quên chấm công."
  }, {
    "q": "Công theo point là gì?",
    "a": "Là cách chuẩn hoá việc tính công, quy đổi giờ làm / ca làm / tăng ca thành điểm thống nhất. Lương theo point = Tổng số point phát sinh trong chu kỳ × Tiền tiêu chuẩn / point."
  }, {
    "q": "Đăng ký làm online ở đâu?",
    "a": "Vào <code>Chấm công → Giải trình công → ĐK làm online</code>, điền form → <strong>Lưu → Xác nhận</strong>, sau đó quản lý phê duyệt."
  }, {
    "q": "Phê duyệt giải trình công bằng cách nào?",
    "a": "Qua <strong>Dashboard → Phê duyệt cần làm → Giải trình công</strong>, hoặc vào module <strong>Phê duyệt</strong> chọn phân hệ tương ứng để duyệt/từ chối."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/cham-cong.js", error: String((e && e.message) || e) }); }

// content/crm.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["crm"] = {
  "slug": "crm",
  "title": "Liên hệ – CRM",
  "icon": "Users",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Module:</strong>"
  }, {
    "t": "ul",
    "items": ["Tạo liên hệ mới", "Chia số cho đội ngũ bán hàng / nhân viên kinh doanh", "Chăm sóc cơ hội được chia"]
  }, {
    "t": "h2",
    "id": "tao-lien-he",
    "text": "Tạo liên hệ"
  }, {
    "t": "h3",
    "id": "tao-so-thu-cong",
    "text": "Tạo số thủ công"
  }, {
    "t": "p",
    "html": "Để tạo liên hệ thủ công, thực hiện theo các bước sau:"
  }, {
    "t": "p",
    "html": "<strong>Bước 1</strong>: Truy cập Module <strong>Liên hệ</strong>, ấn <strong>Mới</strong>."
  }, {
    "t": "img",
    "id": 95
  }, {
    "t": "step",
    "num": "1",
    "html": "Điền thông tin liên hệ khách hàng",
    "children": [{
      "t": "ul",
      "items": ["Loại khách hàng: Công ty / Cá nhân", "Di động", "Email", "Địa chỉ"]
    }, {
      "t": "img",
      "id": 96
    }, {
      "t": "p",
      "html": "<strong>‣</strong> Bấm <strong>Lưu</strong>."
    }, {
      "t": "p",
      "html": "Theo cấu hình sinh cơ hội, sau khi tạo Liên hệ xong, hệ thống tự tạo cơ hội để bộ phận Sales chăm sóc."
    }, {
      "t": "img",
      "id": 97
    }]
  }, {
    "t": "h3",
    "id": "ladipage-day-so-tu-dong",
    "text": "Ladipage đẩy số tự động"
  }, {
    "t": "p",
    "html": "Sau khi liên kết API Ladipage, liên hệ sẽ được đẩy về tự động, gán thông tin Marketing và Sales."
  }, {
    "t": "p",
    "html": "<strong>Bước 1</strong>: Tạo đường dẫn trên Odoo."
  }, {
    "t": "p",
    "html": "Để tạo đường dẫn mới, truy cập Module <strong>Liên hệ ‣ Cấu hình ‣ Đường dẫn tạo khách hàng ‣</strong> bấm <strong>Mới</strong>."
  }, {
    "t": "img",
    "id": 98
  }, {
    "t": "p",
    "html": "Điền form đường dẫn:"
  }, {
    "t": "ul",
    "items": ["Mô tả: Đặt tên cho đường dẫn", "Nguồn khách hàng", "Tab Trường thông tin: Khai báo các trường của Odoo được thể hiện trên form ladipage, <em>mục đích khi đẩy thông tin khách hàng từ ladipage về, hệ thống sẽ tạo bản ghi khách hàng với các trường thông tin đã cấu hình</em>:", "Trường liên kết: trường trên Odoo;", "Tên trường: tên trường để nối với ladipage;", "Là trường bắt buộc: nếu không điền trường bắt buộc, hệ thống sẽ không tạo liên hệ."]
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Lưu ‣</strong> Hệ thống tạo đường dẫn để thực hiện cấu hình trên Ladipage."
  }, {
    "t": "img",
    "id": 99
  }, {
    "t": "p",
    "html": "<strong>Bước 2</strong>: Cấu hình Ladipage."
  }, {
    "t": "p",
    "html": "Trên màn hình ladipage, bấm CTA <strong>‣ Lưu Data</strong>."
  }, {
    "t": "img",
    "id": 100
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Màn hình hiển thị cấu hình form được liên kết với CTA  <strong>‣</strong> Bấm Chi tiết cấu hình."
  }, {
    "t": "img",
    "id": 101
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Thêm tài khoản liên kết API</strong>, điền thông tin của API:"
  }, {
    "t": "ul",
    "items": ["API URL: Đường dẫn tạo khách hàng đã tạo trên Odoo"]
  }, {
    "t": "img",
    "id": 102
  }, {
    "t": "ul",
    "items": ["API Request Header: Copy - paste nguyên đoạn này:"]
  }, {
    "t": "table",
    "headers": ["{\"Authorization\": \"Bearer tjcQlkKuWZaw6W0c6QT1ihjNQp6xJhASbCATai7LVPbz2Ngo66g7JOZS07BO\"}"],
    "rows": []
  }, {
    "t": "ul",
    "items": ["Các trường mapping Ladipage \\&lt;-&gt; Odoo"]
  }, {
    "t": "img",
    "id": 103
  }, {
    "t": "p",
    "html": "Bạn cũng có thể dùng cấu hình form này với các ladipage khác để đổ thông tin liên hệ về theo cấu hình đã tạo."
  }, {
    "t": "h3",
    "id": "pancake-day-so-tu-dong",
    "text": "Pancake đẩy số tự động"
  }, {
    "t": "p",
    "html": "Lấy token page của PANCAKE:"
  }, {
    "t": "img",
    "id": 104
  }, {
    "t": "img",
    "id": 105
  }, {
    "t": "p",
    "html": "Lấy token shop của POSCAKE"
  }, {
    "t": "step",
    "num": "1",
    "html": "Gộp các trang cần đẩy sổ tự động về odoo: <a href=\"https://docs.pos.pages.fm/pos/bat-dau/cua-hang/gop-cua-hang\" target=\"_blank\" rel=\"noopener\">Hướng dẫn</a>",
    "children": []
  }, {
    "t": "step",
    "num": "2",
    "html": "Truy cập vào poscake &gt; chọn tài khoản có chữ <strong>Shop</strong>",
    "children": [{
      "t": "ul",
      "items": ["<code>Trường hợp chưa có Shop → Tạo mới shop</code>: <a href=\"https://docs.pos.pages.fm/pos/bat-dau/cua-hang/tao-cua-hang-moi\" target=\"_blank\" rel=\"noopener\">Hướng dẫn</a>"]
    }, {
      "t": "img",
      "id": 106
    }, {
      "t": "p",
      "html": "<strong>Bước 3</strong>: Chọn <strong>Cấu hình</strong> &gt; Chọn <strong>Kết nối bên thứ ba</strong>"
    }, {
      "t": "img",
      "id": 107
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bấm chọn <strong>Chi tiết</strong>",
    "children": [{
      "t": "img",
      "id": 108
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Chọn <strong>API Key</strong> &gt; Copy <strong>mã API Key</strong>",
    "children": [{
      "t": "img",
      "id": 109
    }]
  }, {
    "t": "h2",
    "id": "chia-so",
    "text": "Chia số"
  }, {
    "t": "p",
    "html": "Các số (cơ hội) đẩy về đều được cấu hình chia từ Team MKT đến Team Sales nhất định theo Quy tắc gán thông tin Kinh doanh cho Lead."
  }, {
    "t": "img",
    "id": 110
  }, {
    "t": "p",
    "html": "Sau đó các số sẽ được trưởng nhóm chia về nhân viên kinh doanh thủ công hoặc theo cấu hình tự động."
  }, {
    "t": "h3",
    "id": "chia-so-thu-cong",
    "text": "Chia số thủ công"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Dưới đây là hướng dẫn chia số để trưởng nhóm chia số thủ công cho Nhân viên kinh doanh trong đội ngũ."
  }, {
    "t": "p",
    "html": "Truy cập Module <strong>CRM</strong> <strong>‣ Quy trình của tôi ‣</strong> Hiển thị màn hình với bộ lọc trạng thái chia số bên tay trái."
  }, {
    "t": "img",
    "id": 111
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Sử dụng bộ lọc lọc các số cần chia."
  }, {
    "t": "img",
    "id": 112
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Tick chọn các số cần chia cho Sales (có thể tick all) <strong>‣ Tác vụ ‣ Chuyển đổi thành cơ hội</strong>."
  }, {
    "t": "img",
    "id": 113
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Trên pop-up Chuyển đổi thành cơ hội:"
  }, {
    "t": "ul",
    "items": ["Bỏ tick Áp dụng chống trùng lặp", "Phân công cơ hội cho:", "Chia cho nhóm: Chọn Bộ phận sales", "Chia cho NVKD: Chuyên viên sales"]
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Chuyển đổi thành cơ hội</strong>. Khi đó các cơ hội được chia đều cho nhóm / NVKD đã chọn."
  }, {
    "t": "h3",
    "id": "chia-so-tu-dong",
    "text": "Chia số tự động"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Các số được chia cho nhân viên kinh doanh theo cấu hình Quy tắc chia số tự động."
  }, {
    "t": "p",
    "html": "Truy cập Module CRM <strong>‣ Cấu hình ‣ Cấu hình chia số tự động</strong> <strong>‣ Mới</strong>."
  }, {
    "t": "img",
    "id": 114
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Điền các thông tin của cấu hình."
  }, {
    "t": "ul",
    "items": ["Tên cấu hình", "Công ty áp dụng", "Loại cơ hội: Sales / Resale", "Phương thức chia số: Chia đều", "Thời gian áp dụng chia số đầu ngày (giờ)", "Số Lead tối đa chia đầu ngày: đến thời gian chia số đầu ngày, mỗi nhân viên nhận được tối đa bao nhiêu số;", "Số cơ hội chia mỗi lượt: mỗi lượt nhân viên được chia bao nhiêu cơ hội;", "Thời gian lọc data chia (x ngày): kể từ thời gian chia, các cơ hội chưa được chia trong vòng bao nhiêu ngày sẽ được chia tự động."]
  }, {
    "t": "h2",
    "id": "cham-soc-co-hoi",
    "text": "Chăm sóc cơ hội"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Nhân viên kinh doanh gọi điện chăm sóc khách hàng và log lại thông tin chăm sóc"
  }, {
    "t": "p",
    "html": "Truy cập Module <strong>CRM ‣</strong> Tìm kiếm số cần chăm sóc trên bộ lọc."
  }, {
    "t": "img",
    "id": 115
  }, {
    "t": "p",
    "html": "Khi truy cập vào cơ hội, tiến hành gọi điện cho khách hàng và note lại các thông tin đã chăm sóc:"
  }, {
    "t": "ul",
    "items": ["Cập nhật giai đoạn cơ hội"]
  }, {
    "t": "img",
    "id": 116
  }, {
    "t": "ul",
    "items": ["Ghi chú về khách hàng / trao đổi với khách hàng:"]
  }, {
    "t": "img",
    "id": 117
  }, {
    "t": "ul",
    "items": ["Hoạt động chăm sóc:"]
  }, {
    "t": "img",
    "id": 118
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Chọn loại hoạt động, ấn định thời gian cần hoàn thành hoạt động và phân công hoạt động cho nhân sự <strong>‣</strong> Sau khi tạo hoạt động, lịch của nhân sự đó sẽ có thông tin hoạt động và thông báo nhắc nhở khi đến lịch."
  }, {
    "t": "img",
    "id": 119
  }, {
    "t": "ul",
    "items": ["Đánh dấu cơ hội thành công / thất bại:"]
  }, {
    "t": "img",
    "id": 120
  }, {
    "t": "h2",
    "id": "kho-so-chung",
    "text": "Kho số chung"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Các cơ hội đã được chăm sóc nhưng chưa được lên đơn (Giai đoạn cơ hội # Thành công) sẽ được quay vòng số cho nhân viên kinh doanh khác chăm sóc, giúp tối ưu hoá và tăng tỷ lệ chuyển đổi."
  }, {
    "t": "p",
    "html": "Các cơ hội sẽ được quay vòng theo Cấu hình Kho số chung đã được thiết lập."
  }, {
    "t": "img",
    "id": 121
  }, {
    "t": "p",
    "html": "Để trung cập vào kho số chung, truy cập Module <strong>CRM ‣ Kho cơ hội ‣</strong> Màn hình hiển thị toàn bộ cơ hội quay vòng bạn có thể nhận."
  }, {
    "t": "img",
    "id": 122
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Nhận cơ hội</strong> để tiến hành chăm sóc."
  }, {
    "t": "img",
    "id": 123
  }],
  "toc": [{
    "id": "tao-lien-he",
    "label": "Tạo liên hệ"
  }, {
    "id": "chia-so",
    "label": "Chia số"
  }, {
    "id": "cham-soc-co-hoi",
    "label": "Chăm sóc cơ hội"
  }, {
    "id": "kho-so-chung",
    "label": "Kho số chung"
  }],
  "faq": [{
    "q": "Có những cách nào để tạo / đẩy số liên hệ?",
    "a": "Tạo thủ công, hoặc đẩy số tự động qua <strong>Ladipage</strong> (sau khi liên kết API), và <strong>Pancake / Poscake</strong> (qua token page và API Key)."
  }, {
    "q": "Chia số thủ công cho nhân viên kinh doanh thế nào?",
    "a": "Vào <code>CRM → Quy trình của tôi</code> → lọc các số cần chia → tick chọn → <strong>Tác vụ → Chuyển đổi thành cơ hội</strong> → chọn nhóm/NVKD → Chuyển đổi."
  }, {
    "q": "Chia số tự động hoạt động ra sao?",
    "a": "Số được chia cho NVKD theo <strong>Cấu hình chia số tự động</strong> tại <code>CRM → Cấu hình → Cấu hình chia số tự động</code>."
  }, {
    "q": "Kho số chung dùng để làm gì?",
    "a": "Các cơ hội đã chăm sóc nhưng chưa lên đơn (chưa Thành công) sẽ được quay vòng cho NVKD khác. Vào <code>CRM → Kho cơ hội</code> → bấm <strong>Nhận cơ hội</strong> để chăm sóc."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/crm.js", error: String((e && e.message) || e) }); }

// content/du-an.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["du-an"] = {
  "slug": "du-an",
  "title": "Dự án",
  "icon": "Layers",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "ul",
    "items": ["Quản lý và theo dõi công việc theo từng mục tiêu cụ thể, bao gồm phân công nhân sự, kiểm soát tiến độ và theo dõi hiệu quả thực hiện.", "Hỗ trợ chuẩn hoá quy trình làm việc, đảm bảo các công việc được triển khai đúng kế hoạch và sử dụng nguồn lực một cách hợp lý."]
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong> Cấu hình &gt; Tạo dự án &gt; Tạo nhiệm vụ &gt; Check dashboard"
  }, {
    "t": "h2",
    "id": "cau-hinh",
    "text": "Cấu hình"
  }, {
    "t": "h3",
    "id": "giai-doan-du-an",
    "text": "Giai đoạn dự án"
  }, {
    "t": "ul",
    "items": ["<strong>Mô tả:</strong> Giai đoạn dự án là các bước được phân chia theo trình tự trong vòng đời của dự án, nhằm tổ chức và quản lý công việc hiệu quả. Mỗi giai đoạn tương ứng với một mục tiêu cụ thể, giúp đảm bảo dự án được triển khai đúng tiến độ, phạm vi và chất lượng.", "<strong>Các bước tạo giai đoạn dự án:</strong>", "<strong>Bước 1: <code>Truy cập ứng dụng Dự án → Cấu hình → Giai đoạn dự án</code></strong>"]
  }, {
    "t": "img",
    "id": 478
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: <code>Nhập tên giai đoạn → Lưu</code></strong>"]
  }, {
    "t": "img",
    "id": 479
  }, {
    "t": "ul",
    "items": ["<strong>Lưu ý:</strong>", "Is done: Đánh dấu giai đoạn là hoàn thành. Phục vụ lên dashboard", "Is cancel: Đánh dấu giai đoạn là huỷ. Với những dự án huỷ, không hiển thị trên dashboard", "Thu gọn trong kanban: ẩn bớt các dự án không cần thiết trên bảng, nhằm tối ưu hiển thị và hỗ trợ tập trung theo dõi, quản lý tiến độ công việc hiệu quả hơn."]
  }, {
    "t": "img",
    "id": 480
  }, {
    "t": "h3",
    "id": "giai-doan-nhiem-vu",
    "text": "Giai đoạn nhiệm vụ"
  }, {
    "t": "ul",
    "items": ["<strong>Mô tả:</strong> Giai đoạn nhiệm vụ là trạng thái hoặc bước cụ thể trong quá trình xử lý một nhiệm vụ, thể hiện tiến độ thực hiện từ khi bắt đầu đến khi hoàn thành, giúp theo dõi và quản lý công việc một cách rõ ràng và hiệu quả.", "<strong>Các bước tạo giai đoạn nhiệm vụ:</strong>", "<strong>Bước 1: <code>Truy cập ứng dụng Dự án → Cấu hình → Giai đoạn nhiệm vụ</code></strong>"]
  }, {
    "t": "img",
    "id": 481
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: <code>Nhập tên giai đoạn → Lưu</code></strong>"]
  }, {
    "t": "img",
    "id": 482
  }, {
    "t": "ul",
    "items": ["<strong>Lưu ý:</strong>", "Is done: Đánh dấu giai đoạn là hoàn thành. Phục vụ lên dashboard", "Is cancel: Đánh dấu giai đoạn là huỷ. Với những task huỷ, không hiển thị trên dashboard", "Thu gọn trong kanban: ẩn bớt các task không cần thiết trên bảng, nhằm tối ưu hiển thị và hỗ trợ tập trung theo dõi, quản lý tiến độ công việc hiệu quả hơn."]
  }, {
    "t": "img",
    "id": 480
  }, {
    "t": "h3",
    "id": "phan-loai",
    "text": "Phân loại"
  }, {
    "t": "ul",
    "items": ["<strong>Mô tả:</strong> chia các nhiệm vụ thành các nhóm theo tiêu chí nhất định (như tính năng, bug, cải thiện, triển khai…), nhằm giúp tổ chức, theo dõi và quản lý công việc một cách rõ ràng, hiệu quả hơn.", "<strong>Các bước tạo phân loại:</strong>", "<strong>Bước 1: <code>Truy cập ứng dụng Dự án → Cấu hình → Phân loại</code></strong>"]
  }, {
    "t": "img",
    "id": 483
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: Nhập tên phân loại, <code>chọn màu cho phân loại → Lưu</code></strong>"]
  }, {
    "t": "img",
    "id": 484
  }, {
    "t": "h3",
    "id": "uu-tien",
    "text": "Ưu tiên"
  }, {
    "t": "ul",
    "items": ["<strong>Mô tả:</strong> mức độ quan trọng hoặc cần xử lý trước của một nhiệm vụ, giúp xác định thứ tự thực hiện công việc nhằm đảm bảo các nhiệm vụ quan trọng hoặc cấp bách được xử lý kịp thời.", "<strong>Các bước tạo ưu tiên:</strong>", "<strong>Bước 1: <code>Truy cập ứng dụng Dự án → Cấu hình → Ưu tiên</code></strong>"]
  }, {
    "t": "img",
    "id": 485
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: <code>Nhập tên ưu tiên → Lưu</code></strong>"]
  }, {
    "t": "img",
    "id": 486
  }, {
    "t": "h3",
    "id": "sprint",
    "text": "Sprint"
  }, {
    "t": "ul",
    "items": ["<strong>Mô tả:</strong> là một khoảng thời gian ngắn, được xác định trước trong quy trình phát triển, trong đó một nhóm công việc cụ thể được thực hiện và hoàn thành nhằm đạt được mục tiêu đã đề ra. Thường 1 sprint sẽ \\= 2 tuần làm việc", "<strong>Các bước tạo ưu tiên:</strong>", "<strong>Bước 1: <code>Truy cập ứng dụng Dự án → Cấu hình → Sprint</code></strong>"]
  }, {
    "t": "img",
    "id": 487
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: <code>Nhập thông tin → Lưu</code></strong>"]
  }, {
    "t": "img",
    "id": 488
  }, {
    "t": "h3",
    "id": "vai-tro-du-an",
    "text": "Vai trò dự án"
  }, {
    "t": "ul",
    "items": ["<strong>Mô tả:</strong> thiết lập các vai trò tham gia trong dự án như Quản lý dự án, Thành viên dự án, Phân tích nghiệp vụ, Lập trình viên, Kiểm thử viên,... nhằm hỗ trợ phân công công việc, quản lý trách nhiệm và theo dõi nguồn lực trong quá trình triển khai dự án.", "<strong>Các bước tạo ưu tiên:</strong>", "<strong>Bước 1: <code>Truy cập ứng dụng Dự án → Cấu hình → Vai trò dự án</code></strong>"]
  }, {
    "t": "img",
    "id": 489
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: Nhập tên vai trò, <code>cấu hình phân quyền cho vai trò → Lưu</code></strong>"]
  }, {
    "t": "img",
    "id": 490
  }, {
    "t": "h2",
    "id": "tao-du-an",
    "text": "Tạo dự án"
  }, {
    "t": "h3",
    "id": "mo-ta-khoi-tao-va-quan-ly-mot-du-an-moi-tren-",
    "text": "Mô tả: khởi tạo và quản lý một dự án mới trên hệ thống, bao gồm các thông tin như tên dự án, khách hàng, thành viên tham gia, thời gian thực hiện, giai đoạn và các công việc liên quan nhằm hỗ trợ theo dõi tiến độ và quản lý quá trình triển khai dự án hiệu quả."
  }, {
    "t": "h3",
    "id": "cac-buoc-tao-du-an",
    "text": "Các bước tạo dự án"
  }, {
    "t": "ul",
    "items": ["<strong>Bước 1: <code>Truy cập ứng dụng dự án → Dự án → Mới → Điền tên dự án → Tạo dự án</code></strong>"]
  }, {
    "t": "img",
    "id": 491
  }, {
    "t": "ul",
    "items": ["<strong><em>Bước 2: Tạo giai đoạn nhiệm vụ trong dự án</em></strong>", "<strong>Cách 1:</strong>", "Tại màn hình pop up ra sau khi tạo dự án, chọn mẫu có sẵn hoặc điền tên giai đoạn mới vào ô", "Tại đây phần mềm sẽ gợi ý ra một số mẫu và ví dụ hiển thị để bạn chọn", "<code>Bấm sử dụng cái này cho dự án của tôi → giai đoạn nhiệm vụ sẽ tự động được tạo theo mẫu</code>"]
  }, {
    "t": "img",
    "id": 492
  }, {
    "t": "ul",
    "items": ["<strong>Cách 2:</strong>", "Truy cập cài đặt dự án:"]
  }, {
    "t": "img",
    "id": 493
  }, {
    "t": "ul",
    "items": ["Tại tab giai đoạn nhiệm vụ, chọn giai đoạn muốn hiển thị:"]
  }, {
    "t": "img",
    "id": 494
  }, {
    "t": "ul",
    "items": ["Phân biệt giai đoạn nào là giai đoạn hoàn thành. Mục đích: xác định task hoàn thành đẩy lên dashboard"]
  }, {
    "t": "img",
    "id": 495
  }, {
    "t": "h3",
    "id": "luu-y-khi-tao-du-an",
    "text": "Lưu ý khi tạo dự án"
  }, {
    "t": "ul",
    "items": ["<strong><em>Các thông tin cần nhập khi cài đặt dự án</em></strong>", "Trưởng dự án", "Phòng ban: Phân biệt dự án thuộc phòng ban nào \\=&gt; Tổng hợp dashboard", "Ngày theo kế hoạch: Deadline của dự án", "<strong><em>Cài đặt thông báo nhắc task/dự án đến hạn</em></strong>", "Truy cập tab Cài đặt, tại phần cài đặt thông báo, tick chọn thông báo cho task sắp đến hạn và dự án sắp đến hạn để thiết lập ngày nhắc"]
  }, {
    "t": "img",
    "id": 496
  }, {
    "t": "ul",
    "items": ["Tại đây, điền số ngày muốn hệ thống thông báo khi task/dự án sắp đến hạn. Chọn chu kỳ thực thi (số lần lặp lại thông báo). Sau khi cài đặt xong, hệ thống sẽ dựa vào deadline task/dự án để tạo thông báo đến cho thành viên tương ứng"]
  }, {
    "t": "img",
    "id": 497
  }, {
    "t": "ul",
    "items": ["<strong><em>Thiết lập vai trò</em></strong>", "Mô tả: tổng hợp thành viên tham gia dự án, thiết lập vai trò của từng thành viên nhằm xác định trách nhiệm và phạm vi công việc của từng thành viên trong dự án. Việc này hỗ trợ phân công nhiệm vụ phù hợp, quản lý quyền truy cập, theo dõi nguồn lực và đảm bảo quy trình phối hợp giữa các bộ phận được thực hiện hiệu quả.", "Các bước thiết lập:", "<code>Tại tab thiết lập vai trò → Thêm một dòng</code>"]
  }, {
    "t": "img",
    "id": 498
  }, {
    "t": "ul",
    "items": ["<code>Chọn thành viên muốn add vào dự án → thực hiện phân quyền cho nhân sự. Chỉ thành viên được add vào dự án tại tab vai trò này và được phân quyền thì mới thấy dự án và task trong dự án mà mình tham gia</code>"]
  }, {
    "t": "img",
    "id": 499
  }, {
    "t": "ul",
    "items": ["<strong><em>Phân bổ nguồn lực</em></strong>", "Mô tả: Cho phép thiết lập thời gian nhân sự dành cho dự án trong 1 ngày, làm cơ sở để: Quản lý workload; kiểm soát over-allocation và theo dõi hiệu suất", "Các bước phân bổ:", "<code>Tại tab phân bổ nguồn lực → thêm một dòng để chọn nhân viên muốn phân bổ thời gian. Lưu ý</code>: chỉ chọn được những thành viên đã add vào tab thiết lập vai trò"]
  }, {
    "t": "img",
    "id": 500
  }, {
    "t": "ul",
    "items": ["Tại đây, điền thời gian nhân sự dành cho dự án (thiết lập số giờ/ngày). Mục đích tổng hợp là lên dashboard tính nguồn lực của 1 dự án"]
  }, {
    "t": "img",
    "id": 501
  }, {
    "t": "ul",
    "items": ["<strong><em>Tự động tạo subtask</em></strong>", "Mô tả: Khi tạo task phần mềm sẽ tự động sinh ra 2 task phụ gắn với task chính. Task phụ sinh ra được:", "Không có người giao việc: nhằm không cần đánh giá kết quả công việc, nếu muốn kích hoạt lại luồng đánh giá kết quả công việc \\=&gt; Chọn người giao việc cho nhiệm vụ phụ # người phụ trách nhiệm vụ đấy", "Không có người phụ trách \\=&gt; Khi hệ thống tự gen ra subtask, cần phân bổ người phụ trách công việc", "Tự động cập nhật mô tả, thời hạn và trạng thái từ tất cả cả các task liên quan"]
  }, {
    "t": "h2",
    "id": "tao-nhiem-vu",
    "text": "Tạo nhiệm vụ"
  }, {
    "t": "h3",
    "id": "mo-ta-cac-cong-viec-cu-the-can-thuc-hien-de-h",
    "text": "Mô tả: các công việc cụ thể cần thực hiện để hoàn thành mục tiêu của dự án. Mỗi nhiệm vụ có thể được phân công cho thành viên phụ trách, thiết lập thời hạn, mức độ ưu tiên, trạng thái xử lý và theo dõi tiến độ thực hiện trong suốt quá trình triển khai dự án."
  }, {
    "t": "h3",
    "id": "cac-buoc-tao-nhiem-vu",
    "text": "Các bước tạo nhiệm vụ"
  }, {
    "t": "ul",
    "items": ["<strong><em>Cách 1</em></strong>", "<strong><code>Tại màn cài đặt dự án → smart button Nhiệm vụ để xem tất cả các nhiệm vụ có trong dự án</code></strong>"]
  }, {
    "t": "img",
    "id": 502
  }, {
    "t": "ul",
    "items": ["<strong><code>Ấn Mới để tạo một nhiệm vụ mới trong dự án → điền tên nhiệm vụ và người phụ trách nhiệm vụ → Thêm</code></strong>"]
  }, {
    "t": "img",
    "id": 503
  }, {
    "t": "ul",
    "items": ["<strong>Sau khi bấm thêm, màn hình sẽ hiển thị nhiệm vụ như sau:</strong>"]
  }, {
    "t": "img",
    "id": 504
  }, {
    "t": "ul",
    "items": ["<strong>Click chuột vào nhiệm vụ mới tạo và bổ sung các thông tin cần thiết của nhiệm vụ:</strong>", "Thời hạn: Deadline của nhiệm vụ", "Thời gian phân bổ: Thời gian dự kiến hoàn thành nhiệm vụ", "Nhiệm vụ chính (nếu có): Liên kết với nhiệm vụ cha", "Mô tả: Người giao việc mô tả về mục tiêu, yêu cầu, phạm vi công việc và các thông tin liên quan nhằm giúp thành viên hiểu rõ nội dung cần triển khai và thực hiện đúng theo yêu cầu nhiệm vụ."]
  }, {
    "t": "img",
    "id": 505
  }, {
    "t": "ul",
    "items": ["<strong><em>Cách 2</em></strong>", "<code>Truy cập menu Nhiệm vụ → Tất cả nhiệm vụ → Mới</code>"]
  }, {
    "t": "img",
    "id": 506
  }, {
    "t": "ul",
    "items": ["<code>Điền các thông tin của nhiệm vụ giống hướng dẫn trên → Lưu để lưu nhiệm vụ mới tạo</code>"]
  }, {
    "t": "h3",
    "id": "ket-qua-cong-viec",
    "text": "Kết quả công việc"
  }, {
    "t": "ul",
    "items": ["Mô tả: Cho phép nhân sự được phân công làm task cập nhật kết quả thực hiện task, làm cơ sở để người giao việc đánh giá &amp; phê duyệt hoàn thành.", "Điều kiện kích hoạt luồng duyệt kết quả công việc", "Người phụ trách # người giao việc", "Task không có người giao việc", "<strong><em>Các bước tạo kết quả công việc</em></strong>", "Tại tab kết quả công việc, nhập kết quả công việc bằng cách gõ nội dung kết quả/tải tệp/gắn link…. → Bấm gửi duyệt"]
  }, {
    "t": "img",
    "id": 507
  }, {
    "t": "ul",
    "items": ["<code>Sau khi bấm gửi duyệt → Yêu cầu duyệt kết quả sẽ được gửi đến người giao việc để duyệt. Người dùng có thể bấm vào Xem yêu cầu duyệt để xem người duyệt yêu cầu cho mình và trạng thái duyệt tương ứng</code>"]
  }, {
    "t": "img",
    "id": 508
  }, {
    "t": "ul",
    "items": ["Kết quả phê duyệt sẽ được cập nhật ở bảng lịch sử đánh giá kết quả công việc.", "<code>Khi được duyệt → người dùng sẽ không chỉnh sửa được kết quả công việc nữa</code>", "<code>Khi kết quả công việc bị từ chối → hệ thống cho phép chỉnh sửa kết quả và gửi yêu cầu duyệt lại</code>"]
  }, {
    "t": "img",
    "id": 509
  }, {
    "t": "ul",
    "items": ["<strong><em>Các bước phê duyệt kết quả công việc</em></strong>", "Khi có yêu cầu duyệt kết quả công việc, hệ thống sẽ tạo thông báo đến người giao việc", "Người giao việc check thông báo tại", "<strong>Thông báo bên trên cùng của hệ thống</strong>"]
  }, {
    "t": "img",
    "id": 510
  }, {
    "t": "ul",
    "items": ["<strong>Truy cập ứng dụng thảo luận</strong>"]
  }, {
    "t": "img",
    "id": 511
  }, {
    "t": "img",
    "id": 512
  }, {
    "t": "ul",
    "items": ["<strong>Truy cập ứng dụng phê duyệt</strong>"]
  }, {
    "t": "img",
    "id": 513
  }, {
    "t": "img",
    "id": 514
  }, {
    "t": "ul",
    "items": ["<code>Người giao việc truy cập Phê duyệt → Ấn phê duyệt hoặc từ chối yêu cầu</code>"]
  }, {
    "t": "img",
    "id": 515
  }, {
    "t": "ul",
    "items": ["<strong>Lưu ý:</strong> Với những nhiệm vụ áp dụng luồng duyệt, chỉ khi kết quả công việc được duyệt thì mới được chuyển trạng thái của nhiệm vụ sang hoàn thành"]
  }, {
    "t": "h3",
    "id": "yeu-cau-thay-doi-thoi-han-nhiem-vu",
    "text": "Yêu cầu thay đổi thời hạn nhiệm vụ"
  }, {
    "t": "ul",
    "items": ["Mô tả: gửi đề xuất điều chỉnh thời gian bắt đầu hoặc thời hạn hoàn thành nhiệm vụ khi có thay đổi trong quá trình thực hiện. Chức năng này hỗ trợ cập nhật tiến độ linh hoạt, đảm bảo việc quản lý kế hoạch dự án được chính xác và phù hợp với tình hình thực tế.", "Phân quyền", "Người nhìn thấy button yêu cầu thay đổi thời hạn nhiệm vụ: Người phụ trách được thiết lập trên nhiệm vụ", "Người duyệt yêu cầu thay đổi thời hạn nhiệm vụ:", "Người giao việc", "Quản trị viên module", "Quản trị viên cài đặt", "<strong><em>Các bước yêu cầu thay đổi thời hạn nhiệm vụ</em></strong>", "<code>Tại màn nhiệm vụ → Bấm button Yêu cầu thay đổi thời hạn → Điền thông tin trên phiếu yêu cầu → Xác nhận gửi duyệt</code>"]
  }, {
    "t": "img",
    "id": 516
  }, {
    "t": "ul",
    "items": ["Sau khi yêu cầu được xác nhận gửi, hệ thống sẽ tạo thông báo để đánh dấu nhiệm vụ có yêu cầu thay đổi"]
  }, {
    "t": "img",
    "id": 517
  }, {
    "t": "ul",
    "items": ["Khi yêu cầu thay đổi thời hạn được duyệt, deadline nhiệm vụ sẽ được cập nhật theo thời hạn mới, đồng thời lịch sử thay đổi thời hạn sẽ được hệ thống lưu trữ lại"]
  }, {
    "t": "img",
    "id": 518
  }, {
    "t": "ul",
    "items": ["<strong><em>Các bước duyệt yêu cầu thay đổi thời hạn nhiệm vụ</em></strong>", "Khi có yêu cầu thay đổi thời hạn nhiệm vụ, hệ thống sẽ tạo thông báo đến người giao việc", "Người giao việc check thông báo tại", "<strong>Thông báo bên trên cùng của hệ thống</strong>"]
  }, {
    "t": "img",
    "id": 519
  }, {
    "t": "ul",
    "items": ["<strong>Truy cập ứng dụng thảo luận</strong>"]
  }, {
    "t": "img",
    "id": 511
  }, {
    "t": "img",
    "id": 520
  }, {
    "t": "ul",
    "items": ["<strong>Truy cập ứng dụng phê duyệt</strong>"]
  }, {
    "t": "img",
    "id": 513
  }, {
    "t": "img",
    "id": 521
  }, {
    "t": "ul",
    "items": ["<code>Người giao việc truy cập Phê duyệt → Ấn phê duyệt hoặc từ chối yêu cầu</code>"]
  }, {
    "t": "h3",
    "id": "nhap-thoi-gian-thuc-te-hoan-thanh-nhiem-vu",
    "text": "Nhập thời gian thực tế hoàn thành nhiệm vụ"
  }, {
    "t": "ul",
    "items": ["<strong>Bước 1: Tại màn hình nhiệm vụ, <code>truy cập tab bảng chấm công → Thêm một dòng</code></strong>"]
  }, {
    "t": "img",
    "id": 522
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: Nhập ngày thực tế làm nhiệm vụ, mô tả những việc đã làm và nhập thời gian thực tế làm</strong>"]
  }, {
    "t": "img",
    "id": 523
  }, {
    "t": "ul",
    "items": ["<strong>Lưu ý:</strong>", "Tổng thời gian phân bổ: Tổng thời gian phân bổ bao gồm nhiệm vụ chính và phụ. Thời gian phân bổ là thời gian dự kiến hoàn thành nhiệm vụ và được nhập tại mỗi nhiệm vụ tương ứng"]
  }, {
    "t": "img",
    "id": 524
  }, {
    "t": "ul",
    "items": ["Tổng thời gian đã dùng: Tổng thời gian đã dùng cho nhiệm vụ bao gồm cả nhiệm vụ chính và phụ. Thời gian đã dùng là thời gian được log tại tab bảng chấm công"]
  }, {
    "t": "img",
    "id": 523
  }, {
    "t": "ul",
    "items": ["Tổng thời gian còn lại \\= Tổng thời gian phân bổ - Tổng thời gian đã dùng"]
  }, {
    "t": "h3",
    "id": "cap-nhat-hang-loat-thong-tin-tren-nhiem-vu",
    "text": "Cập nhật hàng loạt thông tin trên nhiệm vụ"
  }, {
    "t": "ul",
    "items": ["<strong>Bước 1: Chọn nhiệm vụ muốn cập nhật thông tin &gt; Tác vụ &gt; Action Cập nhật hàng loạt</strong>"]
  }, {
    "t": "img",
    "id": 525
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: Chọn thông tin muốn cập nhật &gt; Cập nhật</strong>"]
  }, {
    "t": "img",
    "id": 526
  }, {
    "t": "h3",
    "id": "cac-dang-xem-nhiem-vu",
    "text": "Các dạng xem nhiệm vụ"
  }, {
    "t": "ul",
    "items": ["<strong><em>Listview</em></strong>"]
  }, {
    "t": "img",
    "id": 527
  }, {
    "t": "ul",
    "items": ["<strong><em>Kanban</em></strong>"]
  }, {
    "t": "img",
    "id": 528
  }, {
    "t": "ul",
    "items": ["<strong><em>Gantt</em></strong>"]
  }, {
    "t": "img",
    "id": 529
  }, {
    "t": "ul",
    "items": ["<strong><em>Calendar</em></strong>"]
  }, {
    "t": "img",
    "id": 530
  }, {
    "t": "h2",
    "id": "dashboard",
    "text": "Dashboard"
  }, {
    "t": "h3",
    "id": "tong-quan-daskboard",
    "text": "Tổng quan daskboard"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem tổng số dự án theo trạng thái, dự báo được daedline và rủi ro theo từng task của dự án mình đang quản lý để biết tiến độ công việc", "Logics:", "Dự án:", "Tổng dự án: Sum số lượng dự án mà user có quyền truy cập", "Đang thực hiện: Dự án có trạng thái \\= Đang thực hiện hoặc dự án có trạng thái \\=mới/tạm dừng mà không có deadline (ngày theo kế hoạch)", "Hoàn thành: Dự án có trạng thái \\= Hoàn tất", "Đến hạn: Dự án có trạng thái \\= Đang thực hiện và có deadline nằm trong khoảng: today\\&lt;= deadline \\&lt;= today \\+ <strong>7 ngày</strong>", "Trễ hạn: Dự án có trạng thái \\= Đang thực hiện và có deadline \\&lt; today", "Task:", "Tổng task: Sum số lượng tất cả các task theo dự án user có quyền truy cập", "Task quá hạn: Task chưa ở trạng thái cuối cùng theo thời hạn (deadline \\&lt; today)", "Task sắp đến hạn: Task chưa ở trạng thái cuối cùng và có deadline nằm trong khoảng: today\\&lt;= deadline \\&lt;= today \\+ <strong>3 ngày</strong>"]
  }, {
    "t": "h3",
    "id": "du-an-dang-thuc-hien",
    "text": "Dự án đang thực hiện"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem các dự án đang thực hiện theo timeline để check được thời gian thực hiện và phân bổ các dự án theo từng giai đoạn", "Logics:", "Trục dọc: Danh sách các dự án", "Trục ngang: Timeline theo tháng (Tháng 1, Tháng 2, …)", "Thời gian thực hiện dự án: <code>theo deadline dự án từ start date → end date</code>.", "Với dự án không có ngày theo kế hoạch {date_start} <code>hoặc không đủ ngày bắt đầu/ngày kết thúc → không hiển thị trên gantt</code>", "Chỉ hiển thị dự án có trạng thái \\= Đang thực hiện hoặc hoàn thành"]
  }, {
    "t": "h3",
    "id": "tien-do-du-an",
    "text": "Tiến độ dự án"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem tiến độ (%) của từng dự án để đánh giá được mức độ hoàn thành và hiệu suất thực hiện", "Logics:", "Công thức tính tiến độ: Progress (%) \\= (Số task hoàn thành / Tổng số task) * 100"]
  }, {
    "t": "h3",
    "id": "workload-theo-du-an",
    "text": "Workload theo dự án"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem workload (%) của từng dự án để xác định dự án đang quá tải và điều phối nguồn lực", "Logics: % workload", "Công thức tính \\= <strong>(Tổng thời gian phân bổ trên tất cả các task của dự án/Capacity của dự án theo tháng đang check)*100%</strong>", "Trong đó:", "Thời gian phân bổ {allocated_hours} trên tất cả các task của dự án", "Tổng nguồn lực của dự án \\= sum (thời gian phân bổ cho dự án trên tab phân bổ nguồn lực* công chuẩn của nhân sự) của tất cả nhân sự thuộc dự án", "Lưu ý: Capacity này sẽ thay đổi theo bộ lọc thời gian", "Nếu lọc thời gian thì \\= sum (thời gian phân bổ cho dự án trên tab phân bổ nguồn lực * số ngày theo thời gian lọc)"]
  }, {
    "t": "h3",
    "id": "workload-theo-phong-ban",
    "text": "Workload theo phòng ban"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem workload (%) của từng dự án để xác định dự án đang quá tải và điều phối nguồn lực", "Logics: % workload", "Công thức tính \\= (<strong>Tổng thời gian phân bổ của tất cả các task thuộc phòng ban tương ứng/Tổng nguồn lực của phòng ban theo tháng)*100%</strong>", "Trong đó:", "Thời gian phân bổ {allocated_hours}", "Tổng nguồn lực của phòng ban theo tháng \\= sum (thời gian trung bình 1 ngày của nhân sự theo lịch làm việc * công chuẩn của nhân sự) của tất cả nhân sự thuộc phòng ban", "Lưu ý: Capacity này sẽ thay đổi theo bộ lọc thời gian hoặc theo bộ lọc dự án", "Nếu lọc thời gian thì \\= sum (thời gian trung bình 1 ngày của nhân sự theo lịch làm việc * số ngày theo thời gian lọc)", "Nếu lọc theo dự án thì \\= capacity của phòng ban tham gia dự án đó", "Nếu lọc theo cả thời gian và dự án thì capacity sẽ \\= thời gian trung bình 1 ngày của nhân sự theo lịch làm việc * số ngày theo thời gian lọc"]
  }, {
    "t": "h3",
    "id": "workload-theo-nhan-su",
    "text": "Workload theo nhân sự"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem workload (%) của từng nhân sự để xác định nhân sự nào đang quá tải", "Logics: % workload", "Công thức tính \\= (<strong>Tổng thời gian phân bổ của tất cả các task của nhân sự tương ứng/Capacity của nhân sự theo tháng)*100%</strong>", "Trong đó:", "Thời gian phân bổ {allocated_hours}", "Capacity của nhân sự theo tháng \\= thời gian trung bình 1 ngày của nhân sự theo lịch làm việc * công chuẩn của nhân sự", "Lưu ý: Capacity này sẽ thay đổi theo bộ lọc thời gian hoặc theo bộ lọc dự án", "Nếu lọc thời gian thì \\= thời gian trung bình 1 ngày của nhân sự theo lịch làm việc * số ngày theo thời gian lọc", "Nếu lọc theo dự án thì \\= capacity của nhân sự theo dự án đó", "Nếu lọc theo cả thời gian và dự án thì capacity sẽ \\= thời gian trung bình 1 ngày của nhân sự theo lịch làm việc * số ngày theo thời gian lọc"]
  }, {
    "t": "h3",
    "id": "du-an-theo-phong-ban",
    "text": "Dự án theo phòng ban"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem số lượng dự án theo phòng ban và trạng thái tương ứng để đánh giá tình hình triển khai dự án, phân bổ nguồn lực và nhận diện phòng ban đang quá tải hoặc chậm tiến độ"]
  }, {
    "t": "img",
    "id": 531
  }, {
    "t": "h3",
    "id": "bxh-du-an-hoan-thanh-theo-phong-ban",
    "text": "BXH dự án hoàn thành theo phòng ban"
  }, {
    "t": "ul",
    "items": ["Mô tả: Hiển thị danh sách các phòng ban được sắp xếp theo số lượng dự án đã hoàn thành trong tháng, kèm tỷ lệ tăng trưởng so với tháng trước và xếp hạng phòng ban theo hiệu suất", "Công thức tính \\= Số dự án hoàn thành / Tổng dự án"]
  }, {
    "t": "h3",
    "id": "bxh-task-hoan-thanh",
    "text": "BXH task hoàn thành"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem bảng xếp hạng nhân sự theo số lượng task hoàn thành để đánh giá hiệu suất làm việc và nhận diện top performer trong team", "Công thức tính \\= Số task hoàn thành / Tổng task theo thời gian đang check"]
  }, {
    "t": "h3",
    "id": "bxh-task-hoan-thanh-dung-han",
    "text": "BXH task hoàn thành đúng hạn"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem bảng xếp hạng nhân sự theo số lượng task hoàn thành đúng hạn để đánh giá hiệu suất làm việc và nhận diện top performer trong team", "Công thức tính \\= Số task hoàn thành đúng hạn / Tổng task theo thời gian đang check"]
  }, {
    "t": "h3",
    "id": "hieu-suat-nhan-su",
    "text": "Hiệu suất nhân sự"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem hiệu suất làm việc của từng nhân sự dựa trên task để đánh giá năng suất, theo dõi tiến độ và phân bổ công việc hợp lý", "Công thức:", "Tổng task: Tổng số task được phân bổ cho nhân sự (không bao gồm huỷ)", "Task hoàn thành: Tổng số task ở trạng thái done (Trạng thái cuối cùng)", "% Task hoàn thành: \\= (Task hoàn thành / Tổng Task) * 100", "Task done đúng hạn:", "Tổng số task ở trạng thái done (Trạng thái cuối cùng)", "Thời gian hoàn thành \\&lt;= Thời gian theo kế hoạch", "% Task done đúng hạn: (Task done đúng hạn / Tổng task) * 100", "Task đang làm: Task có trạng thái khác done và huỷ", "Task quá hạn:", "Task có trạng thái khác done và huỷ", "Có deadline \\&lt; today", "Task chưa có deadline: Task chưa được thiết lập thời hạn deadline", "Thời gian được phân bổ:", "Tổng thời gian được phân bổ trên tất cả các task được assign cho nhân sự", "Với task được phân bổ cho nhiều người thì thời gian được phân bổ chia đều theo đầu người", "Thời gian đã dùng: Tổng thời gian đã dùng trên tất cả các task được assign cho nhân sự"]
  }, {
    "t": "h3",
    "id": "quan-ly-task",
    "text": "Quản lý task"
  }, {
    "t": "ul",
    "items": ["Mô tả: Xem nhanh danh sách task của mình theo trạng thái deadline đẻ ưu tiên xử lý công việc, tránh trễ hạn và quản lý tiến độ hiệu quả", "Logis:", "Đang thực hiện: Task có trạng thái khác done và huỷ", "Task Sắp đến hạn:", "Task chưa ở trạng thái cuối cùng", "Có deadline nằm trong khoảng: today\\&lt;= deadline \\&lt;= today \\+ <strong>3 ngày</strong>", "Task quá hạn:", "Task có trạng thái khác done và huỷ", "Có deadline \\&lt; today"]
  }, {
    "t": "h3",
    "id": "hoat-dong-gan-day",
    "text": "Hoạt động gần đây"
  }, {
    "t": "ul",
    "items": ["Mô tả: các log mới nhất liên quan đến task, giúp user nắm nhanh tình hình cập nhật, theo dõi tiến độ realtime ai đang làm gì, từ đó quản lý tiến độ hiệu quả hơn"]
  }, {
    "t": "img",
    "id": 532
  }],
  "toc": [{
    "id": "cau-hinh",
    "label": "Cấu hình"
  }, {
    "id": "tao-du-an",
    "label": "Tạo dự án"
  }, {
    "id": "tao-nhiem-vu",
    "label": "Tạo nhiệm vụ"
  }, {
    "id": "dashboard",
    "label": "Dashboard"
  }],
  "faq": [{
    "q": "Quy trình tổng quan của module Dự án?",
    "a": "<strong>Cấu hình → Tạo dự án → Tạo nhiệm vụ → Check dashboard.</strong>"
  }, {
    "q": "Cấu hình dự án gồm những gì?",
    "a": "Giai đoạn dự án, giai đoạn nhiệm vụ, phân loại, ưu tiên, sprint và vai trò dự án."
  }, {
    "q": "Có thể yêu cầu đổi thời hạn nhiệm vụ không?",
    "a": "Có. Trên nhiệm vụ dùng chức năng <strong>Yêu cầu thay đổi thời hạn nhiệm vụ</strong>; ngoài ra có thể nhập thời gian thực tế hoàn thành và cập nhật hàng loạt thông tin trên nhiệm vụ."
  }, {
    "q": "Dashboard theo dõi những gì?",
    "a": "Tiến độ dự án, workload theo dự án / phòng ban / nhân sự, BXH dự án &amp; task hoàn thành (đúng hạn), hiệu suất nhân sự và hoạt động gần đây."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/du-an.js", error: String((e && e.message) || e) }); }

// content/ecommerce.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["ecommerce"] = {
  "slug": "ecommerce",
  "title": "E-commerce",
  "icon": "Globe",
  "blocks": [{
    "t": "img",
    "id": 177
  }, {
    "t": "h2",
    "id": "quy-trinh-tong-quan",
    "text": "Quy trình tổng quan"
  }, {
    "t": "img",
    "id": 178
  }, {
    "t": "p",
    "html": "<strong>🔺LƯU Ý:</strong>"
  }, {
    "t": "p",
    "html": "Để <strong>vận hành sàn hiệu quả</strong> và tránh sai sót, cần chú ý:"
  }, {
    "t": "p",
    "html": "1️⃣ <strong>Master data</strong>: Dữ liệu hệ thống nội bộ và sàn TMĐT cần được nhập chính xác và mapping đúng:"
  }, {
    "t": "ul",
    "items": ["Mã sản phẩm nội bộ trên sàn", "Tham chiếu nội bộ trên Sản phẩm Odoo"]
  }, {
    "t": "p",
    "html": "2️⃣ <strong>Vận hành</strong>:"
  }, {
    "t": "ul",
    "items": ["Kết nối &amp; kéo thông tin đầu vào:"]
  }, {
    "t": "p",
    "html": "1/ Gian hàng: Điền thông tin và authen"
  }, {
    "t": "ul",
    "items": ["Kết nối gian hàng", "Điền thông tin quản trị", "Điền thông tin quản lý kết nối: cron kéo đơn hàng, sản phẩm"]
  }, {
    "t": "p",
    "html": "2/ Sản phẩm: Import  \\+ mapping kho  \\+ mapping sản phẩm"
  }, {
    "t": "ul",
    "items": ["Vận hành hàng ngày"]
  }, {
    "t": "p",
    "html": "1/ Bấm Sắp xếp vận chuyển đơn trên sàn -&gt; hệ thống tự kéo đơn và đồng bộ đơn về Sales Order"
  }, {
    "t": "p",
    "html": "2/ Kiểm tra đơn Sales Order, so sánh số lượng đơn sàn &amp; Sales Order -&gt; nếu lệch, check lỗi"
  }, {
    "t": "p",
    "html": "3/ Xác nhận đơn Sales Order ở trạng thái \\= Báo giá để đẩy đơn xuống kho."
  }, {
    "t": "p",
    "html": "3️⃣ <strong>Một số lưu ý</strong>:"
  }, {
    "t": "ul",
    "items": ["Khi import thông tin từ sàn về Odoo: Bấm đủ 2 nút Import &amp; Cập nhật chi tiết (hệ thống tự động điều hướng thao tác, vui lòng bấm đủ và không bỏ qua)", "Điều kiện để đẩy tồn kho: Đã mapping sản phẩm và kho hàng E-commerce với nội bộ", "Đồng bộ đơn hàng:", "Chỉ những đơn hàng đã bấm Sắp xếp vận chuyển trên sàn mới đồng bộ đơn sang Sales Order, cụ thể đơn sàn ở trạng thái:", "AWAITING_COLLECTION (với sàn TikTok)", "PROCESSED (với sàn Shopee)", "Nếu đồng bộ không thành công, có thể do chưa đồng bộ khách hàng hoặc chưa map sản phẩm, check lỗi theo hướng dẫn.", "Các đơn hàng được đồng bộ sang Sales Order sẽ được phân bổ doanh số dựa trên tab Thông tin quản trị trên Gian hàng. Nếu xảy ra sai sót, vui lòng kiểm tra lại tab Thông tin quản trị trên Gian hàng và Đơn hàng."]
  }, {
    "t": "h2",
    "id": "ket-noi-gian-hang",
    "text": "Kết nối Gian hàng"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Kết nối gian hàng sàn Thương mại điện tử với phần mềm Odoo để đồng bộ các thông tin từ sàn tập trung về hệ thống quản lý."
  }, {
    "t": "p",
    "html": "<strong>Bước 1 (*)</strong>: Thêm mới gian hàng"
  }, {
    "t": "p",
    "html": "Truy cập Module <strong>E-commerce</strong> <strong>‣</strong> menu <strong>Gian hàng</strong> <strong>‣</strong> bấm <strong>Mới</strong>."
  }, {
    "t": "img",
    "id": 179
  }, {
    "t": "p",
    "html": "<strong>Bước 2 (*)</strong>: Điền thông tin Gian hàng:"
  }, {
    "t": "ul",
    "items": ["Tên gian hàng", "ID gian hàng", "Nền tảng", "Tab Thông tin quản trị: <em>(dựa trên tab Thông tin quản trị để hệ thống phân quyền xem dữ liệu trên Module và chia đơn hàng về Sales)</em>", "Chuyên viên sales (nhân viên vận hành sàn) → hệ thống autofill Đội ngũ bán hàng và Công ty của Chuyên viên sales", "Hộ kinh doanh <em>(nếu có)</em>", "Nguồn khách hàng"]
  }, {
    "t": "img",
    "id": 180
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Lưu</strong>."
  }, {
    "t": "p",
    "html": "<em>(+) Bạn có thể tải hình ảnh Gian hàng lên để dễ nhận biết khi vận hành.</em>"
  }, {
    "t": "img",
    "id": 181
  }, {
    "t": "p",
    "html": "<strong>Bước 3 (*)</strong>: Kết nối gian hàng"
  }, {
    "t": "ul",
    "items": ["Trên màn hình formview Gian hàng đã tạo, bấm <strong>Kết nối</strong> <strong>‣</strong> chọn <strong>Lấy ‘Auth Code’</strong>."]
  }, {
    "t": "img",
    "id": 182
  }, {
    "t": "ul",
    "items": ["Hệ thống điều hướng đến màn hình sàn TMĐT <strong>‣</strong> Thực hiện cấp quyền cho Odoo ‣ Quay lại màn hình bấm <strong>Kết nối</strong>."]
  }, {
    "t": "img",
    "id": 183
  }, {
    "t": "ul",
    "items": ["Sau khi kết nối thành công, Gian hàng có trạng thái là <strong>Đang hoạt động</strong>, khi đó bạn có thể kéo và đẩy dữ liệu giữa Odoo và sàn TMĐT."]
  }, {
    "t": "img",
    "id": 184
  }, {
    "t": "p",
    "html": "<strong>Bước 4</strong>: Điền thông tin tab Quản lý kết nối"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Cấu hình chu kỳ tự động thực hiện đồng bộ dữ liệu tự động giữa <strong>Odoo</strong> và <strong>sàn TMĐT</strong>, giảm thao tác thủ công của người dùng."
  }, {
    "t": "p",
    "html": "Hiện tại hệ thống có thể thực hiện:"
  }, {
    "t": "ul",
    "items": ["Auto import sản phẩm (từ sàn TMĐT về Odoo) <strong>‣</strong> Thực hiện mapping sản phẩm sàn &amp; nội bộ", "Auto import đơn hàng (từ sàn TMĐT về Odoo) <strong>‣</strong> Thực hiện đồng bộ đơn hàng sàn &amp; nội bộ", "Auto cập nhật tồn kho (từ Odoo lên Sàn): cập nhật tồn kho với những sản phẩm sàn đã map với biến thể sản phẩm nội bộ và kho hàng nội bộ"]
  }, {
    "t": "h2",
    "id": "dong-bo-san-pham-va-kho-hang",
    "text": "Đồng bộ Sản phẩm và Kho hàng"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Kéo thủ công sản phẩm và kho hàng từ sàn về hệ thống."
  }, {
    "t": "h3",
    "id": "import-san-pham-va-kho-hang-san-e-commerce",
    "text": "<code>Import Sản phẩm và Kho hàng sàn → E</code>-commerce"
  }, {
    "t": "h4",
    "id": "import-san-pham-va-kho-hang",
    "text": "Import Sản phẩm và Kho hàng"
  }, {
    "t": "p",
    "html": "<strong>Bước 1 (*)</strong>: Gọi dữ liệu sản phẩm sàn"
  }, {
    "t": "p",
    "html": "Trên màn hình formview Gian hàng, bấm <strong><code>Import sản phẩm sàn → Odoo</code></strong>."
  }, {
    "t": "img",
    "id": 185
  }, {
    "t": "p",
    "html": "Hệ thống gọi dữ liệu sàn, hiển thị danh sách các sản phẩm trên sàn của gian hàng."
  }, {
    "t": "img",
    "id": 186
  }, {
    "t": "p",
    "html": "<strong>Bước 2 (*)</strong>: Thực hiện import sản phẩm"
  }, {
    "t": "p",
    "html": "Tick chọn các sản phẩm mong muốn import (có thể tick all) <strong>‣</strong> Bấm <strong>Thực hiện import</strong>."
  }, {
    "t": "img",
    "id": 187
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Hệ thống tiến hành import các sản phẩm và kho hàng đã chọn của sàn về <em>(lấy thông tin chung của sản phẩm và kho hàng)</em>."
  }, {
    "t": "p",
    "html": "<strong>Bước 3 (*)</strong>: Cập nhật chi tiết sản phẩm"
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành import sản phẩm về với thông tin chung, màn hình hiển thị popup thông báo thành công <strong>‣</strong> Bấm <strong>Cập nhật chi tiết sản phẩm</strong> để gọi các thông tin chi tiết."
  }, {
    "t": "img",
    "id": 188
  }, {
    "t": "h4",
    "id": "cap-nhat-chi-tiet-san-pham",
    "text": "Cập nhật chi tiết Sản phẩm"
  }, {
    "t": "p",
    "html": "Bạn có thể cập nhật chi tiết Sản phẩm bằng 3 cách:"
  }, {
    "t": "p",
    "html": "<strong>Cách 1</strong>: Pop-up thông báo <strong>Import Sản phẩm sàn</strong> <strong>→ Odoo</strong> thành công"
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành import sản phẩm về với thông tin chung, màn hình hiển thị popup thông báo thành công <strong>‣</strong> Bấm <strong>Cập nhật chi tiết sản phẩm</strong> để gọi các thông tin chi tiết."
  }, {
    "t": "img",
    "id": 188
  }, {
    "t": "p",
    "html": "<strong>Cách 2</strong>: Button <strong>Cập nhật chi tiết sản phẩm</strong> trên listview sản phẩm"
  }, {
    "t": "p",
    "html": "Trên màn hình listview sản phẩm, bấm <strong>Cập nhật chi tiết sản phẩm</strong> <strong>‣</strong> Chọn điều kiện cập nhật."
  }, {
    "t": "ul",
    "items": ["Nền tảng <strong>(*)</strong>", "Gian hàng", "Trạng thái sản phẩm"]
  }, {
    "t": "img",
    "id": 189
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Tiếp theo</strong> <strong>‣</strong> Màn hình hiển thị danh sách các sản phẩm đã lấy về Odoo theo điều kiện đã chọn <strong>‣</strong> Tick chọn các sản phẩm muốn cập nhật chi tiết (có thể tick all) <strong>‣</strong> Bấm <strong>Cập nhật</strong>."
  }, {
    "t": "img",
    "id": 190
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Nếu cập nhật thành công, hiển thị popup Cập nhật sản phẩm thành công."
  }, {
    "t": "img",
    "id": 191
  }, {
    "t": "p",
    "html": "<strong>Cách 3</strong>: Button <strong>Cập nhật sản phẩm</strong> trên formview sản phẩm"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>:"
  }, {
    "t": "ul",
    "items": ["Lấy thông tin chi tiết sau khi import thông tin chung của sản phẩm vào Odoo", "Cập nhật thông tin thay đổi của sản phẩm từ sàn về Odoo"]
  }, {
    "t": "p",
    "html": "Trên màn hình formview sản phẩm, bấm <strong>Cập nhật sản phẩm</strong> <strong>‣</strong> Hệ thống gọi dữ liệu sàn cập nhật các thông tin sản phẩm vào bản ghi."
  }, {
    "t": "img",
    "id": 192
  }, {
    "t": "h4",
    "id": "cap-nhat-chi-tiet-kho-hang",
    "text": "Cập nhật chi tiết Kho hàng"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>:"
  }, {
    "t": "ul",
    "items": ["Lấy thông tin chi tiết sau khi import thông tin chung của kho hàng vào Odoo", "Cập nhật thông tin thay đổi của kho hàng từ sàn về Odoo"]
  }, {
    "t": "p",
    "html": "Trên màn hình formview kho hàng, bấm <strong>Cập nhật kho hàng</strong> <strong>‣</strong> Hệ thống gọi dữ liệu sàn cập nhật các thông tin của kho hàng vào bản ghi."
  }, {
    "t": "img",
    "id": 193
  }, {
    "t": "h3",
    "id": "mapping-san-pham-va-kho-hang-e-commerce-odoo",
    "text": "Mapping Sản phẩm và Kho hàng E-commerce \\&lt;-&gt; Odoo"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>:"
  }, {
    "t": "ul",
    "items": ["Quản lý tập trung dữ liệu;", "Cập nhật tồn kho của sản phẩm từ Odoo lên sàn TMĐT."]
  }, {
    "t": "p",
    "html": "<em>Quy tắc mapping:</em>"
  }, {
    "t": "ul",
    "items": ["01 biến thể sản phẩm nội bộ có thể map với nhiều sản phẩm sàn; nhưng 01 sản phẩm sàn chỉ được map với 01 sản phẩm nội bộ;", "01 kho hàng nội bộ có thể map với nhiều kho hàng sàn; nhưng 01 kho hàng sàn chỉ được map với 01 kho hàng nội bộ."]
  }, {
    "t": "p",
    "html": "Khi sản phẩm được đồng bộ về Module E-commerce, hệ thống sẽ tự động map sản phẩm sàn với biến thể sản phẩm nội bộ theo hình thức map mã sản phẩm / mã vạch. Nếu sản phẩm chưa được map, lỗi có thể do mã sản phẩm / mã vạch nội bộ của biến thể không khớp với mã sản phẩm trên sàn. Do vậy bạn cần mapping kho hàng sàn với nội bộ và lọc các sản phẩm chưa mapping để thực hiện mapping thủ công."
  }, {
    "t": "img",
    "id": 194
  }, {
    "t": "p",
    "html": "Dưới đây là hướng dẫn map sản phẩm và kho hàng thủ công."
  }, {
    "t": "h4",
    "id": "mapping-san-pham",
    "text": "Mapping Sản phẩm"
  }, {
    "t": "p",
    "html": "Trên màn hình listview Sản phẩm, lọc các sản phẩm chưa được map với sản phẩm nội bộ <strong>‣</strong> Tick chọn các sản phẩm muốn mapping (có thể tick all) <strong>‣</strong> Bấm <strong>Mapping sản phẩm</strong>."
  }, {
    "t": "img",
    "id": 195
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Chọn hình thức mapping:"
  }, {
    "t": "ul",
    "items": ["Map mã sản phẩm <em>(khuyên dùng🌟)</em>: Mã sản phẩm sàn (SKU người bán) được map với Mã nội bộ hoặc Mã vạch của biến thể sản phẩm", "Map tên sản phẩm: Tên sản phẩm sàn được map với Tên biến thể sản phẩm nội bộ", "Map thủ công: Hệ thống hiển thị bảng mapping để người dùng điền nhanh mapping sản phẩm nội bộ"]
  }, {
    "t": "img",
    "id": 196
  }, {
    "t": "p",
    "html": "Sau khi thực hiện mapping thành công, bạn có thể xem lại thông tin mapping trên"
  }, {
    "t": "ul",
    "items": ["Formview sản phẩm sàn:"]
  }, {
    "t": "img",
    "id": 197
  }, {
    "t": "ul",
    "items": ["Formview biến thể sản phẩm nội bộ:"]
  }, {
    "t": "img",
    "id": 198
  }, {
    "t": "p",
    "html": "Bạn có thể sửa trực tiếp thông tin mapping trên formview sản phẩm."
  }, {
    "t": "h4",
    "id": "mapping-kho-hang",
    "text": "Mapping Kho hàng"
  }, {
    "t": "p",
    "html": "Bạn có thể mapping kho hàng bằng 2 cách:"
  }, {
    "t": "p",
    "html": "<strong>Cách 1</strong>: Mapping trên kho hàng sàn"
  }, {
    "t": "p",
    "html": "Trên màn hình kho hàng sàn, chọn kho hàng nội bộ để map."
  }, {
    "t": "img",
    "id": 199
  }, {
    "t": "p",
    "html": "<strong>Cách 2</strong>: Mapping trên kho hàng nội bộ"
  }, {
    "t": "p",
    "html": "Trên màn hình kho hàng nội bộ, tại tab Thông tin mapping, tick <strong>Đồng bộ Shopee / Đồng bộ Tiktok</strong> <strong>‣</strong> Chọn các kho hàng sàn để mapping."
  }, {
    "t": "img",
    "id": 200
  }, {
    "t": "h3",
    "id": "cap-nhat-ton-kho-len-san",
    "text": "Cập nhật tồn kho lên sàn"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Đảm bảo số lượng tồn hiển thị trên các sàn phản ánh đúng và kịp thời dữ liệu tồn kho thực tế, tránh tình trạng bán quá số lượng hoặc hết hàng và giảm thao tác nhập tồn kho thủ công."
  }, {
    "t": "p",
    "html": "Hệ thống dựa vào các thông tin cấu hình để cập nhật tồn kho tự động:"
  }, {
    "t": "ul",
    "items": ["Cập nhật tồn theo chu kỳ", "Cập nhật tồn theo kho hàng", "Cập nhật tồn theo sản phẩm"]
  }, {
    "t": "h4",
    "id": "cau-hinh-cap-nhat-ton-kho-tu-dong-theo-chu-ky",
    "text": "Cấu hình cập nhật tồn kho tự động theo chu kỳ"
  }, {
    "t": "p",
    "html": "Hệ thống cho phép dựa vào cấu hình thông tin Quản lý kết nối trên Gian hàng để tự động cập nhật tồn kho lên sàn theo chu kỳ."
  }, {
    "t": "img",
    "id": 201
  }, {
    "t": "h4",
    "id": "cau-hinh-cap-nhat-ton-kho-tu-dong-theo-kho-ha",
    "text": "Cấu hình cập nhật tồn kho tự động theo kho hàng"
  }, {
    "t": "p",
    "html": "Hệ thống cho phép chọn kho để update tồn kho. Trên màn hình Gian hàng <strong>‣</strong> Chọn kho hàng <strong>‣</strong> Tick chọn Auto Update tồn kho."
  }, {
    "t": "img",
    "id": 202
  }, {
    "t": "h4",
    "id": "cau-hinh-cap-nhat-ton-kho-tu-dong-theo-san-ph",
    "text": "Cấu hình cập nhật tồn kho tự động theo sản phẩm"
  }, {
    "t": "p",
    "html": "Hệ thống cho phép chọn Sản phẩm để update tồn kho. Trên màn hình Gian hàng <strong>‣</strong> Chọn Sản phẩm <strong>‣</strong> Tick chọn Auto Update tồn kho."
  }, {
    "t": "img",
    "id": 203
  }, {
    "t": "p",
    "html": "<em>hoặc</em> có thể tick chọn / bỏ chọn hàng loạt trên màn listview sản phẩm sàn."
  }, {
    "t": "img",
    "id": 204
  }, {
    "t": "h4",
    "id": "cap-nhat-ton-kho-thu-cong",
    "text": "Cập nhật tồn kho thủ công"
  }, {
    "t": "p",
    "html": "Trên màn hình formview Gian hàng, bấm <strong>Cập nhật tồn kho</strong>."
  }, {
    "t": "img",
    "id": 205
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Màn hình hiển thị toàn bộ sản phẩm sàn <em>(đã kéo về)</em> của gian hàng <strong>‣</strong> Tick chọn các sản phẩm mong muốn cập nhật tồn kho lên sàn <strong>‣</strong> Bấm <strong>Tiếp theo</strong> <strong>‣</strong> Hiển thị bảng cập nhật tồn kho với quy tắc:"
  }, {
    "t": "ul",
    "items": ["Các sản phẩm sàn đã map: Cập nhật tồn \\= Tồn kho khả dụng của \\[biến thể sản phẩm nội bộ\\] trên \\[kho hàng nội bộ\\]", "Các sản phẩm sàn chưa map: Cập nhật tồn \\= Tồn kho hiện có trên sàn."]
  }, {
    "t": "p",
    "html": "<em>(Người dùng có thể sửa trường Cập nhật tồn theo số lượng mong muốn cập nhật lên sàn)</em>"
  }, {
    "t": "img",
    "id": 206
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Tick chọn các sản phẩm &amp; Bấm <strong>Cập nhật</strong> <strong>‣</strong> Hệ thống thực hiện cập nhật tồn kho lên sàn <strong>‣</strong> Hiển thị bảng kết quả cập nhật tồn <em>(Thành công / Thất bại)</em>. Với các sản phẩm cập nhật thất bại, kiểm tra lỗi ở cột Ghi chú để điều chỉnh hoặc liên hệ với BP Công nghệ để được hỗ trợ."
  }, {
    "t": "img",
    "id": 207
  }, {
    "t": "h4",
    "id": "cau-hinh-nguong-dong-bo-ton-kho-len-san",
    "text": "Cấu hình ngưỡng đồng bộ tồn kho lên sàn"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> Giúp kiểm soát số lượng tồn kho tối thiểu cần giữ lại trước khi đồng bộ lên sàn thương mại điện tử. Điều này giúp tránh tình trạng bán hết hàng nội bộ do đồng bộ tồn không có giới hạn"
  }, {
    "t": "h4",
    "id": "setup-nguong-ton-san-pham-noi-bo",
    "text": "Setup ngưỡng tồn sản phẩm nội bộ"
  }, {
    "t": "p",
    "html": "<strong>Người thực hiện:</strong> Kế toán"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Bán hàng → Sản phẩm</code>",
    "children": [{
      "t": "img",
      "id": 208
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn sản phẩm cần thiết lập ngưỡng tồn kho sàn → Chọn tab Tồn kho</code>",
    "children": [{
      "t": "img",
      "id": 209
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Cập nhập ngưỡng tồn kho của sản phẩm tại trường <strong>Ngưỡng tồn kho</strong>",
    "children": [{
      "t": "img",
      "id": 210
    }, {
      "t": "p",
      "html": "(có thể thực hiện import hàng loạt để cập nhật ngưỡng tồn sàn hàng loạt)"
    }]
  }, {
    "t": "h4",
    "id": "cap-nhap-nguong-ton-kho-tai-san",
    "text": "Cập nhập ngưỡng tồn kho tại sàn"
  }, {
    "t": "p",
    "html": "<strong>Người thực hiện:</strong> Chuyên viên Vận hành sàn"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> <code>Sau khi kế toán thiết lập ngưỡng tồn kho của sản phẩm nội bộ → Vận hành sàn sẽ tiến hành thiết lập ngưỡng tồn theo từng sản phẩm trên sàn</code>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập Module Ecommerce → Chọn Sản phẩm → Chọn list view</code> (Danh sách)",
    "children": [{
      "t": "img",
      "id": 211
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn danh sách sản phẩm cần update ngưỡng tồn kho → Tác vụ → Cập nhập ngưỡng tồn kho</code>",
    "children": [{
      "t": "img",
      "id": 212
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Chọn sản phẩm cần điều chỉnh số lượng ngưỡng tồn kho sàn nếu khác so với ngưỡng tồn đã thiết lập -&gt; <code>Chỉnh sửa số lượng → Bấm Cập nhập</code>",
    "children": [{
      "t": "img",
      "id": 213
    }]
  }, {
    "t": "h4",
    "id": "thiet-lap-logic-upload-ton-kho-tu-odoo-san",
    "text": "<code>Thiết lập logic upload tồn kho từ odoo→ sàn</code>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Ecommerce → Gian hàng → Chọn gian hàng cần cấu hình</code>",
    "children": [{
      "t": "img",
      "id": 214
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Lựa chọn logic upload tồn kho lên sàn khi tồn của odoo \\&lt; ngưỡng tồn kho",
    "children": [{
      "t": "img",
      "id": 215
    }, {
      "t": "ul",
      "items": ["<strong>Không đồng bộ tồn:</strong> Khi tồn ≤ ngưỡng, hệ thống bỏ qua, không cập nhật tồn lên sàn.", "<strong>Đồng bộ tồn \\= 0:</strong> Khi tồn ≤ ngưỡng, hệ thống đẩy tồn \\= 0 lên sàn."]
    }]
  }, {
    "t": "h2",
    "id": "dong-bo-don-hang",
    "text": "Đồng bộ Đơn hàng"
  }, {
    "t": "h3",
    "id": "import-don-san-e-commerce",
    "text": "<code>Import Đơn sàn → E</code>-commerce"
  }, {
    "t": "p",
    "html": "Bạn có thể import đơn sàn bằng 2 cách:"
  }, {
    "t": "p",
    "html": "<strong>Cách 1</strong>: Import theo gian hàng"
  }, {
    "t": "p",
    "html": "<strong>Bước 1 (*)</strong>: Gọi dữ liệu đơn hàng sàn"
  }, {
    "t": "p",
    "html": "Trên màn hình formview Gian hàng, bấm <strong><code>Import đơn sàn → Odoo</code></strong>."
  }, {
    "t": "img",
    "id": 216
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Chọn điều kiện import:"
  }, {
    "t": "ul",
    "items": ["Ngày tạo đơn: Hệ thống mặc định hôm nay. Có thể chọn khoảng ngày tạo đơn khác.", "Trạng thái đơn hàng sàn: Chọn các trạng thái đơn hàng sàn, nếu không chọn sẽ gọi toàn bộ đơn"]
  }, {
    "t": "img",
    "id": 217
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Hệ thống gọi dữ liệu sàn, hiển thị danh sách các đơn hàng theo điều kiện đã chọn."
  }, {
    "t": "img",
    "id": 218
  }, {
    "t": "p",
    "html": "<strong>Bước 2 (*)</strong>: Thực hiện import đơn hàng"
  }, {
    "t": "p",
    "html": "Tick chọn các sản phẩm mong muốn import (có thể tick all) <strong>‣</strong> Bấm <strong>Thực hiện import</strong>."
  }, {
    "t": "img",
    "id": 219
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Hệ thống tiến hành import các đơn hàng đã chọn của sàn về <em>(lấy thông tin chung của đơn hàng)</em>."
  }, {
    "t": "p",
    "html": "<strong>Bước 3 (*)</strong>: Cập nhật chi tiết đơn hàng"
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành import đơn hàng về với thông tin chung, màn hình hiển thị popup thông báo thành công <strong>‣</strong> Bấm <strong>Cập nhật chi tiết đơn hàng</strong> để gọi các thông tin chi tiết."
  }, {
    "t": "img",
    "id": 220
  }, {
    "t": "p",
    "html": "<strong>Cách 2</strong>: Import theo điều kiện"
  }, {
    "t": "p",
    "html": "Trên màn hình listview đơn hàng, bấm <strong><code>Import đơn sàn → Odoo</code></strong> <strong>‣</strong> Chọn các điều kiện import:"
  }, {
    "t": "ul",
    "items": ["Nền tảng <strong>(*)</strong>", "Gian hàng <strong>(*)</strong>: Gian hàng theo nền tảng", "Ngày tạo đơn <strong>(*)</strong>: Hệ thống mặc định hôm nay. Có thể chọn khoảng ngày tạo đơn khác.", "Trạng thái đơn hàng sàn: Chọn các trạng thái đơn hàng sàn, nếu không chọn sẽ gọi toàn bộ đơn"]
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Tiếp theo</strong>."
  }, {
    "t": "img",
    "id": 221
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Hệ thống gọi dữ liệu sàn, hiển thị danh sách các đơn hàng theo điều kiện đã chọn."
  }, {
    "t": "img",
    "id": 222
  }, {
    "t": "p",
    "html": "<strong>Bước 2 (*)</strong>: Thực hiện import đơn hàng"
  }, {
    "t": "p",
    "html": "Tick chọn các sản phẩm mong muốn import (có thể tick all) <strong>‣</strong> Bấm <strong>Thực hiện import</strong>."
  }, {
    "t": "img",
    "id": 223
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Hệ thống tiến hành import các đơn hàng đã chọn của sàn về <em>(lấy thông tin chung của đơn hàng)</em>."
  }, {
    "t": "p",
    "html": "<strong>Bước 3 (*)</strong>: Cập nhật chi tiết đơn hàng"
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành import đơn hàng về với thông tin chung, màn hình hiển thị popup thông báo thành công <strong>‣</strong> Bấm <strong>Cập nhật chi tiết đơn hàng</strong> để gọi các thông tin chi tiết."
  }, {
    "t": "img",
    "id": 224
  }, {
    "t": "p",
    "html": "<em>Lưu ý:</em> Khi import đơn hàng sàn vào Odoo, hệ thống đồng bộ Thông tin quản trị của Gian hàng sang Đơn hàng. Bạn có thể kiểm tra ở tab Thông tin quản trị trên formview Đơn hàng."
  }, {
    "t": "img",
    "id": 225
  }, {
    "t": "h3",
    "id": "cap-nhat-chi-tiet-don-hang",
    "text": "Cập nhật chi tiết Đơn hàng"
  }, {
    "t": "p",
    "html": "Bạn có thể cập nhật chi tiết đơn hàng bằng 3 cách:"
  }, {
    "t": "p",
    "html": "<strong>Cách 1</strong>: Pop-up thông báo <strong>Import đơn sàn</strong> <strong>→ Odoo</strong> thành công (trên formview Gian hàng và listview Đơn hàng)"
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành import đơn hàng về với thông tin chung, màn hình hiển thị popup thông báo thành công <strong>‣</strong> Bấm <strong>Cập nhật chi tiết đơn hàng</strong> để gọi các thông tin chi tiết."
  }, {
    "t": "img",
    "id": 220
  }, {
    "t": "p",
    "html": "<strong>Cách 2</strong>: Button <strong>Cập nhật đơn hàng hàng loạt</strong> trên listview Đơn hàng"
  }, {
    "t": "p",
    "html": "Trên màn hình listview Đơn hàng, bấm <strong>Cập nhật đơn hàng hàng loạt</strong> <strong>‣</strong> Chọn điều kiện cập nhật."
  }, {
    "t": "ul",
    "items": ["Nền tảng <strong>(*)</strong>", "Gian hàng <strong>(*)</strong>: Gian hàng theo nền tảng", "Ngày tạo đơn <strong>(*)</strong>: Hệ thống mặc định hôm nay. Có thể chọn khoảng ngày tạo đơn khác.", "Trạng thái đơn hàng sàn: Chọn các trạng thái đơn hàng sàn, nếu không chọn sẽ gọi toàn bộ đơn"]
  }, {
    "t": "img",
    "id": 226
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Tiếp theo</strong> <strong>‣</strong> Màn hình hiển thị danh sách các đơn hàng đã lấy về Odoo theo điều kiện đã chọn <strong>‣</strong> Tick chọn các đơn hàng muốn cập nhật chi tiết (có thể tick all) <strong>‣</strong> Bấm <strong>Cập nhật</strong>."
  }, {
    "t": "img",
    "id": 227
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Nếu cập nhật thành công, hiển thị thông báo Cập nhật đơn hàng thành công."
  }, {
    "t": "img",
    "id": 228
  }, {
    "t": "p",
    "html": "<strong>Cách 3</strong>: Button <strong>Cập nhật đơn hàng</strong> trên formview đơn hàng"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>:"
  }, {
    "t": "ul",
    "items": ["Lấy thông tin chi tiết sau khi import thông tin chung của đơn vào Odoo", "Cập nhật thông tin thay đổi của đơn hàng từ sàn về Odoo"]
  }, {
    "t": "p",
    "html": "Trên màn hình formview đơn hàng, bấm <strong>Cập nhật đơn hàng</strong> <strong>‣</strong> Hệ thống gọi dữ liệu sàn cập nhật các thông tin đơn hàng vào bản ghi."
  }, {
    "t": "img",
    "id": 229
  }, {
    "t": "h3",
    "id": "tu-dong-tao-khach-hang-e-commerce-va-dong-bo-",
    "text": "Tự động tạo Khách hàng E-commerce và đồng bộ Liên hệ"
  }, {
    "t": "p",
    "html": "Dựa trên Thông tin khách hàng trên đơn hàng, hệ thống tạo bản ghi Khách hàng sàn và đồng bộ sang Module Liên hệ, tạo bản ghi liên hệ mới."
  }, {
    "t": "p",
    "html": "Bạn có thể xem thông tin khách hàng tại menu Khách hàng <em>(truy cập từ trường Khách hàng trên đơn hoặc tra cứu trên menu Khách hàng)</em>."
  }, {
    "t": "img",
    "id": 230
  }, {
    "t": "p",
    "html": "Thông tin khách hàng sàn được đồng bộ sang Module Liên hệ, gắn Chuyên viên sales và Marketing theo Thông tin quản trị của đơn hàng."
  }, {
    "t": "img",
    "id": 231
  }, {
    "t": "h3",
    "id": "dong-bo-don-hang-e-commerce-odoo",
    "text": "Đồng bộ đơn hàng E-<code>commerce → Odoo</code>"
  }, {
    "t": "p",
    "html": "<em>Điều kiện đồng bộ đơn</em>: Sản phẩm và khách hàng trên đơn đã được map với biến thể sản phẩm nội bộ và liên hệ nội bộ."
  }, {
    "t": "p",
    "html": "Khi đồng bộ đơn về Module E-commerce, hệ thống tự động đồng bộ đơn sang Sales Order. Bạn có thể kiểm tra Trạng thái đồng bộ của đơn trên:"
  }, {
    "t": "ul",
    "items": ["Listview đơn hàng:"]
  }, {
    "t": "img",
    "id": 232
  }, {
    "t": "ul",
    "items": ["Tab Thông tin đồng bộ trên formview Đơn hàng:"]
  }, {
    "t": "img",
    "id": 233
  }, {
    "t": "p",
    "html": "Với các đơn hàng đồng bộ thất bạn, bạn check lý do tại trường Ghi chú đồng bộ để sửa lại hoặc báo lại với BP Công nghệ để được hỗ trợ kịp thời."
  }, {
    "t": "img",
    "id": 234
  }, {
    "t": "img",
    "id": 235
  }, {
    "t": "p",
    "html": "Với các đơn chưa đồng bộ / đồng bộ thất bại, bạn có thể đồng bộ đơn thủ công theo hướng dẫn dưới đây:"
  }, {
    "t": "p",
    "html": "<strong>Bước 1</strong>: Sử dụng bộ lọc lọc các đơn với trạng thái đồng bộ \\= Chưa đồng bộ / Thất bại"
  }, {
    "t": "img",
    "id": 236
  }, {
    "t": "p",
    "html": "<strong>Bước 2</strong>: Tick chọn các đơn hàng để đồng bộ sang Sales Order <strong>‣</strong> Bấm <strong>Đồng bộ đơn sang Sales Order</strong>."
  }, {
    "t": "img",
    "id": 237
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Hệ thống thực hiện đồng bộ, bạn vui lòng check trường Trạng thái đồng bộ để kiểm tra tình trạng đồng bộ của đơn."
  }],
  "toc": [{
    "id": "quy-trinh-tong-quan",
    "label": "Quy trình tổng quan"
  }, {
    "id": "ket-noi-gian-hang",
    "label": "Kết nối Gian hàng"
  }, {
    "id": "dong-bo-san-pham-va-kho-hang",
    "label": "Đồng bộ Sản phẩm và Kho hàng"
  }, {
    "id": "dong-bo-don-hang",
    "label": "Đồng bộ Đơn hàng"
  }],
  "faq": [{
    "q": "Cần chuẩn bị gì để vận hành sàn đúng?",
    "a": "Master data của hệ thống nội bộ và sàn TMĐT phải được nhập chính xác và <strong>mapping đúng</strong> (kho hàng, sản phẩm)."
  }, {
    "q": "Quy tắc mapping sản phẩm sàn với nội bộ là gì?",
    "a": "Khi đồng bộ về, hệ thống tự động map sản phẩm sàn với biến thể sản phẩm nội bộ theo <strong>mã sản phẩm / mã vạch</strong>. Nếu không khớp, có thể mapping thủ công."
  }, {
    "q": "Làm sao tránh bán quá số lượng (oversell)?",
    "a": "Thiết lập <strong>ngưỡng tồn kho</strong>: kế toán đặt ngưỡng tồn cho sản phẩm nội bộ, vận hành sàn đặt ngưỡng tồn theo từng sản phẩm trên sàn, và cấu hình logic upload tồn từ Odoo lên sàn."
  }, {
    "q": "Đơn sàn được đồng bộ về Sales Order khi nào?",
    "a": "Khi sản phẩm và khách hàng trên đơn đã được map với biến thể sản phẩm nội bộ và liên hệ nội bộ; khi đó hệ thống tự động đồng bộ đơn sang Sales Order."
  }, {
    "q": "Đơn đồng bộ thất bại thì kiểm tra ở đâu?",
    "a": "Xem lý do tại trường <strong>Ghi chú đồng bộ</strong>, sửa lại rồi đồng bộ thủ công (lọc trạng thái Chưa đồng bộ/Thất bại → <strong>Đồng bộ đơn sang Sales Order</strong>), hoặc báo BP Công nghệ."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/ecommerce.js", error: String((e && e.message) || e) }); }

// content/elearning.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["elearning"] = {
  "slug": "elearning",
  "title": "E-learning",
  "icon": "Book",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "cau-hinh",
    "text": "Cấu hình"
  }, {
    "t": "h3",
    "id": "phan-loai-nhom-khoa-hoc",
    "text": "Phân loại nhóm khoá học"
  }, {
    "t": "h4",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Phân loại nhóm khoá học là việc chia các khóa học thành từng nhóm theo một tiêu chí nhất định để dễ quản lý, theo dõi và định hướng cho người học."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-phan-loai-nhom-khoa-hoc",
    "text": "Các bước tạo phân loại nhóm khoá học"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Học online → Cấu hình → Phân loại nhóm khoá học → Mới</code>",
    "children": [{
      "t": "img",
      "id": 356
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền tên phân loại → Lưu</code>",
    "children": []
  }, {
    "t": "h3",
    "id": "nhom-khoa-hoc",
    "text": "Nhóm khoá học"
  }, {
    "t": "h4",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Dùng để phân nhóm, phân loại khoá hoc, phục vụ lên báo cáo theo nhóm"
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-nhom-khoa-hoc",
    "text": "Các bước tạo nhóm khoá học"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Học online → Cấu hình → Nhóm khoá học → Mới</code>",
    "children": [{
      "t": "img",
      "id": 357
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập các thông tin trên form → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 358
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Mã nhóm", "Là ký tự đầu tiên của khoá học, khi thêm mới khoá học thuộc nhóm được chọn"], ["Phân loại", "Phân loại nhóm khoá học"]]
    }]
  }, {
    "t": "h3",
    "id": "doi-tuong-tham-gia",
    "text": "Đối tượng tham gia"
  }, {
    "t": "h4",
    "id": "mo-ta-3",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Dùng để khai báo đối tượng học viên có thể tham gia khoá học khi thiết lập khoá học mới"
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-doi-tuong-tham-gia",
    "text": "Các bước tạo đối tượng tham gia"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Học online → Cấu hình → Đối tượng tham gia → Mới</code>",
    "children": [{
      "t": "img",
      "id": 359
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập các thông tin trên form → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 360
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Phòng ban áp dụng", "Nếu thiết lập thì chỉ những phòng ban được cấu hình mới được tham gia khoá học, nếu không thiết lập thì tất cả phòng ban đều được phép."], ["Công ty con", "Nếu thiết lập thì chỉ những công ty được cấu hình mới được tham gia khoá học, nếu không thiết lập thì tất cả công ty đều được phép."], ["Hệ thống", "Nếu thiết lập thì chỉ những hệ thống được cấu hình mới được tham gia khoá học, nếu không thiết lập thì tất cả hệ thống đều được phép."], ["Chức vụ áp dụng", "Nếu thiết lập thì chỉ những chức vụ được cấu hình mới được tham gia khoá học, nếu không thiết lập thì tất cả chức vụ đều được phép."], ["Cấp cán bộ", "Nếu thiết lập thì chỉ những cấp bậc được cấu hình mới được tham gia khoá học, nếu không thiết lập thì tất cả cấp bậc đều được phép."]]
    }]
  }, {
    "t": "h3",
    "id": "kpi-dao-tao",
    "text": "KPI đào tạo"
  }, {
    "t": "h4",
    "id": "mo-ta-4",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Là việc thiết lập bộ chỉ số đánh giá nhân sự trong công ty được giao nhiệm vụ đào tạo có hoàn thành tốt vai trò giảng dạy và mang lại hiệu quả cho tổ chức hay không."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-kpi-dao-tao",
    "text": "Các bước tạo KPI đào tạo"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Học online → Cấu hình → KPI đào tạo → Mới</code>",
    "children": [{
      "t": "img",
      "id": 361
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập tên giảng viên muốn thiết lập KPI và KPI đứng lớp tương ứng → Ấn Lưu</code>",
    "children": [{
      "t": "img",
      "id": 362
    }]
  }, {
    "t": "h2",
    "id": "khoa-hoc",
    "text": "Khoá học"
  }, {
    "t": "h3",
    "id": "them-moi-khoa-hoc",
    "text": "Thêm mới khoá học"
  }, {
    "t": "h4",
    "id": "mo-ta-5",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Quản lý danh sách các khoá học, chủ đề đào tạo bao gồm khoá học online và offline"
  }, {
    "t": "h4",
    "id": "cac-buoc",
    "text": "Các bước"
  }, {
    "t": "h4",
    "id": "buoc-1-nguoi-dung-truy-cap-menu-hoc-online-kh",
    "text": "Bước 1: <code>Người dùng truy cập menu Học online → Khoá học → Khoá học → Mới</code>"
  }, {
    "t": "img",
    "id": 363
  }, {
    "t": "p",
    "html": "<strong>Diễn giải:</strong>"
  }, {
    "t": "table",
    "headers": ["Trường thông tin", "Diễn giải"],
    "rows": [["Thời hạn", "Thời lượng khoá học, bằng tổng thời lượng các nội dung"], ["Nội dung", "Số lượng nội dung được tạo trong khoá học"], ["Lượt xem", "Số người xem khoá học trên web Elearning"], ["Xem khoá học", "Xem các nội dung trên web Elearning đối với những khoá học offline"]]
  }, {
    "t": "h4",
    "id": "buoc-2-dien-cac-thong-tin-tren-form-tao-moi-k",
    "text": "Bước 2:  Điền các thông tin trên form tạo mới khoá học"
  }, {
    "t": "img",
    "id": 364
  }, {
    "t": "h4",
    "id": "buoc-3-an-them-noi-dung-tren-tab-noi-dung-de-",
    "text": "Bước 3:  Ấn thêm nội dung trên tab nội dung để thêm nội dung mới cho khoá học"
  }, {
    "t": "img",
    "id": 365
  }, {
    "t": "p",
    "html": "<strong>Diễn giải:</strong>"
  }, {
    "t": "table",
    "headers": ["Trường thông tin", "Diễn giải"],
    "rows": [["Loại nội dung", "Hình ảnh: Cho phép Upload nội dung là tài liệu định dạng <strong>PNG</strong> Bài viết: Cho phép Upload tài liệu là File PDF hoặc hình Ảnh (Upload được thực hiện trên Web Elearning) Tài liệu: Cho phép Upload nội dung là tài liệu định dạng <strong>PDF</strong> Video: Cho phép nhập Link video trên Youtube. Hệ thống tự động lấy thông tin tiêu đề của video, mô tả và thời lượng của video vào Form Tạo nội dung. Quiz: Cho phép tạo nội dung là các câu hỏi trắc nghiệm (Xem cách tạo nội dung là câu hỏi trắc nghiệm mục 3\\) Scorm: Cho phép Upload video định dạng Scorm Chứng nhận: Nội dung là một Phiếu khảo sát (Được lấy từ danh sách các phiếu khảo sát) Deepview: Cho phép chèn trực tiếp 1 đường link/trang web/ứng dụng bên ngoài vào trong khoá học"], ["Cho phép xem trước", "Nếu checkbox thì sẽ cho phép bất kỳ ai cũng có thể truy cập khoá học, người dùng không cần tham gia kênh để truy cập nội dung của khoá học"], ["% Unlock video", "Hệ thống tự động khoá video (Không cho phép tua, tạm dừng, thao tác vào video) khi học viên chưa xem đủ % thời lượng tối thiểu và chưa hoàn thành xem video"], ["Unlock bằng thời gian &amp; Thời gian unlock", "Hệ thống tự động khoá video (Không cho phép tua, tạm dừng, thao tác vào video) khi học viên chưa xem đủ thời gian tối thiểu được thiết lập"]]
  }, {
    "t": "h4",
    "id": "buoc-4-an-them-mot-dong-tren-tab-lich-dao-tao",
    "text": "Bước 4:  Ấn thêm một dòng trên tab Lịch đào tạo để thêm lịch đào tạo mới cho khoá học Offline"
  }, {
    "t": "img",
    "id": 366
  }, {
    "t": "p",
    "html": "<strong>Diễn giải:</strong>"
  }, {
    "t": "table",
    "headers": ["Trường thông tin", "Diễn giải"],
    "rows": [["Giảng viên", "Chọn từ danh sách nhân sự"], ["Ngày đào tạo", "Chọn Ngày diễn ra lịch đào tạo"], ["Thời gian từ", "Nhập Thời gian bắt đầu lịch đào tạo (Ví dụ khi nhập liệu sẽ nhập 0800, hệ thống tự động nhận diện và trả về đúng định dạng 08:00)"], ["Thời gian đến", "Nhập Thời gian kết thúc lịch đào tạo (Ví dụ khi nhập liệu sẽ nhập 1200, hệ thống tự động nhận diện và trả về đúng định dạng 12:00)"], ["Nghỉ giữa giờ", "Thời gian nghỉ giữa giờ trong khóa học"], ["Địa điểm", "Chọn từ cấu hình địa điểm"], ["Sức chứa tối đa", "Sức chứa tối đa theo địa điểm đã chọn"], ["Số học viên tối đa", "Nhập số học viên tối đa có thể đăng ký lịch đào tạo"], ["Số chỗ đã đăng ký", "Lấy theo thông tin số lượng học viên đã đăng ký"], ["Số chỗ còn trống", "\\= Số học viên tối đa - Số chỗ đã đăng ký"]]
  }, {
    "t": "h4",
    "id": "buoc-5-cap-nhat-thong-tin-tab-tuy-chon",
    "text": "Bước 5:  Cập nhật thông tin Tab Tuỳ chọn"
  }, {
    "t": "img",
    "id": 367
  }, {
    "t": "p",
    "html": "<strong>Diễn giải:</strong>"
  }, {
    "t": "table",
    "headers": ["Trường thông tin", "Diễn giải"],
    "rows": [["Người phụ trách", "Người phụ trách khóa học/ chủ đề đào tạo"], ["Phân loại khoá học", "Online: Học viên có thể học Online trên Web tại bất cứ thời điểm nào Offline: Học viên phải đăng ký các lịch đào tạo mới có thể tham gia"], ["Đối tượng tham gia", "Chọn từ danh sách Đối tượng tham gia thiết lập tại phần Thiết lập Những nhân sự thuộc nhóm đối tượng tham gia có thể xem khóa học, truy cập khóa học Online hoặc Đăng ký các lịch đào tạo Offline"], ["Chính sách tham gia", "Mở: Học viên nằm trong nhóm “<strong>Đối tượng tham gia”</strong> Có thể Học Online, Đăng ký/ Hủy đăng ký các lớp học Offline Khi được mời: Chỉ những học viên được mời tham gia Khóa học/Chủ đề mới có quyền Học Online, Đăng ký/ Hủy đăng ký các lớp học Offline"], ["Hiển thị", "Chọn Đào tạo, nếu khóa học là một lớp đào tạo Online hoặc Offline"]]
  }, {
    "t": "h3",
    "id": "tao-bai-kiem-tra-chung-chi",
    "text": "Tạo bài kiểm tra, chứng chỉ"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Quản trị viên quản lý các bài kiểm tra/ chứng chỉ cho khóa học."
  }, {
    "t": "p",
    "html": "<strong>Lưu ý:</strong> Mỗi khóa học chỉ được gắn với một chứng chỉ/bài kiểm tra và ngược lại"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước:</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập ứng dụng Học online → Khoá học → Chứng nhận → Mới</code>",
    "children": [{
      "t": "img",
      "id": 368
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập Tiêu đề Bài kiểm tra → Chọn người phụ trách → Cập nhật hình ảnh đại diện cho khảo sát</code>.",
    "children": [{
      "t": "img",
      "id": 369
    }, {
      "t": "p",
      "html": "<strong>Bước 3</strong>: Thêm câu hỏi cho bài kiểm tra. Chọn <strong><code>Thêm một câu hỏi → Nhập câu hỏi → Chọn loại câu hỏi → Nhập câu trả lời</code> (Nếu có)</strong>"
    }, {
      "t": "img",
      "id": 370
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["<strong>Loại câu hỏi</strong>", ""], ["Câu hỏi lựa chọn: một câu trả lời duy nhất", "Người dùng tham gia khảo sát chỉ được chọn 1 đáp án trong câu trả lời"], ["Câu hỏi lựa chọn: cho phép nhiều câu trả lời", "Người dùng tham gia khảo sát lựa chọn được nhiều đáp án trong câu trả lời"], ["Hộp văn bản nhiều dòng", "Cho phép người tham gia khảo sát nhập văn bản với nhiều dòng dữ liệu"], ["Hộp văn bản 1 dòng", "Cho phép người tham gia khảo sát nhập đoạn văn bản 1 dòng dữ liệu"], ["Giá trị kiểu số", "Người tham gia khảo chỉ được nhập dữ liệu kiểu số."], ["Cân", ""], ["Ngày", "Người dùng tham gia khảo sát nhập dữ liệu kiểu ngày dạng DD/MM/YYYY"], ["Ngày giờ", "Người dùng tham gia khảo sát nhập dữ liệu kiểu ngày giờ"], ["Ma trận", "Người dùng tham gia khảo sát chọn đáp án theo dạng ma trận"], ["<strong>Tuỳ chọn</strong>", ""], ["Câu trả lời bắt buộc", "Bắt buộc người tham gia khảo sát phải trả lời"], ["Câu trả lời kích hoạt", "Việc chọn bất kỳ câu trả lời nào trong số các câu trả lời được thiết lập ở đây sẽ kích hoạt câu hỏi"], ["Phiên trực tiếp", "Giới hạn thời gian trả lời với người tham gia khảo sát cho câu hỏi.  <strong>Lưu ý:</strong> Chỉ Có hiệu lực khi khảo sát ở chế độ Live Sessions"]]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Thiết lập tuỳ chọn",
    "children": [{
      "t": "img",
      "id": 371
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Phân trang", "Mỗi câu hỏi 1 trang Mỗi phần 1 trang: Một trang sẽ có một phần các câu hỏi Tất cả câu hỏi 1 trang"], ["Lựa chọn câu hỏi", "Tất cả câu hỏi  Chọn ngẫu nhiên từ các phần"], ["Cho phép chuyển trang", "Nếu đánh dấu thì người dùng có thể quay lại trang trước đó"], ["Số lần trả lời tối đa", "Cho phép Quản trị viên thiết lập số lần được phép làm bài kiểm tra của học viên. Nếu học viên muốn trả lời tiếp thì phải liên hệ ban đào tạo để được Ban đào tạo cho học lại"], ["Chế độ truy cập", "Bất kỳ ai có liên kết Chỉ người được mời: Chỉ được tham gia khảo sát khi được mời"], ["Yêu cầu đăng nhập", "Nếu được chọn, người dùng phải đăng nhập trước khi trả lời"], ["Giới hạn thời gian của khảo sát", "Giới hạn thời gian khảo sát"], ["Tính điểm", "Không tính điểm: Không áp dụng chấm điểm Tính điểm kèm đáp án sau mỗi trang: Tính điểm và cho phép xem lại câu trả lời và đáp án ngay lại trang khảo sát Tính điểm kèm đáp án khi hoàn thành: Tính điểm và cho phép xem lại câu trả lời và đáp án sau khi hoàn tất bài khảo sát Tính điểm không hiện đáp án: Tính điểm mà không cho phép xem lại câu trả lời và đáp án"]]
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Chọn Lưu để hoàn tất thêm Bài kiểm tra/ Chứng chỉ",
    "children": [{
      "t": "p",
      "html": "Để sử dụng khảo sát đánh giá, tại Form lịch đào tạo chọn một khảo sát đánh giá để học viên có thể đánh giá sau khi tham đào tạo. (Lưu ý: Những lịch đào tạo không chọn khảo sát đánh giá thì học viên không thể gửi khảo sát đánh giá)"
    }]
  }, {
    "t": "h2",
    "id": "hoc-vien-tham-gia-khoa-hoc",
    "text": "Học viên tham gia khoá học"
  }, {
    "t": "h3",
    "id": "dang-ky-lich-dao-tao",
    "text": "Đăng ký lịch đào tạo"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Học viên có thể đăng ký lịch đào tạo với các khóa học Offline(Đào tạo trực tiếp)"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "p",
    "html": "<strong>Cách 1: Đăng ký lịch Đào tạo tại Danh sách khóa học.</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Tại giao diện Kanban khóa học → Chọn</code> <strong>Đăng ký khóa học</strong> để xem các lịch học của khóa học. Tại đây Hệ thống hiển thị Danh sách <strong>lịch đào tạo chi tiết</strong> của khóa học",
    "children": [{
      "t": "p",
      "html": "<strong>Lưu ý(*):</strong>  <em>Trường hợp không nhìn thấy Chức năng <strong>Đăng ký khóa học</strong> có thể do Khóa học đó chưa có Lịch đào tạo hoặc Khóa học đó chỉ dành cho những <strong>thành viên được mời</strong> mới được đăng ký các Lịch đào tạo.</em>"
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Học viên theo nhu cầu bản thân Chọn <strong>Đăng ký</strong> để đăng ký lịch đào tạo",
    "children": [{
      "t": "p",
      "html": "Khi Học viên <strong>Đăng ký</strong> thành công, hệ thống sẽ tự động gửi tin nhắn thông báo đến hộp thư của học viên."
    }, {
      "t": "p",
      "html": "<strong>Cách 2:</strong> <strong>Đăng ký Lịch đào tạo tại Danh sách lịch đào tạo</strong>"
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Truy cập: <code>Khóa học → Lịch đào tạo</code>",
    "children": []
  }, {
    "t": "step",
    "num": "4",
    "html": "Tại danh sách <strong>Lịch đào tạo</strong>, học viên tìm đến Lịch đào tạo chọn <strong>Đăng ký</strong>",
    "children": [{
      "t": "p",
      "html": "Sau khi đăng kí thành công hệ thống sẽ gửi tin nhắn thông báo và hiển thị lịch học chi tiết, người dùng chọn Đóng để đóng lịch học chi tiết"
    }, {
      "t": "p",
      "html": "<strong>Lưu ý:</strong> <em>Nếu học viên chỉ xem được khóa học hiển thị mà không có mục đăng ký khóa học thì khóa học đó học viên không có quyền tham gia.</em>"
    }]
  }, {
    "t": "h3",
    "id": "huy-lich-dao-tao",
    "text": "Huỷ lịch đào tạo"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong>"
  }, {
    "t": "p",
    "html": "Khi không có nhu cầu tham gia các lịch đã đăng ký nữa, học viên có thể hủy các lịch đã đăng ký. Học viên chỉ được hủy lịch đào tạo trước thời gian diễn ra tối thiểu 01 ngày."
  }, {
    "t": "p",
    "html": "2. <strong>Các bước</strong>"
  }, {
    "t": "p",
    "html": "<strong>Cách 1: Đăng ký lịch Đào tạo tại Danh sách khóa học.</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<strong>Truy cập:</strong> <code>Khóa học → Khóa học. Tại giao diện Widget khóa học → Chọn</code> <strong>Đăng ký khóa học</strong> để xem các lịch học của khóa học. Hệ thống hiển thị Danh sách <strong>lịch đào tạo chi tiết</strong> của khóa học",
    "children": []
  }, {
    "t": "step",
    "num": "2",
    "html": "Người dùng chọn chức năng <strong>Hủy đăng ký</strong> để hủy lịch học đã đăng ký",
    "children": [{
      "t": "p",
      "html": "<strong>Lưu ý:</strong>"
    }, {
      "t": "ul",
      "items": ["<em>Chỉ hủy được những lịch đã Đăng ký</em>", "<em>Không thể hủy những lịch Đang diễn ra hoặc Đã diễn ra</em>", "<em>Chỉ có thể hủy từ trước 01 ngày diễn ra Lịch đào tạo trở đi (Ví dụ: Ngày đào tạo là 10/09/2023 thì bạn chỉ có thể Hủy đăng ký tạo từ ngày 08/09/2023 trở về trước. Từ ngày 09/08/2023 trở đi bạn không thể Hủy đăng ký)</em>"]
    }, {
      "t": "p",
      "html": "<strong>Cách 2: Hủy đăng ký tại Lịch đào tạo</strong>"
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Truy cập Khóa học → Lịch đào tạo</code>",
    "children": []
  }, {
    "t": "step",
    "num": "4",
    "html": "Tại danh sách Lịch đào tạo, học viên tìm đến lịch cần hủy chọn Hủy đăng ký. Sau khi Hủy đăng ký thành công, hệ thống sẽ gửi thông báo và tin nhắn về tài khoản",
    "children": []
  }, {
    "t": "h3",
    "id": "tham-gia-khoa-hoc-online",
    "text": "Tham gia khoá học online"
  }, {
    "t": "step",
    "num": "1",
    "html": "Đối với các khóa học online sẽ hiển thị button <strong>Học Onlin</strong>e, học viên nhấp chọn sẽ chuyển sang giao diện Website Elearning",
    "children": []
  }, {
    "t": "step",
    "num": "2",
    "html": "Học viện nhấp chọn Tham gia khóa học để ghi danh",
    "children": [{
      "t": "p",
      "html": "<strong>Lưu ý:</strong> <em>Nếu học viên chỉ xem được khóa học hiển thị mà không thể tham gia khóa học thì khóa học đó học viên không được mời.</em>"
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Giao diện Khóa học hiển thị các Nội dung có trong khóa học",
    "children": []
  }, {
    "t": "step",
    "num": "4",
    "html": "Nhấp chuột vào các bài tập trong khóa học để xem các nội dung. sau khi xem xong các nội dung, nếu cuối nội dung có bài Quizz học viên sẽ cần hoàn thành bài quizz thì hệ thống mới tính hoàn thành nội dung.",
    "children": [{
      "t": "p",
      "html": "<strong>Lưu ý:</strong> <em>Các bài tập đã hoàn thành sẽ hiển thị vòng tròn tích xanh, nếu chưa làm bài tập sẽ hiển thị vòng tròn trắng</em>."
    }]
  }],
  "toc": [{
    "id": "cau-hinh",
    "label": "Cấu hình"
  }, {
    "id": "khoa-hoc",
    "label": "Khoá học"
  }, {
    "id": "hoc-vien-tham-gia-khoa-hoc",
    "label": "Học viên tham gia khoá học"
  }],
  "faq": [{
    "q": "Phân biệt khoá học online và offline thế nào?",
    "a": "Khoá <strong>offline</strong> đăng ký theo Lịch đào tạo (hiển thị button Đăng ký); khoá <strong>online</strong> hiển thị button <strong>Học Online</strong> dẫn sang website E-learning để ghi danh và học."
  }, {
    "q": "Một khoá học gắn được mấy bài kiểm tra / chứng chỉ?",
    "a": "Mỗi khoá học chỉ được gắn với <strong>một</strong> chứng chỉ/bài kiểm tra và ngược lại."
  }, {
    "q": "Học viên huỷ lịch đào tạo được không?",
    "a": "Được, nhưng chỉ huỷ trước thời gian diễn ra tối thiểu theo quy định. Vào Khoá học hoặc Lịch đào tạo chọn <strong>Huỷ đăng ký</strong>."
  }, {
    "q": "KPI đào tạo dùng để làm gì?",
    "a": "Thiết lập bộ chỉ số đánh giá nhân sự được giao nhiệm vụ đào tạo/giảng dạy có hoàn thành tốt vai trò và mang lại hiệu quả hay không."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/elearning.js", error: String((e && e.message) || e) }); }

// content/kho-hang.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["kho-hang"] = {
  "slug": "kho-hang",
  "title": "Kho hàng",
  "icon": "Box",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích:</strong>"
  }, {
    "t": "ul",
    "items": ["Thực hiện quy trình nhập kho, điều chuyển kho, xuất kho, hoàn hàng cho khách;", "In master picklist, hướng dẫn lấy hàng tập trung, dễ kiểm soát;", "Thực hiện kiểm kê kho và xem báo cáo tồn kho"]
  }, {
    "t": "p",
    "html": "SẢN PHẨM"
  }, {
    "t": "p",
    "html": "Sản phẩm combo"
  }, {
    "t": "ul",
    "items": ["Tạo sản phẩm thường với"]
  }, {
    "t": "h2",
    "id": "tao-san-pham",
    "text": "Tạo sản phẩm"
  }, {
    "t": "p",
    "html": "<strong>Sản phẩm combo</strong>:"
  }, {
    "t": "p",
    "html": "<code>Truy cập Module Kho hàng →</code> <strong>Sản phẩm</strong> → bấm <strong>Mới</strong> để tạo sản phẩm mới."
  }, {
    "t": "p",
    "html": "1. Tạo sản phẩm"
  }, {
    "t": "p",
    "html": "Tại màn hình thông tin sản phẩm, người dùng nhập các thông tin cơ bản như một sản phẩm bình thường:"
  }, {
    "t": "ul",
    "items": ["<strong>Tên sản phẩm</strong>: nhập tên combo"]
  }, {
    "t": "p",
    "html": "Ví dụ: Combo Burger phô mai"
  }, {
    "t": "ul",
    "items": ["<strong>Loại sản phẩm</strong>: chọn theo cấu hình đang sử dụng, thường là <strong>Sản phẩm lưu kho</strong> (nếu có quản lý tồn kho)", "Tích chọn <strong>Có thể bán</strong> nếu combo được bán cho khách hàng", "Nhập các thông tin khác nếu có, ví dụ:", "Giá bán", "Đơn vị tính", "Danh mục sản phẩm", "Thuế bán hàng", "Mã nội bộ / barcode nếu cần"]
  }, {
    "t": "p",
    "html": "Sau khi nhập xong thông tin, bấm <strong>Lưu</strong>."
  }, {
    "t": "p",
    "html": "2. Tạo định mức nguyên liệu cho Combo"
  }, {
    "t": "p",
    "html": "Sau khi đã tạo sản phẩm Combo, trên màn hình sản phẩm bấm vào <em>quickaccess</em> <strong>Định mức nguyên liệu</strong>."
  }, {
    "t": "p",
    "html": "Tại màn hình Định mức nguyên liệu, bấm <strong>Mới</strong> để tạo định mức cho combo."
  }, {
    "t": "p",
    "html": "Người dùng điền các thông tin sau:"
  }, {
    "t": "ul",
    "items": ["<strong>Sản phẩm</strong>: hệ thống autofill sản phẩm combo vừa tạo"]
  }, {
    "t": "p",
    "html": "Combo Burger phô ma"
  }, {
    "t": "ul",
    "items": ["<strong>Loại BoM</strong>: chọn <strong>Bộ kit</strong>"]
  }, {
    "t": "p",
    "html": "Sau đó, tại phần <strong>Thành phần</strong>, thêm các sản phẩm con nằm trong combo."
  }, {
    "t": "p",
    "html": "<em>Ví dụ combo gồm:</em>"
  }, {
    "t": "table",
    "headers": ["<em>Thành phần</em>", "<em>Số lượng</em>"],
    "rows": [["<em>Burger phô mai</em>", "<em>1</em>"], ["<em>Khoai tây chiên</em>", "<em>1</em>"], ["<em>Nước ngọt</em>", "<em>1</em>"]]
  }, {
    "t": "p",
    "html": "Sau khi thêm đầy đủ thành phần, bấm <strong>Lưu</strong>."
  }, {
    "t": "h2",
    "id": "quan-ly-san-pham-theo-lo-se-ri-truong-hop-kho",
    "text": "Quản lý sản phẩm theo Lô / Sê-ri (trường hợp không quản lý sản phẩm theo Lô/Seriel thì bỏ qua)"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Truy xuất nguồn gốc và theo dõi sản phẩm trong suốt quá trình tiếp nhận và bán hàng"
  }, {
    "t": "h3",
    "id": "quan-ly-theo-lo",
    "text": "Quản lý theo lô"
  }, {
    "t": "p",
    "html": "Các sản phẩm được theo dõi theo lô cần được thiết lập Theo dõi hàng tồn kho \\= Theo lô"
  }, {
    "t": "img",
    "id": 33
  }, {
    "t": "p",
    "html": "Khi tạo các phiếu Nhập kho, xuất kho, điều chuyển nội bộ…, hàng hoá được gắn số lô sẽ được có thêm thông tin số lô để thực hiện truy vết nguồn gốc hàng hoá."
  }, {
    "t": "p",
    "html": "Trên phiếu dịch chuyển, nhấn vào biểu tượng số lô <strong>‣</strong> gắn số lô / tạo số lô mới cho sản phẩm."
  }, {
    "t": "img",
    "id": 34
  }, {
    "t": "p",
    "html": "Bạn có thể truy vết sản phẩm theo số lô bằng cách truy cập Module <strong>Kho vận ‣ Sản phẩm ‣ Số lô/Sê-ri ‣</strong> Chọn số lô &amp; ấn <strong>Khả năng truy xuất nguồn gốc</strong>."
  }, {
    "t": "img",
    "id": 35
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Màn hình hiển thị các nghiệp vụ kho (phiếu dịch chuyển) liên quan đến số lô này."
  }, {
    "t": "img",
    "id": 36
  }, {
    "t": "h3",
    "id": "quan-ly-theo-so-se-ri",
    "text": "Quản lý theo số sê-ri"
  }, {
    "t": "p",
    "html": "Các sản phẩm được theo dõi theo số sê-ri cần được thiết lập Theo dõi hàng tồn kho \\= Theo số sê-ri duy nhất."
  }, {
    "t": "img",
    "id": 37
  }, {
    "t": "p",
    "html": "Việc quản lý sản phẩm theo sê-ri đi theo luồng nghiệp vụ Nhập - xuất hàng hoá."
  }, {
    "t": "h4",
    "id": "quan-ly-so-se-ri-khi-nhap-hang",
    "text": "Quản lý số sê-ri khi nhập hàng"
  }, {
    "t": "p",
    "html": "Để quản lý theo sê-ri, khi nhập kho cần xác định số sê-ri cho sản phẩm bằng 03 cách:"
  }, {
    "t": "p",
    "html": "<strong>Cách 1</strong>: Gán số sê-ri thủ công"
  }, {
    "t": "p",
    "html": "Trên màn hình phiếu nhận hàng (phiếu WH/IN) ở trạng thái Sẵn sàng, bấm vào biểu tượng số sê-ri <strong>‣</strong> Điền số sê-ri của từng line sản phẩm."
  }, {
    "t": "img",
    "id": 38
  }, {
    "t": "p",
    "html": "<strong>Cách 2</strong>: Gán số sê-ri hàng loạt"
  }, {
    "t": "p",
    "html": "Trên pop-up gán số sê-ri, bấm <strong>Tạo sê-ri/lô</strong> <strong>‣</strong> Điền số sê-ri đầu tiên &amp; số lượng (số lượng sản phẩm nhập vào kho) <strong>‣</strong> Bấm <strong>Tạo</strong>."
  }, {
    "t": "img",
    "id": 39
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Hệ thống tự động sinh các số sê-ri theo thứ tự gán vào từng sản phẩm."
  }, {
    "t": "img",
    "id": 40
  }, {
    "t": "p",
    "html": "<strong>Cách 3</strong>: Copy - Paste số sê-ri từ Excel"
  }, {
    "t": "p",
    "html": "Mở trang tính có chứa số sê-ri muốn nhập và sao chép danh sách."
  }, {
    "t": "img",
    "id": 41
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Trên pop-up nhập số sê-ri sản phẩm, bấm Nhập lô/sê-ri <strong>‣</strong> Dán các số vừa sao chép từ file excel vào trường <strong>Số sê-ri</strong> <strong>‣</strong> Bấm <strong>Tạo</strong>."
  }, {
    "t": "img",
    "id": 42
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Hệ thống fill số sê-ri vào các dòng tương ứng."
  }, {
    "t": "img",
    "id": 43
  }, {
    "t": "h4",
    "id": "quan-ly-so-se-ri-khi-xuat-hang",
    "text": "Quản lý số sê-ri khi xuất hàng"
  }, {
    "t": "p",
    "html": "Tại giao diện phiếu dịch chuyển, hệ thống gợi ý các sản phẩm với số sê-ri tương ứng theo <strong>chiến lược xuất kho</strong> được thiết lập trên Danh mục sản phẩm."
  }, {
    "t": "img",
    "id": 44
  }, {
    "t": "p",
    "html": "Bạn có thể xem các sản phẩm với số sê-ri tại cột Số sê-ri hoặc biểu tượng số sê-ri."
  }, {
    "t": "img",
    "id": 45
  }, {
    "t": "p",
    "html": "Có thể chọn lại chọn sản phẩm với số sê-ri khác."
  }, {
    "t": "img",
    "id": 46
  }, {
    "t": "p",
    "html": "Bạn có thể truy vết sản phẩm theo số sê-ri bằng cách truy cập Module <strong>Kho vận ‣ Sản phẩm ‣ Số lô/Sê-ri ‣</strong> Chọn số sê-ri &amp; ấn <strong>Khả năng truy xuất nguồn gốc</strong>."
  }, {
    "t": "img",
    "id": 47
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Màn hình hiển thị các nghiệp vụ kho (phiếu dịch chuyển) liên quan đến số lô này."
  }, {
    "t": "img",
    "id": 48
  }, {
    "t": "p",
    "html": "Để biết vị trí của sản phẩm với số sê-ri này, bấm nút Vị trí trên giao diện số sê-ri đó."
  }, {
    "t": "img",
    "id": 49
  }, {
    "t": "h2",
    "id": "nhap-hang-ve-kho",
    "text": "Nhập hàng về kho"
  }, {
    "t": "p",
    "html": "Hệ thống áp dụng quy trình nhập kho 02 bước: Hàng hoá khi nhập sẽ được chuyển đến một địa điểm để kiểm đếm <em>(địa điểm Đầu vào)</em> trước khi nhập <a href=\"https://viindoo.com/documentation/17.0/vi/applications/supply-chain/inventory/warehouse-management/warehouses/how-to-create-warehouses-and-locations.html\" target=\"_blank\" rel=\"noopener\">kho</a>. Việc kiểm đếm, tập kết hàng hoá là bước đầu sẽ được gọi là <strong>Nhận hàng</strong>. Sau khi việc kiểm đếm xong sẽ chuyển sang bước hai là <strong>Lưu kho</strong>."
  }, {
    "t": "p",
    "html": "Để nhập hàng,"
  }, {
    "t": "p",
    "html": "<strong>Bước 1</strong>: Nhận hàng"
  }, {
    "t": "p",
    "html": "Truy cập Module <strong>Kho hàng</strong> <strong>‣</strong> <strong>Hoạt động</strong> <strong>‣ Phiếu nhập kho</strong> <strong>‣</strong> Toàn bộ phiếu nhập kho được hiển thị trên màn kèm trạng thái của phiếu."
  }, {
    "t": "p",
    "html": "Phiếu nhập kho có thể được tạo từ đơn mua hàng hoặc kho thêm phiếu nhập mới."
  }, {
    "t": "p",
    "html": "Để tạo phiếu nhập kho mới, trên màn hình listview kho hàng, bấm <strong>Mới</strong>."
  }, {
    "t": "img",
    "id": 50
  }, {
    "t": "p",
    "html": "Điền các thông tin trên phiếu nhập."
  }, {
    "t": "ul",
    "items": ["Loại hoạt động: Nhận hàng - chọn kho nhận hàng (Ví dụ: Kho tổng: Phiếu nhập kho);", "Vị trí đích: Vị trí lưu hàng của kho sau khi hoàn thành phiếu nhập;", "Hoạt động:", "Sản phẩm nhập", "Nhu cầu số lượng nhập"]
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Phiếu nhập hàng ở trạng thái <strong>Nháp</strong>."
  }, {
    "t": "img",
    "id": 51
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Đánh dấu cần làm ‣</strong> Trạng thái phiếu nhập hàng chuyển sang Sẵn sàng, đánh dấu việc chuẩn bị đưa hàng vào vị trí tập kết hàng."
  }, {
    "t": "img",
    "id": 52
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Sau khi kiểm đếm hàng ở vị trí tập kết, điền số lượng thực đếm được ở cột <strong>Số lượng</strong>."
  }, {
    "t": "img",
    "id": 53
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Xác nhận</strong> để hoàn tất phiếu nhập vào địa điểm Đầu vào của kho. Khi đó trạng thái phiếu nhập là Hoàn tất, tồn kho của sản phẩm ở địa điểm Đầu vào tăng lên theo số lượng đã nhập."
  }, {
    "t": "img",
    "id": 54
  }, {
    "t": "p",
    "html": "<strong>Bước 2</strong>: Lưu kho"
  }, {
    "t": "p",
    "html": "Sau khi nhận hàng từ phía Nhà cung cấp đến địa điểm đầu vào, lượt thứ 2 sẽ dịch chuyển hàng hoá từ địa điểm Đầu vào để <strong>Lưu kho</strong> được hiển thị qua phiếu dịch chuyển nội bộ."
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành phiếu nhập kho (phiếu WH/IN) vào địa điểm đầu vào, hệ thống tự động sinh phiếu dịch chuyển ở trạng thái Sẵn sàng (phiếu WH/STOR). Bạn có thể truy cập phiếu bằng 2 cách:"
  }, {
    "t": "p",
    "html": "<strong>Cách 1</strong>: Từ màn hình phiếu nhập hàng WH/IN, bấm Smart button <strong>Lệnh chuyển hàng tiếp theo</strong>."
  }, {
    "t": "img",
    "id": 55
  }, {
    "t": "ul",
    "items": ["Màn hình điều hướng đến phiếu Lưu kho WH/STOR ở trạng thái Sẵn sàng ‣ Bấm <strong>Xác nhận</strong> để hoàn tất việc lưu hàng hoá vừa nhận vào kho."]
  }, {
    "t": "img",
    "id": 56
  }, {
    "t": "ul",
    "items": ["Khi đó phiếu chuyển trạng thái Hoàn thành, hoàn tất quy trình Nhập kho hai bước trên phần mềm. Tồn kho theo đó được cộng vào địa điểm lưu kho của kho hàng."]
  }, {
    "t": "img",
    "id": 57
  }, {
    "t": "p",
    "html": "<strong>Cách 2</strong>: Trên Module Kho hàng, truy cập menu <strong>Hoạt động</strong> ‣ Nội bộ ‣ Màn hình hiển thị toàn bộ phiếu điều chuyển nội bộ."
  }, {
    "t": "img",
    "id": 58
  }, {
    "t": "ul",
    "items": ["Lọc Chứng từ gốc \\= phiếu nhận hàng."]
  }, {
    "t": "img",
    "id": 59
  }, {
    "t": "ul",
    "items": ["Bấm vào phiếu Lưu kho WH/STOR ‣ Bấm <strong>Xác nhận</strong> để hoàn tất việc lưu hàng hoá vừa nhận vào kho ‣ Khi đó phiếu chuyển trạng thái Hoàn thành, hoàn tất quy trình Nhập kho hai bước trên phần mềm. Tồn kho theo đó được cộng vào địa điểm lưu kho của kho hàng."]
  }, {
    "t": "img",
    "id": 60
  }, {
    "t": "h2",
    "id": "dieu-chuyen-noi-bo-kho",
    "text": "Điều chuyển nội bộ kho"
  }, {
    "t": "p",
    "html": "Để tạo phiếu điều chuyển từ kho này sang kho khác, truy cập Module <strong>Kho hàng</strong> ‣ Menu <strong>Hoạt động</strong> ‣ <strong>Nội bộ</strong>, bấm <strong>Mới</strong>."
  }, {
    "t": "img",
    "id": 61
  }, {
    "t": "p",
    "html": "<strong>Bước 1</strong>: Điền các thông tin trên phiếu:"
  }, {
    "t": "ul",
    "items": ["Kiểu hoạt động: \\[Kho đi\\]: Lệnh chuyển hàng nội bộ;", "Địa điểm nguồn: \\[Kho đi\\]/\\[Địa điểm kho đi hàng\\];", "Địa điểm đích: \\[Kho đến\\]/\\[Địa  điểm kho nhận hàng\\];", "Sản phẩm: các sản phẩm điều chuyển;", "Nhu cầu: Số lượng nhu cầu điều chuyển."]
  }, {
    "t": "img",
    "id": 62
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>LƯU</strong>."
  }, {
    "t": "step",
    "num": "1",
    "html": "Bấm <strong>Đánh dấu cần làm ‣</strong> Trạng thái phiếu điều chuyển sang Sẵn sàng, đánh dấu việc chuẩn bị chuyển hàng đi.",
    "children": [{
      "t": "img",
      "id": 63
    }, {
      "t": "p",
      "html": "<strong>Bước 3</strong>: Điền Số lượng thực chuyển đi sau khi kiểm kiện hàng."
    }, {
      "t": "img",
      "id": 64
    }, {
      "t": "p",
      "html": "<strong>‣</strong> Bấm <strong>Xác nhận</strong> để hoàn thành phiếu, đánh dấu kiện hàng đã được giao tới địa điểm đích."
    }, {
      "t": "img",
      "id": 65
    }, {
      "t": "p",
      "html": "Sau khi xác nhận, phiếu ở trạng thái Hoàn tất. Số lượng tồn kho sẽ được chuyển từ kho chuyển hàng tới kho nhận hàng."
    }]
  }, {
    "t": "h2",
    "id": "xuat-kho-giao-hang-cho-khach",
    "text": "Xuất kho giao hàng cho khách"
  }, {
    "t": "p",
    "html": "Hệ thống áp dụng quy trình xuất kho 02 bước: Sản phẩm sẽ được vận chuyển từ địa điểm lưu trữ hàng đến địa điểm để kiểm đếm, tập kết trước khi giao hàng. Việc kiểm đếm, tập kết hàng hóa là những bước đầu và sẽ được gọi là <strong>Xuất kho</strong>. Sau khi việc kiểm đếm xong sẽ chuyển sang bước hai là <strong>Giao hàng</strong>."
  }, {
    "t": "p",
    "html": "Sau khi đơn hàng được xác nhận, hệ thống sinh ra phiếu dịch chuyển gắn với đơn hàng. Sản phẩm sẽ được vận chuyển qua hai bước:"
  }, {
    "t": "ul",
    "items": ["Bước 1: Chọn hàng từ phía kho lưu trữ và dịch chuyển đến địa điểm kho đầu ra được hiển thị qua phiếu giao hàng /PICK ở trạng thái <em>Sẵn sàng</em>.", "Bước 2: Giao sản phẩm đến khách hàng được hiển thị qua phiếu xuất kho /OUT."]
  }, {
    "t": "h3",
    "id": "xuat-kho",
    "text": "Xuất kho"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Xuất hàng từ kho lưu trữ đến địa điểm đầu ra (phiếu PICK)"
  }, {
    "t": "p",
    "html": "Bạn có thể xem phiếu xuất hàng từ mục Lấy hàng trên màn hình Tổng quan tồn kho."
  }, {
    "t": "img",
    "id": 66
  }, {
    "t": "p",
    "html": "hoặc truy cập menu <strong>Hoạt động</strong> <strong>‣ Phiếu Pick</strong>."
  }, {
    "t": "img",
    "id": 67
  }, {
    "t": "p",
    "html": "Tick chọn các phiếu Pick ở trạng thái Sẵn sàng <strong>‣</strong> Bấm <strong>Phân chia công việc</strong> để chia công việc cho nhân viên kho."
  }, {
    "t": "img",
    "id": 68
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Điền thông tin của bảng Phân chia công việc:"
  }, {
    "t": "ul",
    "items": ["Lấy hàng / Đóng hàng", "Loại quy cách chia", "Người lấy hàng / Đóng hàng"]
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Thực hiện chia</strong>."
  }, {
    "t": "img",
    "id": 69
  }, {
    "t": "p",
    "html": "<em>Nhân viên kho có thể xem lại các phiếu PICK được phân công cho mình.</em>"
  }, {
    "t": "img",
    "id": 70
  }, {
    "t": "p",
    "html": "<em>Bấm <strong>In</strong> <strong>‣</strong> chọn <strong>Master Pick List</strong> để in <strong>‣</strong> Màn hình điều hướng sang file in của Master Pick list.</em>"
  }, {
    "t": "img",
    "id": 71
  }, {
    "t": "p",
    "html": "Sau khi nhân viên kho hoàn thành nhặt và đóng hàng, thực hiện xác nhận đã chuyển hàng ra địa điểm đầu ra để chuẩn bị đi giao. Chọn phiếu PICK cần thực hiện, ấn <strong>Xác nhận</strong>."
  }, {
    "t": "img",
    "id": 72
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Phiếu PICK chuyển trạng thái Hoàn tất, xác nhận đã chuyển hàng hoá ra địa điểm đầu ra của kho. Đơn hàng chuyển sang trạng thái <strong>Chờ giao</strong>."
  }, {
    "t": "h3",
    "id": "giao-hang",
    "text": "Giao hàng"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Sau khi hoàn thành phiếu PICK, hệ thống sinh phiếu giao hàng OUT thực hiện đưa hàng ra khỏi kho cho đơn vị vận chuyển."
  }, {
    "t": "img",
    "id": 73
  }, {
    "t": "p",
    "html": "Bạn có thể xem phiếu giao hàng từ mục Lấy hàng trên màn hình Tổng quan tồn kho."
  }, {
    "t": "img",
    "id": 74
  }, {
    "t": "p",
    "html": "hoặc truy cập menu <strong>Hoạt động</strong> <strong>‣ Lệnh giao hàng</strong>."
  }, {
    "t": "img",
    "id": 75
  }, {
    "t": "p",
    "html": "Tick chọn các phiếu Out ở trạng thái Sẵn sàng <strong>‣</strong> Bấm <strong>Chia đơn cho ship</strong> (các đơn Tự ship nội thành / Vận chuyển qua sàn TMĐT) để chia đơn vận chuyển hoặc <strong>Phân chia công việc</strong> để công việc bốc xếp / khắc lazer… cho nhân viên kho."
  }, {
    "t": "img",
    "id": 76
  }, {
    "t": "p",
    "html": "Tương tự với phiếu PICK, bạn có thể xem lại việc phân công công việc ở màn hình listview hoặc màn hình formview của phiếu."
  }, {
    "t": "p",
    "html": "\\[listview\\]"
  }, {
    "t": "img",
    "id": 77
  }, {
    "t": "p",
    "html": "\\[formview\\]"
  }, {
    "t": "img",
    "id": 78
  }, {
    "t": "p",
    "html": "Để xác nhận mang đơn đi giao, chọn phiếu OUT cần thực hiện, ấn <strong>Xác nhận</strong>."
  }, {
    "t": "img",
    "id": 79
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Phiếu PICK chuyển trạng thái Hoàn tất, xác nhận đã chuyển hàng hoá ra địa điểm đầu ra của kho. Đơn hàng chuyển sang trạng thái <strong>Đang giao</strong> (đang trên đường giao tới khách hàng)."
  }, {
    "t": "ul",
    "items": ["Trạng thái hoàn thành đơn sẽ được cập nhật từ đơn vị vận chuyển update về phần mềm."]
  }, {
    "t": "h2",
    "id": "hoan-tra-hang",
    "text": "Hoàn trả hàng"
  }, {
    "t": "h3",
    "id": "hoan-hang-o-trang-thai-cho-giao",
    "text": "Hoàn hàng ở trạng thái Chờ giao"
  }, {
    "t": "p",
    "html": "<em>(Hoàn thành phiếu PICK, <code>chưa hoàn thành phiếu OUT → huỷ phiếu OUT</code>, hoàn phiếu PICK)</em>"
  }, {
    "t": "p",
    "html": "<strong>Bước 1</strong>: Huỷ phiếu OUT"
  }, {
    "t": "p",
    "html": "Truy cập Module <strong>Kho hàng ‣ Hoạt động ‣ Giao hàng</strong><em>.</em>"
  }, {
    "t": "img",
    "id": 80
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Sử dụng bộ lọc tìm phiếu OUT của đơn cần hoàn. <em>(Chứng từ gốc \\= Mã đơn hoàn)</em>"
  }, {
    "t": "img",
    "id": 81
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Truy cập phiếu OUT, bấm <strong>Huỷ</strong>."
  }, {
    "t": "img",
    "id": 82
  }, {
    "t": "p",
    "html": "<strong>Bước 2</strong>: Hoàn phiếu PICK."
  }, {
    "t": "p",
    "html": "Trên Module <strong>Kho hàng ‣</strong> chọn <strong>Hoạt động ‣ Phiếu Pick</strong><em>.</em>"
  }, {
    "t": "img",
    "id": 83
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Sử dụng bộ lọc tìm phiếu PICK của đơn cần hoàn. <em>(Chứng từ gốc \\= Mã đơn hoàn)</em>"
  }, {
    "t": "img",
    "id": 84
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Truy cập phiếu PICK, bấm <strong>Trả hàng ‣</strong> Điền <strong>số lượng</strong> và <strong>Lý do</strong> hoàn trả."
  }, {
    "t": "img",
    "id": 85
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Trả hàng</strong>, hoàn thành quy trình trả hàng của đơn."
  }, {
    "t": "img",
    "id": 86
  }, {
    "t": "h3",
    "id": "hoan-hang-o-trang-thai-dang-giao",
    "text": "Hoàn hàng ở trạng thái Đang giao"
  }, {
    "t": "p",
    "html": "<em>(<code>Hoàn thành cả phiếu PICK và phiếu OUT → hoàn phiếu OUT rồi nhập hàng hoàn vào kho</code>)</em>"
  }, {
    "t": "p",
    "html": "<strong>Bước 1</strong>: Hoàn phiếu OUT"
  }, {
    "t": "p",
    "html": "Truy cập Module <strong>Kho hàng ‣ Hoạt động ‣ Giao hàng</strong><em>.</em>"
  }, {
    "t": "img",
    "id": 80
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Sử dụng bộ lọc tìm phiếu OUT của đơn cần hoàn. <em>(Chứng từ gốc \\= Mã đơn hoàn)</em>"
  }, {
    "t": "img",
    "id": 87
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Truy cập phiếu OUT, bấm <strong>Trả hàng</strong> <strong>‣</strong> Điền <strong>số lượng</strong> và <strong>Lý do</strong> hoàn trả."
  }, {
    "t": "img",
    "id": 88
  }, {
    "t": "p",
    "html": "<strong>Bước 2</strong>: Nhập hàng hoàn vào kho"
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành trả phiếu OUT, hệ thống sinh tự động phiếu nhập (phiếu WH/IN) để nhập lại hàng hoàn vào địa điểm Đầu vào của kho <strong>‣</strong> Bấm <strong>Xác nhận</strong> để cập nhật tồn của hàng vào kho."
  }, {
    "t": "img",
    "id": 89
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Thực hiện điều chuyển hàng từ đầu ra vào địa điểm lưu kho (giống quy trình Nhập hàng)."
  }, {
    "t": "h2",
    "id": "kiem-ke-kho",
    "text": "Kiểm kê kho"
  }, {
    "t": "h3",
    "id": "dieu-chinh-ton-kho-tung-san-pham",
    "text": "Điều chỉnh tồn kho từng sản phẩm"
  }, {
    "t": "p",
    "html": "Để ghi nhận quá trình kiểm kê, truy cập Module <strong>Kho hàng</strong> ‣ <strong>Hoạt động ‣ Hàng tồn kho vật lý</strong> <strong>‣</strong> Bấm <strong>Mới</strong> để thêm dòng kiểm kê cho từng sản phẩm tại một địa điểm nhất định trong kho."
  }, {
    "t": "img",
    "id": 90
  }, {
    "t": "p",
    "html": "Ta có:"
  }, {
    "t": "ul",
    "items": ["Vị trí: Địa điểm trong kho lưu trữ sản phẩm;", "Sản phẩm: Sản phẩm kiểm kê;", "Số lô/sê-ri: Lô/sê-ri của sản phẩm nếu được quản lý lô/sê-ri;", "Số lượng hiện có: Số lượng sản phẩm trong kho theo lý thuyết, đếm theo các phiếu nhập xuất của sản phẩm;", "Số lượng đã đếm: Số lượng sản phẩm đếm được trong quá trình kiểm kho;", "Chênh lệch: Số lượng chênh lệch dựa trên Số lượng hiện có và Số lượng đã đếm;", "Ngày đã lên lịch: Ngày kiểm kê tiếp theo được lên kế hoạch;", "Người dùng: Nhân sự thực hiện công tác kiểm kho."]
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành công tác kiểm đếm số lượng các sản phẩm, bạn cập nhật số lượng thực tế tại cột Số lượng đã đếm <strong>‣</strong> Phần mềm tự động tính toán số lượng Chênh lệch."
  }, {
    "t": "img",
    "id": 91
  }, {
    "t": "p",
    "html": "<strong>‣</strong> Bấm <strong>Áp dụng</strong> để lưu thông tin điều chỉnh tồn trên từng line."
  }, {
    "t": "p",
    "html": "Trong trường hợp kiểm kê hàng loạt, tick chọn các dòng sản phẩm muốn cập nhật <strong>‣</strong> Bấm <strong>Áp dụng</strong> hoặc bấm <strong>Áp dụng tất cả</strong> để cập nhật tất cả danh ách <strong>‣</strong> Điền <strong>Lý do kiểm kê</strong> để hoàn tất và cập nhật số lượng."
  }, {
    "t": "img",
    "id": 92
  }, {
    "t": "p",
    "html": "<strong>🔺Chú ý:</strong> Với những lần kiểm kê tiếp theo, cập nhật giá trị trên cột Số lượng đã đếm của sản phẩm tương ứng khi có nhu cầu điều chỉnh tồn kho."
  }, {
    "t": "h3",
    "id": "tao-yeu-cau-kiem-ke",
    "text": "Tạo yêu cầu kiểm kê"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Khi có nhu cầu, tạo yêu cầu kiểm kê tới Trưởng kho và ấn định ngày để Bộ phận kho thực hiện."
  }, {
    "t": "p",
    "html": "Trên giao diện Điều chỉnh tồn kho, chọn các sản phẩm cần được kiểm đếm <strong>‣</strong> Bấm <strong>Yêu cầu một lần kiểm đếm</strong> <strong>‣</strong> Chọn ngày cần thực hiện kiểm kho, nhân sự thực hiện và cách thức cập nhật dữ liệu trên 01 lần kiểm kê:"
  }, {
    "t": "ul",
    "items": ["<em>Để trống</em>: Giá trị trên cột Số lượng đếm được trống, nhân sự cần tự điền số lượng khi thực hiện kiểm kê;", "<em>Thiết lập giá trị hiện tại</em>: Hệ thống gợi ý autofill Số lượng hiện có lên cột Số lượng hiện có, nhân sự khi kiểm kho thực hiện điều chỉnh số lượng thực tế nếu có thay đổi."]
  }, {
    "t": "img",
    "id": 93
  }, {
    "t": "h3",
    "id": "chuyen-vi-tri",
    "text": "Chuyển vị trí"
  }, {
    "t": "p",
    "html": "<em>Mục đích</em>: Điều chỉnh vị trí của sản phẩm sang vị trí khác (các sản phẩm được chuyển vị trí phải có số lượng &gt; 0\\)"
  }, {
    "t": "p",
    "html": "Trên màn hình Điều chỉnh tồn kho, chọn các sản phẩm chuyển vị trí <strong>‣</strong> Bấm <strong>Chuyển vị trí</strong> <strong>‣</strong> Chọn vị trí chuyển tồn đến và Lý do chuyển vị trí <strong>‣</strong> Bấm <strong>Xác nhận</strong>."
  }, {
    "t": "img",
    "id": 94
  }, {
    "t": "p",
    "html": "Sau khi hoàn thành chuyển vị trí, tồn kho được cập nhật sang vị trí mới."
  }],
  "toc": [{
    "id": "tao-san-pham",
    "label": "Tạo sản phẩm"
  }, {
    "id": "quan-ly-san-pham-theo-lo-se-ri-truong-hop-kho",
    "label": "Quản lý sản phẩm theo Lô / Sê-ri (trường hợp không quản lý sản phẩm theo Lô/Seriel thì bỏ qua)"
  }, {
    "id": "nhap-hang-ve-kho",
    "label": "Nhập hàng về kho"
  }, {
    "id": "dieu-chuyen-noi-bo-kho",
    "label": "Điều chuyển nội bộ kho"
  }, {
    "id": "xuat-kho-giao-hang-cho-khach",
    "label": "Xuất kho giao hàng cho khách"
  }, {
    "id": "hoan-tra-hang",
    "label": "Hoàn trả hàng"
  }, {
    "id": "kiem-ke-kho",
    "label": "Kiểm kê kho"
  }],
  "faq": [{
    "q": "Sản phẩm combo được tạo và quản lý thế nào?",
    "a": "Tạo như sản phẩm bình thường, sau đó vào <strong>Định mức nguyên liệu</strong> để khai báo các sản phẩm con (thành phần) nằm trong combo."
  }, {
    "q": "Quy trình nhập kho gồm mấy bước?",
    "a": "<strong>02 bước</strong>: nhận hàng vào địa điểm Đầu vào để kiểm đếm (phiếu WH/IN), sau đó dịch chuyển hàng vào Lưu kho (phiếu WH/STOR)."
  }, {
    "q": "Quy trình xuất kho giao hàng gồm những phiếu nào?",
    "a": "<strong>02 bước</strong>: phiếu <strong>PICK</strong> (lấy hàng ra địa điểm đầu ra) rồi phiếu <strong>OUT</strong> (giao hàng ra khỏi kho cho đơn vị vận chuyển)."
  }, {
    "q": "Có những cách nào để gán số sê-ri khi nhập hàng?",
    "a": "3 cách: gán thủ công từng line, tạo sê-ri/lô <strong>hàng loạt</strong> theo số lượng, hoặc <strong>copy - paste</strong> số sê-ri từ file Excel."
  }, {
    "q": "Hoàn hàng khi đơn Chờ giao và Đang giao khác nhau thế nào?",
    "a": "<strong>Chờ giao</strong> (xong PICK, chưa xong OUT): huỷ phiếu OUT rồi hoàn phiếu PICK. <strong>Đang giao</strong> (xong cả PICK và OUT): hoàn phiếu OUT rồi nhập hàng hoàn vào kho."
  }, {
    "q": "Truy vết nguồn gốc sản phẩm theo lô / sê-ri thế nào?",
    "a": "Vào <code>Kho vận → Sản phẩm → Số lô/Sê-ri</code> → chọn số → bấm <strong>Khả năng truy xuất nguồn gốc</strong> để xem các phiếu dịch chuyển liên quan."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/kho-hang.js", error: String((e && e.message) || e) }); }

// content/misa.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["misa"] = {
  "slug": "misa",
  "title": "MISA",
  "icon": "Bar",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "ul",
    "items": ["Đồng bộ một chiều odoo -&gt; hệ thống misa amis"]
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong> Cấu hình &gt; Đồng bộ danh mục &gt; Tạo chứng từ"
  }, {
    "t": "h2",
    "id": "cau-hinh",
    "text": "Cấu hình"
  }, {
    "t": "h3",
    "id": "ket-noi-api",
    "text": "Kết nối api"
  }, {
    "t": "ul",
    "items": ["Mô tả: là việc thiết lập cách để hệ thống zotech liên kết và truyền trực tiếp dữ liệu sang misa", "Các bước kết nối API:", "<strong>Bước 1: Lấy APP ID</strong> (Liên hệ Misa để được cấp)", "<strong>Bước 2:</strong> <strong>Cài đặt link callback</strong> để thực hiện đồng bộ dữ liệu và trả kết quả đồng bộ về zotech(Báo misa cài đặt).", "Lưu ý:", "Với mỗi một môi trường thì sẽ có 1 link callback khác nhau: <strong>link domain</strong>/actopensupport/call_back_data_demo", "Mất 1 ngày để link callback sau khi cài đặt hoạt động", "Mỗi công ty/KH sẽ cấp 1 APP ID và link callback riêng", "<strong>Bước 3: Lấy Access Code</strong>", "(1) Truy cập web <a href=\"http://actapp.misa.vn\" target=\"_blank\" rel=\"noopener\">actapp.misa.vn</a> → <code>Bấm vào Các tiện ích và thiết lập → Kết nối ứng dụng</code>"]
  }, {
    "t": "img",
    "id": 445
  }, {
    "t": "ul",
    "items": ["(2) <code>Chọn API kết nối → Bật Cho phép đẩy dữ liệu từ phần mềm khác qua kết nối API lên AMIS Kế toán</code>"]
  }, {
    "t": "img",
    "id": 446
  }, {
    "t": "ul",
    "items": ["(3) Access code \\= Mã kết nối của công ty", "<strong>Bước 4:</strong> <strong><code>Truy cập vào ứng dụng Misa → Cấu hình → Kết nối api → Mới</code></strong>", "App ID: mã Misa cấp", "Công ty: Điền tên công ty ứng với tài khoản misa đang thực hiện kết nối", "Access code: \\= Mã kết nối của công ty trên web misa", "Access token: Tự sinh sau khi bấm kết nối"]
  }, {
    "t": "img",
    "id": 447
  }, {
    "t": "ul",
    "items": ["<strong>Bước 5: Bấm button Kết nối</strong>", "Lưu ý: Sau khi kết nối thành công API:", "<code>Trạng thái kết nối → Kết nối thành công</code>", "Phần mềm tự động sinh access token"]
  }, {
    "t": "img",
    "id": 448
  }, {
    "t": "h3",
    "id": "loai-chung-tu",
    "text": "Loại chứng từ"
  }, {
    "t": "ul",
    "items": ["Mô tả: Tổng hợp các loại chứng từ trên misa phục vụ mục đích đồng bộ và thống nhất thông tin khi cấu hình trạng thái đồng bộ và thông tin tài khoản kế toán", "Các bước tạo mới loại chứng từ:", "<strong>Bước 1: <code>Người dùng truy cập ứng dụng misa → Cấu hình → Loại chứng từ → Mới</code></strong>"]
  }, {
    "t": "img",
    "id": 449
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: <code>Điền mã chứng từ và tên chứng từ → Lưu</code></strong>"]
  }, {
    "t": "img",
    "id": 450
  }, {
    "t": "h3",
    "id": "trang-thai-dong-bo",
    "text": "Trạng thái đồng bộ"
  }, {
    "t": "ul",
    "items": ["Mô tả: cấu hình trạng thái của chứng từ trên zotech được phép đồng bộ sang misa theo từng loại chứng từ, đảm bảo chỉ những chứng từ hợp lệ mới được ghi nhận kế toán, tránh tạo sai hoặc trùng chứng từ", "Các bước:", "<strong>Bước 1: <code>Người dùng truy cập ứng dụng misa → Cấu hình → Trạng thái đồng bộ → Mới</code></strong>"]
  }, {
    "t": "img",
    "id": 451
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: <code>Điền thông tin → Lưu</code></strong>", "Tên hiển thị: Tên hiển thị của đối tượng thực hiện đồng bộ trên zotech", "Đối tượng đồng bộ odoo: Đối tượng trên zotech thực hiện đồng bộ qua misa", "Loại chứng từ: Loại chứng từ được tạo trên misa tương ứng với đối tượng đồng bộ trên zotech", "Trạng thái đồng bộ: Trạng thái của đối tượng trên zotech sẽ thực hiện đồng bộ lên misa", "Hạch toán theo ngày: Cấu hình ngày hạch toán trên misa sẽ lấy theo ngày nào trên zotech"]
  }, {
    "t": "img",
    "id": 452
  }, {
    "t": "h3",
    "id": "tai-khoan-ke-toan",
    "text": "Tài khoản kế toán"
  }, {
    "t": "ul",
    "items": ["Mô tả: thiết lập tài khoản kế toán tương ứng với từng loại chứng từ, để khi thực hiện đồng bộ chứng từ tương ứng từ zotech-&gt; misa, tài khoản kế toán được hạch toán theo cấu hình tại đây, nhằm tiết kiệm thời gian và tránh tình trạng hạch toán sai/nhầm tài khoản", "Các bước:", "<strong>Bước 1: <code>Người dùng truy cập ứng dụng misa → Cấu hình → Tài khoản kế toán → Mới</code></strong>"]
  }, {
    "t": "img",
    "id": 453
  }, {
    "t": "ul",
    "items": ["<strong>Bước 2: <code>Điền thông tin trên form tài khoản kế toán với loại chứng từ → Lưu</code></strong>", "<strong>Lưu ý</strong>: Do mỗi loại chứng từ với các hoạt động khác nhau được tạo trên misa sẽ hạch toán vào 1 tài khoản khác nhau nên cần cấu hình chi tiết tài khoản nợ/có tương ứng với từng loại trên chi tiết tài khoản ngầm định"]
  }, {
    "t": "img",
    "id": 454
  }, {
    "t": "h2",
    "id": "danh-muc-misa",
    "text": "Danh mục misa"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong> là những danh mục hiện có trên misa (dữ liệu cũ). Khi thực hiện đồng bộ, danh mục có sẵn trên misa sẽ được kéo về để map với những danh mục trên zotech. Nhằm mục đích mapping các danh mục với nhau, không bị tạo trùng danh mục"
  }, {
    "t": "ul",
    "items": ["<strong>Lưu ý:</strong>", "Chỉ thực hiện đồng bộ danh mục misa 1 lần duy nhất khi mới thiết lập hệ thống ban đầu", "Thực hiện đồng bộ danh mục misa trước khi thực hiện đồng bộ danh mục hệ thống"]
  }, {
    "t": "p",
    "html": "2. <strong>Các bước đồng bộ danh mục misa</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập ứng dụng misa → danh mục misa → Chọn danh mục muốn đồng bộ</code>",
    "children": [{
      "t": "img",
      "id": 455
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Bấm button Đồng bộ",
    "children": [{
      "t": "p",
      "html": "<strong>\\=&gt; Sau khi bấm đồng bộ:</strong>"
    }, {
      "t": "ul",
      "items": ["Thực hiện gọi danh mục trên misa về zotech", "Autofill mã danh mục, tên danh mục và id của danh mục trên misa"]
    }, {
      "t": "img",
      "id": 456
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Điền id để thực hiện map thông tin với hệ thống",
    "children": [{
      "t": "ul",
      "items": ["<strong>Lưu ý:</strong>", "ID này là id danh mục tương ứng trên hệ thống zotech", "Trong trường hợp trên phần mềm chưa có danh mục tương ứng thì giữ nguyên, không cần xử lý trường ID này"]
    }, {
      "t": "img",
      "id": 457
    }]
  }, {
    "t": "h2",
    "id": "danh-muc-he-thong",
    "text": "Danh mục hệ thống"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong> là những danh mục hiện có trên zotech, <code>có thể là dữ liệu cũ và mới. Với những dữ liệu cũ → Thực hiện điền id vào danh mục misa để map thông tin. Với những dữ liệu mới → Bấm button đồng bộ để tạo mới danh mục trên misa</code>"
  }, {
    "t": "p",
    "html": "2. <strong>Điều kiện đồng bộ:</strong> Danh mục trên hệ thống có trạng thái đồng bộ misa \\= chưa đồng bộ"
  }, {
    "t": "p",
    "html": "3. <strong>Các bước đồng bộ danh mục hệ thống lên misa</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập ứng dụng misa → danh mục hệ thống→ Chọn danh mục muốn đồng bộ</code>",
    "children": [{
      "t": "img",
      "id": 458
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Bấm button Đồng bộ",
    "children": [{
      "t": "img",
      "id": 459
    }, {
      "t": "p",
      "html": "<strong>\\=&gt; Sau khi bấm đồng bộ:</strong>"
    }, {
      "t": "ul",
      "items": ["Đồng bộ 1 chiều danh mục hệ thống từ zotech sang danh mục tương ứng trên misa", "Tạo danh mục mới trên misa", "Call id danh mục mới tạo trên misa và fill vào trường ID trên odoo", "Trạng thái đồng bộ \\= thành công", "Tự động tạo 1 line danh mục trên menu danh mục misa tương ứng"]
    }]
  }, {
    "t": "h2",
    "id": "tao-chung-tu-ban-hang",
    "text": "Tạo chứng từ bán hàng"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong> Tạo chứng từ bán hàng trên misa trực tiếp từ hệ thống zotech"
  }, {
    "t": "ul",
    "items": ["Lưu ý: Đơn hàng trên ứng dụng misa tự động được cập nhật khi thông tin đơn hàng trên ứng dụng bán hàng được tạo mới/chỉnh sửa"]
  }, {
    "t": "p",
    "html": "2. <strong>Điều kiện đồng bộ:</strong>"
  }, {
    "t": "ul",
    "items": ["Trạng thái đồng bộ misa \\= Chưa đồng bộ", "Thoả mãn điều kiện được thiết lập trên cấu hình trạng thái đồng bộ"]
  }, {
    "t": "p",
    "html": "3. <strong>Các bước tạo:</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập ứng dụng misa → chứng từ → Đơn hàng</code>",
    "children": [{
      "t": "img",
      "id": 460
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn đơn hàng muốn tạo chứng từ bán hàng trên misa → Bấm button tạo chứng từ bán hàng</code>",
    "children": [{
      "t": "img",
      "id": 461
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Người dùng lên web misa → Bán hàng → Đề nghị sinh chứng từ → Lập</code>",
    "children": [{
      "t": "img",
      "id": 462
    }, {
      "t": "img",
      "id": 463
    }]
  }, {
    "t": "h2",
    "id": "tao-phieu-xuat-kho",
    "text": "Tạo phiếu xuất kho"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong> Tạo PXK trên misa trực tiếp từ hệ thống zotech"
  }, {
    "t": "ul",
    "items": ["Lưu ý: PXK trên ứng dụng misa tự động được cập nhật khi thông tin PXK trên ứng dụng Kho hàng được tạo mới/chỉnh sửa"]
  }, {
    "t": "p",
    "html": "2. <strong>Điều kiện:</strong>"
  }, {
    "t": "ul",
    "items": ["Trạng thái đồng bộ misa \\= Chưa đồng bộ", "Thoả mãn điều kiện được thiết lập trên cấu hình trạng thái đồng bộ"]
  }, {
    "t": "p",
    "html": "3. <strong>Các bước tạo:</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập ứng dụng misa → chứng từ → Phiếu xuất kho</code>",
    "children": [{
      "t": "img",
      "id": 464
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn PXK muốn tạo trên misa → Bấm button đồng bộ sang misa</code>",
    "children": [{
      "t": "img",
      "id": 465
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Người dùng lên web misa → Kho → Phiếu xuất kho → Đề nghị sinh chứng từ → Lập</code>",
    "children": [{
      "t": "img",
      "id": 466
    }, {
      "t": "img",
      "id": 467
    }]
  }, {
    "t": "h2",
    "id": "tao-phieu-nhap-kho",
    "text": "Tạo phiếu nhập kho"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong> Tạo PNK trên misa trực tiếp từ hệ thống zotech"
  }, {
    "t": "ul",
    "items": ["Lưu ý: PNK trên ứng dụng misa tự động được cập nhật khi thông tin PNK trên ứng dụng Kho hàng được tạo mới/chỉnh sửa"]
  }, {
    "t": "p",
    "html": "2. <strong>Điều kiện:</strong>"
  }, {
    "t": "ul",
    "items": ["Trạng thái đồng bộ misa \\= Chưa đồng bộ", "Thoả mãn điều kiện được thiết lập trên cấu hình trạng thái đồng bộ"]
  }, {
    "t": "p",
    "html": "3. <strong>Các bước tạo:</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập ứng dụng misa → chứng từ → Phiếu nhập kho</code>",
    "children": [{
      "t": "img",
      "id": 468
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn PNK muốn tạo trên misa → Bấm button đồng bộ sang misa</code>",
    "children": [{
      "t": "img",
      "id": 469
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Người dùng lên web misa → Kho → Phiếu nhập kho → Đề nghị sinh chứng từ → Lập</code>",
    "children": [{
      "t": "img",
      "id": 470
    }, {
      "t": "img",
      "id": 471
    }]
  }, {
    "t": "h2",
    "id": "tao-phieu-chuyen-kho-noi-bo",
    "text": "Tạo phiếu chuyển kho nội bộ"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong> Tạo phiếu chuyển kho trên misa trực tiếp từ hệ thống zotech"
  }, {
    "t": "ul",
    "items": ["Lưu ý: Phiếu chuyển kho trên ứng dụng misa tự động được cập nhật khi thông tin phiếu chuyển kho nội bộ trên ứng dụng Kho hàng được tạo mới/chỉnh sửa"]
  }, {
    "t": "p",
    "html": "2. <strong>Điều kiện:</strong>"
  }, {
    "t": "ul",
    "items": ["Trạng thái đồng bộ misa \\= Chưa đồng bộ", "Thoả mãn điều kiện được thiết lập trên cấu hình trạng thái đồng bộ"]
  }, {
    "t": "p",
    "html": "3. <strong>Các bước tạo:</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập ứng dụng misa → chứng từ → Chuyển kho</code>",
    "children": [{
      "t": "img",
      "id": 472
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn phiếu chuyển kho muốn tạo trên misa → Bấm button đồng bộ sang misa</code>",
    "children": [{
      "t": "img",
      "id": 473
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Người dùng lên web misa → Kho → Chuyển kho → Đề nghị sinh chứng từ → Lập</code>",
    "children": [{
      "t": "img",
      "id": 474
    }, {
      "t": "img",
      "id": 475
    }]
  }, {
    "t": "h2",
    "id": "huy-tren-misa-dong-bo-lai",
    "text": "Huỷ trên MISA &amp; Đồng bộ lại"
  }, {
    "t": "p",
    "html": "1. <strong>Mô tả:</strong> Cho phép người dùng đồng bộ lại chứng từ từ hệ thống khi thông tin chứng từ trên phần mềm đã được chỉnh sửa hoặc cần cập nhật lại. Tính năng này giúp đảm bảo dữ liệu chứng từ giữa hệ thống và MISA luôn đồng nhất, tránh tình trạng chứng từ trên MISA bị sai lệch so với dữ liệu thực tế sau khi có thay đổi."
  }, {
    "t": "p",
    "html": "2. <strong>Điều kiện hiển thị button:</strong> Chứng từ đã được đồng bộ sang MISA (trạng thái đồng bộ misa \\= thành công)"
  }, {
    "t": "p",
    "html": "3. <strong>Các bước:</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "Truy cập chứng từ muốn đồng bộ lại",
    "children": []
  }, {
    "t": "step",
    "num": "2",
    "html": "Bấm button Huỷ trên MISA &amp; Đồng bộ lại",
    "children": [{
      "t": "img",
      "id": 476
    }, {
      "t": "p",
      "html": "<strong>Lưu ý: Với những đề nghị lập chứng từ kế toán có trạng thái:</strong>"
    }, {
      "t": "ul",
      "items": ["<strong>Chưa lập:</strong>", "Phần mềm tự động xoá đề nghị lập chứng từ cũ và tạo đề nghị lập chứng từ mới", "Tự động gọi ID mới về hệ thống zotech", "\\=&gt; Người dùng: Bấm Lập CT kế toán với đề nghị lập chứng từ mới được tạo ra ở tab đề nghị lập chứng từ", "<strong>Đã lập:</strong>", "Đề nghị lập chứng từ cũ và chứng từ đã lập giữ nguyên", "Phần mềm tạo thêm một đề nghị lập chứng từ mới theo nội dung thay đổi trên zotech", "Tự động gọi ID đề nghị lập chứng từ mới tạo về hệ thống zotech", "\\=&gt; Người dùng:", "Xoá chứng từ đã lập (chỉ xoá được chứng từ chưa ghi sổ)", "Bấm Lập CT kế toán với đề nghị lập chứng từ mới được tạo ra ở tab đề nghị lập chứng từ"]
    }, {
      "t": "img",
      "id": 477
    }]
  }],
  "toc": [{
    "id": "cau-hinh",
    "label": "Cấu hình"
  }, {
    "id": "danh-muc-misa",
    "label": "Danh mục misa"
  }, {
    "id": "danh-muc-he-thong",
    "label": "Danh mục hệ thống"
  }, {
    "id": "tao-chung-tu-ban-hang",
    "label": "Tạo chứng từ bán hàng"
  }, {
    "id": "tao-phieu-xuat-kho",
    "label": "Tạo phiếu xuất kho"
  }, {
    "id": "tao-phieu-nhap-kho",
    "label": "Tạo phiếu nhập kho"
  }, {
    "id": "tao-phieu-chuyen-kho-noi-bo",
    "label": "Tạo phiếu chuyển kho nội bộ"
  }, {
    "id": "huy-tren-misa-dong-bo-lai",
    "label": "Huỷ trên MISA & Đồng bộ lại"
  }],
  "faq": [{
    "q": "Quy trình tổng quan kết nối MISA?",
    "a": "<strong>Cấu hình → Đồng bộ danh mục → Tạo chứng từ.</strong>"
  }, {
    "q": "Danh mục MISA và danh mục hệ thống khác nhau thế nào?",
    "a": "<strong>Danh mục MISA</strong> là dữ liệu cũ sẵn có trên MISA, kéo về để map. <strong>Danh mục hệ thống</strong> là dữ liệu trên Zotech: dữ liệu cũ thì điền id để map, dữ liệu mới thì đồng bộ lên MISA."
  }, {
    "q": "Tạo được những loại chứng từ nào trên MISA từ Zotech?",
    "a": "Chứng từ bán hàng, phiếu xuất kho, phiếu nhập kho và phiếu chuyển kho nội bộ."
  }, {
    "q": "Chứng từ đã đồng bộ nhưng cần sửa lại thì làm sao?",
    "a": "Dùng chức năng <strong>Huỷ trên MISA &amp; Đồng bộ lại</strong> (chỉ hiển thị khi chứng từ đã đồng bộ thành công sang MISA)."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/misa.js", error: String((e && e.message) || e) }); }

// content/mua-hang.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["mua-hang"] = {
  "slug": "mua-hang",
  "title": "Mua hàng",
  "icon": "Cart",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "ul",
    "items": ["Quản lý toàn bộ quy trình mua sắm của công ty, từ việc tạo yêu cầu mua, gửi báo giá đến nhà cung cấp, so sánh lựa chọn, cho đến khi phát sinh đơn mua hàng và theo dõi quá trình giao nhận;", "Tối ưu chi phí, lựa chọn nhà cung cấp phù hợp, đảm bảo tuân thủ chính sách phê duyệt nội bộ, đồng thời kết nối chặt chẽ với kho và kế toán để tự động hóa nhập kho và ghi nhận hóa đơn;", "Hỗ trợ theo dõi hiệu suất nhà cung cấp và cung cấp báo cáo minh bạch, giúp doanh nghiệp kiểm soát tốt hơn chi phí cũng như hiệu quả của hoạt động mua hàng."]
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "yeu-cau-mua-hang",
    "text": "Yêu cầu mua hàng"
  }, {
    "t": "h3",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Yêu cầu mua hàng (Purchase Request) là chứng từ do nhân viên/bộ phận lập để đề xuất công ty mua sắm hàng hóa hoặc dịch vụ. Đây là bước khởi đầu trong quy trình mua hàng, giúp chuẩn hóa nhu cầu, kiểm soát chi phí và tạo cơ sở để bộ phận mua hàng xử lý."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng đi đến menu: <code>Mua hàng → Đơn hàng → Yêu cầu mua hàng → Mới</code>.",
    "children": [{
      "t": "img",
      "id": 4
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người dùng nhập các thông tin vào form tạo yêu cầu mua hàng. Lưu ý các trường có màu là trường dữ liệu bắt buộc nhập:",
    "children": [{
      "t": "img",
      "id": 5
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Loại yêu cầu", "phân loại các <strong>yêu cầu mua sắm</strong> theo mục đích, tính chất hoặc mức độ ưu tiên Mua hàng kinh doanh: mua để bán hoặc phục vụ kinh doanh Mua hàng vật tư tiêu hao: mua sắm các loại vật tư, công cụ, dụng cụ có giá trị nhỏ, thời gian sử dụng ngắn và thường hết đi sau một hoặc vài lần sử dụng"], ["Phân loại mua hàng", "Tự mua sắm: là hình thức nhân viên hoặc bộ phận tự thực hiện việc mua sắm hàng hóa, dịch vụ khi phát sinh nhu cầu, thay vì gửi yêu cầu để phòng mua hàng xử lý theo quy trình chuẩn, thường áp dụng cho nhu cầu khẩn cấp hoặc khi công ty cho phép bộ phận có quyền tự chi trong một hạn mức nhất định. Bộ phận mua hàng: là quy trình mua sắm tập trung, do bộ phận mua hàng phụ trách"], ["Lý do yêu cầu", "lý do phát sinh nhu cầu mua hàng."], ["Thời gian nhận hàng dự kiến", "là mốc thời gian mà người đề xuất hoặc bộ phận mua hàng dự kiến nhà cung cấp sẽ giao sản phẩm/dịch vụ."], ["Sản phẩm", "thông tin sản phẩm yêu cầu mua hàng"], ["Số lượng tồn kho", "số lượng tồn kho sản phẩm đang tạo yêu cầu mua"], ["Số lượng đề xuất", "là số lượng mà nhân viên hoặc bộ phận đưa ra để đề nghị công ty mua thêm một lượng hàng hóa/dịch vụ nhất định, dựa trên nhu cầu thực tế hoặc kế hoạch sử dụng."]]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Chọn <strong>Lưu</strong> để hoàn tất việc khởi tạo.",
    "children": [{
      "t": "img",
      "id": 6
    }]
  }, {
    "t": "h2",
    "id": "quan-ly-nha-cung-cap",
    "text": "Quản lý Nhà cung cấp"
  }, {
    "t": "h3",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Quản lý nhà cung cấp là tổ chức, theo dõi và kiểm soát mối quan hệ với các nhà cung cấp để đảm bảo nguồn hàng hóa/dịch vụ được cung cấp ổn định, đúng chất lượng, đúng thời gian và chi phí tối ưu."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-2",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng đi đến menu: <code>Mua hàng → Đơn hàng → Nhà cung cấp → Mới</code>",
    "children": [{
      "t": "img",
      "id": 7
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập thông tin Nhà cung cấp",
    "children": [{
      "t": "img",
      "id": 8
    }, {
      "t": "p",
      "html": "Nhập một số thông tin khác"
    }, {
      "t": "img",
      "id": 9
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Chọn <strong>Lưu</strong> để hoàn tất việc khởi tạo.",
    "children": [{
      "t": "img",
      "id": 10
    }]
  }, {
    "t": "h2",
    "id": "bang-gia-nha-cung-cap",
    "text": "Bảng giá Nhà cung cấp"
  }, {
    "t": "h3",
    "id": "mo-ta-3",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Bảng giá Nhà cung cấp là danh sách mức giá và điều kiện mua hàng từ nhà cung cấp, giúp bộ phận mua so sánh, chọn lựa và tối ưu chi phí."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-3",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng đi đến menu: <code>Mua hàng → Cấu hình → Bảng giá nhập hàng → Mới</code>",
    "children": [{
      "t": "img",
      "id": 11
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người dùng nhập các thông tin vào form tạo bảng giá cho sản phẩm.",
    "children": [{
      "t": "img",
      "id": 12
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Nhà cung cấp", "Nhà cung cấp sản phẩm. Lưu ý, một sản phẩm có thể tạo nhiều bảng giá với nhiều NCC khác nhau"], ["Tên sản phẩm của NCC", "sử dụng trong trường hợp muốn quản lý tên sản phẩm của NCC"], ["Mã sản phẩm của NCC", "sử dụng trong trường hợp muốn quản lý Mã sản phẩm của NCC"], ["Thời gian hoàn thành", "số ngày nhà cung cấp cần để giao hàng sau khi xác nhận đơn."], ["Biến thể sản phẩm", "trường hợp 1 sản phẩm có nhiều biến thể khác nhau thì hệ thống cho phép tạo bảng giá chi tiết đến từng biến thể sản phẩm"], ["Sản phẩm", "thông tin sản phẩm tạo bảng giá"], ["Số lượng", "mức đặt hàng tối thiểu để được áp dụng một đơn giá cụ thể"], ["Giá", "giá của sản phẩm"], ["Xác nhận", "khoảng thời gian được áp dụng bảng giá"], ["Chiết khấu", "mức giảm giá mà nhà cung cấp dành cho công ty, thường dựa trên số lượng đặt mua, giá trị đơn hàng, hoặc điều kiện thương mại đặc biệt."]]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Người dùng kích Lưu để lưu những thông tin vừa cấu hình",
    "children": [{
      "t": "img",
      "id": 13
    }]
  }, {
    "t": "h2",
    "id": "yeu-cau-bao-gia-don-hang",
    "text": "Yêu cầu báo giá/đơn hàng"
  }, {
    "t": "h3",
    "id": "mo-ta-4",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Yêu cầu báo giá là tài liệu công ty phát hành để đề nghị nhà cung cấp cung cấp thông tin về giá cả, điều kiện giao hàng, thời gian giao, và các điều khoản liên quan trước khi quyết định đặt mua."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-4",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng đi đến menu: <code>Mua hàng → Đơn hàng → Yêu cầu báo giá → Mới</code>",
    "children": [{
      "t": "img",
      "id": 14
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người dùng nhập các thông tin vào form tạo yêu cầu báo giá.",
    "children": [{
      "t": "img",
      "id": 15
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Nhà cung cấp", "Chọn nhà cung cấp, Sau khi chọn nhà cung cấp hệ thống mặc định hiển thị loại tiền tệ của nhà cung cấp đã chọn, từ đó hệ thống sẽ lấy giá của sản phẩm theo chính sách giá đã được cấu hình trong Bảng giá của NCC (có thể thay đổi giá)."], ["Hạn đặt hàng", "là mốc thời gian cuối cùng mà doanh nghiệp quy định để nhà cung cấp phản hồi và xác nhận báo giá."], ["Ngày xác nhận", "ngày chính thức phê duyệt/chấp thuận báo giá để tiến hành đặt hàng."], ["Thời gian hiệu lực", "khoảng thời gian báo giá của NCC có giá trị, sau ngày này, báo giá sẽ không còn hiệu lực và cần được NCC cập nhật mới."], ["Ngày hàng về dự kiến", "là ngày mà doanh nghiệp dự kiến nhà cung cấp sẽ giao hàng và hàng hóa sẽ về kho. Hệ thống đang mặc định ngày tạo đơn hàng. Có thể sửa lại."], ["Tiền tệ", "tự lấy theo NCC nhưng người dùng vẫn có thể chọn loại tiền tệ khác. Khi chọn tiền tệ hệ thống sẽ tự động hiển thị tỷ giá tại thời điểm đặt hàng"], ["Tab Sản phẩm", "Kích Thêm một dòng để thêm thông tin sản phẩm vào đơn mua hàng: sản phẩm, số lượng sản phẩm, đơn vị tính và đơn giá."]]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Người dùng kích Lưu và ấn Xác nhận để lưu đơn hàng ở trạng thái <strong>Y/C báo giá</strong>",
    "children": [{
      "t": "img",
      "id": 16
    }]
  }, {
    "t": "h2",
    "id": "xu-ly-don-hang",
    "text": "Xử lý đơn hàng"
  }, {
    "t": "p",
    "html": "Sau khi đã lập xong đơn hàng ở trạng thái Y/C báo giá, người dùng sẽ tiến hành xử lý đơn hàng bằng cách thao tác sau."
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Tiền hành phê duyệt yêu cầu báo giá. Sau khi phê duyệt → Tạo đơn hàng</code>",
    "children": [{
      "t": "img",
      "id": 17
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập thời gian nhận hàng dự kiến và kho hàng → Xác nhận → yêu cầu báo giá sẽ trở thành đơn hàng mua</code>",
    "children": [{
      "t": "img",
      "id": 18
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Sau khi đơn hàng được xác nhận, <code>nếu người dùng muốn nhận hàng → chọn đơn hàng cần nhận và chọn tính năng Nhận sản phẩm. Sau khi chọn Nhận sản phẩm</code>, hệ thống sẽ chuyển hướng đến phiếu nhận hàng",
    "children": [{
      "t": "img",
      "id": 19
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Chọn Xác nhận trên phiếu nhận hàng",
    "children": [{
      "t": "img",
      "id": 20
    }]
  }, {
    "t": "h2",
    "id": "tao-hoa-don-mua-hang-theo-doi-cong-no-ncc",
    "text": "Tạo hóa đơn mua hàng / Theo dõi công nợ NCC"
  }, {
    "t": "h3",
    "id": "tao-hoa-don-mua-hang",
    "text": "Tạo hóa đơn mua hàng"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> Tính năng Tạo hóa đơn mua hàng dùng để lập mới và quản lý các hóa đơn mua hàng từ nhà cung cấp trên hệ thống."
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập Module Mua hàng → Đơn hàng → Đơn mua hàng</code>",
    "children": [{
      "t": "img",
      "id": 21
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn Đơn mua hàng PO đã hoàn thành thao tác ở bước Xử lý đơn hàng→ Bấm</code> <strong>Tạo hóa đơn</strong>",
    "children": [{
      "t": "img",
      "id": 22
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bấm <strong>Xác nhận</strong> hóa đơn",
    "children": [{
      "t": "img",
      "id": 23
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Bấm <strong>Thanh toán</strong> để ghi nhận <strong>số tiền đã thanh toán/đặt cọc</strong> với Bên mua của đơn mua hàng PO",
    "children": [{
      "t": "img",
      "id": 24
    }]
  }, {
    "t": "step",
    "num": "5",
    "html": "Điền thông tin thanh toán, <code>số tiền thanh toán → Bấm</code> <strong>Tạo thanh toán</strong>",
    "children": [{
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải", "Ghi chú"],
      "rows": [["Sổ nhật ký", "Hình thức thanh toán (Ngân hàng / Tiền mặt)", ""], ["Phương thức thanh toán", "Các phương thức chuyển tiền", ""], ["Tài khoản ngân hàng nguồn", "TK ngân hàng công ty dùng để chi tiền", ""], ["Tài khoản người nhận", "TK ngân hàng của nhà cung cấp", ""], ["Số tiền", "Số tiền cần thanh toán", "Có thể thanh toán một phần (nhập số nhỏ hơn tổng hóa đơn)"], ["Ngày thanh toán", "Ngày ghi nhận giao dịch", ""]]
    }, {
      "t": "img",
      "id": 25
    }]
  }, {
    "t": "h3",
    "id": "theo-doi-cong-no-ncc-theo-don-mua-hang",
    "text": "Theo dõi công nợ NCC theo đơn mua hàng"
  }, {
    "t": "step",
    "num": "1",
    "html": "Truy cập Module <strong><code>Mua hàng → Đơn hàng → Đơn mua hàng</code></strong>",
    "children": [{
      "t": "img",
      "id": 26
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn đơn mua hàng cần theo dõi công nợ → Bấm mục</code> <strong>Hóa đơn mua hàng</strong>",
    "children": [{
      "t": "img",
      "id": 27
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Kiểm tra số tiền còn phải trả trên hóa đơn",
    "children": [{
      "t": "img",
      "id": 28
    }]
  }, {
    "t": "h2",
    "id": "tra-hang",
    "text": "Trả hàng"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng vào menu: <strong><code>Mua hàng → Đơn hàng → Đơn mua hàng</code></strong>, chọn những đơn hàng ở trạng thái Đơn mua hàng và có phiếu nhập kho ở trạng thái Hoàn thành",
    "children": [{
      "t": "img",
      "id": 29
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Tại phiếu nhập kho, <code>người dùng kích TRẢ HÀNG → hệ thống hiển thị màn hình thông tin sản phẩm trong phiếu nhập kho</code>.",
    "children": [{
      "t": "img",
      "id": 30
    }, {
      "t": "p",
      "html": "<strong>Lưu ý:</strong>"
    }, {
      "t": "ul",
      "items": ["Người dùng nhập số lượng trả vào cột số lượng. Với những sản phẩm không có nhu cầu trả, người dùng kích vào biểu tượng thùng rác để xoá khỏi phiếu trả hàng.", "Tích vào cột Cập nhật số lượng trên SO/PO nếu muốn cập nhật lại số lượng đã nhận trên đơn sau khi hoàn thành trả hàng, ngược lại nếu không muốn cập nhật thì người dùng bỏ tích."]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Sau khi nhập đầy đủ thông tin, người dùng kích <strong>TRẢ HÀNG</strong> để xác nhận số lượng cần trả lại. Trường hợp không xác nhận thông tin sản phẩm cần trả, người dùng kích HỦY",
    "children": [{
      "t": "img",
      "id": 31
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Hệ thống tạo 1 phiếu xuất kho",
    "children": [{
      "t": "p",
      "html": "<strong>‣</strong> Kích nút XÁC NHẬN để xác nhận xuất hàng và chuyển trạng thái phiếu xuất kho sang Hoàn thành. Lúc này hệ thống gắn phiếu xuất kho và đơn hàng và cập nhật lại số lượng nhận trong đơn mua tương ứng nếu trước đó người dùng tích vào “Cập nhật số lượng trên SO/PO”."
    }, {
      "t": "img",
      "id": 32
    }]
  }],
  "toc": [{
    "id": "yeu-cau-mua-hang",
    "label": "Yêu cầu mua hàng"
  }, {
    "id": "quan-ly-nha-cung-cap",
    "label": "Quản lý Nhà cung cấp"
  }, {
    "id": "bang-gia-nha-cung-cap",
    "label": "Bảng giá Nhà cung cấp"
  }, {
    "id": "yeu-cau-bao-gia-don-hang",
    "label": "Yêu cầu báo giá/đơn hàng"
  }, {
    "id": "xu-ly-don-hang",
    "label": "Xử lý đơn hàng"
  }, {
    "id": "tao-hoa-don-mua-hang-theo-doi-cong-no-ncc",
    "label": "Tạo hóa đơn mua hàng / Theo dõi công nợ NCC"
  }, {
    "id": "tra-hang",
    "label": "Trả hàng"
  }],
  "faq": [{
    "q": "Yêu cầu mua hàng (Purchase Request) là gì?",
    "a": "Là chứng từ do nhân viên/bộ phận lập để đề xuất công ty mua sắm hàng hoá hoặc dịch vụ — bước khởi đầu của quy trình mua hàng."
  }, {
    "q": "Bảng giá nhà cung cấp dùng để làm gì?",
    "a": "Là danh sách mức giá và điều kiện mua hàng từ NCC, giúp bộ phận mua so sánh, lựa chọn và tối ưu chi phí."
  }, {
    "q": "Yêu cầu báo giá trở thành đơn mua hàng khi nào?",
    "a": "Sau khi phê duyệt Y/C báo giá → <strong>Tạo đơn hàng</strong> → nhập thời gian nhận hàng dự kiến và kho → <strong>Xác nhận</strong>, khi đó Y/C báo giá trở thành đơn hàng mua."
  }, {
    "q": "Theo dõi công nợ nhà cung cấp ở đâu?",
    "a": "Vào <code>Mua hàng → Đơn hàng → Đơn mua hàng</code> → chọn đơn → mục <strong>Hoá đơn mua hàng</strong> để xem số tiền còn phải trả."
  }, {
    "q": "Trả hàng cho nhà cung cấp thực hiện thế nào?",
    "a": "Tại phiếu nhập kho của đơn, bấm <strong>TRẢ HÀNG</strong>, nhập đầy đủ thông tin số lượng cần trả và xác nhận; hệ thống tạo 1 phiếu xuất kho."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/mua-hang.js", error: String((e && e.message) || e) }); }

// content/nghi-phep.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["nghi-phep"] = {
  "slug": "nghi-phep",
  "title": "Nghỉ phép",
  "icon": "Calendar",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "ul",
    "items": ["Quản lý nghỉ phép của nhân viên", "Tự động theo dõi số dư phép", "Chuẩn hoá quá trình phê duyệt", "Liên kết chấm công và bảng lương"]
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "ke-hoach-tich-luy",
    "text": "Kế hoạch tích luỹ"
  }, {
    "t": "h3",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Kế hoạch tích luỹ là một chính sách cộng dồn ngày phép theo thời gian cho từng loại nghỉ, thay vì HR mỗi năm tạo một allocation, ta định nhĩa một kế hoạch tích luỹ rồi hệ thống tự động áp dụng"
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Ngày nghỉ → Cấu hình → Kế hoạch tích luỹ → Mới</code>",
    "children": [{
      "t": "img",
      "id": 281
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin trên form",
    "children": [{
      "t": "img",
      "id": 282
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Thời điểm ghi nhận tích luỹ", "Là thời gian cộng phép cho nhân sự Vào đầu giai đoạn tích luỹ (đầu kỳ): phép được cộng ngay khi bước sang kỳ mới (nhân sự có sẵn phép dùng ngay) _ Tạm ứng phép Vào cuối giai đoạn tích luỹ (cuối kỳ): chỉ được cộng sau khi nhân viên hoàn tất kỳ đó, miễn là nhân viên còn làm việc đến cuối tháng _ Trả phép sau khi làm đủ"], ["Thời gian chuyển tiếp", "Là khoảng thời gian mà ngày phép chưa dùng của năm cũ được phép chuyển tiếp sang năm mới để nhân viên sử dụng Vào ngày phân bổ: thời điểm hệ thống chính thức ghi nhận số ngày phép vào TK của nhân viên Nếu chọn “Vào đầu giai đoạn tích luỹ” thì ngày phân bổ \\= đầu kỳ Nếu chọn “Vào cuối giai đoạn tích luỹ” thì ngày phân bổ \\= cuối kỳ"], ["Dựa trên thời gian việc", "Hệ thống chỉ cộng ngày phép khi nhân viên thực sự có thời gian làm việc được ghi nhận trong attendance Không cộng cho những khoảng thời gian không làm việc (nghỉ không lương, nghỉ thai sản, nghỉ dài hạn)"]]
    }]
  }, {
    "t": "h2",
    "id": "phieu-xin-nghi-phep",
    "text": "Phiếu xin nghỉ phép"
  }, {
    "t": "h3",
    "id": "tao-phieu-xin-nghi-phep",
    "text": "Tạo phiếu xin nghỉ phép"
  }, {
    "t": "h4",
    "id": "dieu-kien-de-duoc-xin-nghi-phep",
    "text": "Điều kiện để được xin nghỉ phép"
  }, {
    "t": "h2",
    "id": "dieu-kien-de-duoc-xin-nghi-phep-nghi-co-luong",
    "text": "Điều kiện để được xin nghỉ phép (nghỉ có lương): nhân sự còn ngày phép có thể sử dụng."
  }, {
    "t": "h4",
    "id": "cach-kiem-tra-so-phep-con-lai",
    "text": "Cách kiểm tra số phép còn lại"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Ngày nghỉ → Bảng điều khiển</code>",
    "children": [{
      "t": "img",
      "id": 283
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Bấm vào dấu hỏi chấm trên loại ngày nghỉ để xem thông tin về ngày nghỉ",
    "children": [{
      "t": "img",
      "id": 284
    }]
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-phieu-xin-nghi",
    "text": "Các bước tạo phiếu xin nghỉ"
  }, {
    "t": "p",
    "html": "1. <strong>Cách 1:</strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập Ngày nghỉ → Tại bảng thông tin ấn chọn ngày muốn xin nghỉ</code>",
    "children": [{
      "t": "img",
      "id": 285
    }, {
      "t": "p",
      "html": "<strong>Bước 2</strong>: <code>Nhập thông tin trên đơn xin nghỉ phép → Ấn Lưu → Ấn Xác nhận</code>"
    }, {
      "t": "img",
      "id": 286
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Loại ngày nghỉ", "<strong>Điểm khác biệt giữa nghỉ phép và nghỉ chế độ</strong> <em>Giống nhau: Đều là ngày nghỉ có lương Khác nhau Nghỉ phép: là nghỉ được cấp phát định kỳ và cộng dồn luỹ kế hàng tháng, tuỳ hợp đồng nhân sự ký với công ty có quy định được cấp phép hay không Nghỉ chế độ: là nghỉ theo sự vụ phát sinh. Ví dụ: nghỉ hiếu hỉ, nghỉ sinh, nghỉ cưới… theo quy định của luật lao động</em>"]]
    }, {
      "t": "p",
      "html": "Sau khi tạo phiếu xin nghỉ phép, phiếu sẽ được chuyển đến người quản lý trực tiếp của nhân sự đó để tiến hành phê duyệt. Nếu quản lý duyệt, đơn xin nghỉ sẽ được duyệt và tự trừ vào tổng số ngày phép của nhân viên. Hoặc sau khi quản lý trực tiếp duyệt, đơn xin nghỉ sẽ được chuyển qua cán bộ quản lý ngày nghỉ (thường là hành chính) để phê duyệt tuỳ vào cài đặt cấp độ phê duyệt của từng loại nghỉ phép"
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Theo dõi thông tin phê duyệt trên phiếu \\+ trạng thái phê duyệt tương ứng",
    "children": [{
      "t": "img",
      "id": 287
    }, {
      "t": "p",
      "html": "2. <strong>Cách 2:</strong>"
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Truy cập Ngày nghỉ → Không gian của tôi → Đơn nghỉ phép của tôi → Mới</code>",
    "children": [{
      "t": "img",
      "id": 288
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "<code>Điền các thông tin trên đơn xin nghỉ → Ấn Lưu → Ấn Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 289
    }]
  }, {
    "t": "h3",
    "id": "phe-duyet-phieu-nghi-phep",
    "text": "Phê duyệt phiếu nghỉ phép"
  }, {
    "t": "h4",
    "id": "cach-1",
    "text": "Cách 1"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Tại màn hình Dashboard → Phê duyệt cần làm → Nghỉ phép</code>",
    "children": [{
      "t": "img",
      "id": 290
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người quản lý ấn phê duyệt hoặc từ chối phiếu của nhân sự mình quản lý",
    "children": [{
      "t": "img",
      "id": 291
    }]
  }, {
    "t": "h4",
    "id": "cach-2",
    "text": "Cách 2"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng truy cập menu Phê duyệt",
    "children": [{
      "t": "img",
      "id": 292
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Người quản lý ấn chọn phân hệ tương ứng → phê duyệt/từ chối phiếu</code>",
    "children": [{
      "t": "img",
      "id": 293
    }, {
      "t": "p",
      "html": "3. <strong><em>Cách 3</em></strong>"
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Người dùng truy cập menu Ngày nghỉ → Quản lý → Ngày nghỉ</code>",
    "children": [{
      "t": "img",
      "id": 294
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Người quản lý ấn phê duyệt hoặc từ chối phiếu của nhân sự mình quản lý",
    "children": [{
      "t": "img",
      "id": 295
    }]
  }, {
    "t": "h2",
    "id": "yeu-cau-cap-phat-phep",
    "text": "Yêu cầu cấp phát phép"
  }, {
    "t": "h3",
    "id": "tao-yeu-cau-cap-phat-phep",
    "text": "Tạo yêu cầu cấp phát phép"
  }, {
    "t": "h4",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Yêu cầu cấp phát phép là việc nhân viên gửi request để được cộng/thêm số ngày phép (thường là phép năm, phép đặc biệt, hoặc phép bù)."
  }, {
    "t": "h4",
    "id": "truong-hop-duoc-xin-cap-phat-phep",
    "text": "Trường hợp được xin cấp phát phép"
  }, {
    "t": "ul",
    "items": ["Cấp phép chế độ và nằm trong đối tượng được cấp phép (có ký hợp đồng với công ty).", "Số phép hiện tại thiếu so với thực tế thì làm phiếu đề nghị cấp phát bổ sung."]
  }, {
    "t": "h4",
    "id": "cac-buoc-thuc-hien-2",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập Ngày nghỉ → Không gian của tôi → Phân bổ của tôi → Mới</code>",
    "children": [{
      "t": "img",
      "id": 296
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form xin cấp phát phép → ấn Lưu</code>",
    "children": [{
      "t": "img",
      "id": 297
    }]
  }, {
    "t": "h3",
    "id": "luuu-y-phe-duyet-yeu-cau-cap-phat-phep",
    "text": "Lưuu ý Phê duyệt yêu cầu cấp phát phép"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập Ngày nghỉ → Quản lý → Phân bổ</code>",
    "children": [{
      "t": "img",
      "id": 298
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người quản lý ấn phê duyệt hoặc từ chối phiếu của nhân sự mình quản lý",
    "children": [{
      "t": "img",
      "id": 299
    }]
  }],
  "toc": [{
    "id": "ke-hoach-tich-luy",
    "label": "Kế hoạch tích luỹ"
  }, {
    "id": "phieu-xin-nghi-phep",
    "label": "Phiếu xin nghỉ phép"
  }, {
    "id": "dieu-kien-de-duoc-xin-nghi-phep-nghi-co-luong",
    "label": "Điều kiện để được xin nghỉ phép (nghỉ có lương): nhân sự còn ngày phép có thể sử dụng."
  }, {
    "id": "yeu-cau-cap-phat-phep",
    "label": "Yêu cầu cấp phát phép"
  }],
  "faq": [{
    "q": "Kế hoạch tích luỹ là gì?",
    "a": "Là chính sách cộng dồn ngày phép theo thời gian cho từng loại nghỉ, thay vì mỗi năm HR phải tạo một allocation thủ công."
  }, {
    "q": "Điều kiện để được xin nghỉ phép có lương?",
    "a": "Nhân sự phải <strong>còn ngày phép</strong> có thể sử dụng."
  }, {
    "q": "Kiểm tra số phép còn lại ở đâu?",
    "a": "Vào <code>Ngày nghỉ → Bảng điều khiển</code> → bấm vào dấu hỏi chấm trên loại ngày nghỉ để xem thông tin số phép."
  }, {
    "q": "Yêu cầu cấp phát phép dùng khi nào?",
    "a": "Khi nhân viên cần được cộng/thêm ngày phép (phép năm, phép đặc biệt, phép bù). Tạo tại <code>Ngày nghỉ → Không gian của tôi → Phân bổ của tôi → Mới</code>."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/nghi-phep.js", error: String((e && e.message) || e) }); }

// content/nhan-vien.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["nhan-vien"] = {
  "slug": "nhan-vien",
  "title": "Nhân viên",
  "icon": "Users",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "cau-hinh",
    "text": "Cấu hình"
  }, {
    "t": "h3",
    "id": "phan-loai-nhan-su",
    "text": "Phân loại nhân sự"
  }, {
    "t": "h4",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Phân loại nhân sự để quản lý thông tin nhân sự theo hợp đồng, từ đó tính quyền lợi, lương thưởng, quyền truy cập, đánh giá và báo cáo nhân sự."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-phan-loai-nhan-su",
    "text": "Các bước tạo phân loại nhân sự"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Phân loại nhân sự → Mới</code>",
    "children": [{
      "t": "img",
      "id": 238
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập tên phân loại → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 239
    }]
  }, {
    "t": "h3",
    "id": "kieu-nhan-vien",
    "text": "Kiểu nhân viên"
  }, {
    "t": "h4",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Danh mục kiểu nhân viên phân chia nhân viên theo từng kiểu làm việc, có mục đích quản lý nhân sự và hỗ trợ tính công."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-kieu-nhan-vien",
    "text": "Các bước tạo kiểu nhân viên"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Kiểu nhân viên → Mới</code>",
    "children": [{
      "t": "img",
      "id": 240
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập tên kiểu nhân viên → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 241
    }]
  }, {
    "t": "h3",
    "id": "cap-bac",
    "text": "Cấp bậc"
  }, {
    "t": "h4",
    "id": "mo-ta-3",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Danh mục cấp bậc có mục đích phân cấp chức danh cho toàn bộ nhân sự công ty nhằm nâng cao hiệu quả quản lý hoạt động doanh nghiệp và trách nhiệm các cấp."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-cap-bac",
    "text": "Các bước tạo cấp bậc"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Cấp bậc → Mới</code>",
    "children": [{
      "t": "img",
      "id": 242
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập tên cấp bậc → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 243
    }]
  }, {
    "t": "h3",
    "id": "chuc-vu",
    "text": "Chức vụ"
  }, {
    "t": "h4",
    "id": "mo-ta-4",
    "text": "Mô tả"
  }, {
    "t": "h2",
    "id": "chuc-vu-la-nhung-cong-viec-nhiem-vu-gan-voi-c",
    "text": "Chức vụ là những công việc, nhiệm vụ gắn với chức danh, cơ cấu trong công ty. Thông qua chức vụ (vị trí công việc) có thể biết được chính xác nhân sự làm trong phòng ban nào, làm trong lĩnh vực nào và có nhiệm vụ chính cần thực hiện ra sao. Ngoài ra, chức vụ còn hỗ trợ hành chính tuyển dụng trong quá trình tuyển dụng nhân sự mới, cho biết số lượng nhân viên hiện tại, số lượng nhân viên mới dự kiến tuyển thêm theo kế hoạch tuyển dụng và tổng số nhân viên dự kiến trong tương lai."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-chuc-vu",
    "text": "Các bước tạo chức vụ"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Chức vụ → Mới</code>",
    "children": [{
      "t": "img",
      "id": 244
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập thông tin chức vụ → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 245
    }]
  }, {
    "t": "h3",
    "id": "doi-nhom",
    "text": "Đội nhóm"
  }, {
    "t": "h4",
    "id": "mo-ta-5",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Là một nhóm người có chung nhiệm vụ, công việc gắn với chức danh, chức vụ trong công ty, có các kĩ năng bổ sung cho nhau, cam kết thực hiện và chịu trách nhiệm trước một mục đích, mục tiêu hoạt động chung."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-doi-nhom",
    "text": "Các bước tạo đội nhóm"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Đội nhóm → Mới</code>",
    "children": [{
      "t": "img",
      "id": 246
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập thông tin đội nhóm → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 247
    }]
  }, {
    "t": "h3",
    "id": "quan-ly-phong-ban",
    "text": "Quản lý phòng ban"
  }, {
    "t": "h4",
    "id": "mo-ta-6",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Phòng/Ban giúp cho công ty có thể tập trung vào từng lĩnh vực cụ thể, tăng tính chuyên môn, hiệu suất làm việc đồng thời giúp cho việc quản lý công ty trở nên hiệu quả hơn. Các phòng ban nhỏ hơn sẽ có chức năng cụ thể hơn và sẽ được quản lý bởi các nhân viên có kinh nghiệm trong lĩnh vực đó. Điều này giúp cho công ty có thể đưa ra các quyết định nhanh chóng và hiệu quả hơn"
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-phong-ban",
    "text": "Các bước tạo phòng ban"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Quản lý Phòng ban → Mới</code>",
    "children": [{
      "t": "img",
      "id": 248
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập thông tin phòng ban → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 249
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Phân loại khối", "Khi tạo một hợp đồng mới có phòng ban tương ứng, trường phân loại khối autofill theo cài đặt"], ["Cấu trúc lương", "Khi tạo một hợp đồng mới có phòng ban tương ứng, trường cấu trúc lương autofill theo cài đặt"], ["Áp dụng lịch full sáng thứ 7", "Những phòng ban có check box \"Áp dụng lịch full sáng thứ 7\" thì sẽ bỏ qua logic chặn lấy max công 2 thứ 7 hoặc 3 thứ 7 trên phiếu lương Gọi lại công ngày thứ 7 nếu có tăng ca vượt định mức Kể cả chiều thứ 7 không có kế hoạch tăng ca thì cũng chỉ lấy công buổi sáng theo lịch Tuy nhiên đối với tháng có 5 thứ 7 thì ngoài chỉ lấy công buổi sáng ra sẽ lấy thêm 1 ngày có công max trong 5 ngày thứ 7"]]
    }]
  }, {
    "t": "h3",
    "id": "du-an",
    "text": "Dự án"
  }, {
    "t": "h4",
    "id": "mo-ta-7",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Danh mục dự án hỗ trợ quản lý nhân sự theo từng dự án của công ty. Đồng thời, thiết lập các quy tắc tạo mã nhân viên, hỗ trợ tự sinh mã nhân viên mới khi tạo hồ sơ nhân sự"
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-du-an",
    "text": "Các bước tạo dự án"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Dự án → Mới</code>",
    "children": [{
      "t": "img",
      "id": 250
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập thông tin dự án → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 251
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Next number", "thiết lập mã nhân sự kế tiếp"], ["Sequence Size", "số ký tự của mã nhân viên không bao gồm phần chữ"]]
    }]
  }, {
    "t": "h3",
    "id": "loai-tai-lieu",
    "text": "Loại tài liệu"
  }, {
    "t": "h4",
    "id": "mo-ta-8",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Danh mục loại tài liệu là thống kê toàn bộ tài liệu một nhân sự theo yêu cầu của công ty, có mục đích cho việc lưu trữ, theo dõi hồ sơ nhân sự"
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-loai-tai-lieu",
    "text": "Các bước tạo loại tài liệu"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Loại tài liệu → Mới</code>",
    "children": [{
      "t": "img",
      "id": 252
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập thông tin loại tài liệu → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 253
    }, {
      "t": "p",
      "html": "→ Là bắt buộc: Nếu chuyển sang trạng thái bắt buộc thì trong phần checklist hồ sơ phải tích đủ tài liệu bắt buộc đó thì hồ sơ mới chuyển sang trạng thái “Đủ”"
    }, {
      "t": "img",
      "id": 254
    }]
  }, {
    "t": "h3",
    "id": "loai-hop-dong",
    "text": "Loại hợp đồng"
  }, {
    "t": "h4",
    "id": "mo-ta-9",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Danh mục loại hợp đồng tổng hợp toàn bộ các loại hợp đồng hiện có của công ty. Bao gồm các thông tin hỗ trợ chấm công, tính lương cho nhân sự."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-loai-hop-dong",
    "text": "Các bước tạo loại hợp đồng"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Loại hợp đồng → Mới</code>",
    "children": [{
      "t": "img",
      "id": 255
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập thông tin loại hợp đồng → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 256
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Cơ sở tính lương", "Tính lương theo giờ: tính lương theo dữ liệu chấm công của nhân sự Tính lương theo ngày: đối tượng áp dụng là nhân sự cấp 1-5, không tính việc đi muộn về sớm \\=&gt; mỗi buổi sáng or chiều chỉ cần có 1 bản ghi chấm công bất kỳ thì sẽ được tính 0.5 công, và nếu có bản ghi chấm công ở cả buổi sáng và buổi chiều thì sẽ được tính \\= 1 công"], ["Cơ sở tính chấm công", "Theo giờ có mặt: tính theo giờ chấm công của nhân sự Theo đăng ký nghỉ: Dành cho 1 số hồ sơ đặc biệt theo quy định công ty, không tính chấm công, hàng ngày tự insert công \\= 1"], ["Cơ sở tính tăng ca", "Theo có mặt: tính công tăng ca cho nhân sự theo dữ liệu chấm công thực tế Theo kế hoạch: tính công tăng ca theo kế hoạch tăng ca đã lập từ trước và đã được quản lý phê duyệt bất kể dữ liệu chấm công là gì"], ["Đối tượng chấm công", "Linh hoạt: Nhân sự cứ chấm công thì sẽ hiện dữ liệu chấm công và được tính công kể cả ngày không có trong lịch làm việc như thử 7, chủ nhật Cố định: Tính công cố định theo lịch làm việc, nhân sự chấm công không theo lịch (chấm ngày chủ nhật) sẽ không được tính công Công ca: Không quan tâm đi muộn về sớm, 1 ngày nhân sự chỉ cần làm đủ bao nhiêu tiếng theo thiết lập thì được tính là 1 công"]]
    }]
  }, {
    "t": "h3",
    "id": "cau-hinh-file-hop-dong",
    "text": "Cấu hình file hợp đồng"
  }, {
    "t": "h4",
    "id": "mo-ta-10",
    "text": "Mô tả"
  }, {
    "t": "h2",
    "id": "cau-hinh-file-hop-dong-duoc-dung-de-thiet-lap",
    "text": "Cấu hình File hợp đồng được dùng để thiết lập các mẫu hợp đồng của công ty, hỗ trợ hành chính trong việc in hợp đồng của nhân sự ra và lưu trữ trên bản cứng."
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-file-hop-dong",
    "text": "Các bước tạo file hợp đồng"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Cấu hình → Cấu hình file hợp đồng→ Mới</code>",
    "children": [{
      "t": "img",
      "id": 257
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Tải các file mẫu lên phần mềm",
    "children": [{
      "t": "img",
      "id": 258
    }]
  }, {
    "t": "h2",
    "id": "quy-trinh-tao-va-xu-ly-thong-tin-01-nhan-su-m",
    "text": "Quy trình tạo và xử lý thông tin 01 nhân sự mới"
  }, {
    "t": "h3",
    "id": "tao-ho-so-nhan-su",
    "text": "Tạo hồ sơ nhân sự"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng đi đến menu: <code>Nhân viên → Mới</code>",
    "children": [{
      "t": "img",
      "id": 259
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Tải các file mẫu lên phần mềm",
    "children": [{
      "t": "img",
      "id": 260
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Mã nhân viên", "Mã nhân viên là mã định danh của nhân sự trong công ty. Mỗi nhân sự chỉ có một mã nhân viên. Sau khi thiết lập trong danh mục dự án, mã nhân viên sẽ được tự sinh và điền vào trường mã nhân viên trong hồ sơ nhân sự.  Do đó khi tạo hồ sơ nhân sự các bạn phải đặc biệt lưu ý chọn đúng dự án mà nhân sự trực thuộc để hệ thống sinh mã phù hợp"], ["Ngày vào công ty", "Ngày đầu tiên nhân viên làm việc, có tác dụng trong việc tính thâm niên nhân sự"], ["Quản lý", "Người quản lý trực tiếp của nhân sự tại công ty. Có trách nhiệm trong việc phê duyệt các thông tin trong quá trình làm việc của nhân sự"], ["Giờ làm việc", "Thời gian làm việc tại công ty của nhân viên, autofill vào hợp đồng sau khi chọn trên hồ sơ nhân sự, hỗ trợ tính công, lương của nhân sự tương ứng"], ["Tài khoản dùng liên kết", "Tài khoản liên kết: Là tài khoản ERP của mỗi nhân sự, mỗi nhân sự chỉ liên kết với một tài khoản ERP tương ứng (nên lọc theo mã nhân viên hoặc email đăng nhập để tránh liên kết sai tài khoản). Chỉ nhân sự được liên kết tài khoản ERP với hồ sơ thì nhân sự đó mới có thể sử dụng các module HRM như Chấm công, Tăng ca, Ngày nghỉ, vv…"], ["MÃ PIN", "PIN code là mã chấm công của nhân sự, mã này trùng với mã chấm công của nhân sự đó tại máy chấm công khuôn mặt. Sau khi thiết lập quy tắc tạo Pincode, mã pincode sẽ được tự sinh và điền vào trường pincode trong thiết lập nhân lực tại hồ sơ nhân sự."]]
    }]
  }, {
    "t": "h3",
    "id": "tao-hop-dong",
    "text": "Tạo hợp đồng"
  }, {
    "t": "h4",
    "id": "mo-ta-11",
    "text": "Mô tả"
  }, {
    "t": "h4",
    "id": "cac-buoc-tao-moi-hop-dong",
    "text": "Các bước tạo mới hợp đồng"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng đi đến menu: <code>Nhân viên → Hợp đồng → Mới</code>",
    "children": [{
      "t": "img",
      "id": 261
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập thông tin chung của Hợp đồng",
    "children": [{
      "t": "img",
      "id": 262
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Ngày bắt đầu/kết thúc hợp đồng", "Chặn giải trình công theo ngày bắt đầu và kết thúc hợp đồng"], ["Cấu trúc lương", "Quy tắc tính lương cho nhân sự"]]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Nhập thông tin trên Tab thông tin lương",
    "children": [{
      "t": "img",
      "id": 263
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Tổng lương", "\\= Lương bảo hiểm \\+ Lương hiệu quả"], ["Lương thử việc", "mức lương mà nhân viên nhận trong thời gian thử việc"], ["Tỷ lệ hưởng lương thử việc", "mức phần trăm lương mà nhân viên được nhận trong thời gian thử việc so với lương chính thức trong hợp đồng"], ["Lương bảo hiểm", "mức lương cơ bản của nhân viên, căn cứ để tính và trích nộp các loại bảo hiểm bắt buộc cho người lao động"], ["Lương hiệu quả", "lương dựa trên kết quả công việc thực tế của nhân viên"], ["Lương gross", "\\= tổng lương \\+ tổng tiền tất cả các loại phụ cấp"]]
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Nhập thông tin trên Tab đăng ký đóng góp từ lương",
    "children": []
  }, {
    "t": "h4",
    "id": "thong-tin-luu-y",
    "text": "Thông tin lưu ý"
  }, {
    "t": "ul",
    "items": ["<em>Tab Lịch sử thay đổi phụ cấp</em>", "Ghi nhận lịch sử thay đổi phụ cấp của nhân sự, phục vụ việc tính lương", "Trường hợp làm thay đổi lịch sử thay đổi phụ cấp", "Cập nhật tay thông tin phụ cấp trên tab thông tin lương", "Import lịch sử thay đổi phụ cấp", "Import phụ cấp KHÔNG làm thay đổi lịch sử", "<em>Tab Lịch sử thay đổi lương</em>", "Ghi nhận lịch sử thay đổi lương của nhân sự, phục vụ việc tính lương", "Cho phép xóa lịch sử thay đổi lương với nhân sự được phân quyền HRM: C\\&amp;B Tổng, Quản trị viên module", "Trường hợp làm thay đổi lịch sử thay đổi lương", "Cập nhật tay tổng lương trên tab thông tin lương", "Import lịch sử thay đổi lương", "Import tổng lương KHÔNG làm thay đổi lịch sử", "<em>Thời gian áp dụng chế độ sau sinh</em>", "Ghi nhận thời gian đi làm sau sinh của nhân sự được hưởng chế độ.", "Nhân sự được thiết lập thời gian áp dụng chế độ sau sinh sẽ được bù không quá 1 giờ công cho những ngày không đủ giờ trung bình theo lịch trên phiếu lương.", "<em>Lịch sử cập nhật hợp đồng</em>", "Lưu trữ thông tin hợp đồng trước khi cập nhật."]
  }, {
    "t": "h2",
    "id": "cap-nhat-hop-dong",
    "text": "Cập nhật hợp đồng"
  }, {
    "t": "h3",
    "id": "mo-ta-12",
    "text": "Mô tả"
  }, {
    "t": "ul",
    "items": ["Đảm bảo một nhân sự chỉ có duy nhất 1 hợp đồng trên phần mềm trong suốt quá trình làm việc tại công ty", "Chỉ thanh lý hợp đồng trong trường hợp nhân sự nghỉ việc", "<code>Sau khi Ấn Xác nhận cập nhập hợp đồng → Phần mềm ghi đè thông tin vừa cập nhập vào hợp đồng đang chạy hiện tại. Đồng thời tạo ra một lịch sử cập nhập hợp đồng nhằm lưu trữ thông tin trước khi thay đổi</code>.", "Hợp đồng có trạng thái \\= Hết hạn ⇒ Khi Xác nhận Form Popup Cập nhập Hợp đồng ⇒ tự động cập nhật trạng thái Hợp đồng về Đang chạy"]
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Nhân viên → Hợp đồng → Hợp đồng có trạng thái</code> \\=  hết hạn",
    "children": [{
      "t": "img",
      "id": 264
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Điền thông tin trên form popup cập nhật hợp đồng",
    "children": [{
      "t": "img",
      "id": 265
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Ngày bắt đầu HĐ", "<code>Autofill giá trị vào trường Ngày bắt đầu HĐ mới trên form hợp đồng → Trường Ngày bắt đầu HĐ trên form hợp đồng giữ nguyên theo ngày trên hợp đồng trước khi cập nhật</code>, không thay đổi"], ["Ngày kết thúc HĐ", "tự nhảy dựa theo Ngày bắt đầu HĐ mới và Thời hạn hợp đồng trong Loại hợp đồng \\=&gt; Cập nhật sẽ autofill vào trường ngày kết thúc trên form hợp đồng"]]
    }]
  }, {
    "t": "h2",
    "id": "yeu-cau-cap-phat-tk-erp",
    "text": "Yêu cầu cấp phát TK ERP"
  }, {
    "t": "h3",
    "id": "doi-tuong-tao-yeu-cau",
    "text": "Đối tượng tạo yêu cầu"
  }, {
    "t": "ul",
    "items": ["Cán bộ C\\&amp;B", "Quản trị viên module Nhân viên", "Quản trị viên quyền Thiết lập"]
  }, {
    "t": "h3",
    "id": "dieu-kien",
    "text": "Điều kiện"
  }, {
    "t": "ul",
    "items": ["Nhân sự có hồ sơ nhân sự được tạo trên phần mềm", "Nhân sự có hợp đồng ở trạng thái “Đang chạy”", "Nhân sự chưa có Tài khoản được liên kết trong phần Thiết lập nhân lực", "Nhân sự bị Từ chối yêu cầu cấp phát TK ERP bởi quản trị viên (do thiếu hoặc sai 1 số thông tin) và có nhu cầu muốn cấp tiếp"]
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-2",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "Truy cập module Nhân viên",
    "children": [{
      "t": "img",
      "id": 266
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Ấn chọn hồ sơ có tag “Đang làm việc” → Ấn button Y/C cấp phát TK ERP",
    "children": [{
      "t": "img",
      "id": 267
    }, {
      "t": "img",
      "id": 268
    }, {
      "t": "p",
      "html": "<strong>Bước 3</strong>:  Ấn button Y/C cấp phát TK ERP →↮Điền các thông tin trong form Y/C cấp phát TK ERP và ấn xác nhận"
    }, {
      "t": "p",
      "html": "<a href=\"https://docs.google.com/spreadsheets/d/1k04B7kBf4hjH24tI84T7xYhKWoBz6XawOjqxbzxCr_o/edit?gid=0#gid=0\" target=\"_blank\" rel=\"noopener\">Quy định phân quyền Odoo 18 - Google Trang tính</a>"
    }, {
      "t": "img",
      "id": 269
    }]
  }, {
    "t": "h3",
    "id": "kiem-tra-danh-sach-y-c-cap-phat-tk-erp",
    "text": "Kiểm tra danh sách Y/C cấp phát TK ERP"
  }, {
    "t": "h4",
    "id": "mo-ta-13",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Hỗ trợ kiểm tra toàn bộ danh sách của người tạo yêu cầu cấp phát, trạng thái phê duyệt, lý do từ chối (nếu có)"
  }, {
    "t": "h4",
    "id": "cac-buoc-thuc-hien-3",
    "text": "Các bước thực hiện"
  }, {
    "t": "p",
    "html": "<strong>Cách 1:</strong> Truy cập màn hình thông báo"
  }, {
    "t": "img",
    "id": 270
  }, {
    "t": "p",
    "html": "<strong>Cách 2:</strong> <code>Truy cập module Thảo luận → Kiểm tra các thông báo yêu cầu cấp phát tài khoản</code>"
  }, {
    "t": "img",
    "id": 271
  }, {
    "t": "p",
    "html": "<strong>Cách 3:</strong> Truy cập module Nhân viên &gt; Nhân viên &gt; Y/C Cấp phát TK ERP"
  }, {
    "t": "img",
    "id": 272
  }, {
    "t": "p",
    "html": "<strong>Cách 4:</strong> Tại màn hình Dashboard &gt; Đề xuất chờ duyệt &gt; Bấm chọn Cấp phát Tài khoản"
  }, {
    "t": "img",
    "id": 273
  }, {
    "t": "h3",
    "id": "phe-duyet-y-c-cap-phat-tk-erp",
    "text": "Phê duyệt Y/C cấp phát TK ERP"
  }, {
    "t": "h4",
    "id": "doi-tuong-co-quyen-phe-duyet-y-c-cap-phat-tk-",
    "text": "Đối tượng có quyền phê duyệt Y/C Cấp phát TK ERP"
  }, {
    "t": "ul",
    "items": ["Quản trị viên quyền Thiết lập,", "Quản trị viên module Nhân viên"]
  }, {
    "t": "h4",
    "id": "cac-cach-phe-duyet-y-c-cap-phat-tk-erp",
    "text": "Các cách phê duyệt Y/C Cấp phát TK ERP"
  }, {
    "t": "p",
    "html": "<strong>Cách 1:</strong> Truy cập module Nhân viên &gt; Nhân viên &gt; Y/C Cấp phát TK ERP"
  }, {
    "t": "img",
    "id": 274
  }, {
    "t": "p",
    "html": "<strong>Cách 2:</strong> Tại màn hình Dashboard &gt; Phê duyệt cần làm &gt; Bấm chọn Cấp phát Tài khoản"
  }, {
    "t": "img",
    "id": 275
  }, {
    "t": "h3",
    "id": "luu-y",
    "text": "Lưu ý"
  }, {
    "t": "ul",
    "items": ["Sau khi ấn xác nhận Y/C sẽ được gửi đến Quản trị viên Thiết lập để phê duyệt cấp TK", "TK sau khi được cấp sẽ tự động liên kết với hồ sơ nhân sự tương ứng", "Link đăng nhập: <strong>tinyerp.dccr.vn</strong>", "Email đăng nhập: <strong>Mail công ty</strong>", "MK mặc định sau khi TK được cấp:  <strong>DCCR@123456@!</strong>", "Trường hợp Y/C cấp phát TK bị từ chối (có lý do kèm theo) &gt; trên hồ sơ nhân sự sẽ hiển thị lại button Y/C cấp phát TK ERP cho nhân sự có nhu cầu cấp tiếp TK."]
  }, {
    "t": "h2",
    "id": "de-xuat-tang-luong",
    "text": "Đề xuất tăng lương"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng đi đến menu: <code>Nhân viên → Quá trình làm việc</code> ⟶ Đề xuất tăng lương ⟶ Mới",
    "children": [{
      "t": "img",
      "id": 276
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin trên form",
    "children": [{
      "t": "img",
      "id": 277
    }, {
      "t": "p",
      "html": "<strong>Diễn giải</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Điều chỉnh trên Tổng lương", "Với đề xuất tăng lương điều chỉnh trên \"Tổng lương\" có trạng thái \\= Đã phê duyệt thì tạo ra 1 line lịch sử thay đổi lương mới"], ["Điều chỉnh trên lương bảo hiểm", "Với đề xuất tăng lương điều chỉnh trên \"Lương bảo hiểm\" có trạng thái \\= Đã phê duyệt thì không làm thay đổi lịch sử thay đổi lương trên hợp đồng​ Khi lương bảo hiểm trên hợp đồng bị thay đổi theo đề xuất tăng lương, thực hiện tính toán lại \"Lương hiệu quả\" do Tổng lương không thay đổi"], ["Điều chỉnh trên danh sách các loại đãi ngộ", "Đề xuất tăng lương điều chỉnh trên \"danh sách các loại đãi ngộ\" có trạng thái \\= đã phê duyệt ​                 \\=&gt; Ngày kết thúc \\= Ngày áp dụng  -1​                 (Trong đó: Ngày áp dụng \\= ngày áp dụng quyết định trên đề xuất tăng lương)"]]
    }]
  }, {
    "t": "h2",
    "id": "quy-trinh-tao-va-xu-ly-phieu-thuyen-chuyen-bo",
    "text": "Quy trình tạo và xử lý phiếu thuyên chuyển bổ nhiệm"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng đi đến menu: <code>Nhân viên → Quá trình làm việc</code> ⟶ Thuyên chuyển bổ nhiệm ⟶ Mới",
    "children": [{
      "t": "img",
      "id": 278
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người dùng nhập các thông tin vào form thuyên chuyển bổ nhiệm.",
    "children": [{
      "t": "img",
      "id": 279
    }, {
      "t": "ul",
      "items": ["<strong>Flow:</strong>", "Người dùng tạo phiếu thuyên chuyển bổ nhiệm", "Quản lý cũ duyệt (Quản lý hiện tại trên hồ sơ nhân sự)", "Quản lý mới duyệt (Quản lý mới trên phiếu thuyên chuyển bổ nhiệm)", "Đẩy luồng duyệt sang approval (Phân quyền người duyệt tiếp theo trên approval)"]
    }]
  }, {
    "t": "h2",
    "id": "lich-su-nguoi-quan-ly",
    "text": "Lịch sử người quản lý"
  }, {
    "t": "h3",
    "id": "mo-ta-14",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Theo dõi người quản lý nhân sự theo khoảng thời gian, xác định trách nhiệm, phân tích nhân sự và hỗ trợ báo cáo theo phòng ban, quản lý"
  }, {
    "t": "h3",
    "id": "logic-tao-ban-ghi-tren-tab-lich-su-nguoi-quan",
    "text": "Logic tạo bản ghi trên tab lịch sử người quản lý trên hồ sơ nhân sự"
  }, {
    "t": "ul",
    "items": ["Khi sửa tay người quản lý trên hồ sơ nhân sự ⟶ tự động tạo một line lịch sử mới với:", "Hiệu lực từ ngày \\= ngày thay đổi", "Hiệu lực đến ngày \\= null", "Hiệu lực đến ngày trên line cũ \\= Hiệu lực từ ngày mới cập nhật -1", "Mã quản lý: Mã nhân viên của người quản lý mới được cập nhật", "Tên quản lý: Tên người quản lý mới được cập nhật", "Khi thực hiện thuyên chuyển nhân sự: Nếu người quản lý mới trên phiếu thuyên chuyển khác với người quản lý hiện tại trên hồ sơ nhân sự đang được thuyên chuyển thì tạo line lịch sử mới với:", "Hiệu lực từ ngày \\= ngày hiệu lực trên phiếu thuyên chuyển bổ nhiệm", "Hiệu lực đến ngày \\= null", "Hiệu lực đến ngày trên line cũ \\= ngày hiệu lực trên phiếu thuyên chuyển bổ nhiệm -1", "Mã quản lý: Mã nhân viên của người quản lý mới được cập nhật", "Tên quản lý: Tên người quản lý mới được cập nhật"]
  }, {
    "t": "img",
    "id": 280
  }, {
    "t": "h2",
    "id": "cac-thong-tin-can-luu-y",
    "text": "Các thông tin cần lưu ý"
  }, {
    "t": "ul",
    "items": ["<strong><em>Các trạng thái của hồ sơ nhân sự</em></strong>", "Không: Nhân sự chưa có hợp đồng", "Đang làm việc: Hành chính tạo hợp đồng và đảm bảo hợp đồng ở trạng thái \"đang chạy\"", "Đã nghỉ việc: Hành chính tạo hợp đồng &gt; Thanh lý hợp đồng đó.", "Đang làm việc: Nhân sự đã có đủ thông tin và hợp đồng ở trạng thái “đang chạy”", "Tạm hoãn: Nhân sự đã hết hạn hợp đồng, trong trường hợp này hành chính xử lý hợp đồng của nhân sự như sau", "Đang làm việc: Hành chính cập nhật hợp đồng", "Đã nghỉ việc: Hành chính thanh lý hợp đồng", "Nghỉ sinh: Nhân sự đang nghỉ sinh con", "CB nghỉ việc: Nhân sự có hợp đồng ở trạng thái \\= “đang chạy” và ngày thanh lý trên hợp đồng được thiết lập _ được hiểu là, những nhân sự đã có thông tin nghỉ việc dự kiến, nhưng tại thời điểm xem thì chưa tới ngày nghỉ việc", "Đã nghỉ việc: Nhân sự đã nghỉ việc và đã tiến hành thanh lý hợp đồng", "<strong><em>Các trạng thái của hợp đồng</em></strong>", "Mới: Nhân sự đã được hành chính tạo hợp đồng nhưng chưa ấn “Xác nhận” để chuyển hợp đồng sang trạng thái “đang chạy”", "Đang chạy: Hợp đồng nhân sự đã được xác nhận đúng, nhân viên đang làm việc tại công ty", "Đã hết hạn: Hợp đồng của nhân sự đã hết hạn, trong trường hợp này hành chính xử lý hợp đồng của nhân sự như sau:"]
  }, {
    "t": "p",
    "html": "1) Đang làm việc: Hành chính cập nhật hợp đồng"
  }, {
    "t": "p",
    "html": "2) Đã nghỉ việc: Hành chính thanh lý hợp đồng"
  }, {
    "t": "ul",
    "items": ["Đã huỷ: Hồ sơ nhân sự ở trạng thái “Mới” có thông tin sai hoặc ở trạng thái “Đang chạy” nhưng nhân sự không đi làm nữa", "Thanh lý: Nhân sự đã nghỉ việc. Sau khi thanh lý hợp đồng, TK ERP của nhân sự tự động khoá", "Nghỉ sinh:  Nhân sự nghỉ sinh và đã ấn button “Nghỉ sinh” ở hồ sơ nhân sự", "<strong><em>Checklist hồ sơ:</em></strong>", "Hồ sơ là danh mục tài liệu được cài đặt là bắt buộc trong phần cấu hình", "Sau khi checkbox đủ các tài liệu bắt buộc trong danh mục tài liệu, tình trạng hồ sơ sẽ hiện “Đủ”, còn nếu C\\&amp;B không checkbox đủ các tài liệu trên sẽ hiện “Thiếu”"]
  }, {
    "t": "img",
    "id": 254
  }, {
    "t": "ul",
    "items": ["<strong><em>Import thông tin: <a href=\"https://docs.google.com/document/d/1DC4mTawD-MqxUYJQW3o47qFzKMAZoTBwooNZQba2-Zs/edit?tab=t.0\" target=\"_blank\" rel=\"noopener\">Link</a></em></strong>"]
  }],
  "toc": [{
    "id": "cau-hinh",
    "label": "Cấu hình"
  }, {
    "id": "chuc-vu-la-nhung-cong-viec-nhiem-vu-gan-voi-c",
    "label": "Chức vụ là những công việc, nhiệm vụ gắn với chức danh, cơ cấu trong công ty. Thông qua chức vụ (vị trí công việc) có thể biết được chính xác nhân sự làm trong phòng ban nào, làm trong lĩnh vực nào và có nhiệm vụ chính cần thực hiện ra sao. Ngoài ra, chức vụ còn hỗ trợ hành chính tuyển dụng trong quá trình tuyển dụng nhân sự mới, cho biết số lượng nhân viên hiện tại, số lượng nhân viên mới dự kiến tuyển thêm theo kế hoạch tuyển dụng và tổng số nhân viên dự kiến trong tương lai."
  }, {
    "id": "cau-hinh-file-hop-dong-duoc-dung-de-thiet-lap",
    "label": "Cấu hình File hợp đồng được dùng để thiết lập các mẫu hợp đồng của công ty, hỗ trợ hành chính trong việc in hợp đồng của nhân sự ra và lưu trữ trên bản cứng."
  }, {
    "id": "quy-trinh-tao-va-xu-ly-thong-tin-01-nhan-su-m",
    "label": "Quy trình tạo và xử lý thông tin 01 nhân sự mới"
  }, {
    "id": "cap-nhat-hop-dong",
    "label": "Cập nhật hợp đồng"
  }, {
    "id": "yeu-cau-cap-phat-tk-erp",
    "label": "Yêu cầu cấp phát TK ERP"
  }, {
    "id": "de-xuat-tang-luong",
    "label": "Đề xuất tăng lương"
  }, {
    "id": "quy-trinh-tao-va-xu-ly-phieu-thuyen-chuyen-bo",
    "label": "Quy trình tạo và xử lý phiếu thuyên chuyển bổ nhiệm"
  }, {
    "id": "lich-su-nguoi-quan-ly",
    "label": "Lịch sử người quản lý"
  }, {
    "id": "cac-thong-tin-can-luu-y",
    "label": "Các thông tin cần lưu ý"
  }],
  "faq": [{
    "q": "Tạo một nhân sự mới gồm những bước gì?",
    "a": "Tạo <strong>hồ sơ nhân sự</strong> (Nhân viên → Mới), sau đó tạo <strong>Hợp đồng</strong> (thông tin chung, tab thông tin lương, tab đăng ký đóng góp từ lương)."
  }, {
    "q": "Khi hợp đồng hết hạn thì cập nhật thế nào?",
    "a": "Vào <code>Nhân viên → Hợp đồng</code> → lọc hợp đồng trạng thái hết hạn → điền form popup <strong>Cập nhật hợp đồng</strong>."
  }, {
    "q": "Yêu cầu cấp phát tài khoản ERP cho nhân sự ở đâu?",
    "a": "Mở hồ sơ có tag <strong>Đang làm việc</strong> → bấm <strong>Y/C cấp phát TK ERP</strong>. Theo dõi/duyệt qua thông báo, module Phê duyệt hoặc Dashboard."
  }, {
    "q": "Chức vụ, phòng ban, cấp bậc được cấu hình ở đâu?",
    "a": "Tại <code>Nhân viên → Cấu hình</code> (Chức vụ, Quản lý Phòng ban, Cấp bậc, Đội nhóm, Loại hợp đồng…)."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/nhan-vien.js", error: String((e && e.message) || e) }); }

// content/phe-duyet.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["phe-duyet"] = {
  "slug": "phe-duyet",
  "title": "Phê duyệt",
  "icon": "Check",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "ul",
    "items": ["Thiết lập luồng phê duyệt cho từng ứng dụng"]
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "tao-luong-duyet",
    "text": "Tạo luồng duyệt"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Phê duyệt → Cấu hình → Cấu hình phê duyệt → Mới</code>",
    "children": [{
      "t": "img",
      "id": 417
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên form cấu hình luồng duyệt → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 418
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Model", "là đối tượng đại diện cho một nghiệp vụ trong hệ thống, dùng để định nghĩa cấu trúc dữ liệu và các quy tắc xử lý nghiệp vụ, đồng thời liên kết trực tiếp với cơ sở dữ liệu từ đó vận hành các chức năng, quy trình nghiệp vụ trong hệ thống"], ["Điều kiện áp dụng", "Điều kiện lọc ra những đối tượng để áp dụng luồng duyệt được thiết lập bên dưới chi tiết. Hiển thị tất cả các trường theo model được chọn phía trên ![][image419]"], ["Loại duyệt", "Người quản lý: người quản lý trực tiếp được cấu hình trên hồ sơ của nhân sự Người quản lý của bước trước: Người quản lý của quản lý được cài trên hồ sơ của nhân sự Chức vụ: cấu hình luồng duyệt theo từng chức vụ cụ thể"], ["Duyệt vượt cấp", "Nếu checkbox thì những người được cấu hình trên line duyệt đó có quyền duyệt ngay cả khi chưa đến lượt mình duyệt phiếu"]]
    }]
  }, {
    "t": "h2",
    "id": "xem-cac-phieu-cho-toi-duyet",
    "text": "Xem các phiếu chờ tôi duyệt"
  }, {
    "t": "step",
    "num": "1",
    "html": "Quản lý truy cập ứng dụng Phê duyệt",
    "children": [{
      "t": "img",
      "id": 420
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Tại màn hình chờ tôi duyệt ⟶ chọn phân hệ hoặc trạng thái phiếu muôn xem",
    "children": [{
      "t": "img",
      "id": 421
    }]
  }],
  "toc": [{
    "id": "tao-luong-duyet",
    "label": "Tạo luồng duyệt"
  }, {
    "id": "xem-cac-phieu-cho-toi-duyet",
    "label": "Xem các phiếu chờ tôi duyệt"
  }],
  "faq": [{
    "q": "Tạo luồng duyệt mới thế nào?",
    "a": "Vào <code>Phê duyệt → Cấu hình → Cấu hình phê duyệt → Mới</code>, điền thông tin luồng duyệt → <strong>Lưu</strong>."
  }, {
    "q": "Xem các phiếu chờ tôi duyệt ở đâu?",
    "a": "Mở module <strong>Phê duyệt</strong>; tại màn hình \"chờ tôi duyệt\" chọn phân hệ hoặc trạng thái phiếu muốn xem."
  }, {
    "q": "Module Phê duyệt xử lý phiếu của những nghiệp vụ nào?",
    "a": "Tập trung các phiếu cần duyệt từ nhiều module (nghỉ phép, tăng ca, giải trình công, hợp đồng, booking, cấp phát TK ERP…) theo từng phân hệ tương ứng."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/phe-duyet.js", error: String((e && e.message) || e) }); }

// content/tai-lieu.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["tai-lieu"] = {
  "slug": "tai-lieu",
  "title": "Tài liệu",
  "icon": "File",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "cau-hinh",
    "text": "Cấu hình"
  }, {
    "t": "h3",
    "id": "loai-tai-lieu",
    "text": "Loại tài liệu"
  }, {
    "t": "h4",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Phân nhóm, phân loại tài liệu"
  }, {
    "t": "h4",
    "id": "cac-buoc",
    "text": "Các bước"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài liệu → Cấu hình → Loại tài liệu → Mới</code>",
    "children": [{
      "t": "img",
      "id": 398
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập tên Loại tài liệu → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 399
    }]
  }, {
    "t": "h3",
    "id": "workspace",
    "text": "Workspace"
  }, {
    "t": "h4",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "h4",
    "id": "cong-dung-tuong-tu-nhu-thu-muc-chua-tai-lieu-",
    "text": "Công dụng tương tự như thư mục chứa tài liệu, được dùng trong việc quản lý và sắp xếp các tập tin."
  }, {
    "t": "h4",
    "id": "cac-buoc-2",
    "text": "Các bước"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài liệu → Cấu hình → Workspace → Mới</code>",
    "children": [{
      "t": "img",
      "id": 400
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập tên workspace → Parent workspace</code> (nếu có) → Quyền ghi/Quyền xem (nếu có) → Lưu",
    "children": [{
      "t": "img",
      "id": 401
    }]
  }, {
    "t": "h2",
    "id": "tai-len-tai-lieu-va-cong-van",
    "text": "Tải lên tài liệu và công văn"
  }, {
    "t": "h3",
    "id": "tai-lieu",
    "text": "Tài liệu"
  }, {
    "t": "h4",
    "id": "mo-ta-3",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Bao gồm các Các tài liệu với mục đích lưu trữ để theo dõi và các tài liệu của công văn đến và công văn đi"
  }, {
    "t": "h4",
    "id": "cac-buoc-3",
    "text": "Các bước"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài liệu → chọn vào workspace chưa tập tin tải lên đã có sẵn hoặc tạo mới một workspace phù hợp chứa thư mục mới → Mới → Tải lên</code>",
    "children": [{
      "t": "img",
      "id": 402
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn tài liệu muốn tải lên → Open</code>",
    "children": [{
      "t": "img",
      "id": 403
    }, {
      "t": "p",
      "html": "Sau khi tải lên, tài liệu sẽ nằm trong Workspaces đã chọn ban đầu"
    }, {
      "t": "img",
      "id": 404
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Sửa thông tin tài liệu: <code>Ấn vào biểu tượng hình tròn để chọn tài liệu muốn sửa → Tác vụ → Chi tiết</code>",
    "children": [{
      "t": "img",
      "id": 405
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "<code>Cập nhật thông tin tài liệu → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 406
    }]
  }, {
    "t": "h3",
    "id": "cong-van-den",
    "text": "Công văn đến"
  }, {
    "t": "h4",
    "id": "mo-ta-4",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Dùng để ban hành và gửi công văn ban hành của công ty đến các bộ phận"
  }, {
    "t": "h4",
    "id": "cac-buoc-4",
    "text": "Các bước"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài liệu → Công văn đến → Mới</code>",
    "children": [{
      "t": "img",
      "id": 407
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin liên quan đến công văn",
    "children": [{
      "t": "img",
      "id": 408
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Tải tài liệu liên quan đến công văn. Tại Tab Tệp công văn → Chọn thêm một dòng → Tải lên tập tin của bạn</code>",
    "children": [{
      "t": "img",
      "id": 409
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "<code>Chọn tệp tin muốn tải lên → Open</code>",
    "children": [{
      "t": "img",
      "id": 410
    }]
  }, {
    "t": "step",
    "num": "5",
    "html": "<code>Điền thông tin trên form tải tài liệu → Lưu</code> &amp; <code>đóng → Lưu công văn đến</code>",
    "children": [{
      "t": "img",
      "id": 411
    }]
  }, {
    "t": "h3",
    "id": "cong-van-di",
    "text": "Công văn đi"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài liệu → Công văn đi→ Mới</code>",
    "children": [{
      "t": "img",
      "id": 412
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin liên quan đến công văn",
    "children": [{
      "t": "img",
      "id": 413
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Tải tài liệu liên quan đến công văn. Tại Tab Tệp công văn → Chọn thêm một dòng → Tải lên tập tin của bạn</code>",
    "children": [{
      "t": "img",
      "id": 414
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "<code>Chọn tệp tin muốn tải lên → Open</code>",
    "children": [{
      "t": "img",
      "id": 415
    }]
  }, {
    "t": "step",
    "num": "5",
    "html": "<code>Điền thông tin trên form tải tài liệu → Lưu</code> &amp; <code>đóng → Lưu công văn đi</code>",
    "children": [{
      "t": "img",
      "id": 416
    }]
  }],
  "toc": [{
    "id": "cau-hinh",
    "label": "Cấu hình"
  }, {
    "id": "tai-len-tai-lieu-va-cong-van",
    "label": "Tải lên tài liệu và công văn"
  }],
  "faq": [{
    "q": "Workspace dùng để làm gì?",
    "a": "Công dụng như thư mục chứa tài liệu, dùng để quản lý và sắp xếp tập tin; có thể thiết lập workspace cha (parent) và quyền ghi/quyền xem."
  }, {
    "q": "Tải tài liệu lên thế nào?",
    "a": "Vào <strong>Tài liệu</strong> → chọn workspace (hoặc tạo mới) → chọn tài liệu → Open. Sửa thông tin qua biểu tượng → <strong>Tác vụ → Chi tiết</strong> → cập nhật → Lưu."
  }, {
    "q": "Quản lý công văn đến và công văn đi ở đâu?",
    "a": "Vào <code>Tài liệu → Công văn đến / Công văn đi → Mới</code>, nhập thông tin và đính kèm tệp tại tab <strong>Tệp công văn</strong>."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/tai-lieu.js", error: String((e && e.message) || e) }); }

// content/tai-san.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["tai-san"] = {
  "slug": "tai-san",
  "title": "Tài sản",
  "icon": "Box",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "cau-hinh",
    "text": "Cấu hình"
  }, {
    "t": "h3",
    "id": "ky-kiem-ke",
    "text": "Kỳ kiểm kê"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Khi có kế hoạch kiểm kê cần thiết lập kỳ kiểm kê, Quản trị viên thiết lập kỳ kiểm kê tương ứng"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập Tài sản → Cấu hình →Kỳ kiểm kê → Chọn Tạo để thêm kỳ kiểm kê mới</code>",
    "children": [{
      "t": "img",
      "id": 372
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập thông tin → Chọn Lưu để hoàn tất</code>",
    "children": [{
      "t": "p",
      "html": "<strong>Lưu ý:</strong> <em>Khi Chọn kho bắt buộc phải chọn <strong>“Kho tài sản”</strong></em>"
    }, {
      "t": "img",
      "id": 373
    }]
  }, {
    "t": "h3",
    "id": "nhom-tai-san",
    "text": "Nhóm tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Dùng để phân nhóm phân loại thiết bị vật, phục vụ báo cáo thống kê."
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập Tài sản → Cấu hình → Nhóm tài sản → Chọn mới để thêm mới nhóm tài sản</code>",
    "children": [{
      "t": "img",
      "id": 374
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền tên nhóm tài sản và mã nhóm tương ứng → ấn Lưu để hoàn tất thiết lập</code>",
    "children": [{
      "t": "img",
      "id": 375
    }]
  }, {
    "t": "h2",
    "id": "mua-sam-tai-san",
    "text": "Mua sắm tài sản"
  }, {
    "t": "h3",
    "id": "yeu-cau-mua-hang",
    "text": "Yêu cầu mua hàng"
  }, {
    "t": "h4",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Khi có yêu cầu mua mới tài sản"
  }, {
    "t": "h4",
    "id": "cac-buoc",
    "text": "Các bước"
  }, {
    "t": "step",
    "num": "1",
    "html": "Truy cập ứng dụng <strong>Tài sản</strong> → <strong><code>Mua hàng → Yêu cầu mua hàng</code></strong> → Chọn <strong>Mới</strong> để thêm mới một yêu cầu mua hàng",
    "children": [{
      "t": "img",
      "id": 376
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập thông tin trên yêu cầu mua hàng: <code>Thông tin phiếu và sản phẩm cần mua → Chọn</code> <strong>Lưu</strong> để hoàn tất phiếu yêu cầu mua hàng",
    "children": [{
      "t": "img",
      "id": 377
    }]
  }, {
    "t": "h3",
    "id": "don-hang-mua",
    "text": "Đơn hàng mua"
  }, {
    "t": "h3",
    "id": "nhan-tai-san",
    "text": "Nhận tài sản"
  }, {
    "t": "h2",
    "id": "quan-ly-tai-san",
    "text": "Quản lý tài sản"
  }, {
    "t": "h3",
    "id": "danh-sach-tai-san",
    "text": "Danh sách tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Tổng hợp thông tin tài sản theo từng lần mua theo mã"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Tài sản → Danh sách tài sản→ Chọn mới để tạo mới một danh sách tài sản</code>",
    "children": [{
      "t": "img",
      "id": 378
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form → Ấn Lưu để lưu thông tin danh sách tài sản</code>",
    "children": [{
      "t": "img",
      "id": 379
    }]
  }, {
    "t": "h3",
    "id": "chi-tiet-tai-san",
    "text": "Chi tiết tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Tại danh sách tài sản → Tạo chi tiết tiết tài sản</code>",
    "children": [{
      "t": "img",
      "id": 380
    }, {
      "t": "p",
      "html": "Lưu ý: Số lượng chi tiết tài sản được tạo ra \\= Số lượng mua ban đầu trên danh sách tài sản. Mỗi chi tiết tài sản sẽ có một mã khác nhau"
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Truy cập menu Tài sản → Chi tiết tài sản để kiểm tra chi tiết tài sản mới được tạo</code>",
    "children": [{
      "t": "img",
      "id": 381
    }]
  }, {
    "t": "h3",
    "id": "ban-giao-tai-san",
    "text": "Bàn giao tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Dùng để quản lý việc bàn giao tài sản công cụ dụng cụ cho nhân viên sử dụng. Khi bàn giao tài sản sẽ chuyển từ trạng thái lưu kho sang đang sử dụng"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Bàn giao</code> - <code>Thu hồi → Bàn giao tài sản → Mới</code>",
    "children": [{
      "t": "img",
      "id": 382
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên phiếu bàn giao tài sản → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 383
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Nhân sự bàn giao", "Người bàn giao tài sản"], ["Ngày bàn giao", "Ngày bàn giao tài sản"], ["Công ty, Hệ thống", "Chọn đúng công ty, hệ thống của bạn để hệ thống lấy đúng thông tin tài sản"], ["Người quản lý tài sản", "Người quản lý tài sản - thường là quản lý của nhân sự sử dụng tài sản"], ["Nhân sự sử dụng", "Người sử dụng trực tiếp thiết bị"], ["Vị trí xuất tài sản", "Vị trí xuất tài sản để bàn giao (thường chính là vị trí của bạn)"], ["Serial Tem tài sản", "Serial Tem của chi tiết tài sản muốn bàn giao cho nhân sự"]]
    }]
  }, {
    "t": "h3",
    "id": "thu-hoi-tai-san",
    "text": "Thu hồi tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Dùng để quản lý việc thu hồi tài sản của các nhân sự đang sử dụng về trạng thái Lưu kho"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Bàn giao</code> - <code>Thu hồi → Thu hồi tài sản → Mới</code>",
    "children": [{
      "t": "img",
      "id": 384
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên phiếu thu hồi tài sản → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 385
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Nhân sự phụ trách", "Người phụ trách thu hồi tài sản về kho"], ["Ngày thu hồi", "Ngày thu hồi tài sản"], ["Ngày nhận tài sản", "Ngày nhận được tài sản thu hồi"], ["Nhân sự sử dụng", "Người sử dụng tài sản được thu hồi"], ["Vị trí lưu kho", "Vị trí đặt tài sản sau khi thu hồi"], ["Serial Tem tài sản", "Serial Tem của chi tiết tài sản muốn thu hồi"]]
    }]
  }, {
    "t": "h3",
    "id": "thanh-ly-tai-san",
    "text": "Thanh lý tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Quản lý danh sách các phiếu thanh lý tài sản và cập nhật lại trạng thái và số lượng tài sản được thanh lý"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Thanh lý tài sản → Mới</code>",
    "children": [{
      "t": "img",
      "id": 386
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên phiếu thanh lý tài sản → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 387
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Ngày thanh lý", "Ngày thanh lý tài sản"], ["Nhân sự phụ trách thanh lý", "Người phụ trách thanh lý tài sản"], ["Lý do thanh lý", "Điền lý do thanh lý tài sản"], ["Người đề xuất", "Người đề xuất thanh lý tài sản"], ["Loại thanh lý", "Nội bộ: Chọn Nội bộ Nếu tài sản được thanh lý nội bộ trong tập đoàn Bên ngoài: Thanh lý tài sản ra bên ngoài"], ["Serial Tem tài sản", "Serial Tem của chi tiết tài sản muốn thanh lý"], ["Vị trí sử dụng mới", "Nếu thanh lý tài sản trong nội bộ"]]
    }]
  }, {
    "t": "h3",
    "id": "bao-mat-tai-san",
    "text": "Báo mất tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả:</em></strong>"
  }, {
    "t": "p",
    "html": "Dùng để quản lý trường hợp mất tài sản"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Báo mất tài sản → Mới</code>",
    "children": [{
      "t": "img",
      "id": 388
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên phiếu báo mất tài sản → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 389
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Ngày hiệu lực", "Ngày hiệu lực mất tài sản"], ["Người phụ trách", "Người phụ trách sự việc"], ["Nguyên nhân mất", "Điền nguyên nhân mất tài sản"], ["Serial Tem tài sản", "Serial Tem của chi tiết tài sản muốn báo mất"]]
    }]
  }, {
    "t": "h3",
    "id": "huy-tai-san",
    "text": "Huỷ tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Huỷ tài sản → Mới</code>",
    "children": [{
      "t": "img",
      "id": 390
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên phiếu huỷ tài sản → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 391
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Ngày hiệu lực", "Ngày hiệu lực huỷ tài sản"], ["Người phụ trách", "Người phụ trách sự việc"], ["Nguyên nhân huỷ", "Điền nguyên nhân huỷ tài sản"], ["Serial Tem tài sản", "Serial Tem của chi tiết tài sản muốn huỷ"]]
    }]
  }, {
    "t": "h3",
    "id": "sua-chua-tai-san",
    "text": "Sửa chữa tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Sửa chữa tài sản → Mới</code>",
    "children": [{
      "t": "img",
      "id": 392
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên phiếu sửa chữa tài sản → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 393
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Người đề xuất", "Người đề xuất sửa chữa tài sản"], ["Công ty con", "Công ty quản lý chi tiết tài sản"], ["Ngày yêu cầu", "Ngày yêu cầu sửa chữa"], ["Nội dung yêu cầu", "Điền nội dung yêu cầu"], ["Serial Tem tài sản", "Serial Tem của chi tiết tài sản muốn huỷ"]]
    }]
  }, {
    "t": "h3",
    "id": "kiem-ke-tai-san",
    "text": "Kiểm kê tài sản"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Kiểm kê tài sản → Phiếu kiểm kê → Mới</code>",
    "children": [{
      "t": "img",
      "id": 394
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên phiếu kiểm kê tài sản → Bắt đầu kiểm kê</code>",
    "children": [{
      "t": "img",
      "id": 395
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Kỳ kiểm kê", "Chọn kỳ kiểm kê lần này"], ["Địa điểm", "Chọn địa điểm của Công ty kiểm kê"], ["Ngày kiểm kho", "Chọn ngày kiểm kho thực tế"], ["Công ty con", "Chọn công ty con kiểm kho"]]
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Chọn chi tiết tài sản muốn kiểm kê → Enter → Danh sách tài sản kiểm kê hiên thị tại tab Danh sách sản phẩm → Xác nhận tồn kho</code>",
    "children": [{
      "t": "img",
      "id": 396
    }]
  }, {
    "t": "h3",
    "id": "giai-trinh-kiem-ke",
    "text": "Giải trình kiểm kê"
  }, {
    "t": "p",
    "html": "1. <strong><em>Mô tả</em></strong>"
  }, {
    "t": "p",
    "html": "Sau kiểm kê tài sản có chênh lệch, các chi nhánh cần giải trình"
  }, {
    "t": "p",
    "html": "2. <strong><em>Các bước</em></strong>"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập ứng dụng Tài sản → Kiểm kê tài sản → Giải trình kiểm kê → Mới</code>",
    "children": [{
      "t": "img",
      "id": 394
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn phiếu kiểm kê → Ấn button Lấy dữ liệu kiểm kê để lấy thông tin kiểm kê → Điền nội dung giải trình vào trường ghi chú trên chi tiết danh sách tài sản chênh lệch → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 397
    }]
  }],
  "toc": [{
    "id": "cau-hinh",
    "label": "Cấu hình"
  }, {
    "id": "mua-sam-tai-san",
    "label": "Mua sắm tài sản"
  }, {
    "id": "quan-ly-tai-san",
    "label": "Quản lý tài sản"
  }],
  "faq": [{
    "q": "Bàn giao tài sản cho nhân viên làm sao?",
    "a": "Vào <code>Tài sản → Bàn giao - Thu hồi → Bàn giao tài sản → Mới</code>. Khi bàn giao, tài sản chuyển từ trạng thái <strong>Lưu kho</strong> sang <strong>Đang sử dụng</strong>."
  }, {
    "q": "Thu hồi tài sản thực hiện thế nào?",
    "a": "Vào <code>Tài sản → Bàn giao - Thu hồi → Thu hồi tài sản → Mới</code> để đưa tài sản từ nhân sự đang sử dụng về trạng thái Lưu kho."
  }, {
    "q": "Phân biệt Danh sách tài sản và Chi tiết tài sản?",
    "a": "<strong>Danh sách tài sản</strong> tổng hợp thông tin theo từng lần mua theo mã; <strong>Chi tiết tài sản</strong> là từng tài sản cụ thể, được tạo ra từ danh sách tài sản."
  }, {
    "q": "Sau kiểm kê có chênh lệch thì xử lý ra sao?",
    "a": "Các chi nhánh phải giải trình: vào <code>Kiểm kê tài sản → Giải trình kiểm kê → Mới</code> → bấm Lấy dữ liệu kiểm kê → điền nội dung giải trình."
  }, {
    "q": "Các nghiệp vụ tài sản khác gồm những gì?",
    "a": "Thanh lý, báo mất, huỷ và sửa chữa tài sản — mỗi nghiệp vụ có phiếu riêng, thao tác chung là điền thông tin → Lưu → Xác nhận."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/tai-san.js", error: String((e && e.message) || e) }); }

// content/tang-ca.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["tang-ca"] = {
  "slug": "tang-ca",
  "title": "Tăng ca",
  "icon": "Calendar",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "ul",
    "items": ["Quản lý và ghi nhận giờ làm thêm của nhân viên, giúp công ty theo dõi, duyệt và tính toán tiền tăng ca chính xác theo quy định."]
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "cau-hinh",
    "text": "Cấu hình"
  }, {
    "t": "h3",
    "id": "ma-tang-ca",
    "text": "Mã tăng ca"
  }, {
    "t": "h4",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Mã tăng ca dùng để quy định một bộ phận, một vị trí được tăng ca vào thời gian nào, ngày nào trong tuần và tỷ lệ chi trả là bao nhiêu phần trăm hoặc tỷ lệ chi trả theo số tiền cố định được hưởng."
  }, {
    "t": "h4",
    "id": "cac-buoc-thuc-hien",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Tăng ca → Cấu hình → Mã tăng ca</code>",
    "children": [{
      "t": "img",
      "id": 300
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin trên form",
    "children": [{
      "t": "img",
      "id": 301
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Chế độ chi trả", "Theo tỷ lệ chi trả: tính tiền lương OT dựa trên tỷ lệ % được thiết lập Theo số tiền cố định: tính tiền lương OT dựa trên số tiền cố định được thiết lập"], ["Cơ sở tính số tiền tăng ca", "Theo lương cơ bản:  Theo lương tổng:  Số tiền cố định:"], ["Đối tượng áp dụng", "Thiết lập phòng ban hoặc chức vụ áp dụng mã tăng ca tương ứng"]]
    }]
  }, {
    "t": "h3",
    "id": "quy-tac-tang-ca",
    "text": "Quy tắc tăng ca"
  }, {
    "t": "h4",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "h4",
    "id": "quy-tac-tang-ca-la-tap-hop-con-cua-ma-tang-ca",
    "text": "Quy tắc tăng ca: là tập hợp con của mã tăng ca, nghĩa là quy tắc tăng ca sẽ chứa toàn bộ các phần được cài đặt trong mã tăng ca bao gồm những quy định về một bộ phận, một vị trí được tăng ca vào thời gian nào, ngày nào trong tuần và tỷ lệ chi trả là bao nhiêu phần trăm hoặc tỷ lệ chi trả theo số tiền cố định được hưởng"
  }, {
    "t": "h4",
    "id": "cac-buoc-thuc-hien-2",
    "text": "Các bước thực hiện"
  }, {
    "t": "h4",
    "id": "buoc-1-truy-cap-menu-tang-ca-cau-hinh-quy-tac",
    "text": "Bước 1:* <code>Truy cập menu Tăng ca → Cấu hình → Quy tắc tăng ca</code>"
  }, {
    "t": "img",
    "id": 302
  }, {
    "t": "step",
    "num": "1",
    "html": "Nhập các thông tin trên form",
    "children": [{
      "t": "img",
      "id": 303
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Mã tăng ca", "Sau khi chọn mã tăng ca, các trường thông tin đã cài đặt theo mã tăng ca sẽ được tự động cập nhật: chế độ chi trả, phòng ban áp dụng"], ["Công ty", "Nếu quy tắc tăng ca được thiết lập công ty thì khi tạo kế hoạch tăng ca sẽ ưu tiên áp dụng quy tắc này cho nhân sự thuộc công ty, phòng ban tương ứng Nếu quy tắc tăng ca không được thiết lập công ty thì khi tạo kế hoạch tăng ca vẫn áp dụng quy tắc tăng ca theo phòng ban được thiết lập"], ["Là ngày lễ phi", "Những nhân sự ăn lịch làm việc mà có ngày được thiết lập trong Tab Thời gian nghỉ Philippines \\=&gt; ưu tiên ăn theo quy tắc được checkbox \"Là ngày lễ Phi\""]]
    }]
  }, {
    "t": "h2",
    "id": "ke-hoach-tang-ca",
    "text": "Kế hoạch tăng ca"
  }, {
    "t": "h3",
    "id": "tao-ke-hoach-tang-ca",
    "text": "Tạo kế hoạch tăng ca"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tăng ca → Kế hoạch → Mới</code>",
    "children": [{
      "t": "img",
      "id": 304
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form tạo mới kế hoạch →Ấn Lưu → Ấn xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 305
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Phân loại tăng ca", "Tăng ca vượt định mức: Tăng ca trong giờ hành chính theo lịch làm việc của nhân sự tương ứng Tăng ca thông thường: Tăng ca ngoài giờ hành chính Làm ca tối: Tăng ca ngoài giờ hành chính"], ["Thời gian nghỉ giữa giờ", "Là thời gian nghỉ trưa hoặc thời gian nghỉ giữa các giờ tăng ca (VD tăng ca 4 tiếng nghỉ 30p). Nếu giờ tăng ca trên kế hoạch tăng ca nằm trong lịch làm việc của nhân sự được thiết lập \\=&gt; Thời gian nghỉ giữa giờ tự động fill giờ nghỉ trưa theo lịch (Có thể chỉnh sửa nếu không muốn trừ)"], ["Số giờ tăng ca hợp lệ", "\\= Thời gian đăng xuất hợp lệ - Thời gian đăng nhập hợp lệ - Thời gian nghỉ giữa giờ"], ["Số giờ thực tế", "auto update \\= \"Số giờ tăng ca hợp lệ\""]]
    }]
  }, {
    "t": "h3",
    "id": "phe-duyet-ke-hoach-tang-ca",
    "text": "Phê duyệt kế hoạch tăng ca"
  }, {
    "t": "h4",
    "id": "cach-1",
    "text": "Cách 1"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Tại màn hình Dashboard → Phê duyệt cần làm → Kế hoạch tăng ca</code>",
    "children": [{
      "t": "img",
      "id": 306
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Người quản lý ấn phê duyệt hoặc từ chối phiếu của nhân sự mình quản lý",
    "children": [{
      "t": "img",
      "id": 307
    }]
  }, {
    "t": "h4",
    "id": "cach-2",
    "text": "Cách 2"
  }, {
    "t": "step",
    "num": "1",
    "html": "Người dùng truy cập menu Phê duyệt",
    "children": [{
      "t": "img",
      "id": 292
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Người quản lý ấn chọn phân hệ tương ứng → phê duyệt/từ chối phiếu</code>",
    "children": [{
      "t": "img",
      "id": 308
    }]
  }, {
    "t": "h2",
    "id": "giai-trinh-cong-tang-ca",
    "text": "Giải trình công tăng ca"
  }, {
    "t": "h3",
    "id": "mo-ta-3",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Thực hiện giải trình công tăng ca trong trường hợp:"
  }, {
    "t": "ul",
    "items": ["Nhân sự có kế hoạch tăng ca được <strong>phê duyệt</strong>", "Nhân sự đã thực hiện tăng ca theo kế hoạch được duyệt", "Nhân sự quên chấm công sau khi tăng ca"]
  }, {
    "t": "h3",
    "id": "cac-buoc-tao-giai-trinh-cong-tang-ca",
    "text": "Các bước tạo giải trình công tăng ca"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Chấm công → Giải trình công → Giải trình công → Mới</code>",
    "children": [{
      "t": "img",
      "id": 309
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form tạo giải trình công → Trên chi tiết chọn phân loại công</code> \\= Công tăng ca",
    "children": [{
      "t": "p",
      "html": "<strong>Lưu ý:</strong> Với phân loại công \\= Công tăng ca, nhân sự phải chọn kế hoạch tăng ca tương ứng với ngày tăng ca để liên kết kế hoạch với giải trình công tăng ca tương ứng _ phục vụ việc tính lương"
    }, {
      "t": "ul",
      "items": ["Mỗi 1 giải trình công tăng ca sẽ được giải trình cho 1 kế hoạch tăng ca (đã được duyệt) \\=&gt; nếu không hiển thị kế hoạch tăng ca nào nghĩa là kế hoạch tăng ca ngày đó chưa được quản lý phê duyệt", "Nếu có 1 kế hoạch tăng ca nào đó đã được chọn ở 1 giải trình công tăng ca \\=&gt; thì giải trình tiếp theo kế hoạch đó sẽ không hiển thị nữa (Validate đối với các trạng thái \"Mới\" \"Đã xác nhận\" \"Đã phê duyệt\")"]
    }, {
      "t": "img",
      "id": 310
    }]
  }, {
    "t": "h2",
    "id": "tinh-toan-lai-tang-ca",
    "text": "Tính toán lại tăng ca"
  }, {
    "t": "h3",
    "id": "mo-ta-4",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Tính toán lại tăng ca là việc thực hiện tính toán lại các trường tỷ lệ chi trả, tiền tăng ca mỗi giờ, số giờ làm việc theo lịch, tiền tiêu chuẩn mỗi giờ do có sự thay đổi về tổng lương của nhân sự trên hợp đồng"
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-3",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập menu Tăng ca → Kế hoạch → Chọn các kế hoạch tăng ca cần tính toán lại</code>",
    "children": [{
      "t": "img",
      "id": 311
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Ấn button Tác vụ → Tính toán lại chi tiết tăng ca</code>",
    "children": [{
      "t": "img",
      "id": 312
    }, {
      "t": "p",
      "html": "<strong>Công thức tính:</strong>"
    }, {
      "t": "ul",
      "items": ["Nếu cơ sở tính tiền trên quy tắc \\= Theo lương cơ bản \\=&gt; Tiền tiêu chuẩn mỗi giờ \\= Tổng lương * Tỷ lệ hưởng lương thử việc / Số giờ làm việc theo lịch", "Nếu cơ sở tính tiền trên quy tắc \\= Theo lương tổng \\=&gt; Tiền tiêu chuẩn mỗi giờ \\= Lương Gross * Tỷ lệ hưởng lương thử việc / Số giờ làm việc theo lịch"]
    }]
  }],
  "toc": [{
    "id": "cau-hinh",
    "label": "Cấu hình"
  }, {
    "id": "ke-hoach-tang-ca",
    "label": "Kế hoạch tăng ca"
  }, {
    "id": "giai-trinh-cong-tang-ca",
    "label": "Giải trình công tăng ca"
  }, {
    "id": "tinh-toan-lai-tang-ca",
    "label": "Tính toán lại tăng ca"
  }],
  "faq": [{
    "q": "Mã tăng ca và Quy tắc tăng ca khác nhau thế nào?",
    "a": "<strong>Mã tăng ca</strong> quy định bộ phận/vị trí được tăng ca vào thời gian, ngày nào trong tuần và tỷ lệ chi trả. <strong>Quy tắc tăng ca</strong> là tập hợp con, chứa toàn bộ các phần đã cài đặt trong mã tăng ca."
  }, {
    "q": "Có những chế độ chi trả tăng ca nào?",
    "a": "<strong>Theo tỷ lệ chi trả</strong> (tính theo % thiết lập) hoặc <strong>theo số tiền cố định</strong>. Cơ sở tính có thể theo lương cơ bản, lương tổng hoặc số tiền cố định."
  }, {
    "q": "Tạo và phê duyệt kế hoạch tăng ca ở đâu?",
    "a": "Tạo tại <code>Tăng ca → Kế hoạch → Mới</code> → Lưu → Xác nhận. Duyệt qua <strong>Dashboard → Phê duyệt cần làm → Kế hoạch tăng ca</strong> hoặc module Phê duyệt."
  }, {
    "q": "Khi nào cần tính toán lại tăng ca?",
    "a": "Khi cần tính lại tỷ lệ chi trả, tiền tăng ca mỗi giờ, số giờ làm theo lịch… Vào <code>Tăng ca → Kế hoạch</code> → chọn kế hoạch → <strong>Tác vụ → Tính toán lại chi tiết tăng ca</strong>."
  }, {
    "q": "Giải trình công tăng ca làm ở đâu?",
    "a": "Vào <code>Chấm công → Giải trình công → Mới</code>, trên chi tiết chọn phân loại công = <strong>Công tăng ca</strong>."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/tang-ca.js", error: String((e && e.message) || e) }); }

// content/tuyen-dung.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["tuyen-dung"] = {
  "slug": "tuyen-dung",
  "title": "Tuyển dụng",
  "icon": "Users",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của Ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồ tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "hieu-suat-san",
    "text": "Hiệu suất sàn"
  }, {
    "t": "h3",
    "id": "mo-ta",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Hiệu suất sàn là kiểu áp dụng doanh số cho 1 vị trí"
  }, {
    "t": "p",
    "html": "VD: Nếu thiết lập hiệu suất sàn của NVKD là 100tr, doanh thu là 1 tỷ ⇒ được tuyển 10 người"
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tuyển dụng → Cấu hình → Hiệu suất sàn → Mới</code>",
    "children": [{
      "t": "img",
      "id": 334
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form → Lưu</code>",
    "children": []
  }, {
    "t": "h2",
    "id": "doanh-so-du-kien",
    "text": "Doanh số dự kiến"
  }, {
    "t": "h3",
    "id": "mo-ta-2",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Doanh số dự kiến <strong>trong tháng</strong>, để phục vụ tính số lượng cần tuyển, xem so với định biên đầu năm thì thực tế doanh số chênh lệch như thế nào."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-2",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tuyển dụng → Kế hoạch tuyển dụng → Doanh số dự kiến → Mới</code>",
    "children": [{
      "t": "img",
      "id": 335
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập thông tin trên form, điền doanh số dự kiến theo tháng để phục vụ tính số lượng cần tuyển",
    "children": [{
      "t": "img",
      "id": 336
    }]
  }, {
    "t": "h2",
    "id": "dinh-bien-nhan-su",
    "text": "Định biên nhân sự"
  }, {
    "t": "h3",
    "id": "mo-ta-3",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Định biên nhân sự chính là việc xác định số lượng và cơ cấu nhân sự cần thiết để công ty hay phòng ban có thể vận hành hiệu quả trong một giai đoạn nhất định."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-3",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tuyển dụng → Kế hoạch tuyển dụng → Định biên vị trí → Mới</code>",
    "children": [{
      "t": "img",
      "id": 337
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập các thông tin trên form → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 338
    }, {
      "t": "p",
      "html": "<strong>Diễn giải:</strong>"
    }, {
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Tab định biên chức vụ", "Khai báo định biên cho chức vụ cụ thể Khi khai báo định biên ở đây thì sẽ không tính theo vị trí nữa"], ["Tab định biên vị trí", "\\= Doanh số mục tiêu / hiệu suất sàn của vị trí tương ứng Bấm tính toán định biên để tính toán"], ["Tab doanh số mục tiêu", "Doanh số mục tiêu khai báo đầu năm=&gt; sinh ra doanh số dự kiến để khai báo từng tháng Đều là doanh số ước tính, tuy nhiên doanh số dự kiến được khai báo gần kỳ tuyển dụng nên có tính chính xác cao hơn"]]
    }]
  }, {
    "t": "h2",
    "id": "yeu-cau-tuyen-dung",
    "text": "Yêu cầu tuyển dụng"
  }, {
    "t": "h3",
    "id": "mo-ta-4",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Yêu cầu tuyển dụng là tập hợp những tiêu chí mà công ty đưa ra khi tìm kiếm ứng viên cho một vị trí, bao gồm trình độ học vấn, kinh nghiệm, kỹ năng chuyên môn, phẩm chất cá nhân và các điều kiện cần thiết khác. Đây chính là cơ sở để nhà tuyển dụng lựa chọn ứng viên phù hợp, đồng thời giúp ứng viên hiểu rõ mình có đáp ứng được công việc hay không."
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-4",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tuyển dụng → Kế hoạch tuyển dụng → Yêu cầu tuyển dụng → Mới</code>",
    "children": [{
      "t": "img",
      "id": 339
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form → Lưu → Xác nhận</code>",
    "children": [{
      "t": "img",
      "id": 340
    }]
  }, {
    "t": "h2",
    "id": "ke-hoach-tuyen-dung",
    "text": "Kế hoạch tuyển dụng"
  }, {
    "t": "h3",
    "id": "tao-ke-hoach-tuyen-dung",
    "text": "Tạo kế hoạch tuyển dụng"
  }, {
    "t": "h4",
    "id": "mo-ta-5",
    "text": "Mô tả"
  }, {
    "t": "p",
    "html": "Tổng hợp số lượng ứng viên cần tuyển trong 1 kỳ tuyển dụng thông qua các yêu cầu tuyển dụng, thường là theo tháng"
  }, {
    "t": "h4",
    "id": "cac-buoc",
    "text": "Các bước"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tuyển dụng →Kế hoạch tuyển dụng → Kế hoạch tuyển dụng → Mới</code>",
    "children": [{
      "t": "img",
      "id": 341
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form → Lưu → Xác nhận → Phê duyệt</code>",
    "children": [{
      "t": "p",
      "html": "Lưu ý: Yêu cầu tuyển dụng tự động fill khi yêu cầu gắn với kế hoạch được phê duyệt"
    }]
  }, {
    "t": "h3",
    "id": "phe-duyet-ke-hoach-tuyen-dung",
    "text": "Phê duyệt kế hoạch tuyển dụng"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tuyển dụng → Kế hoạch tuyển dụng → Kế hoạch tuyển dụng → Mới</code>",
    "children": [{
      "t": "img",
      "id": 341
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Chọn kế hoạch tuyển dụng muốn duyệt → Phê duyệt</code>",
    "children": []
  }, {
    "t": "h2",
    "id": "chi-phi-tuyen-dung",
    "text": "Chi phí tuyển dụng"
  }, {
    "t": "h3",
    "id": "mo-ta-6",
    "text": "Mô tả"
  }, {
    "t": "h3",
    "id": "cac-buoc-thuc-hien-5",
    "text": "Các bước thực hiện"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tuyển dụng → Chi phí tuyển dụng → Mới</code>",
    "children": [{
      "t": "img",
      "id": 342
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền thông tin trên form chi phí → Lưu</code>",
    "children": [{
      "t": "img",
      "id": 343
    }]
  }, {
    "t": "h2",
    "id": "quy-trinh-tao-va-xu-ly-ho-so-ung-vien",
    "text": "Quy trình tạo và xử lý hồ sơ ứng viên"
  }, {
    "t": "h3",
    "id": "tao-ho-so-ung-vien",
    "text": "Tạo hồ sơ ứng viên"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Người dùng truy cập menu Tuyển dụng → Ứng viên → Tất cả đơn ứng tuyển → Mới</code>",
    "children": [{
      "t": "img",
      "id": 344
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Điền các thông tin trên form đơn xin việc → Lưu</code>",
    "children": [{
      "t": "ul",
      "items": ["<strong>Đính kèm CV</strong>: Sau khi đính kèm, hệ thống tự động trích xuất dữ liệu từ file CV vào các trường dữ liệu tương ứng trên khối thông tin ứng viên của đơn xin việc", "<strong>Chọn yêu cầu tuyển dụng:</strong> Sau khi chọn, hệ thống tự động điền các trường thông tin của khối yêu cầu công việc trên đơn xin việc", "<strong>Chọn nguồn</strong>"]
    }, {
      "t": "img",
      "id": 345
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Ấn button AI xếp hạng để hệ thống đánh giá CV ứng viên so với yêu cầu tuyển dụng của công ty. Kết quả trả về sẽ hiển thị ngay cạnh avatar ứng viên.",
    "children": [{
      "t": "img",
      "id": 346
    }, {
      "t": "p",
      "html": "Lưu ý: Không đẩy được hàng loạt CV lên do từng CV cần gắn với 1 yêu cầu tuyển dụng để thực hiện đánh giá"
    }]
  }, {
    "t": "h3",
    "id": "tao-lich-va-gui-thu-moi-phong-van",
    "text": "Tạo lịch và gửi thư mời phỏng vấn"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Trên đơn xin việc của ứng viên → ấn button Gửi thư mời phỏng vấn</code>",
    "children": [{
      "t": "img",
      "id": 347
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Điền các thông tin trên form gửi thư mời phỏng vấn",
    "children": [{
      "t": "ul",
      "items": ["Gửi mail: nếu muốn gửi mail cho ứng viên", "Gửi mail và tạo lịch hẹn: Thực hiện gửi mail cho ứng viên đồng thời mở lịch và tạo lịch phỏng vấn với ứng viên trên phần mềm", "Xem trước email: Xem trước nội dung mail gửi đi cho ứng viên", "Huỷ: Huỷ gửi mail cho ứng viên"]
    }, {
      "t": "p",
      "html": "Lưu ý: Email ứng viên là email sẽ nhận được mail gửi đi, cần kiểm tra chính xác trước khi ấn gửi"
    }, {
      "t": "img",
      "id": 348
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Truy cập smart button lịch trên đơn xin việc để <strong>tạo/theo dõi</strong> lịch phỏng vấn với ứng viên",
    "children": [{
      "t": "img",
      "id": 349
    }]
  }, {
    "t": "h3",
    "id": "gui-offer",
    "text": "Gửi offer"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Trên đơn xin việc của ứng viên → ấn button Gửi offer</code>",
    "children": [{
      "t": "p",
      "html": "Lưu ý: Chỉ đơn xin việc ở giai đoạn Pass PV mới hiển thị button Gửi offer"
    }, {
      "t": "img",
      "id": 350
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Điền các thông tin trên form offer",
    "children": [{
      "t": "ul",
      "items": ["Xem trước offer: Xem trước tệp đính kèm offer sẽ gửi cho ứng viên qua mail", "Tải offer: Tải offer xuống để nhân sự ký khi đến nhận việc (Lưu ý: offer gửi cho ứng viên và file tải xuống hiện tại đang khác nhau) - Nên ấn tải trước khi gửi để không phải điền form một lần nữa, do khi ấn gửi offer \\=&gt; hệ thống đóng form gửi offer luôn", "Gửi offer: Thực hiện gửi offer cho ứng viên", "Huỷ: Không gửi offer cho ứng viên"]
    }, {
      "t": "img",
      "id": 351
    }]
  }, {
    "t": "h3",
    "id": "tao-ho-so-nhan-su-tu-ho-so-ung-vien",
    "text": "Tạo hồ sơ nhân sự từ hồ sơ ứng viên"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Trên đơn xin việc của ứng viên → ấn button Tạo nhân viên</code>",
    "children": [{
      "t": "p",
      "html": "Lưu ý: Chỉ đơn xin việc ở giai đoạn ƯV nhận việc mới hiển thị button Tạo nhân viên"
    }, {
      "t": "img",
      "id": 352
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Điền các thông tin trên form tạo hồ sơ nhân viên tương ứng",
    "children": [{
      "t": "p",
      "html": "Lưu ý: Có thể liên kết hồ sơ nhân viên ngược lại với đơn xin việc trong trường hợp import nhiều hồ sơ, không tạo từ button tạo nhân viên trong đơn xin việc bằng cách truy cập hồ sơ nhân viên &gt; Tab thiết lập &gt; Liên kết CV"
    }, {
      "t": "img",
      "id": 353
    }]
  }, {
    "t": "h3",
    "id": "gui-thu-cam-on",
    "text": "Gửi thư cảm ơn"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Trên đơn xin việc của ứng viên → ấn button Từ chối</code>",
    "children": [{
      "t": "img",
      "id": 354
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Chọn mail cảm ơn, <code>check box gửi mail và kiểm tra mail ứng viên → Từ chối</code>",
    "children": [{
      "t": "img",
      "id": 355
    }]
  }],
  "toc": [{
    "id": "hieu-suat-san",
    "label": "Hiệu suất sàn"
  }, {
    "id": "doanh-so-du-kien",
    "label": "Doanh số dự kiến"
  }, {
    "id": "dinh-bien-nhan-su",
    "label": "Định biên nhân sự"
  }, {
    "id": "yeu-cau-tuyen-dung",
    "label": "Yêu cầu tuyển dụng"
  }, {
    "id": "ke-hoach-tuyen-dung",
    "label": "Kế hoạch tuyển dụng"
  }, {
    "id": "chi-phi-tuyen-dung",
    "label": "Chi phí tuyển dụng"
  }, {
    "id": "quy-trinh-tao-va-xu-ly-ho-so-ung-vien",
    "label": "Quy trình tạo và xử lý hồ sơ ứng viên"
  }],
  "faq": [{
    "q": "Hiệu suất sàn là gì?",
    "a": "Là kiểu áp doanh số cho 1 vị trí để tính số lượng cần tuyển. VD: hiệu suất sàn NVKD là 100tr, doanh thu 1 tỷ ⇒ được tuyển 10 người."
  }, {
    "q": "Định biên nhân sự dùng để làm gì?",
    "a": "Xác định số lượng và cơ cấu nhân sự cần thiết để công ty/phòng ban vận hành hiệu quả trong một giai đoạn nhất định."
  }, {
    "q": "AI xếp hạng CV hoạt động thế nào?",
    "a": "Trên đơn ứng tuyển bấm <strong>AI xếp hạng</strong> để hệ thống đánh giá CV ứng viên so với yêu cầu tuyển dụng của công ty và trả về kết quả."
  }, {
    "q": "Quy trình xử lý hồ sơ ứng viên gồm những bước nào?",
    "a": "Tạo hồ sơ ứng viên → gửi thư mời phỏng vấn &amp; tạo lịch → gửi offer → tạo hồ sơ nhân sự (hoặc gửi thư cảm ơn nếu từ chối)."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/tuyen-dung.js", error: String((e && e.message) || e) }); }

// content/zalo.js
try { (() => {
window.MODULES = window.MODULES || {};
window.MODULES["zalo"] = {
  "slug": "zalo",
  "title": "Zalo",
  "icon": "Phone",
  "blocks": [{
    "t": "p",
    "html": "<strong>Mục đích của ứng dụng:</strong>"
  }, {
    "t": "p",
    "html": "<strong>Sơ đồng tổng quan:</strong>"
  }, {
    "t": "h2",
    "id": "tai-khoan-zalo-oa",
    "text": "Tài khoản Zalo OA"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> Là <strong>danh sách tài khoản Zalo OA</strong> (Zalo Official Account) đã được kết nối vào hệ thống"
  }, {
    "t": "h3",
    "id": "tao-moi-zalo-oa",
    "text": "Tạo mới Zalo OA"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → Zalo OA→ Bấm</code> <strong>“Mới”</strong>",
    "children": [{
      "t": "img",
      "id": 533
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các trường thông tin trên formview",
    "children": [{
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Shop", "Chọn Shop liên kết với OA"], ["Tên OA", "Tên Zalo Official Account"], ["Mã Zalo Official Account", "Mã định danh OA do Zalo cấp"], ["Trạng thái OA", "Hiển thị tự động — mặc định  Chưa ủy quyền"], ["Access Token", "Token truy cập để hệ thống gọi API Zalo"], ["Refresh Token", "Token dùng để làm mới Access Token khi hết hạn"]]
    }, {
      "t": "img",
      "id": 534
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bấm <strong>Lưu</strong> để xác nhận tạo mới",
    "children": [{
      "t": "img",
      "id": 535
    }]
  }, {
    "t": "step",
    "num": "4",
    "html": "Xác thực OA",
    "children": [{
      "t": "img",
      "id": 536
    }, {
      "t": "p",
      "html": "<strong>Chọn 1 trong 2 cách:</strong>"
    }, {
      "t": "p",
      "html": "<strong>Cách 1 — Qua eTelecom (nếu hệ thống dùng đối tác eTelecom)</strong>"
    }, {
      "t": "p",
      "html": "1. Nhấn Xác thực OA từ eTelecom"
    }, {
      "t": "p",
      "html": "2. Nhấn Kết nối OA từ eTelecom"
    }, {
      "t": "p",
      "html": "3. Nhấn Lấy refresh token từ eTelecom"
    }, {
      "t": "p",
      "html": "<code>4. Nhấn Lấy thông tin OA từ eTelecom → thông tin tự động điền vào form</code>"
    }, {
      "t": "p",
      "html": "<strong>Cách 2 — Qua Zalo trực tiếp</strong>"
    }, {
      "t": "p",
      "html": "<code>1. Nhấn Xác thực OA từ Zalo → đăng nhập tài khoản Zalo quản trị OA và xác nhận cấp quyền</code>"
    }, {
      "t": "p",
      "html": "<code>2. Nhấn Lấy Token OA từ Zalo → hệ thống tự điền Access Token</code>"
    }, {
      "t": "p",
      "html": "3. Nhấn Lấy refresh token từ Zalo"
    }]
  }, {
    "t": "step",
    "num": "5",
    "html": "Kiểm tra kết quả",
    "children": [{
      "t": "p",
      "html": "Sau khi hoàn tất, kiểm tra các trường sau đã được điền tự động:"
    }, {
      "t": "ul",
      "items": ["✅ Access Token — có dữ liệu", "✅ Refresh Token — có dữ liệu", "✅ Trạng thái OA — hiển thị Đã ủy quyền"]
    }]
  }, {
    "t": "h2",
    "id": "zns",
    "text": "ZNS"
  }, {
    "t": "h3",
    "id": "kich-ban-zns",
    "text": "Kịch bản ZNS"
  }, {
    "t": "h4",
    "id": "tao-moi-kich-ban-zns",
    "text": "Tạo mới kịch bản ZNS"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> là các mẫu tin nhắn được thiết lập sẵn để gửi tới khách hàng qua Zalo"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → ZNS→Kịch bản ZNS→ Bấm</code> <strong>“Mới”</strong>",
    "children": [{
      "t": "img",
      "id": 537
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các trường thông tin trên formview",
    "children": [{
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Tên kịch bản", "Tên mẫu ZNS đăng ký với đối tác"], ["ID kịch bản", "Các phương thức chuyển tiền"], ["Zalo OA", "Chọn tài khoản Zalo OA sẽ dùng để gửi tin"], ["Đối tượng áp dụng", "Chọn loại dữ liệu kích hoạt kịch bản, ví dụ: Đơn bán hàng, Khách hàng..."], ["Điều kiện áp dụng", "Thiết lập điều kiện lọc — kịch bản chỉ chạy khi thỏa mãn điều kiện này. Ví dụ: Trạng thái đơn \\= Chờ giao"], ["Hiệu lực", "Bật/tắt kịch bản. Nên để <strong>tắt</strong> khi đang cấu hình, bật sau khi hoàn tất"], ["Trạng thái mẫu tin", "Tự động hiển thị sau khi liên kết mẫu tin (ENABLE \\= sẵn sàng gửi)"], ["Số điện thoại gửi ZNS", "Chọn trường chứa số điện thoại khách hàng để gửi"], ["Không gửi trùng SĐT", "Tích vào để tránh gửi nhiều tin cho cùng một số điện thoại trong một lần chạy"], ["Đơn giá", "Chi phí mỗi tin ZNS"], ["Ngày động", "Cho phép hệ thống tự tính toán ngày gửi tin dựa trên một mốc ngày có trong dữ liệu"]]
    }, {
      "t": "img",
      "id": 538
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bấm <strong>Lưu</strong> để lưu lại kịch bản ZNS",
    "children": [{
      "t": "img",
      "id": 539
    }]
  }, {
    "t": "h4",
    "id": "dong-bo-kich-ban-zns-da-dang-ky-voi-zalo",
    "text": "Đồng bộ kịch bản ZNS đã đăng ký với Zalo"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> là kịch bản ZNS đã đăng ký với Zalo"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → ZNS→Kịch bản ZNS→ Bấm</code> <strong>“Đồng bộ kịch bản”</strong>",
    "children": [{
      "t": "img",
      "id": 540
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Chọn tài khoản Zalo OA cần đồng bộ&gt; Bấm Xác nhận",
    "children": [{
      "t": "img",
      "id": 541
    }]
  }, {
    "t": "h3",
    "id": "import-ds-gui-tin-zns",
    "text": "Import DS gửi tin ZNS"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> Dùng để gửi tin ZNS đến <strong>danh sách khách hàng nhập tay từ file bên ngoài</strong> — áp dụng cho những khách hàng <strong>không có dữ liệu trên hệ thống</strong> hoặc cần gửi theo danh sách riêng biệt."
  }, {
    "t": "h4",
    "id": "gui-tin-zns-thu-cong",
    "text": "Gửi tin ZNS thủ công"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → ZNS→Import DS gửi tin ZNS→ Bấm</code> <strong>“Mới”</strong>",
    "children": [{
      "t": "img",
      "id": 542
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Nhập các trường thông tin trên form view → Bấm</code> <strong>Lưu</strong>",
    "children": [{
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Kịch bản áp dụng", "Chọn kịch bản ZNS sẽ dùng để gửi"], ["Zalo OA", "Tự động điền theo kịch bản đã chọn"], ["SĐT gửi ZNS <em>(bắt buộc)</em>", "Nhập số điện thoại khách hàng cần gửi"], ["<code>Param01 → Param06</code>", "Các thông tin động điền vào nội dung tin nhắn. Ví dụ: Param01 \\= tên khách, Param02 \\= ngày hết hạn..."]]
    }, {
      "t": "img",
      "id": 543
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bấm <strong>Gửi ZNS</strong> để gửi tin đến khách hàng",
    "children": [{
      "t": "img",
      "id": 544
    }]
  }, {
    "t": "h4",
    "id": "import-danh-sach-gui-tin-zns",
    "text": "Import danh sách gửi tin ZNS"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → ZNS→Import DS gửi tin ZNS</code>",
    "children": [{
      "t": "img",
      "id": 545
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "<code>Bấm vào Icon cài đặt → Chọn Nhập bản ghi</code>",
    "children": [{
      "t": "img",
      "id": 546
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Tải lên file danh sách gửi tin → Bấm Xác nhận</code>",
    "children": []
  }, {
    "t": "h3",
    "id": "lich-su-gui-tin-zns",
    "text": "Lịch sử gửi tin ZNS"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> Hiển thị toàn bộ lịch sử các tin ZNS đã gửi — kiểm tra tin đã gửi thành công hay thất bại, gửi lúc nào, đến số nào và theo kịch bản nào"
  }, {
    "t": "h4",
    "id": "dong-bo-lich-su-gui-tin-zns",
    "text": "Đồng bộ lịch sử gửi tin ZNS"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → ZNS→Lịch sử gửi tin ZNS</code>",
    "children": [{
      "t": "img",
      "id": 547
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Bấm <strong>Đồng bộ lịch sử tin nhắn</strong>",
    "children": [{
      "t": "img",
      "id": 548
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "<code>Chọn tài khoản Zalo OA cần đồng bộ → Bấm</code> <strong>Xác nhận</strong>",
    "children": [{
      "t": "img",
      "id": 549
    }]
  }, {
    "t": "h3",
    "id": "zns-automation",
    "text": "ZNS Automation"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> <strong>ZNS Automation</strong> là tính năng giúp hệ thống <strong>tự động xử lý công việc</strong> dựa trên phản hồi của khách hàng từ tin nhắn ZNS"
  }, {
    "t": "h4",
    "id": "quy-tac-xu-ly",
    "text": "Quy tắc xử lý"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → ZNS→Quy tắc xử lý → Bấm</code> <strong>“Mới”</strong>",
    "children": [{
      "t": "img",
      "id": 550
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các thông tin trên form view",
    "children": [{
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải"],
      "rows": [["Tên quy tắc", "Tên định danh quy tắc"], ["Mã quy tắc", "Mã tự động, dùng để tạo link CTA"], ["Mô hình", "Đối tượng dữ liệu sẽ bị tác động khi quy tắc chạy"], ["Loại CTA", "Loại hành động khách kích hoạt"], ["CTA áp dụng", "Link gắn vào nút bấm trong tin ZNS — khách nhấn vào link này sẽ kích hoạt quy tắc"], ["Hiệu lực", "Quy tắc đang hoạt động"], ["Tab \"Tác vụ cần thực hiện\"", "Danh sách các <strong>hành động tự động</strong> mà hệ thống sẽ thực hiện khi quy tắc được kích hoạt."]]
    }, {
      "t": "img",
      "id": 551
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bấm Lưu để xác nhận tạo mới",
    "children": [{
      "t": "img",
      "id": 552
    }]
  }, {
    "t": "h2",
    "id": "cau-hinh",
    "text": "Cấu hình"
  }, {
    "t": "h3",
    "id": "tai-khoan-ket-noi",
    "text": "Tài khoản kết nối"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> Là tài khoản Zalo OA của doanh nghiệp"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → Cấu hình →Tài khoản kết nối → Bấm</code> <strong>“Mới”</strong>",
    "children": [{
      "t": "img",
      "id": 553
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Nhập các trường thông tin trên form view Tài khoản kết nối",
    "children": [{
      "t": "table",
      "headers": ["Trường thông tin", "Diễn giải", "Ghi chú"],
      "rows": [["Môi trường kết nối", "Môi trường chạy hệ thống", ""], ["Tên tài khoản kết nối", "Tên của tài khoản Zalo OA", ""], ["Đối tác", "Đơn vị cung cấp dịch vụ tích hợp Zalo", ""], ["Zalo App ID", "Mã định danh ứng dụng Zalo do Zalo cấp", "Lấy từ Zalo Developer Console"], ["Zalo App Secret", "Mã bí mật của ứng dụng Zalo", "Lấy từ Zalo Developer Console, bảo mật tuyệt đối"], ["OA Secret Key", "Khóa bí mật của Zalo Official Account", "Lấy trong phần cài đặt OA trên Zalo"], ["API Key", "Khóa API do đối tác cấp để xác thực kết nối", "Lấy từ tài khoản đối tác cung cấp"], ["App ID", "Mã ứng dụng do đối tác cấp", "Lấy từ tài khoản đối tác"], ["App Secret", "Mã bí mật ứng dụng do đối tác cấp", "Bảo mật, không chia sẻ"], ["Redirect URL authen Shop", "Đường dẫn chuyển hướng sau khi xác thực tài khoản Shop", "Do kỹ thuật cấu hình, thường là URL website/hệ thống"], ["Redirect URL authen OA", "Đường dẫn chuyển hướng sau khi xác thực Zalo OA", "Do kỹ thuật cấu hình"]]
    }, {
      "t": "img",
      "id": 554
    }]
  }, {
    "t": "step",
    "num": "3",
    "html": "Bấm <strong>Lưu</strong> để lưu lại thông tin tài khoản kết nối",
    "children": [{
      "t": "img",
      "id": 555
    }]
  }, {
    "t": "h3",
    "id": "dong-bo-shop-tu-zalo-oa",
    "text": "Đồng bộ Shop từ Zalo OA"
  }, {
    "t": "p",
    "html": "<strong>Mô tả:</strong> là tài khoản Zalo Shop — tức là tài khoản bán hàng được tạo trên nền tảng Zalo"
  }, {
    "t": "step",
    "num": "1",
    "html": "<code>Truy cập module Zalo → Cấu hình →Shop→ Bấm</code> <strong>“Đồng bộ Shop”</strong>",
    "children": [{
      "t": "img",
      "id": 556
    }]
  }, {
    "t": "step",
    "num": "2",
    "html": "Chọn tài khoản kết nối &gt; Bấm Xác nhận",
    "children": [{
      "t": "img",
      "id": 557
    }]
  }],
  "toc": [{
    "id": "tai-khoan-zalo-oa",
    "label": "Tài khoản Zalo OA"
  }, {
    "id": "zns",
    "label": "ZNS"
  }, {
    "id": "cau-hinh",
    "label": "Cấu hình"
  }],
  "faq": [{
    "q": "Zalo OA là gì và kết nối ở đâu?",
    "a": "Là tài khoản <strong>Zalo Official Account</strong> được kết nối vào hệ thống. Tạo tại <code>Zalo → Zalo OA → Mới</code> rồi thực hiện xác thực OA."
  }, {
    "q": "Kịch bản ZNS là gì?",
    "a": "Là các mẫu tin nhắn được thiết lập sẵn để gửi tới khách hàng qua Zalo. Sau khi đăng ký với Zalo, cần <strong>Đồng bộ kịch bản</strong> về hệ thống."
  }, {
    "q": "Gửi ZNS cho khách không có dữ liệu trên hệ thống thế nào?",
    "a": "Dùng <strong>Import DS gửi tin ZNS</strong> — nhập tay từng khách hoặc import file danh sách, sau đó bấm <strong>Gửi ZNS</strong>."
  }, {
    "q": "ZNS Automation dùng để làm gì?",
    "a": "Giúp hệ thống tự động xử lý công việc dựa trên phản hồi của khách hàng từ tin nhắn ZNS, cấu hình qua <strong>Quy tắc xử lý</strong>."
  }, {
    "q": "Kiểm tra tin ZNS đã gửi ở đâu?",
    "a": "Mục <strong>Lịch sử gửi tin ZNS</strong> hiển thị toàn bộ tin đã gửi (thành công/thất bại, thời điểm, số nhận, kịch bản); có thể bấm Đồng bộ lịch sử tin nhắn."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/zalo.js", error: String((e && e.message) || e) }); }

// scripts/components.jsx
try { (() => {
/* =====================================================
   COMPONENTS — Callout, Step, CodeBlock, Tabs, Accordion,
   Table, AnnotatedShot, Badge, Diagram, ModuleCard...
   Exposes everything on `window`.
   ===================================================== */

const {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback
} = React;

/* ---------- Badge ---------- */
const Badge = ({
  tone = "neutral",
  icon,
  children,
  dot = false
}) => /*#__PURE__*/React.createElement("span", {
  className: `badge badge-${tone}${dot ? " badge-dot" : ""}`
}, icon, children);

/* ---------- Kbd ---------- */
const Kbd = ({
  children
}) => /*#__PURE__*/React.createElement("span", {
  className: "kbd"
}, children);

/* ---------- Callout ---------- */
const CALLOUT_ICONS = {
  info: /*#__PURE__*/React.createElement(Icons.Info, {
    size: 20
  }),
  warn: /*#__PURE__*/React.createElement(Icons.Warning, {
    size: 20
  }),
  success: /*#__PURE__*/React.createElement(Icons.Success, {
    size: 20
  }),
  danger: /*#__PURE__*/React.createElement(Icons.Danger, {
    size: 20
  }),
  tip: /*#__PURE__*/React.createElement(Icons.Tip, {
    size: 20
  })
};
const CALLOUT_DEFAULT_TITLES = {
  info: "Lưu ý",
  warn: "Cảnh báo",
  success: "Hoàn thành",
  danger: "Quan trọng",
  tip: "Mẹo"
};
const Callout = ({
  tone = "info",
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: `callout callout-${tone}`
}, /*#__PURE__*/React.createElement("span", {
  className: "callout-icon"
}, CALLOUT_ICONS[tone]), /*#__PURE__*/React.createElement("div", null, title !== false && /*#__PURE__*/React.createElement("div", {
  className: "callout-title"
}, title ?? CALLOUT_DEFAULT_TITLES[tone]), /*#__PURE__*/React.createElement("div", {
  className: "callout-body"
}, children)));

/* ---------- Steps ---------- */
const Steps = ({
  children
}) => /*#__PURE__*/React.createElement("ol", {
  className: "steps"
}, children);
const Step = ({
  num,
  title,
  children
}) => /*#__PURE__*/React.createElement("li", {
  className: "step"
}, /*#__PURE__*/React.createElement("div", {
  className: "step-num"
}, num), /*#__PURE__*/React.createElement("div", {
  className: "step-content"
}, title && /*#__PURE__*/React.createElement("div", {
  className: "step-title"
}, title), children));

/* ---------- Code block ---------- */
const CodeBlock = ({
  lang = "bash",
  children
}) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const onCopy = useCallback(() => {
    const txt = ref.current?.textContent ?? "";
    navigator.clipboard?.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "code"
  }, /*#__PURE__*/React.createElement("div", {
    className: "code-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "code-lang"
  }, lang), /*#__PURE__*/React.createElement("button", {
    className: "code-copy",
    onClick: onCopy
  }, copied ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 13
  }), " \u0110\xE3 sao ch\xE9p") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.Copy, {
    size: 13
  }), " Sao ch\xE9p"))), /*#__PURE__*/React.createElement("pre", {
    ref: ref
  }, children));
};

/* ---------- Tabs ---------- */
const Tabs = ({
  items,
  defaultIndex = 0
}) => {
  const [idx, setIdx] = useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabs-list",
    role: "tablist"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "tab",
    "aria-selected": i === idx,
    className: `tab${i === idx ? " is-active" : ""}`,
    onClick: () => setIdx(i)
  }, it.icon, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "tab-panel",
    role: "tabpanel"
  }, items[idx]?.content));
};

/* ---------- Accordion ---------- */
const Accordion = ({
  items,
  defaultOpen = []
}) => {
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "accordion"
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `accordion-item${isOpen ? " is-open" : ""}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "accordion-trigger",
      onClick: () => toggle(i),
      "aria-expanded": isOpen
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      className: "accordion-chev"
    }, /*#__PURE__*/React.createElement(Icons.ChevronDown, {
      size: 18
    }))), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "accordion-content"
    }, it.content));
  }));
};

/* ---------- Data table (field reference table) ---------- */
const FieldTable = ({
  rows,
  headers = ["Trường thông tin", "Diễn giải"]
}) => /*#__PURE__*/React.createElement("div", {
  className: "table-wrap"
}, /*#__PURE__*/React.createElement("table", {
  className: "table"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headers.map((h, i) => /*#__PURE__*/React.createElement("th", {
  key: i
}, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
  key: i
}, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
  className: "table-field"
}, r.field), r.required && /*#__PURE__*/React.createElement("span", {
  className: "table-required",
  title: "B\u1EAFt bu\u1ED9c"
})), /*#__PURE__*/React.createElement("td", null, r.desc), r.note !== undefined && /*#__PURE__*/React.createElement("td", null, r.note))))));

/* ---------- Annotated screenshot ---------- */
/**
 * <AnnotatedShot caption="..." placeholder="..." annotations={[
 *   { n: 1, x: 12, y: 18, w: 22, h: 8, dir: 'br' },  // % values
 * ]} />
 */
const AnnotatedShot = ({
  caption,
  placeholder,
  annotations = [],
  aspect,
  children
}) => /*#__PURE__*/React.createElement("figure", {
  className: "shot"
}, /*#__PURE__*/React.createElement("div", {
  className: "shot-stage",
  style: aspect ? {
    aspectRatio: aspect
  } : undefined
}, placeholder !== undefined ? /*#__PURE__*/React.createElement("div", {
  className: "shot-placeholder"
}, /*#__PURE__*/React.createElement(Icons.Box, {
  size: 28
}), /*#__PURE__*/React.createElement("div", {
  className: "shot-placeholder-label"
}, placeholder), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    opacity: 0.6
  }
}, "Thay b\u1EB1ng screenshot th\u1EF1c t\u1EBF")) : children, annotations.map(a => /*#__PURE__*/React.createElement("div", {
  key: a.n,
  className: "annot",
  style: {
    left: `${a.x}%`,
    top: `${a.y}%`,
    width: `${a.w}%`,
    height: `${a.h}%`
  },
  title: a.label
}, /*#__PURE__*/React.createElement("span", {
  className: "annot-label"
}, a.n)))), caption && /*#__PURE__*/React.createElement("figcaption", {
  className: "shot-caption"
}, /*#__PURE__*/React.createElement(Icons.Cursor, {
  size: 13
}), " ", caption));

/* ---------- Module card grid ---------- */
const ModuleGrid = ({
  items
}) => /*#__PURE__*/React.createElement("div", {
  className: "module-grid"
}, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
  key: i,
  href: it.href || "#",
  className: `module-card${it.current ? " is-current" : ""}`,
  onClick: it.href ? undefined : e => e.preventDefault()
}, /*#__PURE__*/React.createElement("span", {
  className: "module-card-icon"
}, it.icon), /*#__PURE__*/React.createElement("span", {
  className: "module-card-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "module-card-title"
}, it.title), it.sub && /*#__PURE__*/React.createElement("div", {
  className: "module-card-sub"
}, it.sub)))));

/* ---------- Diagram (linear process) ---------- */
const Diagram = ({
  steps
}) => /*#__PURE__*/React.createElement("div", {
  className: "diagram"
}, /*#__PURE__*/React.createElement("div", {
  className: "diagram-row"
}, steps.flatMap((s, i) => {
  const out = [/*#__PURE__*/React.createElement("div", {
    key: `n-${i}`,
    className: `diagram-node${s.key ? " is-key" : ""}`
  }, s.icon && /*#__PURE__*/React.createElement("span", {
    className: "diagram-node-icon"
  }, s.icon), s.label)];
  if (i < steps.length - 1) {
    out.push(/*#__PURE__*/React.createElement("span", {
      key: `a-${i}`,
      className: "diagram-arrow"
    }, /*#__PURE__*/React.createElement(Icons.ArrowRight, {
      size: 16
    })));
  }
  return out;
})));

/* ---------- Definition list ---------- */
const DefList = ({
  items
}) => /*#__PURE__*/React.createElement("dl", {
  className: "deflist"
}, items.flatMap((it, i) => [/*#__PURE__*/React.createElement("dt", {
  key: `t-${i}`
}, it.term), /*#__PURE__*/React.createElement("dd", {
  key: `d-${i}`
}, it.def)]));

/* ---------- Section heading with anchor ---------- */
const H2 = ({
  id,
  children
}) => /*#__PURE__*/React.createElement("h2", {
  id: id,
  className: "h-anchored"
}, children);
const H3 = ({
  id,
  children
}) => /*#__PURE__*/React.createElement("h3", {
  id: id,
  className: "h-anchored"
}, children);
Object.assign(window, {
  Badge,
  Kbd,
  Callout,
  Steps,
  Step,
  CodeBlock,
  Tabs,
  Accordion,
  FieldTable,
  AnnotatedShot,
  ModuleGrid,
  Diagram,
  DefList,
  H2,
  H3
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/components.jsx", error: String((e && e.message) || e) }); }

// scripts/design-system-app.jsx
try { (() => {
/* =====================================================
   DESIGN SYSTEM PAGE — Tokens & component gallery
   ===================================================== */

const {
  useState: useStateDS
} = React;

/* ---------- Section header ---------- */
const DSSection = ({
  id,
  eyebrow,
  title,
  sub,
  children
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  className: "ds-section"
}, /*#__PURE__*/React.createElement("header", {
  className: "ds-section-head"
}, eyebrow && /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("p", {
  className: "ds-section-sub"
}, sub)), children);

/* ---------- Token card / specimen wrappers ---------- */
const TokenCard = ({
  children,
  span = 1
}) => /*#__PURE__*/React.createElement("div", {
  className: "ds-card",
  style: {
    gridColumn: `span ${span}`
  }
}, children);

/* ---------- Color swatch ---------- */
const Swatch = ({
  name,
  varName,
  value,
  mono = false
}) => /*#__PURE__*/React.createElement("div", {
  className: "swatch"
}, /*#__PURE__*/React.createElement("div", {
  className: "swatch-chip",
  style: {
    background: value
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "swatch-meta"
}, /*#__PURE__*/React.createElement("div", {
  className: "swatch-name"
}, name), /*#__PURE__*/React.createElement("div", {
  className: "swatch-token"
}, varName), /*#__PURE__*/React.createElement("div", {
  className: "swatch-hex"
}, value)));

/* ---------- Accent ramp ---------- */
const ACCENT_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const NEUTRAL_STEPS = [0, 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const SEMANTIC = [{
  name: "Info",
  base: "info",
  color: "#3b82f6"
}, {
  name: "Warning",
  base: "warn",
  color: "#f59e0b"
}, {
  name: "Success",
  base: "success",
  color: "#10b981"
}, {
  name: "Danger",
  base: "danger",
  color: "#ef4444"
}, {
  name: "Tip",
  base: "tip",
  color: "#8b5cf6"
}];
const ColorRamp = ({
  label,
  prefix,
  steps,
  getValue
}) => /*#__PURE__*/React.createElement("div", {
  className: "ramp"
}, /*#__PURE__*/React.createElement("div", {
  className: "ramp-label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "ramp-row"
}, steps.map(s => /*#__PURE__*/React.createElement("div", {
  className: "ramp-cell",
  key: s
}, /*#__PURE__*/React.createElement("div", {
  className: "ramp-chip",
  style: {
    background: getValue(s)
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "ramp-step"
}, s)))));

/* ---------- Type specimen ---------- */
const TypeRow = ({
  token,
  sample,
  size,
  weight = 600,
  lh,
  tr
}) => /*#__PURE__*/React.createElement("div", {
  className: "type-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "type-row-sample",
  style: {
    fontSize: size,
    lineHeight: lh,
    fontWeight: weight,
    letterSpacing: tr
  }
}, sample), /*#__PURE__*/React.createElement("div", {
  className: "type-row-meta"
}, /*#__PURE__*/React.createElement("code", null, token), /*#__PURE__*/React.createElement("span", null, size, "/", lh), /*#__PURE__*/React.createElement("span", null, "w", weight)));

/* ---------- Sample component playground ---------- */
const ComponentBlock = ({
  title,
  code,
  children,
  span = 1
}) => /*#__PURE__*/React.createElement("div", {
  className: "comp-block",
  style: {
    gridColumn: `span ${span}`
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "comp-block-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "comp-block-title"
}, title), code && /*#__PURE__*/React.createElement("code", {
  className: "comp-block-code"
}, code)), /*#__PURE__*/React.createElement("div", {
  className: "comp-block-stage"
}, children));

/* ============================================================
   THE PAGE
   ============================================================ */
const DSApp = () => {
  const [lang, setLang] = useStateDS("vi");
  const tocIds = ["foundation", "palette", "typography", "spacing", "radius", "shadow", "components", "brand"];
  const activeToc = useScrollSpy(tocIds, 90);
  const dsSections = [{
    title: "Design System",
    items: [{
      id: "foundation",
      label: "Triết lý thiết kế",
      icon: /*#__PURE__*/React.createElement(Icons.Sparkle, {
        size: 15
      })
    }, {
      id: "palette",
      label: "Bảng màu",
      icon: /*#__PURE__*/React.createElement(Icons.Layers, {
        size: 15
      })
    }, {
      id: "typography",
      label: "Typography",
      icon: /*#__PURE__*/React.createElement(Icons.File, {
        size: 15
      })
    }, {
      id: "spacing",
      label: "Spacing & layout",
      icon: /*#__PURE__*/React.createElement(Icons.Hash, {
        size: 15
      })
    }, {
      id: "radius",
      label: "Bo góc & shadow",
      icon: /*#__PURE__*/React.createElement(Icons.Box, {
        size: 15
      })
    }, {
      id: "components",
      label: "Components",
      icon: /*#__PURE__*/React.createElement(Icons.Layers, {
        size: 15
      }),
      badge: "12",
      sub: [{
        id: "c-button",
        label: "Button"
      }, {
        id: "c-badge",
        label: "Badge"
      }, {
        id: "c-search",
        label: "Search"
      }, {
        id: "c-callout",
        label: "Callout"
      }, {
        id: "c-step",
        label: "Steps"
      }, {
        id: "c-code",
        label: "Code block"
      }, {
        id: "c-table",
        label: "Table"
      }, {
        id: "c-tabs",
        label: "Tabs"
      }, {
        id: "c-accordion",
        label: "Accordion"
      }, {
        id: "c-shot",
        label: "Screenshot"
      }, {
        id: "c-module",
        label: "Module card"
      }, {
        id: "c-diagram",
        label: "Diagram"
      }]
    }, {
      id: "brand",
      label: "Brand",
      icon: /*#__PURE__*/React.createElement(Icons.Sparkle, {
        size: 15
      })
    }]
  }, {
    title: "Trang khác",
    items: [{
      id: "docs",
      label: "Mở trang Docs",
      icon: /*#__PURE__*/React.createElement(Icons.Book, {
        size: 15
      }),
      href: "index.html"
    }]
  }];
  const tocItems = [{
    id: "foundation",
    label: "Triết lý thiết kế",
    depth: 2
  }, {
    id: "palette",
    label: "Bảng màu",
    depth: 2
  }, {
    id: "typography",
    label: "Typography",
    depth: 2
  }, {
    id: "spacing",
    label: "Spacing & layout",
    depth: 2
  }, {
    id: "radius",
    label: "Bo góc & shadow",
    depth: 2
  }, {
    id: "components",
    label: "Components",
    depth: 2
  }, {
    id: "c-button",
    label: "Button",
    depth: 3
  }, {
    id: "c-badge",
    label: "Badge",
    depth: 3
  }, {
    id: "c-callout",
    label: "Callout",
    depth: 3
  }, {
    id: "c-step",
    label: "Steps",
    depth: 3
  }, {
    id: "c-table",
    label: "Table",
    depth: 3
  }, {
    id: "c-tabs",
    label: "Tabs",
    depth: 3
  }, {
    id: "c-accordion",
    label: "Accordion",
    depth: 3
  }, {
    id: "c-shot",
    label: "Screenshot",
    depth: 3
  }, {
    id: "c-module",
    label: "Module card",
    depth: 3
  }, {
    id: "brand",
    label: "Brand",
    depth: 2
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopNav, {
    lang: lang,
    onLang: setLang,
    brandName: "Zotech Docs",
    brandSub: "Design System",
    version: "v2.4"
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    sections: dsSections,
    activeId: activeToc
  }), /*#__PURE__*/React.createElement("main", {
    className: "shell-main"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Hướng dẫn",
      href: "index.html"
    }, {
      label: "Tài nguyên",
      href: "#"
    }, {
      label: "Design System"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "article-eyebrow"
  }, /*#__PURE__*/React.createElement(Icons.Sparkle, {
    size: 13
  }), " Design System \xB7 v1.0"), /*#__PURE__*/React.createElement("h1", null, "Design System \u2014 Docs UI"), /*#__PURE__*/React.createElement("p", {
    className: "article-lede"
  }, "H\u1EC7 th\u1ED1ng design tokens v\xE0 components d\xF9ng cho trang H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng. Phong c\xE1ch l\u1EA5y c\u1EA3m h\u1EE9ng t\u1EEB Stripe Docs & Linear \u2014 clean, professional, \u0111\u1EADm t\xEDnh k\u1EF9 thu\u1EADt, t\u1ED1i \u01B0u cho vi\u1EC7c \u0111\u1ECDc d\xE0i v\xE0 tra c\u1EE9u nhanh."), /*#__PURE__*/React.createElement(DSSection, {
    id: "foundation",
    eyebrow: "01 \xB7 Foundation",
    title: "Tri\u1EBFt l\xFD thi\u1EBFt k\u1EBF",
    sub: "B\u1ED1n nguy\xEAn t\u1EAFc d\u1EABn d\u1EAFt m\u1ECDi quy\u1EBFt \u0111\u1ECBnh thi\u1EBFt k\u1EBF trong h\u1EC7 th\u1ED1ng."
  }, /*#__PURE__*/React.createElement("div", {
    className: "principle-grid"
  }, [{
    n: "01",
    t: "Rõ ràng trước thẩm mỹ",
    d: "Mỗi thành phần phải dễ đọc, dễ quét trước khi cần đẹp. Hierarchy mạnh, contrast cao, khoảng trắng rộng rãi."
  }, {
    n: "02",
    t: "Một accent color duy nhất",
    d: "Cam (#f97316) chỉ dùng cho hành động chính, link, trạng thái active. Không lạm dụng để giữ tín hiệu mạnh."
  }, {
    n: "03",
    t: "Khoảng cách kể chuyện",
    d: "Dùng spacing để nhóm thông tin liên quan. Tránh dùng border / background nếu chỉ cần gap."
  }, {
    n: "04",
    t: "Bilingual-first",
    d: "Mọi component phải hoạt động tốt với tiếng Việt (dấu) lẫn tiếng Anh. Type scale ưu tiên chiều cao dòng đủ rộng cho dấu thanh."
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    className: "principle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "principle-num"
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "principle-title"
  }, p.t), /*#__PURE__*/React.createElement("div", {
    className: "principle-desc"
  }, p.d))))), /*#__PURE__*/React.createElement(DSSection, {
    id: "palette",
    eyebrow: "02 \xB7 Tokens",
    title: "B\u1EA3ng m\xE0u",
    sub: "M\u1ED9t accent warm orange, m\u1ED9t thang neutral \u1EA5m, n\u0103m tr\u1EA1ng th\xE1i semantic."
  }, /*#__PURE__*/React.createElement(ColorRamp, {
    label: "Accent \xB7 Orange (primary)",
    prefix: "accent",
    steps: ACCENT_STEPS,
    getValue: s => `var(--color-accent-${s})`
  }), /*#__PURE__*/React.createElement(ColorRamp, {
    label: "Neutral \xB7 Warm gray",
    prefix: "neutral",
    steps: NEUTRAL_STEPS,
    getValue: s => `var(--color-neutral-${s})`
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 32
    }
  }, "Semantic \u2014 callouts & status"), /*#__PURE__*/React.createElement("div", {
    className: "semantic-grid"
  }, SEMANTIC.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.base,
    className: "semantic-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "semantic-chip",
    style: {
      background: `var(--${s.base}-500)`
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "semantic-name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "semantic-token"
  }, "--", s.base, "-500"), /*#__PURE__*/React.createElement("div", {
    className: "semantic-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "semantic-mini",
    style: {
      background: `var(--${s.base}-50)`
    },
    title: "50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "semantic-mini",
    style: {
      background: `var(--${s.base}-200)`
    },
    title: "200"
  }), /*#__PURE__*/React.createElement("span", {
    className: "semantic-mini",
    style: {
      background: `var(--${s.base}-500)`
    },
    title: "500"
  }), /*#__PURE__*/React.createElement("span", {
    className: "semantic-mini",
    style: {
      background: `var(--${s.base}-700)`
    },
    title: "700"
  }))))))), /*#__PURE__*/React.createElement(DSSection, {
    id: "typography",
    eyebrow: "03 \xB7 Tokens",
    title: "Typography",
    sub: "Inter cho UI/body, JetBrains Mono cho code. Type scale c\xF3 letter-spacing n\xE9n nh\u1EB9 \u1EDF heading."
  }, /*#__PURE__*/React.createElement("div", {
    className: "type-stack"
  }, /*#__PURE__*/React.createElement(TypeRow, {
    token: "--fs-display",
    sample: "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng",
    size: 48,
    lh: 56,
    weight: 700,
    tr: "-0.02em"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    token: "--fs-h1",
    sample: "T\u1EA1o Y\xEAu c\u1EA7u mua h\xE0ng",
    size: 36,
    lh: 44,
    weight: 700,
    tr: "-0.02em"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    token: "--fs-h2",
    sample: "C\xE1c b\u01B0\u1EDBc th\u1EF1c hi\u1EC7n",
    size: 26,
    lh: 34,
    weight: 600,
    tr: "-0.015em"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    token: "--fs-h3",
    sample: "Nh\u1EADp th\xF4ng tin",
    size: 20,
    lh: 28,
    weight: 600,
    tr: "-0.01em"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    token: "--fs-body",
    sample: "\u0110\xE2y l\xE0 d\xF2ng n\u1ED9i dung body \u2014 k\xEDch th\u01B0\u1EDBc chu\u1EA9n cho m\u1ECDi \u0111o\u1EA1n v\u0103n.",
    size: 15,
    lh: 26,
    weight: 400,
    tr: "0"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    token: "--fs-small",
    sample: "Caption / meta th\xF4ng tin nh\u1ECF ph\u1EE5 tr\u1EE3",
    size: 13.5,
    lh: 22,
    weight: 500,
    tr: "0"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    token: "--fs-code",
    sample: "Mua h\xE0ng \u2192 \u0110\u01A1n h\xE0ng \u2192 Y\xEAu c\u1EA7u mua h\xE0ng",
    size: 13.5,
    lh: 22,
    weight: 500,
    tr: "0"
  }))), /*#__PURE__*/React.createElement(DSSection, {
    id: "spacing",
    eyebrow: "04 \xB7 Tokens",
    title: "Spacing & layout",
    sub: "4px grid. Layout shell d\xF9ng 3 c\u1ED9t: sidebar 280px \xB7 content 760px \xB7 TOC 240px."
  }, /*#__PURE__*/React.createElement("div", {
    className: "spacing-grid"
  }, [{
    t: "--space-1",
    v: 4
  }, {
    t: "--space-2",
    v: 8
  }, {
    t: "--space-3",
    v: 12
  }, {
    t: "--space-4",
    v: 16
  }, {
    t: "--space-5",
    v: 20
  }, {
    t: "--space-6",
    v: 24
  }, {
    t: "--space-7",
    v: 32
  }, {
    t: "--space-8",
    v: 40
  }, {
    t: "--space-9",
    v: 48
  }, {
    t: "--space-10",
    v: 64
  }, {
    t: "--space-11",
    v: 80
  }, {
    t: "--space-12",
    v: 96
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "spacing-row"
  }, /*#__PURE__*/React.createElement("code", null, s.t), /*#__PURE__*/React.createElement("div", {
    className: "spacing-bar",
    style: {
      width: s.v
    }
  }), /*#__PURE__*/React.createElement("span", null, s.v, "px"))))), /*#__PURE__*/React.createElement(DSSection, {
    id: "radius",
    eyebrow: "05 \xB7 Tokens",
    title: "Bo g\xF3c & shadow",
    sub: "Radius nh\u1ECF cho text input/badge, l\u1EDBn cho card/dialog. Shadow chia 5 c\u1EA5p."
  }, /*#__PURE__*/React.createElement("h3", null, "Radius"), /*#__PURE__*/React.createElement("div", {
    className: "radius-grid"
  }, [{
    t: "--radius-xs",
    v: 4
  }, {
    t: "--radius-sm",
    v: 6
  }, {
    t: "--radius-md",
    v: 8
  }, {
    t: "--radius-lg",
    v: 12
  }, {
    t: "--radius-xl",
    v: 16
  }, {
    t: "--radius-2xl",
    v: 24
  }, {
    t: "--radius-pill",
    v: 999
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    className: "radius-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "radius-box",
    style: {
      borderRadius: r.v === 999 ? 999 : r.v
    }
  }), /*#__PURE__*/React.createElement("code", null, r.t), /*#__PURE__*/React.createElement("span", null, r.v === 999 ? "pill" : `${r.v}px`)))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 32
    }
  }, "Shadow"), /*#__PURE__*/React.createElement("div", {
    className: "shadow-grid"
  }, ["xs", "sm", "md", "lg", "xl"].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    className: "shadow-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-box",
    style: {
      boxShadow: `var(--shadow-${s})`
    }
  }), /*#__PURE__*/React.createElement("code", null, "--shadow-", s))))), /*#__PURE__*/React.createElement(DSSection, {
    id: "components",
    eyebrow: "06 \xB7 Components",
    title: "Components",
    sub: "T\u1EA5t c\u1EA3 components d\xF9ng trong trang docs, c\xF3 anchor \u0111\u1EC3 link tr\u1EF1c ti\u1EBFp."
  }, /*#__PURE__*/React.createElement(H3, {
    id: "c-button"
  }, "Button"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "Variants",
    code: "<button className='btn btn-primary'>"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, "Primary"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary"
  }, "Secondary"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost"
  }, "Ghost"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-link"
  }, "Link")), /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary"
  }, "Small"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, "Default"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-lg btn-primary"
  }, "Large"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-icon-only",
    "aria-label": "add"
  }, /*#__PURE__*/React.createElement(Icons.Sparkle, {
    size: 15
  })))), /*#__PURE__*/React.createElement(H3, {
    id: "c-badge"
  }, "Badge"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "Tones",
    code: "<Badge tone='accent'>"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Neutral"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "v2.4"), /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    dot: true
  }, "\u0110ang x\u1EED l\xFD"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Ho\xE0n th\xE0nh"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warn",
    dot: true
  }, "C\u1EA3nh b\xE1o"), /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    dot: true
  }, "L\u1ED7i"))), /*#__PURE__*/React.createElement(H3, {
    id: "c-search"
  }, "Search"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "Search w/ \u2318K & autocomplete",
    code: "<SearchBox />"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 60
    }
  }, /*#__PURE__*/React.createElement(SearchBox, null))), /*#__PURE__*/React.createElement(H3, {
    id: "c-callout"
  }, "Callout"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "5 tones",
    code: "<Callout tone='tip' />"
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "info"
  }, "Khi x\xE1c nh\u1EADn h\xF3a \u0111\u01A1n, h\u1EC7 th\u1ED1ng t\u1EF1 ghi nh\u1EADn c\xF4ng n\u1EE3 ph\u1EA3i tr\u1EA3 NCC."), /*#__PURE__*/React.createElement(Callout, {
    tone: "warn"
  }, "H\xE3y ki\u1EC3m tra ", /*#__PURE__*/React.createElement("strong", null, "S\u1ED1 l\u01B0\u1EE3ng \u0111\u1EC1 xu\u1EA5t"), " tr\u01B0\u1EDBc khi g\u1EEDi duy\u1EC7t \u2014 s\u1EBD kh\xF4ng s\u1EEDa \u0111\u01B0\u1EE3c sau khi ph\xEA duy\u1EC7t."), /*#__PURE__*/React.createElement(Callout, {
    tone: "success"
  }, "\u0110\u01A1n h\xE0ng \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA1o v\xE0 s\u1EB5n s\xE0ng \u0111\u1EC3 g\u1EEDi NCC."), /*#__PURE__*/React.createElement(Callout, {
    tone: "danger"
  }, "Kh\xF4ng x\xF3a nh\xE0 cung c\u1EA5p khi v\u1EABn c\xF2n \u0111\u01A1n mua \u1EDF tr\u1EA1ng th\xE1i \u0111ang x\u1EED l\xFD."), /*#__PURE__*/React.createElement(Callout, {
    tone: "tip"
  }, "L\u1ECDc theo tr\u1EA1ng th\xE1i ", /*#__PURE__*/React.createElement("code", null, "C\xF2n n\u1EE3"), " \u0111\u1EC3 n\u1EAFm nhanh danh s\xE1ch NCC c\u1EA7n thanh to\xE1n.")), /*#__PURE__*/React.createElement(H3, {
    id: "c-step"
  }, "Steps"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "Numbered steps with connector",
    code: "<Steps><Step num='1'>\u2026</Step></Steps>"
  }, /*#__PURE__*/React.createElement(Steps, null, /*#__PURE__*/React.createElement(Step, {
    num: "1",
    title: "Truy c\u1EADp menu"
  }, /*#__PURE__*/React.createElement("p", null, "\u0110i \u0111\u1EBFn ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 \u0110\u01A1n h\xE0ng \u2192 Y\xEAu c\u1EA7u mua h\xE0ng"), ".")), /*#__PURE__*/React.createElement(Step, {
    num: "2",
    title: "Nh\u1EADp th\xF4ng tin"
  }, /*#__PURE__*/React.createElement("p", null, "\u0110i\u1EC1n c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c trong form y\xEAu c\u1EA7u mua h\xE0ng.")), /*#__PURE__*/React.createElement(Step, {
    num: "3",
    title: "L\u01B0u k\u1EBFt qu\u1EA3"
  }, /*#__PURE__*/React.createElement("p", null, "B\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "L\u01B0u"), " \u0111\u1EC3 ho\xE0n t\u1EA5t kh\u1EDFi t\u1EA1o.")))), /*#__PURE__*/React.createElement(H3, {
    id: "c-code"
  }, "Code block"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "With language tag & copy",
    code: "<CodeBlock lang='json' />"
  }, /*#__PURE__*/React.createElement(CodeBlock, {
    lang: "json"
  }, `{
  "purchase_request": {
    "id": "PR-2026-0028",
    "supplier": "Công ty TNHH ABC",
    "items": [
      { "sku": "DKM-001", "qty": 100, "unit_price": 45000 }
    ],
    "status": "draft"
  }
}`), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 13.5,
      color: "var(--fg-muted)"
    }
  }, "Inline code: ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 \u0110\u01A1n h\xE0ng"), " \xB7 Shortcut: ", /*#__PURE__*/React.createElement(Kbd, null, "\u2318"), " ", /*#__PURE__*/React.createElement(Kbd, null, "K"), " \u0111\u1EC3 m\u1EDF search.")), /*#__PURE__*/React.createElement(H3, {
    id: "c-table"
  }, "Field reference table"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "D\xF9ng cho m\xF4 t\u1EA3 tr\u01B0\u1EDDng form",
    code: "<FieldTable rows={\u2026} />"
  }, /*#__PURE__*/React.createElement(FieldTable, {
    rows: [{
      field: "Loại yêu cầu",
      required: true,
      desc: "Phân loại yêu cầu mua sắm theo mục đích."
    }, {
      field: "Nhà cung cấp",
      required: true,
      desc: "Chọn NCC. Mặc định lấy theo Bảng giá đã cấu hình."
    }, {
      field: "Chiết khấu",
      desc: "Mức giảm giá NCC dành cho công ty."
    }]
  })), /*#__PURE__*/React.createElement(H3, {
    id: "c-tabs"
  }, "Tabs"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "Tabs (Desktop / Mobile / API)",
    code: "<Tabs items={\u2026} />"
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      label: "Desktop",
      icon: /*#__PURE__*/React.createElement(Icons.Layers, {
        size: 14
      }),
      content: /*#__PURE__*/React.createElement("p", null, "H\u01B0\u1EDBng d\u1EABn thao t\xE1c tr\xEAn tr\xECnh duy\u1EC7t m\xE1y t\xEDnh, k\xE8m screenshot.")
    }, {
      label: "Mobile",
      icon: /*#__PURE__*/React.createElement(Icons.Phone, {
        size: 14
      }),
      content: /*#__PURE__*/React.createElement("p", null, "Thao t\xE1c qua \u1EE9ng d\u1EE5ng mobile (iOS/Android).")
    }, {
      label: "API",
      icon: /*#__PURE__*/React.createElement(Icons.Hash, {
        size: 14
      }),
      content: /*#__PURE__*/React.createElement(CodeBlock, {
        lang: "bash"
      }, `curl -X POST https://api.zotech.com/v1/purchase-requests \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{ "supplier_id": "S-001" }'`)
    }]
  })), /*#__PURE__*/React.createElement(H3, {
    id: "c-accordion"
  }, "Accordion / FAQ"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "Default closed; click to expand",
    code: "<Accordion items={\u2026} />"
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      title: "Tôi có thể bỏ qua bước Yêu cầu mua hàng không?",
      content: /*#__PURE__*/React.createElement("p", null, "C\xF3, trong tr\u01B0\u1EDDng h\u1EE3p kh\u1EA9n c\u1EA5p b\u1EA1n c\xF3 th\u1EC3 t\u1EA1o tr\u1EF1c ti\u1EBFp Y\xEAu c\u1EA7u b\xE1o gi\xE1.")
    }, {
      title: "Hệ thống có hỗ trợ phê duyệt nhiều cấp?",
      content: /*#__PURE__*/React.createElement("p", null, "C\xF3, c\u1EA5u h\xECnh t\u1EA1i C\xE0i \u0111\u1EB7t \u2192 Quy tr\xECnh ph\xEA duy\u1EC7t, t\u1ED1i \u0111a 5 c\u1EA5p.")
    }, {
      title: "Xuất báo cáo hiệu suất NCC như thế nào?",
      content: /*#__PURE__*/React.createElement("p", null, "V\xE0o module B\xE1o c\xE1o \u2192 B\xE1o c\xE1o mua h\xE0ng \u2192 Hi\u1EC7u su\u1EA5t NCC.")
    }]
  })), /*#__PURE__*/React.createElement(H3, {
    id: "c-shot"
  }, "Annotated screenshot"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "Placeholder + numbered annotations",
    code: "<AnnotatedShot annotations={\u2026} />"
  }, /*#__PURE__*/React.createElement(AnnotatedShot, {
    caption: "\u0110\xE1nh s\u1ED1 hotspot \u2014 click \u0111\u1EC3 xem chi ti\u1EBFt",
    placeholder: "SCREENSHOT: Form Y\xEAu c\u1EA7u mua h\xE0ng",
    annotations: [{
      n: 1,
      x: 6,
      y: 18,
      w: 36,
      h: 10
    }, {
      n: 2,
      x: 50,
      y: 18,
      w: 36,
      h: 10
    }, {
      n: 3,
      x: 6,
      y: 60,
      w: 80,
      h: 12
    }]
  })), /*#__PURE__*/React.createElement(H3, {
    id: "c-module"
  }, "Module card grid"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "L\u1EA5y c\u1EA3m h\u1EE9ng t\u1EEB App Launcher",
    code: "<ModuleGrid items={\u2026} />"
  }, /*#__PURE__*/React.createElement(ModuleGrid, {
    items: [{
      title: "Mua hàng",
      sub: "Quản lý PO",
      icon: /*#__PURE__*/React.createElement(Icons.Cart, {
        size: 20
      }),
      current: true
    }, {
      title: "Tồn kho",
      sub: "Nhập / xuất",
      icon: /*#__PURE__*/React.createElement(Icons.Box, {
        size: 20
      })
    }, {
      title: "Bán hàng",
      sub: "Đơn hàng KH",
      icon: /*#__PURE__*/React.createElement(Icons.Receipt, {
        size: 20
      })
    }, {
      title: "CRM",
      sub: "Quản lý KH",
      icon: /*#__PURE__*/React.createElement(Icons.Users, {
        size: 20
      })
    }, {
      title: "Báo cáo",
      sub: "BI & dashboard",
      icon: /*#__PURE__*/React.createElement(Icons.Bar, {
        size: 20
      })
    }, {
      title: "Kế toán",
      sub: "Hóa đơn",
      icon: /*#__PURE__*/React.createElement(Icons.Money, {
        size: 20
      })
    }]
  })), /*#__PURE__*/React.createElement(H3, {
    id: "c-diagram"
  }, "Process diagram"), /*#__PURE__*/React.createElement(ComponentBlock, {
    title: "Linear horizontal flow",
    code: "<Diagram steps={\u2026} />"
  }, /*#__PURE__*/React.createElement(Diagram, {
    steps: [{
      label: "Yêu cầu mua",
      icon: /*#__PURE__*/React.createElement(Icons.File, {
        size: 14
      }),
      key: true
    }, {
      label: "Báo giá",
      icon: /*#__PURE__*/React.createElement(Icons.Receipt, {
        size: 14
      })
    }, {
      label: "Đơn mua hàng",
      icon: /*#__PURE__*/React.createElement(Icons.Cart, {
        size: 14
      })
    }, {
      label: "Nhận hàng",
      icon: /*#__PURE__*/React.createElement(Icons.Truck, {
        size: 14
      })
    }, {
      label: "Hóa đơn",
      icon: /*#__PURE__*/React.createElement(Icons.File, {
        size: 14
      })
    }, {
      label: "Thanh toán",
      icon: /*#__PURE__*/React.createElement(Icons.Money, {
        size: 14
      }),
      key: true
    }]
  }))), /*#__PURE__*/React.createElement(DSSection, {
    id: "brand",
    eyebrow: "07 \xB7 Brand",
    title: "Brand & logo placeholder",
    sub: "Khu v\u1EF1c d\xE0nh cho logo s\u1EBD thay khi c\xF3 brand ch\xEDnh th\u1EE9c. Hi\u1EC7n t\u1EA1i d\xF9ng monogram cam."
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-logo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topnav-brand-mark",
    style: {
      width: 64,
      height: 64,
      fontSize: 32,
      borderRadius: 12
    }
  }, "Z")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-muted)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Wordmark"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "var(--fg-strong)",
      letterSpacing: "-0.02em"
    }
  }, "Zotech Docs"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-muted)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      marginTop: 2
    }
  }, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng"))), /*#__PURE__*/React.createElement(Callout, {
    tone: "tip",
    title: "Khi c\xF3 logo ch\xEDnh th\u1EE9c"
  }, "Thay n\u1ED9i dung c\u1EE7a ", /*#__PURE__*/React.createElement("code", null, ".topnav-brand-mark"), " b\u1EB1ng SVG logo c\u1EE7a b\u1EA1n. Recommend gi\u1EEF k\xEDch th\u01B0\u1EDBc 28\xD728px \u1EDF topnav v\xE0 \u0111\u1EA3m b\u1EA3o c\xF3 safe-area xung quanh \xEDt nh\u1EA5t 8px."))))), /*#__PURE__*/React.createElement(TOC, {
    items: tocItems,
    activeId: activeToc
  })));
};
const dsRoot = ReactDOM.createRoot(document.getElementById("root"));
dsRoot.render(/*#__PURE__*/React.createElement(DSApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/design-system-app.jsx", error: String((e && e.message) || e) }); }

// scripts/docs-demo.jsx
try { (() => {
/* =====================================================
   DEMO PAGE — Module "Mua hàng" (one-page guide)
   Cấu trúc 4 tầng: Tổng quan → Thiết lập → Nghiệp vụ → Báo cáo
   Khớp với ảnh tham chiếu (mục "Trả hàng").
   ===================================================== */

const {
  useState: useStateD
} = React;

/* ---------- Sidebar model ---------- */
const SIDEBAR = [{
  title: "Bắt đầu",
  items: [{
    id: "intro",
    label: "Giới thiệu hệ thống",
    icon: /*#__PURE__*/React.createElement(Icons.Home, {
      size: 17
    }),
    href: "Trang chủ - Hướng dẫn sử dụng.html"
  }, {
    id: "quick",
    label: "Bắt đầu nhanh",
    icon: /*#__PURE__*/React.createElement(Icons.Sparkle, {
      size: 17
    })
  }, {
    id: "ui",
    label: "Giao diện tổng quan",
    icon: /*#__PURE__*/React.createElement(Icons.Layers, {
      size: 17
    })
  }]
}, {
  title: "Module nghiệp vụ",
  items: [{
    id: "muc-dich",
    label: "Mua hàng",
    icon: /*#__PURE__*/React.createElement(Icons.Cart, {
      size: 17
    }),
    badge: "v2.4",
    sub: [{
      id: "muc-dich",
      label: "Mục đích ứng dụng"
    }, {
      id: "so-do",
      label: "Sơ đồ tổng quan"
    }, {
      id: "yeu-cau",
      label: "Yêu cầu mua hàng"
    }, {
      id: "ncc",
      label: "Quản lý NCC"
    }, {
      id: "bang-gia",
      label: "Bảng giá NCC"
    }, {
      id: "bao-gia",
      label: "Yêu cầu báo giá"
    }, {
      id: "xu-ly-don",
      label: "Xử lý đơn hàng"
    }, {
      id: "hoa-don",
      label: "Hóa đơn & công nợ"
    }, {
      id: "tra-hang",
      label: "Trả hàng"
    }, {
      id: "faq",
      label: "Câu hỏi thường gặp"
    }]
  }, {
    id: "ban-hang",
    label: "Bán hàng",
    icon: /*#__PURE__*/React.createElement(Icons.Receipt, {
      size: 17
    }),
    href: "#"
  }, {
    id: "pos",
    label: "POS",
    icon: /*#__PURE__*/React.createElement(Icons.Money, {
      size: 17
    }),
    href: "#"
  }, {
    id: "ton-kho",
    label: "Tồn kho",
    icon: /*#__PURE__*/React.createElement(Icons.Box, {
      size: 17
    }),
    href: "#"
  }, {
    id: "san-xuat",
    label: "Sản xuất",
    icon: /*#__PURE__*/React.createElement(Icons.Settings, {
      size: 17
    }),
    href: "#"
  }, {
    id: "crm",
    label: "CRM",
    icon: /*#__PURE__*/React.createElement(Icons.Users, {
      size: 17
    }),
    href: "#"
  }]
}];

/* ---------- TOC model (mirrors page sections) ---------- */
const TOC_ITEMS = [{
  id: "muc-dich",
  label: "Mục đích ứng dụng",
  depth: 2
}, {
  id: "so-do",
  label: "Sơ đồ tổng quan",
  depth: 2
}, {
  id: "yeu-cau",
  label: "Yêu cầu mua hàng",
  depth: 2
}, {
  id: "yeu-cau-steps",
  label: "Các bước thực hiện",
  depth: 3
}, {
  id: "ncc",
  label: "Quản lý Nhà cung cấp",
  depth: 2
}, {
  id: "bang-gia",
  label: "Bảng giá Nhà cung cấp",
  depth: 2
}, {
  id: "bao-gia",
  label: "Yêu cầu báo giá / Đơn hàng",
  depth: 2
}, {
  id: "xu-ly-don",
  label: "Xử lý đơn hàng",
  depth: 2
}, {
  id: "hoa-don",
  label: "Hóa đơn & Công nợ",
  depth: 2
}, {
  id: "tra-hang",
  label: "Trả hàng",
  depth: 2
}, {
  id: "faq",
  label: "Câu hỏi thường gặp",
  depth: 2
}, {
  id: "lien-quan",
  label: "Module liên quan",
  depth: 2
}];
const SPY_IDS = TOC_ITEMS.map(t => t.id);

/* ---------- App ---------- */
function App() {
  const [lang, setLang] = useStateD("vi");
  const active = useScrollSpy(SPY_IDS, 120);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopNav, {
    lang: lang,
    onLang: setLang,
    version: "v2.4",
    brandName: "Zotech Docs",
    brandSub: "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng"
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    sections: SIDEBAR,
    activeId: active,
    onSelect: () => {}
  }), /*#__PURE__*/React.createElement("main", {
    className: "shell-main"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Tài liệu",
      href: "Trang chủ - Hướng dẫn sử dụng.html"
    }, {
      label: "Module nghiệp vụ",
      href: "#"
    }, {
      label: "Mua hàng"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "article-eyebrow"
  }, /*#__PURE__*/React.createElement(Icons.Cart, {
    size: 13
  }), " Module nghi\u1EC7p v\u1EE5 \xB7 Mua h\xE0ng"), /*#__PURE__*/React.createElement("h1", null, "Mua h\xE0ng"), /*#__PURE__*/React.createElement("p", {
    className: "article-lede"
  }, "Qu\u1EA3n l\xFD to\xE0n b\u1ED9 quy tr\xECnh mua s\u1EAFm: t\u1EEB ", /*#__PURE__*/React.createElement("strong", null, "Y\xEAu c\u1EA7u mua h\xE0ng"), " n\u1ED9i b\u1ED9,", /*#__PURE__*/React.createElement("strong", null, " Y\xEAu c\u1EA7u b\xE1o gi\xE1"), " g\u1EEDi nh\xE0 cung c\u1EA5p, ", /*#__PURE__*/React.createElement("strong", null, "\u0110\u01A1n mua h\xE0ng"), ", cho t\u1EDBi ", /*#__PURE__*/React.createElement("strong", null, "nh\u1EADp kho"), ", ", /*#__PURE__*/React.createElement("strong", null, "h\xF3a \u0111\u01A1n & c\xF4ng n\u1EE3"), " v\xE0 ", /*#__PURE__*/React.createElement("strong", null, "tr\u1EA3 h\xE0ng"), "."), /*#__PURE__*/React.createElement("div", {
    className: "article-meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: /*#__PURE__*/React.createElement(Icons.Book, {
      size: 13
    })
  }, "Phi\xEAn b\u1EA3n 2.4"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: /*#__PURE__*/React.createElement(Icons.Calendar, {
      size: 13
    })
  }, "C\u1EADp nh\u1EADt 29/05/2026"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "\u0110\xE3 ki\u1EC3m duy\u1EC7t")), /*#__PURE__*/React.createElement(Article, null))), /*#__PURE__*/React.createElement(TOC, {
    items: TOC_ITEMS,
    activeId: active
  })));
}

/* ---------- Article body ---------- */
function Article() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H2, {
    id: "muc-dich"
  }, "M\u1EE5c \u0111\xEDch \u1EE9ng d\u1EE5ng"), /*#__PURE__*/React.createElement("p", null, "Ph\xE2n h\u1EC7 ", /*#__PURE__*/React.createElement("strong", null, "Mua h\xE0ng"), " gi\xFAp doanh nghi\u1EC7p chu\u1EA9n h\xF3a ho\u1EA1t \u0111\u1ED9ng mua s\u1EAFm, ki\u1EC3m so\xE1t ng\xE2n s\xE1ch v\xE0 minh b\u1EA1ch c\xF4ng n\u1EE3 v\u1EDBi nh\xE0 cung c\u1EA5p (NCC). M\u1ECDi ch\u1EE9ng t\u1EEB \u0111\u1EC1u li\xEAn th\xF4ng v\u1EDBi ", /*#__PURE__*/React.createElement("strong", null, "T\u1ED3n kho"), " v\xE0 ", /*#__PURE__*/React.createElement("strong", null, "K\u1EBF to\xE1n"), ", h\u1EA1n ch\u1EBF nh\u1EADp li\u1EC7u tr\xF9ng l\u1EB7p."), /*#__PURE__*/React.createElement("p", null, "Truy c\u1EADp ph\xE2n h\u1EC7 t\u1EA1i menu ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 \u0110\u01A1n h\xE0ng"), "."), /*#__PURE__*/React.createElement(Callout, {
    tone: "tip",
    title: "\u0110\u1ED1i t\u01B0\u1EE3ng s\u1EED d\u1EE5ng"
  }, "Nh\xE2n vi\xEAn mua h\xE0ng, k\u1EBF to\xE1n c\xF4ng n\u1EE3 v\xE0 qu\u1EA3n l\xFD ph\xEA duy\u1EC7t. Quy\u1EC1n truy c\u1EADp \u0111\u01B0\u1EE3c ph\xE2n theo vai tr\xF2 trong ", /*#__PURE__*/React.createElement("code", null, "C\u1EA5u h\xECnh \u2192 Ng\u01B0\u1EDDi d\xF9ng & Ph\xE2n quy\u1EC1n"), "."), /*#__PURE__*/React.createElement(H2, {
    id: "so-do"
  }, "S\u01A1 \u0111\u1ED3 t\u1ED5ng quan"), /*#__PURE__*/React.createElement("p", null, "Quy tr\xECnh mua h\xE0ng ti\xEAu chu\u1EA9n \u0111i qua c\xE1c b\u01B0\u1EDBc sau:"), /*#__PURE__*/React.createElement(Diagram, {
    steps: [{
      label: "Yêu cầu mua hàng",
      icon: /*#__PURE__*/React.createElement(Icons.File, {
        size: 15
      })
    }, {
      label: "Yêu cầu báo giá",
      icon: /*#__PURE__*/React.createElement(Icons.Receipt, {
        size: 15
      })
    }, {
      label: "Đơn mua hàng",
      icon: /*#__PURE__*/React.createElement(Icons.Cart, {
        size: 15
      }),
      key: true
    }, {
      label: "Nhập kho",
      icon: /*#__PURE__*/React.createElement(Icons.Box, {
        size: 15
      })
    }, {
      label: "Hóa đơn",
      icon: /*#__PURE__*/React.createElement(Icons.Money, {
        size: 15
      })
    }]
  }), /*#__PURE__*/React.createElement("p", null, "T\xF9y quy m\xF4, doanh nghi\u1EC7p c\xF3 th\u1EC3 b\u1ECF qua b\u01B0\u1EDBc ", /*#__PURE__*/React.createElement("strong", null, "Y\xEAu c\u1EA7u mua h\xE0ng"), " v\xE0 t\u1EA1o th\u1EB3ng ", /*#__PURE__*/React.createElement("strong", null, "\u0110\u01A1n mua h\xE0ng"), " \u2014 xem m\u1EE5c ", /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p"), "."), /*#__PURE__*/React.createElement(H2, {
    id: "yeu-cau"
  }, "Y\xEAu c\u1EA7u mua h\xE0ng"), /*#__PURE__*/React.createElement("p", null, "Y\xEAu c\u1EA7u mua h\xE0ng (PR) l\xE0 \u0111\u1EC1 xu\u1EA5t n\u1ED9i b\u1ED9 v\u1EC1 nhu c\u1EA7u v\u1EADt t\u01B0, c\u1EA7n \u0111\u01B0\u1EE3c ph\xEA duy\u1EC7t tr\u01B0\u1EDBc khi chuy\u1EC3n th\xE0nh \u0111\u01A1n mua. T\u1EA1o m\u1EDBi t\u1EA1i ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 Y\xEAu c\u1EA7u mua h\xE0ng \u2192 T\u1EA1o"), "."), /*#__PURE__*/React.createElement(FieldTable, {
    rows: [{
      field: "Người đề xuất",
      desc: "Tự động lấy theo người đăng nhập, có thể thay đổi.",
      required: true
    }, {
      field: "Phòng ban",
      desc: "Bộ phận phát sinh nhu cầu, dùng để định tuyến phê duyệt.",
      required: true
    }, {
      field: "Ngày cần hàng",
      desc: "Hạn mong muốn nhận hàng; cảnh báo nếu sớm hơn lead time NCC."
    }, {
      field: "Sản phẩm / Số lượng",
      desc: "Danh sách vật tư đề xuất cùng số lượng cần.",
      required: true
    }]
  }), /*#__PURE__*/React.createElement(H3, {
    id: "yeu-cau-steps"
  }, "C\xE1c b\u01B0\u1EDBc th\u1EF1c hi\u1EC7n"), /*#__PURE__*/React.createElement(Steps, null, /*#__PURE__*/React.createElement(Step, {
    num: 1,
    title: "T\u1EA1o phi\u1EBFu y\xEAu c\u1EA7u"
  }, "V\xE0o ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 Y\xEAu c\u1EA7u mua h\xE0ng \u2192 T\u1EA1o"), ", \u0111i\u1EC1n th\xF4ng tin v\xE0 th\xEAm d\xF2ng s\u1EA3n ph\u1EA9m."), /*#__PURE__*/React.createElement(Step, {
    num: 2,
    title: "G\u1EEDi ph\xEA duy\u1EC7t"
  }, "B\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "G\u1EECI DUY\u1EC6T"), ". Phi\u1EBFu chuy\u1EC3n tr\u1EA1ng th\xE1i ", /*#__PURE__*/React.createElement("em", null, "Ch\u1EDD duy\u1EC7t"), " v\xE0 th\xF4ng b\xE1o t\u1EDBi ng\u01B0\u1EDDi ph\xEA duy\u1EC7t."), /*#__PURE__*/React.createElement(Step, {
    num: 3,
    title: "T\u1EA1o \u0111\u01A1n mua h\xE0ng"
  }, "Sau khi \u0111\u01B0\u1EE3c duy\u1EC7t, b\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "T\u1EA0O \u0110\u01A0N MUA"), " \u0111\u1EC3 chuy\u1EC3n th\xE0nh \u0110\u01A1n mua h\xE0ng (PO).")), /*#__PURE__*/React.createElement(H2, {
    id: "ncc"
  }, "Qu\u1EA3n l\xFD Nh\xE0 cung c\u1EA5p"), /*#__PURE__*/React.createElement("p", null, "Khai b\xE1o NCC t\u1EA1i ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 Nh\xE0 cung c\u1EA5p"), ". M\u1ED7i NCC l\u01B0u th\xF4ng tin li\xEAn h\u1EC7, \u0111i\u1EC1u kho\u1EA3n thanh to\xE1n, th\u1EDDi gian giao h\xE0ng v\xE0 l\u1ECBch s\u1EED giao d\u1ECBch."), /*#__PURE__*/React.createElement(Callout, {
    tone: "info"
  }, "M\u1ED9t \u0111\u1ED1i t\xE1c c\xF3 th\u1EC3 v\u1EEBa l\xE0 ", /*#__PURE__*/React.createElement("strong", null, "Kh\xE1ch h\xE0ng"), " v\u1EEBa l\xE0 ", /*#__PURE__*/React.createElement("strong", null, "Nh\xE0 cung c\u1EA5p"), ". H\u1EC7 th\u1ED1ng d\xF9ng chung danh b\u1EA1, ph\xE2n bi\u1EC7t qua nh\xE3n vai tr\xF2."), /*#__PURE__*/React.createElement(H2, {
    id: "bang-gia"
  }, "B\u1EA3ng gi\xE1 Nh\xE0 cung c\u1EA5p"), /*#__PURE__*/React.createElement("p", null, "B\u1EA3ng gi\xE1 l\u01B0u m\u1EE9c gi\xE1 th\u1ECFa thu\u1EADn theo t\u1EEBng NCC v\xE0 kho\u1EA3ng s\u1ED1 l\u01B0\u1EE3ng, gi\xFAp t\u1EF1 \u0111\u1ED9ng \u0111i\u1EC1n \u0111\u01A1n gi\xE1 khi l\u1EADp \u0111\u01A1n mua. Thi\u1EBFt l\u1EADp t\u1EA1i ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 C\u1EA5u h\xECnh \u2192 B\u1EA3ng gi\xE1 NCC"), "."), /*#__PURE__*/React.createElement(FieldTable, {
    headers: ["Trường thông tin", "Diễn giải"],
    rows: [{
      field: "Số lượng tối thiểu",
      desc: "Áp dụng mức giá khi đặt từ số lượng này trở lên."
    }, {
      field: "Đơn giá",
      desc: "Giá thỏa thuận chưa thuế cho khoảng số lượng tương ứng."
    }, {
      field: "Hiệu lực từ / đến",
      desc: "Khoảng thời gian áp dụng mức giá."
    }]
  }), /*#__PURE__*/React.createElement(H2, {
    id: "bao-gia"
  }, "Y\xEAu c\u1EA7u b\xE1o gi\xE1 / \u0110\u01A1n h\xE0ng"), /*#__PURE__*/React.createElement("p", null, "Y\xEAu c\u1EA7u b\xE1o gi\xE1 (RFQ) \u0111\u01B0\u1EE3c g\u1EEDi t\u1EDBi NCC \u0111\u1EC3 x\xE1c nh\u1EADn gi\xE1 v\xE0 \u0111i\u1EC1u ki\u1EC7n. Khi NCC x\xE1c nh\u1EADn, RFQ tr\u1EDF th\xE0nh ", /*#__PURE__*/React.createElement("strong", null, "\u0110\u01A1n mua h\xE0ng"), ". Thao t\xE1c t\u1EA1i ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 \u0110\u01A1n h\xE0ng \u2192 T\u1EA1o"), "."), /*#__PURE__*/React.createElement(AnnotatedShot, {
    placeholder: "M\xE0n h\xECnh \u0110\u01A1n mua h\xE0ng",
    caption: "Giao di\u1EC7n \u0111\u01A1n mua h\xE0ng v\u1EDBi c\xE1c n\xFAt thao t\xE1c v\xE0 d\xF2ng s\u1EA3n ph\u1EA9m.",
    aspect: "16 / 8",
    annotations: [{
      n: 1,
      x: 4,
      y: 8,
      w: 30,
      h: 14,
      label: "Thông tin NCC"
    }, {
      n: 2,
      x: 66,
      y: 8,
      w: 30,
      h: 14,
      label: "Nút xác nhận"
    }, {
      n: 3,
      x: 6,
      y: 55,
      w: 88,
      h: 30,
      label: "Bảng dòng sản phẩm"
    }]
  }), /*#__PURE__*/React.createElement(H2, {
    id: "xu-ly-don"
  }, "X\u1EED l\xFD \u0111\u01A1n h\xE0ng"), /*#__PURE__*/React.createElement("p", null, "Sau khi ", /*#__PURE__*/React.createElement("strong", null, "X\xC1C NH\u1EACN"), " \u0111\u01A1n mua, h\u1EC7 th\u1ED1ng sinh phi\u1EBFu nh\u1EADp kho d\u1EF1 ki\u1EBFn. Khi h\xE0ng v\u1EC1, th\u1EE7 kho th\u1EF1c hi\u1EC7n nh\u1EADp kho theo th\u1EF1c t\u1EBF; s\u1ED1 l\u01B0\u1EE3ng \u0111\xE3 nh\u1EADn \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt ng\u01B0\u1EE3c l\u1EA1i tr\xEAn \u0111\u01A1n mua."), /*#__PURE__*/React.createElement(Steps, null, /*#__PURE__*/React.createElement(Step, {
    num: 1,
    title: "X\xE1c nh\u1EADn \u0111\u01A1n mua"
  }, "B\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "X\xC1C NH\u1EACN"), ". Tr\u1EA1ng th\xE1i chuy\u1EC3n sang ", /*#__PURE__*/React.createElement("em", null, "\u0110\u01A1n mua h\xE0ng"), " v\xE0 sinh phi\u1EBFu nh\u1EADp kho."), /*#__PURE__*/React.createElement(Step, {
    num: 2,
    title: "Nh\u1EADn h\xE0ng & nh\u1EADp kho"
  }, "M\u1EDF phi\u1EBFu nh\u1EADp kho, nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng th\u1EF1c nh\u1EADn r\u1ED3i b\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "X\xC1C NH\u1EACN"), ".")), /*#__PURE__*/React.createElement(H2, {
    id: "hoa-don"
  }, "H\xF3a \u0111\u01A1n & C\xF4ng n\u1EE3"), /*#__PURE__*/React.createElement("p", null, "T\u1EEB \u0111\u01A1n mua \u0111\xE3 nh\u1EADn h\xE0ng, b\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "T\u1EA0O H\xD3A \u0110\u01A0N"), " \u0111\u1EC3 ghi nh\u1EADn c\xF4ng n\u1EE3 ph\u1EA3i tr\u1EA3. H\xF3a \u0111\u01A1n li\xEAn th\xF4ng sang ph\xE2n h\u1EC7 ", /*#__PURE__*/React.createElement("strong", null, "K\u1EBF to\xE1n"), " \u0111\u1EC3 theo d\xF5i thanh to\xE1n."), /*#__PURE__*/React.createElement(Callout, {
    tone: "warn"
  }, "Ch\u1EC9 t\u1EA1o h\xF3a \u0111\u01A1n cho ph\u1EA7n ", /*#__PURE__*/React.createElement("strong", null, "s\u1ED1 l\u01B0\u1EE3ng \u0111\xE3 th\u1EF1c nh\u1EADn"), ". N\u1EBFu nh\u1EADn h\xE0ng nhi\u1EC1u \u0111\u1EE3t, h\u1EC7 th\u1ED1ng cho ph\xE9p t\u1EA1o nhi\u1EC1u h\xF3a \u0111\u01A1n theo t\u1EEBng \u0111\u1EE3t."), /*#__PURE__*/React.createElement(H2, {
    id: "tra-hang"
  }, "Tr\u1EA3 h\xE0ng"), /*#__PURE__*/React.createElement("p", null, "Khi h\xE0ng nh\u1EADn v\u1EC1 b\u1ECB l\u1ED7i, sai quy c\xE1ch ho\u1EB7c th\u1EEBa so v\u1EDBi \u0111\u01A1n, s\u1EED d\u1EE5ng ch\u1EE9c n\u0103ng", /*#__PURE__*/React.createElement("strong", null, " Tr\u1EA3 h\xE0ng"), " \u0111\u1EC3 xu\u1EA5t tr\u1EA3 NCC v\xE0 \u0111i\u1EC1u ch\u1EC9nh l\u1EA1i t\u1ED3n kho, c\xF4ng n\u1EE3 t\u01B0\u01A1ng \u1EE9ng."), /*#__PURE__*/React.createElement(Steps, null, /*#__PURE__*/React.createElement(Step, {
    num: 1,
    title: "M\u1EDF \u0111\u01A1n mua c\u1EA7n tr\u1EA3"
  }, "V\xE0o ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 \u0110\u01A1n h\xE0ng"), ", m\u1EDF \u0111\u01A1n mua \u0111\xE3 nh\u1EADn h\xE0ng c\u1EA7n x\u1EED l\xFD tr\u1EA3."), /*#__PURE__*/React.createElement(Step, {
    num: 2,
    title: "M\u1EDF phi\u1EBFu nh\u1EADp kho v\xE0 b\u1EA5m TR\u1EA2 H\xC0NG"
  }, "T\u1EA1i phi\u1EBFu nh\u1EADp kho, b\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "TR\u1EA2 H\xC0NG"), ". H\u1EC7 th\u1ED1ng m\u1EDF m\xE0n h\xECnh danh s\xE1ch s\u1EA3n ph\u1EA9m.", /*#__PURE__*/React.createElement(Callout, {
    tone: "warn",
    title: "L\u01B0u \xFD khi nh\u1EADp"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Nh\u1EADp ", /*#__PURE__*/React.createElement("strong", null, "s\u1ED1 l\u01B0\u1EE3ng tr\u1EA3"), " v\xE0o c\u1ED9t t\u01B0\u01A1ng \u1EE9ng. V\u1EDBi s\u1EA3n ph\u1EA9m kh\xF4ng tr\u1EA3, b\u1EA5m bi\u1EC3u t\u01B0\u1EE3ng th\xF9ng r\xE1c \u0111\u1EC3 x\xF3a kh\u1ECFi phi\u1EBFu tr\u1EA3."), /*#__PURE__*/React.createElement("li", null, "T\xEDch v\xE0o ", /*#__PURE__*/React.createElement("em", null, "C\u1EADp nh\u1EADt s\u1ED1 l\u01B0\u1EE3ng tr\xEAn SO/PO"), " n\u1EBFu mu\u1ED1n c\u1EADp nh\u1EADt l\u1EA1i s\u1ED1 l\u01B0\u1EE3ng \u0111\xE3 nh\u1EADn tr\xEAn \u0111\u01A1n sau khi tr\u1EA3; b\u1ECF t\xEDch n\u1EBFu kh\xF4ng mu\u1ED1n c\u1EADp nh\u1EADt.")))), /*#__PURE__*/React.createElement(Step, {
    num: 3,
    title: "X\xE1c nh\u1EADn tr\u1EA3 h\xE0ng"
  }, "Sau khi nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin, b\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "TR\u1EA2 H\xC0NG"), " \u0111\u1EC3 x\xE1c nh\u1EADn. Tr\u01B0\u1EDDng h\u1EE3p kh\xF4ng x\xE1c nh\u1EADn, b\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "H\u1EE6Y"), "."), /*#__PURE__*/React.createElement(Step, {
    num: 4,
    title: "X\xE1c nh\u1EADn phi\u1EBFu xu\u1EA5t kho"
  }, "H\u1EC7 th\u1ED1ng t\u1EF1 t\u1EA1o 1 ", /*#__PURE__*/React.createElement("strong", null, "phi\u1EBFu xu\u1EA5t kho"), ". B\u1EA5m ", /*#__PURE__*/React.createElement("strong", null, "X\xC1C NH\u1EACN"), " \u0111\u1EC3 chuy\u1EC3n phi\u1EBFu sang tr\u1EA1ng th\xE1i ", /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Ho\xE0n th\xE0nh"), ". H\u1EC7 th\u1ED1ng g\u1EAFn phi\u1EBFu xu\u1EA5t v\u1EDBi \u0111\u01A1n h\xE0ng v\xE0 c\u1EADp nh\u1EADt l\u1EA1i s\u1ED1 l\u01B0\u1EE3ng \u0111\xE3 nh\u1EADn trong \u0111\u01A1n mua (n\u1EBFu tr\u01B0\u1EDBc \u0111\xF3 \u0111\xE3 t\xEDch ch\u1ECDn).")), /*#__PURE__*/React.createElement(H2, {
    id: "faq"
  }, "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      title: "Tôi có thể tạo đơn mua hàng không qua bước Yêu cầu mua hàng được không?",
      content: /*#__PURE__*/React.createElement("p", null, "\u0110\u01B0\u1EE3c. V\xE0o th\u1EB3ng ", /*#__PURE__*/React.createElement("code", null, "Mua h\xE0ng \u2192 \u0110\u01A1n h\xE0ng \u2192 T\u1EA1o"), ". B\u01B0\u1EDBc Y\xEAu c\u1EA7u mua h\xE0ng ch\u1EC9 b\u1EAFt bu\u1ED9c khi doanh nghi\u1EC7p b\u1EADt quy tr\xECnh ph\xEA duy\u1EC7t n\u1ED9i b\u1ED9 trong c\u1EA5u h\xECnh.")
    }, {
      title: "Hệ thống có hỗ trợ ký số / phê duyệt nhiều cấp không?",
      content: /*#__PURE__*/React.createElement("p", null, "C\xF3. Thi\u1EBFt l\u1EADp lu\u1ED3ng duy\u1EC7t nhi\u1EC1u c\u1EA5p theo gi\xE1 tr\u1ECB \u0111\u01A1n ho\u1EB7c ph\xF2ng ban t\u1EA1i", /*#__PURE__*/React.createElement("code", null, " C\u1EA5u h\xECnh \u2192 Quy t\u1EAFc ph\xEA duy\u1EC7t"), ".")
    }, {
      title: "Trả hàng có tự động giảm công nợ phải trả không?",
      content: /*#__PURE__*/React.createElement("p", null, "N\u1EBFu h\xF3a \u0111\u01A1n \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA1o, b\u1EA1n c\u1EA7n t\u1EA1o th\xEAm ", /*#__PURE__*/React.createElement("strong", null, "Gi\u1EA5y b\xE1o c\xF3"), " (credit note) t\u01B0\u01A1ng \u1EE9ng \u0111\u1EC3 \u0111i\u1EC1u ch\u1EC9nh c\xF4ng n\u1EE3. Phi\u1EBFu xu\u1EA5t tr\u1EA3 ch\u1EC9 \u0111i\u1EC1u ch\u1EC9nh t\u1ED3n kho.")
    }]
  }), /*#__PURE__*/React.createElement(H2, {
    id: "lien-quan"
  }, "Module li\xEAn quan"), /*#__PURE__*/React.createElement(ModuleGrid, {
    items: [{
      title: "Tồn kho",
      sub: "Nhập / xuất / kiểm kê",
      icon: /*#__PURE__*/React.createElement(Icons.Box, {
        size: 20
      })
    }, {
      title: "Bán hàng",
      sub: "Báo giá & đơn bán",
      icon: /*#__PURE__*/React.createElement(Icons.Receipt, {
        size: 20
      })
    }, {
      title: "Kế toán",
      sub: "Hóa đơn & công nợ",
      icon: /*#__PURE__*/React.createElement(Icons.Money, {
        size: 20
      })
    }]
  }), /*#__PURE__*/React.createElement("nav", {
    className: "pager"
  }, /*#__PURE__*/React.createElement("a", {
    className: "pager-link",
    href: "#hoa-don"
  }, /*#__PURE__*/React.createElement(Icons.ArrowLeft, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "pager-label"
  }, "Tr\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("span", {
    className: "pager-title"
  }, "H\xF3a \u0111\u01A1n & C\xF4ng n\u1EE3")), /*#__PURE__*/React.createElement("a", {
    className: "pager-link next",
    href: "#ban-hang"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pager-label"
  }, "Ti\u1EBFp theo"), /*#__PURE__*/React.createElement("span", {
    className: "pager-title"
  }, "Module B\xE1n h\xE0ng"), /*#__PURE__*/React.createElement(Icons.ArrowRight, {
    size: 16
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/docs-demo.jsx", error: String((e && e.message) || e) }); }

// scripts/docs-home-index.jsx
try { (() => {
/* =====================================================
   HOME = "Hướng dẫn sử dụng" (directory layout)
   Trình bày theo dạng danh bạ nhiều cột (như Odoo docs):
   mỗi MODULE là một khối tiêu đề gạch chân, bên dưới là
   danh sách chủ đề (mục lục) liên kết sâu vào trang module.
   Dữ liệu lấy từ window.MODULE_INDEX.
   ===================================================== */

const {
  useState: useStateI
} = React;
const HOME_HREF = "Trang chủ - Hướng dẫn sử dụng.html";
const GROUP_ORDER = ["Mua sắm & Kho", "Bán hàng & Khách hàng", "Nhân sự", "Vận hành"];
const IDX = () => Array.isArray(window.MODULE_INDEX) ? window.MODULE_INDEX : [];

/* ----- Sidebar tree: tổng quan + toàn bộ module theo nhóm ----- */
function buildHomeTree(index) {
  const byGroup = {};
  index.forEach(m => {
    (byGroup[m.group] = byGroup[m.group] || []).push(m);
  });
  const groups = [{
    id: "start",
    title: "Bắt đầu",
    onPath: true,
    items: [{
      id: "home",
      label: "Tổng quan tài liệu",
      href: HOME_HREF,
      active: true,
      onPath: true
    }]
  }];
  GROUP_ORDER.forEach(g => {
    if (!byGroup[g]) return;
    groups.push({
      id: g,
      title: g,
      onPath: false,
      items: byGroup[g].map(m => ({
        id: m.slug,
        label: m.title,
        href: m.slug + ".html",
        active: false,
        onPath: false
      }))
    });
  });
  return {
    root: {
      label: "Tài liệu Zotech"
    },
    groups
  };
}

/* Một số nhãn mục lục trong dữ liệu nguồn là cả đoạn văn; rút gọn
   thành tiêu đề ngắn cho lưới danh bạ (giữ nguyên link & tooltip). */
function cleanLabel(s) {
  let t = String(s || "").split(/[.(:]/)[0].trim();
  if (!t) t = String(s || "").trim();
  if (t.length > 40) t = t.slice(0, 40).replace(/[\s,;]+\S*$/, "").trim() + "\u2026";
  return t;
}

/* ----- Một khối module trong lưới danh bạ ----- */
function GroupBlock({
  m
}) {
  const href = m.slug + ".html";
  return /*#__PURE__*/React.createElement("div", {
    className: "idx-group"
  }, /*#__PURE__*/React.createElement("a", {
    className: "idx-group-title",
    href: href
  }, m.title), /*#__PURE__*/React.createElement("div", {
    className: "idx-links"
  }, (m.toc || []).map(t => /*#__PURE__*/React.createElement("a", {
    className: "idx-link",
    href: href + "#" + t.id,
    key: t.id,
    title: t.label
  }, cleanLabel(t.label)))));
}
function HomeIndex() {
  const [lang, setLang] = useStateI("vi");
  const index = IDX();
  const byGroup = {};
  index.forEach(m => {
    (byGroup[m.group] = byGroup[m.group] || []).push(m);
  });

  // Thứ tự module: theo nhóm nghiệp vụ để các khối liên quan đứng gần nhau.
  const ordered = GROUP_ORDER.flatMap(g => byGroup[g] || []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopNav, {
    lang: lang,
    onLang: setLang,
    version: "v2.4",
    brandName: "Zotech",
    brandSub: "docs"
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell shell--no-toc"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    tree: buildHomeTree(index),
    activeSubId: "home",
    onSelect: () => {}
  }), /*#__PURE__*/React.createElement("main", {
    className: "shell-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "idx-topbar"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Tài liệu",
      href: HOME_HREF
    }, {
      label: "Hướng dẫn sử dụng"
    }]
  }), /*#__PURE__*/React.createElement("a", {
    className: "idx-edit-link",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icons.Pencil, {
    size: 14
  }), " \u0110\u1EC1 xu\u1EA5t ch\u1EC9nh s\u1EEDa")), /*#__PURE__*/React.createElement("div", {
    className: "idx-head"
  }, /*#__PURE__*/React.createElement("h1", null, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng"), /*#__PURE__*/React.createElement("p", {
    className: "idx-lede"
  }, "Kh\xE1m ph\xE1 t\xE0i li\u1EC7u h\u01B0\u1EDBng d\u1EABn v\xE0 quy tr\xECnh c\u1EA5u h\xECnh cho t\u1EEBng ph\xE2n h\u1EC7 nghi\u1EC7p v\u1EE5 c\u1EE7a h\u1EC7 th\u1ED1ng Zotech \u2014 m\u1ED7i m\u1EE5c d\u1EABn t\u1EDBi quy tr\xECnh t\u1EEBng b\u01B0\u1EDBc, b\u1EA3ng di\u1EC5n gi\u1EA3i tr\u01B0\u1EDDng d\u1EEF li\u1EC7u v\xE0 \u1EA3nh ch\u1EE5p m\xE0n h\xECnh th\u1EF1c t\u1EBF.")), /*#__PURE__*/React.createElement("div", {
    className: "idx-cols"
  }, ordered.map(m => /*#__PURE__*/React.createElement(GroupBlock, {
    key: m.slug,
    m: m
  }))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(HomeIndex, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/docs-home-index.jsx", error: String((e && e.message) || e) }); }

// scripts/docs-home.jsx
try { (() => {
/* =====================================================
   HOME PAGE — Trang chủ tài liệu (landing)
   Hero + search · lối tắt Bắt đầu · lưới Module · bài xem nhiều
   ===================================================== */

const {
  useState: useStateH
} = React;
const QUICK_START = [{
  icon: /*#__PURE__*/React.createElement(Icons.Home, {
    size: 20
  }),
  title: "Giới thiệu hệ thống",
  sub: "Tổng quan kiến trúc, các phân hệ và cách chúng liên thông với nhau.",
  link: "#"
}, {
  icon: /*#__PURE__*/React.createElement(Icons.Sparkle, {
    size: 20
  }),
  title: "Bắt đầu nhanh",
  sub: "Đăng nhập, thiết lập công ty và phân quyền người dùng trong 10 phút.",
  link: "#"
}, {
  icon: /*#__PURE__*/React.createElement(Icons.Layers, {
    size: 20
  }),
  title: "Giao diện tổng quan",
  sub: "Làm quen menu, thanh tìm kiếm, bộ lọc và các thao tác chung.",
  link: "#"
}];
const MODULES = [{
  icon: /*#__PURE__*/React.createElement(Icons.Cart, {
    size: 22
  }),
  title: "Mua hàng",
  badge: "v2.4",
  sub: "Yêu cầu mua, đơn mua, nhập kho, hóa đơn & trả hàng.",
  count: "10 bài viết",
  href: "Mua hàng - Hướng dẫn sử dụng.html"
}, {
  icon: /*#__PURE__*/React.createElement(Icons.Receipt, {
    size: 22
  }),
  title: "Bán hàng",
  sub: "Báo giá, đơn bán, giao hàng và xuất hóa đơn.",
  count: "8 bài viết",
  href: "#"
}, {
  icon: /*#__PURE__*/React.createElement(Icons.Money, {
    size: 22
  }),
  title: "POS",
  sub: "Bán hàng tại điểm, ca làm việc và đối soát.",
  count: "6 bài viết",
  href: "#"
}, {
  icon: /*#__PURE__*/React.createElement(Icons.Box, {
    size: 22
  }),
  title: "Tồn kho",
  sub: "Nhập, xuất, điều chuyển và kiểm kê kho.",
  count: "9 bài viết",
  href: "#"
}, {
  icon: /*#__PURE__*/React.createElement(Icons.Settings, {
    size: 22
  }),
  title: "Sản xuất",
  sub: "Lệnh sản xuất, định mức nguyên vật liệu (BOM).",
  count: "7 bài viết",
  href: "#"
}, {
  icon: /*#__PURE__*/React.createElement(Icons.Users, {
    size: 22
  }),
  title: "CRM",
  sub: "Tiềm năng, cơ hội, đội ngũ bán hàng và pipeline.",
  count: "8 bài viết",
  href: "#"
}];
const POPULAR = [{
  title: "Cách tạo Yêu cầu mua hàng và gửi phê duyệt",
  path: "Mua hàng › Nghiệp vụ",
  href: "Mua hàng - Hướng dẫn sử dụng.html#yeu-cau"
}, {
  title: "Trả hàng cho nhà cung cấp",
  path: "Mua hàng › Nghiệp vụ",
  href: "Mua hàng - Hướng dẫn sử dụng.html#tra-hang"
}, {
  title: "Thiết lập bảng giá theo nhà cung cấp",
  path: "Mua hàng › Cấu hình",
  href: "Mua hàng - Hướng dẫn sử dụng.html#bang-gia"
}, {
  title: "Phân quyền người dùng theo vai trò",
  path: "Bắt đầu › Thiết lập",
  href: "#"
}, {
  title: "Kiểm kê và điều chỉnh tồn kho",
  path: "Tồn kho › Nghiệp vụ",
  href: "#"
}];
function Home() {
  const [lang, setLang] = useStateH("vi");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopNav, {
    lang: lang,
    onLang: setLang,
    version: "v2.4",
    brandName: "Zotech Docs",
    brandSub: "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng"
  }), /*#__PURE__*/React.createElement("div", {
    className: "home"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement(Icons.Book, {
    size: 13
  }), " T\xE0i li\u1EC7u ch\xEDnh th\u1EE9c \xB7 C\u1EADp nh\u1EADt cho v2.4"), /*#__PURE__*/React.createElement("h1", null, "B\u1EA1n c\u1EA7n h\u01B0\u1EDBng d\u1EABn g\xEC h\xF4m nay?"), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng \u0111\u1EA7y \u0111\u1EE7 cho h\u1EC7 th\u1ED1ng Zotech \u2014 t\u1EEBng thao t\xE1c, t\u1EEBng ph\xE2n h\u1EC7, c\xF3 v\xED d\u1EE5 v\xE0 \u1EA3nh minh h\u1ECDa."), /*#__PURE__*/React.createElement("div", {
    className: "hero-search"
  }, /*#__PURE__*/React.createElement(Icons.Search, {
    size: 20,
    className: "hero-search-icon"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "T\xECm trong t\xE0i li\u1EC7u\u2026 (vd: tr\u1EA3 h\xE0ng, h\xF3a \u0111\u01A1n, ph\xE2n quy\u1EC1n)",
    "aria-label": "T\xECm ki\u1EBFm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-search-kbd"
  }, /*#__PURE__*/React.createElement(Kbd, null, "\u2318"), /*#__PURE__*/React.createElement(Kbd, null, "K"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-chips"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--fg-subtle)",
      alignSelf: "center",
      marginRight: 4
    }
  }, "Ph\u1ED5 bi\u1EBFn:"), /*#__PURE__*/React.createElement("a", {
    className: "hero-chip",
    href: "Mua h\xE0ng - H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng.html#tra-hang"
  }, "Tr\u1EA3 h\xE0ng"), /*#__PURE__*/React.createElement("a", {
    className: "hero-chip",
    href: "Mua h\xE0ng - H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng.html#yeu-cau"
  }, "Y\xEAu c\u1EA7u mua h\xE0ng"), /*#__PURE__*/React.createElement("a", {
    className: "hero-chip",
    href: "Mua h\xE0ng - H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng.html#hoa-don"
  }, "H\xF3a \u0111\u01A1n & c\xF4ng n\u1EE3"), /*#__PURE__*/React.createElement("a", {
    className: "hero-chip",
    href: "#"
  }, "Ph\xE2n quy\u1EC1n")))), /*#__PURE__*/React.createElement("section", {
    className: "home-section",
    "data-screen-label": "B\u1EAFt \u0111\u1EA7u"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "B\u1EAFt \u0111\u1EA7u"), /*#__PURE__*/React.createElement("p", null, "M\u1EDBi l\xE0m quen v\u1EDBi h\u1EC7 th\u1ED1ng? B\u1EAFt \u0111\u1EA7u t\u1EEB \u0111\xE2y.")), /*#__PURE__*/React.createElement("div", {
    className: "qs-grid"
  }, QUICK_START.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "qs-card",
    href: c.link,
    onClick: c.link === "#" ? e => e.preventDefault() : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "qs-card-icon"
  }, c.icon), /*#__PURE__*/React.createElement("span", {
    className: "qs-card-title"
  }, c.title), /*#__PURE__*/React.createElement("span", {
    className: "qs-card-sub"
  }, c.sub), /*#__PURE__*/React.createElement("span", {
    className: "qs-card-link"
  }, "Xem h\u01B0\u1EDBng d\u1EABn ", /*#__PURE__*/React.createElement(Icons.ArrowRight, {
    size: 14
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "home-section",
    "data-screen-label": "Module"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Kh\xE1m ph\xE1 theo module"), /*#__PURE__*/React.createElement("p", null, "Ch\u1ECDn ph\xE2n h\u1EC7 nghi\u1EC7p v\u1EE5 b\u1EA1n \u0111ang s\u1EED d\u1EE5ng.")), /*#__PURE__*/React.createElement("div", {
    className: "mod-grid"
  }, MODULES.map((m, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "mod-card",
    href: m.href,
    onClick: m.href === "#" ? e => e.preventDefault() : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "mod-card-icon"
  }, m.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mod-card-title"
  }, m.title, m.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, m.badge)), /*#__PURE__*/React.createElement("span", {
    className: "mod-card-sub",
    style: {
      display: "block"
    }
  }, m.sub), /*#__PURE__*/React.createElement("span", {
    className: "mod-card-count",
    style: {
      display: "block"
    }
  }, m.count)))))), /*#__PURE__*/React.createElement("section", {
    className: "home-section",
    "data-screen-label": "Xem nhi\u1EC1u"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "B\xE0i vi\u1EBFt xem nhi\u1EC1u"), /*#__PURE__*/React.createElement("p", null, "Nh\u1EEFng h\u01B0\u1EDBng d\u1EABn \u0111\u01B0\u1EE3c tra c\u1EE9u nhi\u1EC1u nh\u1EA5t tu\u1EA7n qua.")), /*#__PURE__*/React.createElement("div", {
    className: "art-list"
  }, POPULAR.map((a, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "art-row",
    href: a.href,
    onClick: a.href === "#" ? e => e.preventDefault() : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "art-row-icon"
  }, /*#__PURE__*/React.createElement(Icons.File, {
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "art-row-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "art-row-title",
    style: {
      display: "block"
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    className: "art-row-path",
    style: {
      display: "block"
    }
  }, a.path)), /*#__PURE__*/React.createElement("span", {
    className: "art-row-arrow"
  }, /*#__PURE__*/React.createElement(Icons.ArrowRight, {
    size: 16
  })))))), /*#__PURE__*/React.createElement("footer", {
    className: "home-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-footer-inner"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Zotech Docs \xB7 H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng v2.4"), /*#__PURE__*/React.createElement("span", {
    className: "home-footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0110i\u1EC1u kho\u1EA3n"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Li\xEAn h\u1EC7 h\u1ED7 tr\u1EE3"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "G\xF3p \xFD t\xE0i li\u1EC7u"))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Home, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/docs-home.jsx", error: String((e && e.message) || e) }); }

// scripts/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* =====================================================
   ICONS — minimal stroke icon set (24/24, 1.75 stroke)
   Exposed on window.Icons for use across files
   ===================================================== */

const Icon = ({
  children,
  size = 18,
  stroke = 1.75,
  fill = "none",
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: fill,
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, rest), children);
const Icons = {
  Search: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  })),
  Menu: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })),
  Close: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6l-12 12"
  })),
  ChevronRight: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  })),
  ChevronDown: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  ChevronLeft: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m15 6-6 6 6 6"
  })),
  ArrowRight: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  })),
  ArrowLeft: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M11 5l-7 7 7 7"
  })),
  ExternalLink: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
  })),
  Copy: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "12",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15V5a2 2 0 0 1 2-2h10"
  })),
  Check: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m5 12 5 5L20 7"
  })),
  Info: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v.01M11 12h1v5h1"
  })),
  Warning: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })),
  Success: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8 12 3 3 5-6"
  })),
  Danger: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01"
  })),
  Tip: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a7 7 0 0 0-4 12.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26A7 7 0 0 0 12 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 22h4"
  })),
  Sun: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"
  })),
  Moon: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
  })),
  GitHub: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 7.77 5.07 5.07 0 0 0 19.91 4S18.73 3.65 16 5.48a13.38 13.38 0 0 0-7 0C6.27 3.65 5.09 4 5.09 4A5.07 5.07 0 0 0 5 7.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25"
  })),
  Book: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
  })),
  Home: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2Z"
  })),
  Settings: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
  })),
  Cart: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"
  })),
  Users: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
  })),
  Truck: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M1 3h15v13H1zM16 8h4l3 3v5h-7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "18.5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18.5",
    cy: "18.5",
    r: "2.5"
  })),
  Box: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3.3 7 8.7 5 8.7-5M12 22V12"
  })),
  File: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6M8 13h8M8 17h5"
  })),
  Receipt: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 2v20l3-2 3 2 3-2 3 2 3-2 1 2V2H4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7h8M8 11h8M8 15h5"
  })),
  Money: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "6",
    width: "20",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12h.01M18 12h.01"
  })),
  Bar: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "12",
    width: "3",
    height: "6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "8",
    width: "3",
    height: "10"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "17",
    y: "5",
    width: "3",
    height: "13"
  })),
  Phone: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"
  })),
  Mail: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 7 10 6 10-6"
  })),
  Calendar: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  })),
  Globe: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"
  })),
  Hash: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"
  })),
  Thumbs: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.3a2 2 0 0 0 2-1.7l1.4-9A2 2 0 0 0 19.7 9zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
  })),
  ThumbsDown: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.7a2 2 0 0 0-2 1.7l-1.4 9A2 2 0 0 0 4.3 15zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
  })),
  Cursor: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
  })),
  Pencil: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"
  })),
  Sparkle: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
  })),
  Layers: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m12 2 10 6-10 6L2 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 17 10 6 10-6M2 12l10 6 10-6"
  })),
  Target: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }))
};
window.Icon = Icon;
window.Icons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/icons.jsx", error: String((e && e.message) || e) }); }

// scripts/module-page.jsx
try { (() => {
/* =====================================================
   MODULE PAGE — generic data-driven renderer
   Reads window.MODULES[slug] + window.MODULE_INDEX,
   renders the docs shell + content blocks using the
   existing design-system components.
   ===================================================== */

const {
  useState: useStateMP,
  useEffect: useEffectMP,
  useMemo: useMemoMP
} = React;

/* ---------- group order for the sidebar ---------- */
const GROUP_ORDER = ["Mua sắm & Kho", "Bán hàng & Khách hàng", "Nhân sự", "Vận hành"];
const HOME_HREF = "Trang chủ - Hướng dẫn sử dụng.html";
function buildTree(index, currentSlug, subItems) {
  const byGroup = {};
  index.forEach(m => {
    (byGroup[m.group] = byGroup[m.group] || []).push(m);
  });
  const groups = [{
    id: "start",
    title: "Bắt đầu",
    onPath: false,
    items: [{
      id: "home",
      label: "Giới thiệu hệ thống",
      href: HOME_HREF,
      active: false,
      onPath: false
    }]
  }];
  GROUP_ORDER.forEach(g => {
    if (!byGroup[g]) return;
    const items = byGroup[g].map(m => {
      const active = m.slug === currentSlug;
      return {
        id: m.slug,
        label: m.title,
        href: m.slug + ".html",
        active,
        onPath: active,
        sub: active ? subItems.map(t => ({
          id: t.id,
          label: t.label
        })) : null
      };
    });
    groups.push({
      id: g,
      title: g,
      onPath: items.some(i => i.active),
      items
    });
  });
  return {
    root: {
      label: "Tài liệu Zotech"
    },
    groups
  };
}

/* ---------- block renderers ---------- */
function Shot({
  id
}) {
  const src = "images/image" + id + ".png";
  return /*#__PURE__*/React.createElement("figure", {
    className: "doc-shot"
  }, /*#__PURE__*/React.createElement("a", {
    href: src,
    target: "_blank",
    rel: "noopener",
    title: "M\u1EDF \u1EA3nh \u1EDF tab m\u1EDBi"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    loading: "lazy",
    alt: "Ảnh minh họa bước thao tác"
  })));
}
const LABEL_HEAD = /Trường|Tên|Mã|Cột|Chỉ tiêu|Thông tin|Bước|STT|Field/i;
function GenTable({
  headers,
  rows
}) {
  const labelFirst = headers.length >= 2 && LABEL_HEAD.test((headers[0] || "").replace(/<[^>]+>/g, ""));
  return /*#__PURE__*/React.createElement("div", {
    className: "table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headers.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    dangerouslySetInnerHTML: {
      __html: h
    }
  })))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    className: labelFirst && ci === 0 ? "table-firstcol" : undefined,
    dangerouslySetInnerHTML: {
      __html: c
    }
  })))))));
}
function NoteBlock({
  b
}) {
  return /*#__PURE__*/React.createElement(Callout, {
    tone: "warn",
    title: "L\u01B0u \xFD"
  }, b.html ? /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: b.html
    }
  }) : null, b.items && b.items.length > 0 && /*#__PURE__*/React.createElement("ul", null, b.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    dangerouslySetInnerHTML: {
      __html: it
    }
  }))));
}
function Child({
  b
}) {
  switch (b.t) {
    case "h2":
      return /*#__PURE__*/React.createElement("h2", {
        id: b.id,
        className: "h-anchored",
        dangerouslySetInnerHTML: {
          __html: b.text
        }
      });
    case "h3":
      return /*#__PURE__*/React.createElement("h3", {
        id: b.id,
        className: "h-anchored",
        dangerouslySetInnerHTML: {
          __html: b.text
        }
      });
    case "h4":
      return /*#__PURE__*/React.createElement("h4", {
        id: b.id,
        className: "doc-h4",
        dangerouslySetInnerHTML: {
          __html: b.text
        }
      });
    case "p":
      return /*#__PURE__*/React.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: b.html
        }
      });
    case "ul":
      return /*#__PURE__*/React.createElement("ul", null, b.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
        key: i,
        dangerouslySetInnerHTML: {
          __html: it
        }
      })));
    case "img":
      return /*#__PURE__*/React.createElement(Shot, {
        id: b.id
      });
    case "table":
      return /*#__PURE__*/React.createElement(GenTable, {
        headers: b.headers,
        rows: b.rows
      });
    case "note":
      return /*#__PURE__*/React.createElement(NoteBlock, {
        b: b
      });
    default:
      return null;
  }
}

/* ---------- purpose / overview extraction ---------- */
function plainText(html) {
  return (html || "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
}

/* Pull the opening "Mục đích" statement out of the flow so we can render it
   as a designed overview block (and avoid repeating it as the page lede). */
function splitPurpose(blocks) {
  const PURPOSE = /^Mục đích/i;
  for (let i = 0; i < Math.min(blocks.length, 4); i++) {
    const b = blocks[i];
    if (b.t === "p" && PURPOSE.test(plainText(b.html))) {
      const inline = plainText(b.html).replace(/^Mục đích[^:：]*[:：]?\s*/i, "").trim();
      let items = null,
        remove = new Set([i]);
      if (!inline) {
        for (let j = i + 1; j < blocks.length; j++) {
          if (blocks[j].t === "ul") {
            items = blocks[j].items;
            remove.add(j);
            break;
          }
          if (blocks[j].t === "p") {
            break;
          }
          if (/^h/.test(blocks[j].t)) break;
        }
      }
      const rest = blocks.filter((_, idx) => !remove.has(idx));
      return {
        purpose: {
          inline,
          items
        },
        rest
      };
    }
  }
  return {
    purpose: null,
    rest: blocks
  };
}
function Overview({
  purpose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "overview-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overview-icon"
  }, /*#__PURE__*/React.createElement(Icons.Target, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "overview-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overview-label"
  }, "M\u1EE5c \u0111\xEDch"), purpose.inline ? /*#__PURE__*/React.createElement("p", {
    className: "overview-text"
  }, purpose.inline) : purpose.items && purpose.items.length === 1 ? /*#__PURE__*/React.createElement("p", {
    className: "overview-text",
    dangerouslySetInnerHTML: {
      __html: purpose.items[0]
    }
  }) : purpose.items && purpose.items.length ? /*#__PURE__*/React.createElement("ul", {
    className: "overview-list"
  }, purpose.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    dangerouslySetInnerHTML: {
      __html: it
    }
  }))) : null));
}
function StepBody({
  s
}) {
  return /*#__PURE__*/React.createElement(Step, {
    num: s.num
  }, s.html ? /*#__PURE__*/React.createElement("div", {
    className: "step-text",
    dangerouslySetInnerHTML: {
      __html: s.html
    }
  }) : null, s.children.map((c, ci) => /*#__PURE__*/React.createElement(Child, {
    key: ci,
    b: c
  })));
}
function Blocks({
  blocks
}) {
  const out = [];
  let i = 0;
  while (i < blocks.length) {
    if (blocks[i].t === "step") {
      const group = [];
      while (i < blocks.length && blocks[i].t === "step") {
        group.push(blocks[i]);
        i++;
      }
      out.push(/*#__PURE__*/React.createElement(Steps, {
        key: "steps-" + i
      }, group.map((s, si) => /*#__PURE__*/React.createElement(StepBody, {
        key: si,
        s: s
      }))));
      continue;
    }
    out.push(/*#__PURE__*/React.createElement(Child, {
      key: i,
      b: blocks[i]
    }));
    i++;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, out);
}

/* ---------- FAQ (câu hỏi thường gặp) ---------- */
function Faq({
  items
}) {
  if (!items || !items.length) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    id: "cau-hoi-thuong-gap",
    className: "h-anchored"
  }, "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p"), /*#__PURE__*/React.createElement(Accordion, {
    items: items.map(it => ({
      title: it.q,
      content: /*#__PURE__*/React.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: it.a
        }
      })
    }))
  }));
}

/* ---------- related modules (same group) ---------- */
function Related({
  index,
  slug
}) {
  const me = index.find(m => m.slug === slug);
  const sibs = index.filter(m => m.group === me.group && m.slug !== slug).slice(0, 4);
  if (sibs.length === 0) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    id: "module-lien-quan",
    className: "h-anchored"
  }, "Module li\xEAn quan"), /*#__PURE__*/React.createElement(ModuleGrid, {
    items: sibs.map(m => {
      const IconCmp = Icons[m.icon] || Icons.Book;
      return {
        title: m.title,
        sub: m.group,
        icon: /*#__PURE__*/React.createElement(IconCmp, {
          size: 20
        }),
        href: m.slug + ".html"
      };
    })
  }));
}

/* ---------- build the right-hand "ON THIS PAGE" list ----------
   Trang module = MỘT trang cuộn dài (như tài liệu Odoo gốc). Mỗi section có
   cùng bộ h3 ("Mô tả", "Các bước thực hiện") nên TOC chỉ liệt kê các mục
   chính (h2) cho gọn — giống "On this page" của Odoo — cộng FAQ + Liên quan. */
function buildToc(rest, hasFaq, hasRelated) {
  const items = [];
  for (const b of rest) {
    if (b.t === "h2") items.push({
      id: b.id,
      label: plainText(b.text),
      depth: 2
    });
  }
  if (hasFaq) items.push({
    id: "cau-hoi-thuong-gap",
    label: "Câu hỏi thường gặp",
    depth: 2
  });
  if (hasRelated) items.push({
    id: "module-lien-quan",
    label: "Module liên quan",
    depth: 2
  });
  return items;
}

/* ---------- app ---------- */
function ModuleApp({
  slug
}) {
  const data = window.MODULES[slug];
  const index = window.MODULE_INDEX;
  const meta = index.find(m => m.slug === slug) || {};
  const [lang, setLang] = useStateMP("vi");
  const hasFaq = !!(data.faq && data.faq.length);

  /* related siblings (same group) */
  const relatedSibs = useMemoMP(() => {
    const me = index.find(m => m.slug === slug) || {};
    return index.filter(m => m.group === me.group && m.slug !== slug).slice(0, 4);
  }, [slug]);
  const hasRelated = relatedSibs.length > 0;

  /* purpose card + remaining blocks (rendered in ONE continuous scroll) */
  const {
    purpose,
    rest
  } = useMemoMP(() => splitPurpose(data.blocks), [slug]);

  /* right-hand "ON THIS PAGE" = every h2 + h3 heading, in order */
  const tocItems = useMemoMP(() => buildToc(rest, hasFaq, hasRelated), [rest, hasFaq, hasRelated]);
  const spy = useScrollSpy(tocItems.length ? tocItems.map(t => t.id) : ["__none"], 140);

  /* sidebar leaves = the h2 sections of this module (deep-link + smooth scroll) */
  const sectionAnchors = useMemoMP(() => tocItems.filter(t => t.depth === 2), [tocItems]);
  const scrollToId = id => {
    const el = document.getElementById(id);
    if (!el) return;
    const target = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 96);
    if (window.history.replaceState) window.history.replaceState(null, "", "#" + id);
    /* Instant auto scroll — window.scrollTo({behavior:"smooth"}) AND
       requestAnimationFrame are silent no-ops inside sandboxed/backgrounded
       preview iframes, so jump directly to keep section nav reliable. */
    window.scrollTo(0, target);
  };

  /* honour an incoming #hash on first paint (deep links from home / sidebar) */
  useEffectMP(() => {
    const h = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
    if (!h) return;
    const t = setTimeout(() => {
      const el = document.getElementById(h);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({
          top: Math.max(0, y),
          behavior: "auto"
        });
      }
    }, 60);
    return () => clearTimeout(t);
  }, [slug]);
  const tree = buildTree(index, slug, sectionAnchors.map(t => ({
    id: t.id,
    label: t.label
  })));

  /* pager across modules */
  const pos = index.findIndex(m => m.slug === slug);
  const prevMod = index[pos - 1],
    nextMod = index[pos + 1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopNav, {
    lang: lang,
    onLang: setLang,
    version: "v2.4",
    brandName: "Zotech",
    brandSub: "docs"
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell" + (tocItems.length ? "" : " shell--no-toc")
  }, /*#__PURE__*/React.createElement(Sidebar, {
    tree: tree,
    activeSubId: spy,
    onSelect: scrollToId
  }), /*#__PURE__*/React.createElement("main", {
    className: "shell-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "article-toolbar"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Tài liệu",
      href: HOME_HREF
    }, {
      label: meta.group || "Module",
      href: HOME_HREF
    }, {
      label: data.title
    }]
  }), /*#__PURE__*/React.createElement("a", {
    className: "edit-link",
    href: "#",
    title: "\u0110\u1EC1 xu\u1EA5t ch\u1EC9nh s\u1EEDa tr\xEAn GitHub"
  }, /*#__PURE__*/React.createElement(Icons.Pencil, {
    size: 14
  }), " S\u1EEDa tr\xEAn GitHub")), /*#__PURE__*/React.createElement("h1", null, data.title), meta.summary && /*#__PURE__*/React.createElement("p", {
    className: "article-lede"
  }, meta.summary), /*#__PURE__*/React.createElement("div", {
    className: "article-meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: /*#__PURE__*/React.createElement(Icons.Book, {
      size: 13
    })
  }, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: /*#__PURE__*/React.createElement(Icons.Calendar, {
      size: 13
    })
  }, "C\u1EADp nh\u1EADt 29/05/2026"), meta.imgs ? /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: /*#__PURE__*/React.createElement(Icons.Box, {
      size: 13
    })
  }, meta.imgs, " \u1EA3nh minh h\u1ECDa") : null), purpose && /*#__PURE__*/React.createElement(Overview, {
    purpose: purpose
  }), /*#__PURE__*/React.createElement(Blocks, {
    blocks: rest
  }), hasFaq && /*#__PURE__*/React.createElement(Faq, {
    items: data.faq
  }), hasRelated && /*#__PURE__*/React.createElement(Related, {
    index: index,
    slug: slug
  }), /*#__PURE__*/React.createElement("nav", {
    className: "pager"
  }, prevMod ? /*#__PURE__*/React.createElement("a", {
    className: "pager-link",
    href: prevMod.slug + ".html"
  }, /*#__PURE__*/React.createElement(Icons.ArrowLeft, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "pager-label"
  }, "Module tr\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("span", {
    className: "pager-title"
  }, prevMod.title)) : /*#__PURE__*/React.createElement("a", {
    className: "pager-link",
    href: HOME_HREF
  }, /*#__PURE__*/React.createElement(Icons.ArrowLeft, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "pager-label"
  }, "Quay l\u1EA1i"), /*#__PURE__*/React.createElement("span", {
    className: "pager-title"
  }, "Gi\u1EDBi thi\u1EC7u h\u1EC7 th\u1ED1ng")), nextMod ? /*#__PURE__*/React.createElement("a", {
    className: "pager-link next",
    href: nextMod.slug + ".html"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pager-label"
  }, "Module ti\u1EBFp theo"), /*#__PURE__*/React.createElement("span", {
    className: "pager-title"
  }, nextMod.title), /*#__PURE__*/React.createElement(Icons.ArrowRight, {
    size: 16
  })) : /*#__PURE__*/React.createElement("span", null)))), tocItems.length > 0 && /*#__PURE__*/React.createElement(TOC, {
    items: tocItems,
    activeId: spy
  })));
}
window.ModuleApp = ModuleApp;

/* auto-mount when a slug is provided */
(function () {
  const slug = window.__SLUG__;
  if (slug && window.MODULES && window.MODULES[slug]) {
    ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ModuleApp, {
      slug: slug
    }));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/module-page.jsx", error: String((e && e.message) || e) }); }

// scripts/nav.jsx
try { (() => {
/* =====================================================
   NAVIGATION — TopNav, Sidebar, Breadcrumb, TOC
   ===================================================== */

const {
  useState: useStateN,
  useEffect: useEffectN,
  useRef: useRefN,
  useMemo: useMemoN
} = React;

/* ---------- Sidebar tree data shape ----------
   tree: {
     root: { label, icon },
     groups: [{
       id, title, onPath,
       items: [{ id, label, href, active, onPath,
                 sub?: [{ id, label, active }] }]
     }]
   }
   A doc-portal tree: level-1 groups expand/collapse, the active
   module is highlighted, and its on-page headings nest beneath it.
*/

const Sidebar = ({
  tree,
  activeSubId,
  onSelect
}) => {
  // groups on the active path start expanded; others collapsed
  const [open, setOpen] = useStateN(() => {
    const init = {};
    tree.groups.forEach(g => {
      init[g.id] = !!g.onPath;
    });
    return init;
  });
  const toggle = id => setOpen(o => ({
    ...o,
    [id]: !o[id]
  }));
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidebar no-scrollbar",
    "aria-label": "M\u1EE5c l\u1EE5c t\xE0i li\u1EC7u"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-root"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-root-mark"
  }, /*#__PURE__*/React.createElement(Icons.Book, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, tree.root.label)), /*#__PURE__*/React.createElement("nav", {
    className: "sb-tree"
  }, tree.groups.map(g => {
    const isOpen = open[g.id];
    return /*#__PURE__*/React.createElement("div", {
      className: "sb-node",
      key: g.id
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `sb-row sb-group${g.onPath ? " is-onpath" : ""}`,
      "aria-expanded": isOpen,
      onClick: () => toggle(g.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: `sb-chev${isOpen ? " is-open" : ""}`
    }, /*#__PURE__*/React.createElement(Icons.ChevronRight, {
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-row-label"
    }, g.title)), isOpen && /*#__PURE__*/React.createElement("div", {
      className: `sb-children${g.onPath ? " is-onpath" : ""}`
    }, g.items.map(it => /*#__PURE__*/React.createElement("div", {
      className: "sb-node",
      key: it.id
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || `#${it.id}`,
      className: `sb-row sb-leaf${it.active ? " is-active" : ""}${it.onPath && !it.active ? " is-onpath" : ""}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "sb-chev is-leaf"
    }, /*#__PURE__*/React.createElement(Icons.ChevronRight, {
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-row-label"
    }, it.label)), it.active && it.sub && it.sub.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "sb-children is-onpath"
    }, it.sub.map(s => /*#__PURE__*/React.createElement("a", {
      key: s.id,
      href: `#${s.id}`,
      className: `sb-row sb-sub${activeSubId === s.id ? " is-active" : ""}`,
      onClick: e => {
        if (onSelect) {
          e.preventDefault();
          onSelect(s.id);
        }
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "sb-row-label"
    }, s.label))))))));
  })));
};

/* ---------- Top Nav (brand · pill search · CTA) + Sub-bar ---------- */
const TopNav = ({
  lang,
  onLang,
  onSearchFocus,
  version = "v2.4",
  brandName,
  brandSub
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
  className: "topnav"
}, /*#__PURE__*/React.createElement("div", {
  className: "topnav-inner"
}, /*#__PURE__*/React.createElement("a", {
  className: "topnav-brand",
  href: "Trang ch\u1EE7 - H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng.html"
}, /*#__PURE__*/React.createElement("div", {
  className: "topnav-brand-mark"
}, "Z"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
  className: "topnav-brand-name"
}, brandName ?? "Zotech"), /*#__PURE__*/React.createElement("span", {
  className: "topnav-brand-sub"
}, brandSub ?? "docs"))), /*#__PURE__*/React.createElement(SearchBox, {
  onFocus: onSearchFocus
}), /*#__PURE__*/React.createElement("div", {
  className: "topnav-actions"
}, /*#__PURE__*/React.createElement("a", {
  className: "btn btn-primary",
  href: "#"
}, "M\u1EDF h\u1EC7 th\u1ED1ng")))), /*#__PURE__*/React.createElement("div", {
  className: "subbar"
}, /*#__PURE__*/React.createElement("div", {
  className: "subbar-inner"
}, /*#__PURE__*/React.createElement(LangSwitch, {
  value: lang,
  onChange: onLang
}), /*#__PURE__*/React.createElement("div", {
  className: "subbar-divider"
}), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "subbar-select",
  title: "Phi\xEAn b\u1EA3n t\xE0i li\u1EC7u"
}, /*#__PURE__*/React.createElement("span", null, "Zotech ", version), /*#__PURE__*/React.createElement("span", {
  className: "chev"
}, /*#__PURE__*/React.createElement(Icons.ChevronDown, {
  size: 14
}))))));

/* ---------- Language Switcher (dropdown-style toggle) ---------- */
const LangSwitch = ({
  value = "vi",
  onChange
}) => /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "subbar-select",
  onClick: () => onChange?.(value === "vi" ? "en" : "vi"),
  title: "\u0110\u1ED5i ng\xF4n ng\u1EEF",
  "aria-label": "Ng\xF4n ng\u1EEF"
}, /*#__PURE__*/React.createElement("span", null, value === "vi" ? "Tiếng Việt" : "English"), /*#__PURE__*/React.createElement("span", {
  className: "chev"
}, /*#__PURE__*/React.createElement(Icons.ChevronDown, {
  size: 14
})));

/* ---------- Search Box with autocomplete ---------- */
/* Built from window.MODULE_INDEX (all modules + their sections). */
function buildSearchData() {
  const idx = window.MODULE_INDEX;
  if (Array.isArray(idx) && idx.length) {
    return idx.map(m => ({
      group: m.title,
      items: [{
        id: m.slug + "__top",
        label: m.title + " — Tổng quan",
        path: m.group,
        href: m.slug + ".html"
      }, ...(m.toc || []).map(t => ({
        id: m.slug + "__" + t.id,
        label: t.label,
        path: m.title,
        href: m.slug + ".html#" + t.id
      }))]
    }));
  }
  return [];
}
const SearchBox = ({
  onFocus
}) => {
  const [q, setQ] = useStateN("");
  const [open, setOpen] = useStateN(false);
  const [focusIdx, setFocusIdx] = useStateN(0);
  const wrapRef = useRefN(null);
  const inputRef = useRefN(null);
  const ALL = useMemoN(buildSearchData, []);
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const filtered = useMemoN(() => {
    if (!q) {
      // empty state: show each module's overview entry only
      return [{
        group: "Tất cả module",
        items: ALL.map(g => g.items[0])
      }];
    }
    const ql = norm(q);
    return ALL.map(g => ({
      ...g,
      items: g.items.filter(it => norm(it.label).includes(ql) || norm(g.group).includes(ql))
    })).filter(g => g.items.length > 0);
  }, [q, ALL]);
  const flat = useMemoN(() => filtered.flatMap(g => g.items), [filtered]);
  useEffectN(() => {
    const onClick = e => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  const onKeyDown = e => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIdx(i => Math.min(i + 1, flat.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIdx(i => Math.max(i - 1, 0));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const target = flat[focusIdx];
      if (target && target.href) {
        window.location.href = target.href;
      }
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "search",
    ref: wrapRef
  }, /*#__PURE__*/React.createElement(Icons.Search, {
    size: 16,
    className: "search-icon"
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "text",
    className: "search-input",
    placeholder: "B\u1EA1n \u0111ang t\xECm g\xEC?",
    value: q,
    onChange: e => {
      setQ(e.target.value);
      setFocusIdx(0);
      setOpen(true);
    },
    onFocus: () => {
      setOpen(true);
      onFocus?.();
    },
    onKeyDown: onKeyDown,
    "aria-label": "T\xECm ki\u1EBFm",
    autoComplete: "off",
    spellCheck: "false"
  }), !open && /*#__PURE__*/React.createElement("span", {
    className: "search-kbd"
  }, /*#__PURE__*/React.createElement(Kbd, null, "\u2318"), /*#__PURE__*/React.createElement(Kbd, null, "K")), open && filtered.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "search-pop",
    role: "listbox"
  }, (() => {
    let runningIdx = 0;
    return filtered.map((g, gi) => /*#__PURE__*/React.createElement("div", {
      className: "search-group",
      key: gi
    }, /*#__PURE__*/React.createElement("div", {
      className: "search-group-label"
    }, g.group), g.items.map(it => {
      const idx = runningIdx++;
      return /*#__PURE__*/React.createElement("div", {
        key: it.id,
        className: `search-result${idx === focusIdx ? " is-focused" : ""}`,
        role: "option",
        "aria-selected": idx === focusIdx,
        onMouseEnter: () => setFocusIdx(idx),
        onMouseDown: e => {
          e.preventDefault();
          if (it.href) {
            window.location.href = it.href;
          }
          setOpen(false);
        },
        style: {
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement(Icons.Hash, {
        size: 14,
        className: "search-result-icon"
      }), /*#__PURE__*/React.createElement("div", {
        className: "search-result-text"
      }, /*#__PURE__*/React.createElement("div", null, it.label), /*#__PURE__*/React.createElement("div", {
        className: "search-result-path"
      }, it.path)), /*#__PURE__*/React.createElement("span", {
        className: "search-result-kbd"
      }, "\u21B5"));
    })));
  })()), open && filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "search-pop"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      textAlign: "center",
      color: "var(--fg-muted)",
      fontSize: 13
    }
  }, "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-strong)"
    }
  }, "\"", q, "\""))));
};

/* ---------- Breadcrumb ---------- */
const Breadcrumb = ({
  items
}) => /*#__PURE__*/React.createElement("nav", {
  className: "crumbs",
  "aria-label": "Breadcrumb"
}, items.flatMap((it, i) => {
  const out = [];
  if (i > 0) {
    out.push(/*#__PURE__*/React.createElement("span", {
      key: `s-${i}`,
      className: "crumbs-sep"
    }, /*#__PURE__*/React.createElement(Icons.ChevronRight, {
      size: 12
    })));
  }
  out.push(i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    key: `c-${i}`,
    href: it.href || "#"
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    key: `c-${i}`,
    className: "crumbs-current"
  }, it.label));
  return out;
}));

/* ---------- TOC ---------- */
const TOC = ({
  items,
  activeId,
  title
}) => /*#__PURE__*/React.createElement("nav", {
  className: "toc no-scrollbar",
  "aria-label": "Tr\xEAn trang n\xE0y"
}, /*#__PURE__*/React.createElement("div", {
  className: "toc-title"
}, title || "Trên trang này"), /*#__PURE__*/React.createElement("ul", {
  className: "toc-list"
}, items.map(it => /*#__PURE__*/React.createElement("li", {
  key: it.id
}, /*#__PURE__*/React.createElement("a", {
  href: `#${it.id}`,
  className: `toc-link depth-${it.depth || 2}${it.id === activeId ? " is-active" : ""}`,
  onClick: it.onClick ? e => {
    e.preventDefault();
    it.onClick();
  } : undefined
}, it.label)))), /*#__PURE__*/React.createElement("div", {
  className: "toc-foot"
}, /*#__PURE__*/React.createElement("a", {
  className: "toc-foot-link",
  href: "#"
}, /*#__PURE__*/React.createElement(Icons.Pencil, {
  size: 13
}), " \u0110\u1EC1 xu\u1EA5t ch\u1EC9nh s\u1EEDa"), /*#__PURE__*/React.createElement("a", {
  className: "toc-foot-link",
  href: "#"
}, /*#__PURE__*/React.createElement(Icons.Mail, {
  size: 13
}), " B\xE1o l\u1ED7i t\xE0i li\u1EC7u")));

/* ---------- useScrollSpy: track active heading ---------- */
const useScrollSpy = (ids, offset = 100) => {
  const [active, setActive] = useStateN(ids[0]);
  useEffectN(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join("|"), offset]);
  return active;
};
Object.assign(window, {
  Sidebar,
  TopNav,
  LangSwitch,
  SearchBox,
  Breadcrumb,
  TOC,
  useScrollSpy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/nav.jsx", error: String((e && e.message) || e) }); }

// scripts/tweaks-panel.jsx
try { (() => {
/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

})();
