# Team widely
* 생활용품 쇼핑몰 와이즐리 클론 프로젝트
* 디자인/기획 부분을 클론함과 동시에 추가로 구현하고 싶은 내용을 개발하고자 하였습니다.
* 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### Team

* 프로젝트기간: 2023.09.18 ~ 2023.10.06
> Product Manager: 김기영(F) <br />
> Project Manager: 차승혁(B) <br />
> Teammates: 박민재(F), 이청원(F) / 정현우(B), 이준호(B), 고은채(B)<br />
> :point_right: [Backend github!](https://github.com/wecode-bootcamp-korea/49-2nd-widely-backend)
<br />

### 데모 영상(이미지 클릭)


## 적용 기술 및 구현 기능

### 적용 기술
> Front-End : React.js, sass, slick, trello, react-daum-postcode, react-router-dom, swiper
> Back-End : Node.js, Express.js, Bcrypt, My SQL, Nodemailer
> Common : RESTful API

### 구현 기능

#### 👩‍💻 user
##### sign up
*
*
*
##### login
*
##### search user
*
#### :clipboard: main
* 
* 
* 
#### :books: category
* 쿼리스트링 이용하여 카테고리별 데이터를 받아서 사용자가 쉽게 확인할수 있도록 기능을 구현
* 검색바 제품의 이름등을 이용하여 검색하면 검색의 관련된 제품들만 조회가능 하도록 구현
* 페이지 네이션 구현! 페이지별 보여주고싶은 개수를 구현
* 신상품순 가격순높은순 가격낮은순으로 볼수있는 선택창 구현
* 하나의 특정 제품을 이미지나 타이틀을 클릭하면 상세페이지로 넘어가서 그제품의 대한 주문 이미지 가격 정보 수량결정 등을 할수있게 구현
#### 🎁 product detail
* 비회원이라면 회원가입을 할수 있도록 버튼의 회원가입 유도 기능 추가
* 제품 주문의 수량을 결정해서 제품의 고유id 수량을 토큰과함께 백엔드 전달 기능 추가
* 토큰을 확인하고 토큰이 맞으면 팝업창을 띄어 쇼핑지속과 장바구니 이동을 선택할수 있도록 구현
#### 🛒 cart
* 
* 
* 
#### 💸 order
* 
* 
* 
#### :sunrise: header
* onMouseOver or out 를이용하여 컴포넌트한 카테고리 리스트기능을 노출하고 숨기는 기능을 구현
* 카테고리를 메뉴를 통해 카테고리별 제품 nav 를 구현
#### :feet: footer
*
*
## Naming convention

### Branch & PR & Commit

*  Branch는 기능별로 구분합니다.
```
component/input
feature/main
```
  
*  PR & Commit 메세지는 구분이 용이하도록 말머리와 함께 작성합니다. 
```
[feat] 제목     // 새로운 기능 추가
[fix] 제목      // 버그 수정
[design] 제목   // CSS 등 사용자 UI 디자인 변경
[refact] 제목   // 코드 리팩토링
[style] 제목    // 코드 포맷 변경, 세미콜론 누락 등 코드 수정이 없는 경우
[etc] 제목      // 기능 및 UI 변경 외의 사항
```

## Reference

* 이 프로젝트는 와이즐리 사이트를 참조하여 학습목적으로 만들었습니다.
* 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
* 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
