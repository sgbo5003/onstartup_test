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

# 7월 9일 금요일

> backend 에서 api 데이터 가져와서 뿌리기

```jsx
// useState 부분
const [data, setData] = useState({
  user_idx: [],
  user_name: [],
  user_belong: [],
  comment_time: [],
  comment_text: [],
  comment_like_num: [],
  comment_reply_num: [],
  comment_share_num: [],
  comment_save_num: [],
});

return (
  <Content
    key={data.user_idx[idx]}
    title={data.user_name[idx]}
    belong={data.user_belong[idx]}
    commentTime={data.comment_time[idx]}
    commentText={data.comment_text[idx]}
    commentLikeNum={data.comment_like_num[idx]}
    commentReplyNum={data.comment_reply_num[idx]}
    commentShareNum={data.comment_share_num[idx]}
    commentSaveNum={data.comment_save_num[idx]}
  />
);
```

> component를 mapping 하여 rendering 하는 법

```jsx
const arr = [0, 1, 2, 3];

<h2>
  이 글 어때요?
  <img src="src/images/view_icon1.png" alt="icon1.png" />
</h2>;
{
  arr.map((idx) => {
    return (
      <Content
        key={data.user_idx[idx]}
        title={data.user_name[idx]}
        belong={data.user_belong[idx]}
        commentTime={data.comment_time[idx]}
        commentText={data.comment_text[idx]}
        commentLikeNum={data.comment_like_num[idx]}
        commentReplyNum={data.comment_reply_num[idx]}
        commentShareNum={data.comment_share_num[idx]}
        commentSaveNum={data.comment_save_num[idx]}
      />
    );
  });
}
```

- 참고
  - [https://velog.io/@mokyoungg/React-map-과-컴포넌트](https://velog.io/@mokyoungg/React-map-%EA%B3%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)

> api 2개 → axios 를 2번 사용하여 렌더링

```jsx
function getMainData() {
  return axios.get("/get_info.php?comment=1");
}

function getPopularData() {
  return axios.get("/get_info.php?comment=2");
}

//axios & api 합치기
const getAllData = () => {
  axios.all([getMainData(), getPopularData()]).then(
    axios.spread((res1, res2) => {
      console.log(res1);
      console.log(res2);
      setMainData(res1.data);
      setPopularData(res2.data);
    })
  );
};

useEffect(() => {
  // getData();
  getAllData();
}, []);
```

- 참고
  - [https://baegofda.tistory.com/215](https://baegofda.tistory.com/215)
  - [https://이듬.run/axios/guide/usage.html#post-요청](https://xn--xy1bk56a.run/axios/guide/usage.html#post-%EC%9A%94%EC%B2%AD)

# 7월 12일 월요일

> 메인화면 컨텐츠 띄워주는 것에 react-slick 입히기

- css 수정 필요..
- 코드

  ```jsx
  import React, { useEffect, useState } from "react";
  import "../css/content.css";
  import axios from "axios";
  import Content from "./Content";
  import Slider from "react-slick";
  // import "../css/_slick.css";
  import "../css/_slick-theme.css";
  import "../css/slick.css";

  const ContentPage = () => {
    const [data, setData] = useState({
      user_idx: [],
      user_name: [],
      user_belong: [],
      comment_time: [],
      comment_text: [],
      comment_like_num: [],
      comment_reply_num: [],
      comment_share_num: [],
      comment_save_num: [],
      content_view_num: [],
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: (
        <button type="button" class="slick-prev">
          Previous
        </button>
      ), // 이전 화살표 모양 설정
      nextArrow: (
        <button type="button" class="slick-next">
          Next
        </button>
      ), // 다음 화살표 모양 설정
    };

    const getData = async () => {
      const response = await axios.get("/get_info.php?comment=4");
      console.log(response.data.user_name);
      setData(response.data);
    };

    useEffect(() => {
      getData();
      // getAllData();
    }, []);

    const arr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24,
    ];

    return (
      <div class="wap home_wap">
        <div class="home_content">
          <div class="home_view">
            <h2>
              이 글 어때요?
              <img src="src/images/view_icon1.png" alt="icon1.png" />
            </h2>
            <Slider {...settings}>
              {arr.map((idx) => {
                return (
                  <Content
                    key={data.user_idx[idx]}
                    title={data.user_name[idx]}
                    belong={data.user_belong[idx]}
                    commentTime={data.comment_time[idx]}
                    commentText={data.comment_text[idx]}
                    commentLikeNum={data.comment_like_num[idx]}
                    commentReplyNum={data.comment_reply_num[idx]}
                    commentShareNum={data.comment_share_num[idx]}
                    commentSaveNum={data.comment_save_num[idx]}
                  />
                );
              })}
            </Slider>
          </div>
          <div class="home_view">
            <h2>
              많은 사람들이 보고 있어요
              <img src="src/images/view_icon2.png" alt="icon2.png" />
            </h2>
            <Slider {...settings}>
              {arr
                .slice(0)
                .reverse()
                .map((idx) => {
                  return (
                    <Content
                      key={data.user_idx[idx]}
                      title={data.user_name[idx]}
                      belong={data.user_belong[idx]}
                      commentTime={data.comment_time[idx]}
                      commentText={data.comment_text[idx]}
                      commentLikeNum={data.comment_like_num[idx]}
                      commentReplyNum={data.comment_reply_num[idx]}
                      commentShareNum={data.comment_share_num[idx]}
                      commentSaveNum={data.comment_save_num[idx]}
                    />
                  );
                })}
            </Slider>
          </div>
          <div class="home_view">
            <h2>오늘의 NEW TOPIC</h2>
            <Slider {...settings}>
              {arr.map((idx) => {
                return (
                  <Content
                    key={data.user_idx[idx]}
                    title={data.user_name[idx]}
                    belong={data.user_belong[idx]}
                    commentTime={data.comment_time[idx]}
                    commentText={data.comment_text[idx]}
                    commentLikeNum={data.comment_like_num[idx]}
                    commentReplyNum={data.comment_reply_num[idx]}
                    commentShareNum={data.comment_share_num[idx]}
                    commentSaveNum={data.comment_save_num[idx]}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  };

  export default ContentPage;
  ```

> Scroll To Top button 만들기

- 코드

  ```jsx
  import React, { useState } from "react";
  import "../css/scrollButton.css";

  const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
  		in place of 'smooth' */
      });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
      <div className="scrollBtn">
        <div className="scrollBtn_cove">
          <img
            className="scrollBtn_img"
            src="src/images/scroll_top.png"
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
          />
        </div>
      </div>
    );
  };

  export default ScrollButton;
  ```

> 개발서버로 빌드하는 과정에서 이미지들이 안나오는 에러..

- 해결
  - 올바른 방법인지는 모르겠지만 import 시켜주면 뜨긴 뜬다.

> 로그인 페이지

- 참고
  - [https://dog-developers.tistory.com/109](https://dog-developers.tistory.com/109)
  - [https://react-hook-form.com/get-started#Quickstart](https://react-hook-form.com/get-started#Quickstart)

> 라이브러리 설치

- react-hook-form
  - `npm install react-hook-form`

# 7월 13일 화요일

> 복습 & 궁금했던것들

- useEffect()는 재렌더링 할때 유용하게 쓸 수 있다.

> Join.js

- react-hook-form 없이 직접 코드 작성

> 회원가입 기능구현 & api 연동

- 주요 기능

  - 정규식을 사용해 이메일 유효성 검사

    - 코드

      ```jsx
      const validateEmail = (email) => {
        const regExp =
          /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
        if (regExp.test(email)) {
          return false;
        } else {
          return true;
        }
      };
      ```

  - 실시간으로 유효성 체크

    - 코드

      ```jsx
      const onChangeEmail = (e) => {
        setEmail(e.target.value);
        setEmailError(validateEmail(e.target.value));
      };
      const onChangePassword = (e) => {
        setPassword(e.target.value);
      };
      const onChangeConfirmPassword = (e) => {
        setPasswordError(e.target.value !== password);
        setConfirmPassword(e.target.value);
      };
      ```

  - axios get방식을 이용해 php db로 데이터 보내기

    - Backend에서 데이터를 받는 방식에 맞춰서 Frontend도 데이터를 보내는 방식이 달라진다.

      - 코드

        ```jsx
        const pushData = () => {
          axios
            .get(
              `/join_member_normal.php?user_name=${name}&user_email=${email}&user_password=${password}`
            )
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        };
        ```
