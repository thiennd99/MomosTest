# MomosTest App

MomosTest App là một ứng dụng di động giúp người dùng quản lý danh bạ liên lạc của mình một cách dễ dàng và hiệu quả. Ứng dụng sử dụng React Native và các thư viện phổ biến để cung cấp trải nghiệm người dùng mượt mà và trực quan.

## Tính năng chính

- **Danh sách liên lạc theo nhóm**: Ứng dụng phân loại danh bạ liên lạc theo chữ cái đầu tiên của tên đầy đủ, giúp người dùng dễ dàng tìm kiếm và tổ chức liên hệ.

- **Tìm kiếm và lọc**: Người dùng có thể tìm kiếm liên hệ bằng cách nhập vào ô tìm kiếm. Danh sách liên lạc sẽ tự động cập nhật dựa trên kết quả tìm kiếm.

- **Hiển thị và tương tác**: Danh sách liên lạc được hiển thị dưới dạng danh sách phân loại, với các tiêu đề phần rõ ràng. Bạn có thể ấn hình trái tim để highlight liên lạc mà bạn ưa thích.

- **Thiết kế giao diện người dùng**: Sử dụng các thành phần như `ActivityIndicator` để hiển thị trạng thái tải. Giao diện người dùng được tối ưu hóa cho các kích thước màn hình khác nhau bằng cách sử dụng `Dimensions`.

- - **Tìm kiếm liên lạc khi không có internet**: bạn có thể theo dõi, tìm kiếm liên lạc kể cả khi không có kết nối mạng

## Các dependencies chinh:

- `@tanstack/react-query`: Để quản lý trạng thái dữ liệu và yêu cầu API.
- `react-navigation`: Để quản lý route, stack màn.
- `react-native-tab-view`: Để hỗ trợ các tab và chuyển đổi giữa các tab.

## Ý tưởng và suy nghĩ:

 - Component test và Unit test: TODO, do thời gian hạn chế em chưa kịp bổ sung test.
 - Bổ sung highlight matching text khi search.
 - Đối với dữ liệu lớn, ta có thể chuyển qua <VirtualizedList/> để tối ưu hoá render list.