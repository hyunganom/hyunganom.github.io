# 이현재 웹 이력서 + 포트폴리오

GitHub Pages 배포용 정적 웹사이트입니다.

## 포함 페이지

- `/` : 웹 이력서
- `/portfolio/` : 포트폴리오 목록
- `/portfolio/city-safe/` : CITY_SAFE 상세 포트폴리오
- `/portfolio/city-signal/` : CITY_SIGNAL 상세 포트폴리오
- `/portfolio/thermal-parking/` : 열화상 주차 감지 상세 포트폴리오

## PDF 출력 방식

이번 버전은 기존 PDF 원본을 그대로 쓰지 않고, HTML 화면 기준으로 PDF를 뽑을 수 있도록 정리했습니다.

각 페이지 상단의 `브라우저에서 PDF 저장` 버튼을 누르면 브라우저 인쇄 창이 열립니다.
대상에서 `PDF로 저장`을 선택하면 현재 HTML 기준으로 PDF를 저장할 수 있습니다.

또한 아래 파일들은 HTML에서 다시 생성한 PDF입니다.

- `assets/resume.pdf`
- `assets/city-safe-cpp-python.pdf`
- `assets/city-signal-java-spring.pdf`
- `assets/thermal-parking-python.pdf`

백업용으로 같은 파일을 `assets/html-pdf/` 폴더에도 넣어두었습니다.

## 업로드 방법

ZIP 파일 자체를 올리지 말고, 압축을 푼 뒤 내부 파일 전체를 GitHub 저장소 루트에 업로드하세요.
