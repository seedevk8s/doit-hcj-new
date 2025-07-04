# HTML/CSS/JavaScript 예제 코드

이 저장소는 도서 **"HTML/CSS/JavaScript"** 학습을 위한 예제와 실습 파일을 정리한 곳입니다.
각 장별로 코드를 직접 실행하며 학습할 수 있도록 구성되어 있습니다.
자세한 폴더 설명은 [REPO_GUIDE.md](REPO_GUIDE.md) 문서를 참고하세요.

## 폴더 구조

- **02** ~ **19**: 책의 각 장에 해당하는 예제 파일이 들어 있습니다. 기본적인 HTML 구조부터 CSS, JavaScript, DOM 활용까지 단계별로 확인할 수 있습니다.
- **pr**: 책의 마지막에 진행하는 작은 프로젝트 예제가 들어 있습니다.
- `pr/lab-step1`부터 `lab-step6`까지의 파일에 라인별 주석이 추가되었습니다.
- `pr/development_process.md` 문서에서 각 스텝을 개발 프로세스에 따라 정리해 두었습니다.

## 사용 방법 / 학습 순서

폴더 번호가 높아질수록 내용이 심화되므로 `02`부터 `19`까지 순서대로 실습하면 됩니다. 각 폴더의 `index.html` 파일을 브라우저에서 열어 보면서 코드를 수정해 보세요.

## 테스트 실행

이 저장소가 Gradle 프로젝트인 경우, 테스트를 실행하려면 Gradle Wrapper(`gradlew`)에 실행 권한을 부여한 후 다음 명령을 사용할 수 있습니다.

```bash
chmod +x gradlew
./gradlew test
```

## 라이선스 및 저작권

이 저장소의 예제 코드는 [MIT 라이선스](LICENSE)를 따릅니다.
원본 저작권은 각 소스 파일에 명시된 내용(예: `pr/results/index.html`의 스테이위드커피 등)에 따릅니다.

## 기여 및 문의

오타 수정이나 개선 사항이 있다면 PR을 보내 주세요. 기타 문의는 저장소 관리자의 이메일(`@gmail.com`)로 연락할 수 있습니다.
