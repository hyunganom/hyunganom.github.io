# 이현재 웹 이력서

GitHub Pages 배포용 정적 웹 이력서입니다.

## 파일 구성

```text
.
├─ index.html
├─ style.css
├─ assets/
│  └─ resume.pdf
├─ .nojekyll
└─ README.md
```

## 배포 방법

1. GitHub에서 `hyunganom.github.io` 저장소를 생성합니다.
2. 이 폴더 안의 파일들을 저장소 루트에 업로드합니다.
3. 저장소의 `Settings` → `Pages`로 이동합니다.
4. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, Folder는 `/(root)`로 선택하고 저장합니다.
6. 잠시 후 `https://hyunganom.github.io` 주소로 접속합니다.

## 수정 위치

- 메인 문구: `index.html` 상단 hero 영역
- 프로젝트 내용: `index.html`의 `Projects` 섹션
- 색상/간격/디자인: `style.css`
- PDF 교체: `assets/resume.pdf` 파일 교체
