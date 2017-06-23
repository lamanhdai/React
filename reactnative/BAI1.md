# BÀI 1: GETTING STARTED

## STEP BY STEP
### [Cài đặt và Setup](http://facebook.github.io/react-native/docs/getting-started.html) Có 2 cách cài đặt: 

* Sử dụng create-react-native-app (khỏi phải cấu hình nhiều)
* Build native code trực tiếp (sử dụng react-native-cli)

## Sử dụng React Native CLI:

### 0.Cài đặt 1 số cái để làm:

* [Homebrew](https://brew.sh/) - tìm hiểu thêm nhé (MacOS => UniBox) - tức là cho phép lập trình viên cài thêm các phần mềm trên Linux, Unix nhưng ko có trên MacOS, quá lợi nhỉ
=> Quá dễ vào trang chủ của nó cài đặt nhé.
* [Watchman](https://facebook.github.io/watchman/) - Sau khi cài Homebrew thì dùng Homebrew - cài thằng Watchman này vào (`homebrew install watchman`) - đơn giản nó hoạt động như việc Gulp/Grunt cài đặt thêm các package như (httpd, live-server,...) theo dõi các thay đổi trong source code (sự thay đổi của các file javascript, css)
* [XCode] - Nếu sử dụng máy MAC để chạy React Native thì cài thằng này vào thông qua AppStore của Apple thôi.
* Tiếp đến là cấu hình Command Line Tools trong Xcode để chạy.

### 1. Khởi tạo Project với React Native

```
react-native init project01
```

cd project01 và chạy lệnh sau để chạy và test thử trên IOS
```
react-native run-ios
```

## CÁC BÀI THAM KHẢO

* [Getting Started with React Native](http://facebook.github.io/react-native/docs/getting-started.html)

