export interface TimelineEntry {
  tag: string;
  title: string;
  text: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    tag: "Khởi đầu",
    title: "Công nghệ thông tin",
    text: "Học cách phân tích vấn đề, xây dựng hệ thống và biến yêu cầu thành một sản phẩm có thể sử dụng."
  },
  {
    tag: "Bước ngoặt",
    title: "Tư duy sản phẩm",
    text: "Nhận ra rằng hoạt động tốt thôi chưa đủ — cách trình bày và cảm giác mang lại cũng quan trọng không kém."
  },
  {
    tag: "Mở rộng",
    title: "Video editing",
    text: "Kể chuyện bằng hình ảnh, nhịp điệu và cảm xúc — một ngôn ngữ khác với code, nhưng cùng một mục đích."
  },
  {
    tag: "Hiện tại",
    title: "Không giới hạn danh xưng",
    text: "Học đủ sâu ở nhiều lĩnh vực để có thể tạo ra một kết quả thực sự tốt, bất kể hình thức."
  }
];

export const SKILL_TAGS: string[] = [
  "CapCut",
  "Storytelling",
  "Short-form",
  "Next.js",
  "Spring Boot",
  "PostgreSQL",
  "Tập trung",
  "An toàn",
  "Trách nhiệm",
  "Xử lý hình ảnh",
  "Dựng phim",
  "Giao diện"
];

export const WORK_STYLES = [
  {
    number: "01",
    title: "Hiểu vấn đề",
    text: "Xác định rõ mục tiêu trước khi bắt đầu làm."
  },
  {
    number: "02",
    title: "Làm có chủ đích",
    text: "Mỗi chi tiết đều nên có lý do để tồn tại."
  },
  {
    number: "03",
    title: "Thử và chỉnh",
    text: "Không ngại sửa lại nếu kết quả chưa đủ tốt."
  },
  {
    number: "04",
    title: "Hoàn thiện",
    text: "Ưu tiên sản phẩm sử dụng được thay vì chỉ đẹp trên ý tưởng."
  }
];
