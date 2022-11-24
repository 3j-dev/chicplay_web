<div align="center">
<img src="https://user-images.githubusercontent.com/86864534/203466557-85b9656d-2ae8-426e-94e8-09750e63c077.png" title="vivid" />
</div>

# VIVID

> VIVID 서비스는 영상 콘텐츠 통합 관리 & 학습 툴 웹 서비스입니다.<br>
> 소프트웨어 마에스트로 13기 연수 과정에서 개발 진행 중인 프로젝트입니다.
> <br>

## 💡 Background

1. 현재의 교육 영상은 다양한 플랫폼을 통해 공유되고 있기 때문에, **영상을 관리하는 것이 매우 어렵습니다.**
2. 영상 스트리밍 플랫폼들은 단순 시청에 목적이 맞춰져 있기 때문에, **사용자가 학습에 활용하기 불편합니다.**
   <br />

## 📝 Features

1. **Webex 등의 영상 플랫폼의 영상 콘텐츠를 손 쉽게 공유하고, 통합 관리합니다.**

- 영상 공유 Space

  - 참여자(공유 대상자) 리스트
  - 영상 리스트

- 영상 Upload

  - Drag & Drop file Upload
  - Webex 연동 Webex 내 영상 업로드

2. **텍스트 필기/드로윙 필기/영상위 드로윙 필기 기능을 지원합니다.**

- froala, 자체 개발 플러그인을 활용한 실시간 서버 연동 텍스트 필기
- tlDraw를 활용한 자유로운 드로잉 필기 지원

## 📚 Skill Stack

- **Front-end** : TypeScript, React, Recoil, Styled-component
- **Back-end** : Java, Spring boot, JPA, QueryDSL, JUnit
- **DB** : MySQL, DynamoDB, Redis
- **Infra** : AWS Services(EC2, S3, RDS, DynamoDB, Lambda, Route53, CloudFront, MediaConvert), Docker

<br>

## 💻 개발 내용/프로젝트 중점 사항

- **React 18과 Styled-Component를 기반으로 클라이언트 단을 구성했습니다.**
- **Recoil과 같은 전역 상태 관리 사용을 최소화하고자 노력했습니다. 전역 상태 관리 도구를 원래의 목적에 맞게 사용하기 위해 노력했습니다.**
- **Draft.js, Froala 등의 마크다운 에디터들을 활용하여 텍스트 필기를 구현하였습니다. 해당 과정에서 서비스에 필요한 추가 기능을 구현하여 적절히 적용했습니다.**
- **tlDraw 등의 캔버스 드로잉 툴을 프로젝트에 추가하였고 툴 내의 상태 관리 및 트래킹을 진행하였습니다. 추가적으로 서비스에 맞게 변형을 하기 위해 라이브러리 제작자와 소통하였습니다.**
- **성능 최적화를 위해 CDN, lazy import, 번들 최적화 등 다양한 기법을 적용하였습니다.**
- **프론트엔드 단의 CI/CD를 구성하여 AWS CloudFront 배포 자동화를 구현했습니다.**
- **Jira, Confluence를 기반으로 이슈 및 개발 현황을 공유 및 관리하였습니다.**

## 🎯 트러블 슈팅 & 개발 일지

- [**위지윅 에디터 한글과 관련된 문제(draft.js)**]()
- [**Froala 활용기, Draft.js에서 Froala로**]()
- [**hls란 무엇인가**]()
- [**에러코드를 어떻게 처리할 것인가(UX)**]()
- [**React-Query 도입 실패와 적정기술이란 무엇인가**]()
- [**로그인 유지와 관련된 고민**]()
- [**프라이빗 라우트와 아웃렛**]()
- [**axios 활용법 발전기, api call을 클린 코드로**]()
- [**tlDraw 활용기, 기능은 훌륭하지만 Documentation이..**]()
- [**간단한 react-toastify 후기**]()
- [**file Upload 트러블 슈팅(oct-stream이 뭔가요)**]()
- [**주기적 업로드, 이탈시 업로드( w. useInterval )**]()
- [**복잡한 어플리케이션에서 성능 향상하기(클라이언트 편)**]()
- [**클린 코드를 위한 여정, 리팩토링 탐험기**]()
- [**영상 자동재생 시 소리가 꺼지는 문제에 관하여**]()

## ✍️ Process Docs

<details>
<summary><b>Video Watch Tracking</b></summary>

<br>

### 유저 영상 시청시 상태 동기화

- 1초 분기로 영상 progress 분기 트래킹

</details>

<details>
<summary><b>Text Memo Tracking</b></summary>

<br>

### Redis와 실제 DB 반영

</details>

<details>
<summary><b>Text Memo On Screen Recoding And Visualizing</b></summary>

<br>

### 복잡한 로직을 hook으로

</details>

<br>

## 동작 화면

---

### 메인 화면

<img src="https://user-images.githubusercontent.com/86864534/203501939-e9395df2-54bb-4b96-bf25-6b9ef76e0b18.png" />

### 로그인 화면

<img src="https://user-images.githubusercontent.com/86864534/203502314-bae75fee-3316-40e5-a79b-fce4b373770e.png" />

### 강의 화면

<img src="https://user-images.githubusercontent.com/86864534/203502576-88d3eeab-f27d-417e-a8ad-873e071d57ff.png" />

### 업로드 화면

- 업로드 강의 공간 선택
  <img src="https://user-images.githubusercontent.com/86864534/203502833-e731e844-39e4-4cbe-9e3a-dd9b33633eaf.png" />

- File Upload
  <img src="https://user-images.githubusercontent.com/86864534/203503671-10e4bde1-17bd-4a15-8c85-7eac9b5484d2.png" />

- Webex Upload
  <img src="https://user-images.githubusercontent.com/86864534/203503289-87ca2926-a8ff-4823-ad2c-851cace8c393.png"/>

### 강의 스페이스 설정 화면

<img src="https://user-images.githubusercontent.com/86864534/203503910-100d8720-77b1-48b6-88e9-e13813c33873.png" />

### 마이페이지 화면

<img src="https://user-images.githubusercontent.com/86864534/203504254-aaa0c390-4a2e-422b-b576-39e75c2bebfa.png" />
