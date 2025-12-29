# 🛠️ Các Lỗi Thường Gặp & Cách Khắc Phục

Giải pháp nhanh cho các vấn đề người dùng thường gặp nhất.

---

## 🚫 Extension Không Hiển Thị

**Vấn đề:** Đã cài extension nhưng side panel không mở.

**Giải pháp:**
1. **Kiểm tra bạn đang ở trang Flow**
   - Truy cập: `labs.google/fx/tools/flow`
   - Extension chỉ hoạt động trên trang này

2. **Tải lại trang**
   - Nhấn `Ctrl+R` (Windows) hoặc `Cmd+R` (Mac)
   - Click icon extension lại

3. **Tải lại extension**
   - Vào `chrome://extensions`
   - Tìm SnapGen Flow
   - Click icon refresh

---

## ⚠️ Cảnh Báo "Not on Flow Page"

**Vấn đề:** Thấy cảnh báo rằng bạn không ở trang Flow.

**Giải pháp:**
1. **Kiểm tra URL**
   - Đảm bảo đúng: `labs.google/fx/tools/flow`
   - Không phải: `labs.google` (trang chủ) hoặc công cụ Flow khác

2. **Đợi trang load xong**
   - Đôi khi extension kiểm tra trước khi trang sẵn sàng
   - Đợi 3-5 giây sẽ tự động cập nhật

3. **Đăng nhập Google**
   - Bạn phải đăng nhập Google để dùng Flow
   - Đăng nhập và refresh trang

---

## 🔄 Automation Dừng Hoặc Treo

**Vấn đề:** Automation ngừng hoạt động hoặc bị kẹt ở một prompt.

**Giải pháp:**
1. **Kiểm tra kết nối internet**
   - Flow cần internet ổn định
   - Test bằng cách mở website khác

2. **Trang Flow có thể không phản hồi**
   - Click **Stop** trong extension
   - Refresh trang Flow (`Ctrl+R` / `Cmd+R`)
   - Start automation lại

3. **Bạn đã hết quota ngày**
   - Flow có giới hạn tạo video mỗi ngày
   - Kiểm tra tab Logs xem thông báo lỗi
   - Thử lại vào ngày mai hoặc sau 24 giờ

---

## 📝 Lỗi Policy / Prompt Bị Từ Chối

**Vấn đề:** Thấy "Policy error detected" cho một số prompt.

**Tại sao xảy ra:**
- Google Flow có chính sách nội dung
- Một số prompt có thể bị đánh dấu không phù hợp

**Giải pháp:**
1. **Kiểm tra prompt bị lỗi trong tab Logs**
   - Xem chính xác prompt nào bị từ chối

2. **Sửa lại prompt**
   - Tránh: bạo lực, nội dung người lớn, nhân vật có bản quyền
   - Viết chung chung và mô tả hơn

3. **Bỏ qua và tiếp tục**
   - Extension tự động bỏ qua prompt bị từ chối
   - Các prompt khác sẽ tiếp tục xử lý

---

## 💾 Video Không Tự Động Tải Về

**Vấn đề:** Video được tạo nhưng không tự động download.

**Giải pháp:**
1. **Kiểm tra cài đặt download của Chrome**
   - Vào: `chrome://settings/downloads`
   - Tắt "Ask where to save each file"
   - Bật tự động download

2. **Kiểm tra thư mục Downloads**
   - Video có thể đang tải nhưng bạn bỏ lỡ thông báo
   - Mở thư mục Chrome Downloads

3. **Pop-up bị chặn?**
   - Kiểm tra Chrome có chặn download pop-up không
   - Click icon bị chặn trên thanh địa chỉ
   - Cho phép download từ labs.google

---

## 🖼️ Image-to-Video Không Hoạt Động

**Vấn đề:** Ảnh không hiển thị hoặc prompts biến mất sau khi import.

**Giải pháp:**
1. **Đừng đổi tab khi đang chỉnh sửa**
   - Ở lại tab Workspace
   - Hoàn thành chỉnh sửa trước khi đổi tab

2. **Save trước khi đóng popup**
   - Click nút "Save and Close"
   - Đừng chỉ đóng cửa sổ popup

3. **Kích thước file ảnh**
   - Giữ ảnh dưới 10MB mỗi file
   - Định dạng hỗ trợ: JPG, PNG, WEBP

4. **Xóa cache và thử lại**
   - Vào tab Settings
   - Click "Refresh Configuration"
   - Thử import ảnh lại

---

## ⏸️ Không Thể Resume Sau Khi Pause

**Vấn đề:** Nút "Resume" không hoạt động sau khi pause.

**Giải pháp:**
1. **Refresh trang Flow**
   - Đôi khi trạng thái Flow bị lệch
   - Refresh: `Ctrl+R` / `Cmd+R`
   - Bạn có thể dùng "Start from" để tiếp tục

2. **Dùng "Start from" thay thế**
   - Note lại prompt bạn pause ở đâu
   - Set "Start from: [số]" trong settings
   - Click "Start" để tiếp tục

---

## 🐌 Automation Chạy Chậm

**Vấn đề:** Automation xử lý prompt rất chậm.

**Tại sao xảy ra:**
- AI của Flow mất thời gian để tạo video
- Mỗi video có thể mất 1-3 phút
- Server quá tải có thể làm chậm

**Điều này bình thường!**
- Tạo video là quá trình nặng
- Hãy kiên nhẫn - chất lượng cần thời gian
- Bạn có thể chạy ngầm và làm việc khác

**Mẹo tối ưu:**
- Chạy vào giờ thấp điểm (đêm khuya/sáng sớm)
- Tạo 1 video mỗi prompt (thay vì nhiều biến thể)
- Dùng prompt ngắn, đơn giản hơn

---

## 🔍 Vẫn Gặp Vấn Đề?

Nếu vấn đề không có trong danh sách:

1. **Kiểm tra tab Logs**
   - Thông báo lỗi chi tiết hiện ở đây
   - Copy thông báo lỗi để gửi support

2. **Liên Hệ Support**
   - 📱 Telegram: [Tham gia nhóm](https://t.me/snapgens)
   - 💬 Zalo: [Chat với chúng tôi](https://zalo.me/snapgens)
   - Bao gồm:
     - Bạn đang cố làm gì
     - Thông báo lỗi từ Logs
     - Screenshots (nếu có)

3. **Báo Lỗi**
   - GitHub: [Mở issue](https://github.com/SnapGen-Platform/snapgen-flow/issues)
   - Cung cấp các bước chi tiết để tái hiện lỗi

---

## ✅ Mẹo Phòng Tránh

Tránh các lỗi thường gặp bằng cách:
- ✅ Luôn dùng phiên bản mới nhất của extension
- ✅ Cập nhật Chrome browser
- ✅ Bắt đầu với batch nhỏ (3-5 prompts) để test
- ✅ Theo dõi tab Logs khi automation chạy
- ✅ Không đóng trang Flow khi automation đang hoạt động

---

*Cần thêm trợ giúp? Xem [Hướng Dẫn Bắt Đầu](./getting-started.md)*

*Được tạo với ❤️ bởi [SnapGens.com](https://snapgens.com)*
