# 과정

# 7/6일 월요일

> 웹팩을 이용하여 제작

- [React Webpack 설치 과정](https://www.notion.so/React-Webpack-566174850e4a40158a75a1946873af7f)

> 사용한 라이브러리들 정리

- react-router-dom
  - Link, router 사용하기 위해
  - [React Router](https://www.notion.so/React-Router-782383b288fd427bb16f39c94497aaf1)
- react Carousel 구현
  - Carousel
    - 슬라이드를 뜻하는 정식용어
  - 라이브러리 참고
    - [https://programming119.tistory.com/211](https://programming119.tistory.com/211) ← 여러 라이브러리들 정리
    - [https://react-slick.neostack.com/docs/get-started](https://react-slick.neostack.com/docs/get-started) ← React Slick 라이브러리 공식 문서
    - [https://codesandbox.io/s/custom-dots-react-slick-pl27t](https://codesandbox.io/s/custom-dots-react-slick-pl27t) ← React Slick custom dots
    - [react-slick](https://www.notion.so/react-slick-b80cf6993cc6400f98bff79636fbd18b)

> 깃 연동

- .gitignore 도 추가
  - 참고 사이트 : [https://www.toptal.com/developers/gitignore](https://www.toptal.com/developers/gitignore)

> 오류와 혼란으로 인해 시간 지체..

- 주임님의 도움으로 해결

> 작업 내용

- 기존에 퍼블리싱 되어 있는 소스코드가 html + css + js + php 로 구성되어 있어서 react로 변환하는 작업
- 먼저 header 작업 해보는 중
- Router와 Link 이용해 화면 이동
- 오류 해결
- map()을 이용하여 리스트 배열로 랜더링 ( 사이드바 )

  - 코드

    ```
    const componentArray = [
    {
        src: "src/images/Category_icon1.png",
        title: "커머스 정보",
    },
    {
        src: "src/images/Category_icon2.png",
        title: "브랜딩",
    },
    {
        src: "src/images/Category_icon3.png",
        title: "커머스 UI UX",
    },
    {
        src: "src/images/Category_icon4.png",
        title: "도매상품소싱",
    },
    {
        src: "src/images/Category_icon5.png",
        title: "촬영·편집",
    },
    {
        src: "src/images/Category_icon6.png",
        title: "자사몰 운영 / 관리",
    },
    {
        src: "src/images/Category_icon7.png",
        title: "오픈마켓 운영 / 관리",
    },
    {
        src: "src/images/Category_icon8.png",
        title: "콘텐츠 마케팅",
    },
    ];

    const Sidebar = (data) => {
    const componentArrayList = componentArray.map((data, index) => {
        return (
        <li key={index}>
            <img src={data.src} />
            {data.title}
        </li>
        );
    });
    return (
        <ul>{componentArrayList}</ul>
        );
    };

    export default Sidebar;
    ```

- carousel 작업
  - 코드
    - Carousel.js
    - \_slick-theme.css
    - \_slick.css

# 7월 7일

> React-Material-Ui-Carousel

- React Slick 라이브러리 사용 중 화살표가 계속 보이지 않아 라이브러리 변경
- DOC
  - [https://github.com/Learus/react-material-ui-carousel](https://github.com/Learus/react-material-ui-carousel)
- Installation
  - `npm install react-material-ui-carousel --save`
  - `npm install @material-ui/core` & `npm install @material-ui/icons` 추가 설치
- content.js
  - 코드

> axios 설치

- Installation
  - `npm install axios`

> ❗오류

- [에러 관련](https://www.notion.so/71849015826b4ba1809f37870a9692c3)

> 상황

- GET [http://localhost:8080/<?= $res[9] . $res[10]; ?>](http://localhost:8080/%3C?=%20$res%5B9%5D%20.%20$res%5B10%5D;%20?%3E) 404 (Not Found) ← 이런 에러가 뜨긴 하지만 json은 제대로 가져오는 것 같다.
- 콘솔
  - `{userId: 1, id: 1, title: "delectus aut autem", completed: false}`

# 7월 8일 목요일

> axios 를 이용한 api 연동

- Backend 에서 php로 api를 만든 뒤에, React 의 axios 를 통해 데이터 값 받아오기, 화면에 띄우기
- 코드

  ```jsx
  // index.js
  axios.defaults.baseURL = "http://15.164.227.114/web/src/php/get_info.php?";

  // ContentPage.js
  const ContentPage = () => {
    const [data, setData] = useState({});

    const getData = async () => {
      const response = await axios.get("");
      console.log(response.data);
      setData(response.data);
    };

    useEffect(() => {
      getData();
    }, []);

    return (
      <div>
        <ul class="home_ti">
          <li>
            <a href="#">{data.user_name}</a>
          </li>
        </ul>
      </div>
    );
  };
  ```