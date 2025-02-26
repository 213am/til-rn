# apk

## 1. QRCode 생성

- https://me-qr.com/ko

## 2. 마켓에 등록하지 않은 상태로 외부인에게 앱파일을 전달하는 경우

```bash
cd android
```

```bash
./gradlew assembleRelease
```

- apk 빌드 생성 작업

  - `android/app/build/outputs/apk/release/app-release.apk` 파일을 복사해서
  - `/test` 폴더에 붙여넣고
  - `/test/test.apk` 로 파일명 변경

- github push 후 qr 생성 및 배포
