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

# 7/14일 수요일

> 로그인 관련

- [https://ddeck.tistory.com/35](https://ddeck.tistory.com/35)

> 카카오 - 소셜로그인 관련

- [https://data-jj.tistory.com/53](https://data-jj.tistory.com/53)

> LocalStorage & sessionStorage

- [localStorage & sessionStorage](https://www.notion.so/localStorage-sessionStorage-aa303b710daa4d188bd25719a284b436)

> 회원가입 - 로그인 백엔드와 연동 관련

- php로 구현되어 있는 토큰 검증방식
  1. 사이트에 처음 접속시 토큰값을 부여한다.
  2. 토큰은 1시간동안 유지 되고 그 이후나 나가게 되면 사라지게 된다.
  3. 헤더는 모든 페이지에 있기 때문에 헤더에 토큰검증 로직을 넣어서 검증을 하고
     토큰이 없으면 첫 index 페이지로, 있으면 그대로 유지시킨다.
- 회원가입 ~ 성공 시 로직
  1. 회원가입
  2. db로 데이터를 보낸다.
  3. 성공 시 유저 화면 으로 이동
- 로그아웃 ~ 다시 로그인 시 로직
  1. 로그아웃
  2. 로그인 시도 시
  3. db에 저장되어 있는 일치하는 이메일 & 비밀번호를 비교 후 로그인

> 로그인 성공 시 다른 페이지로 이동하는 방법

- [https://www.python2.net/questions-812878.htm](https://www.python2.net/questions-812878.htm)
- [https://www.daleseo.com/react-router-authentication/](https://www.daleseo.com/react-router-authentication/)
- [https://ddeck.tistory.com/35](https://ddeck.tistory.com/35)

# 7/15일 목요일

> 회원가입 후 DB로 데이터 넘기고 로그인 화면으로 이동

- 코드

  ```jsx
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setPasswordError(true);
    }

    if (emailError) return;

    // validateEmail();
    console.log({ name, email, password, confirmPassword });

    if (password && email && name && confirmPassword) {
      alert("회원가입 완료!");
      pushData();
      history.push("/Login");
    }
  };
  ```

> 로그인 후 sessionStorage에 정보 저장

- `sessionStorage.setItem("user_email", inputEmail);`

> 카카오 소셜 로그인 관련

- 코드

  ```jsx
  import { KAKAO_AUTH_URL } from "../OAuth";

  const kakaoLoginHandler = () => {
    axios
      .get(KAKAO_AUTH_URL)
      .then((response) => {
        console.log(response);
        if (response.data.error === 3) {
          history.push("/");
        } else if (response.data.error === 2) {
          alert("필수항목을 체크해주세요.");
        } else {
          alert("오류");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ```

> 조건부 렌더링 시도

- 코드

  ```jsx
  const AppRouter = () => {
    const [isLogin, setIsLogin] = useState(false);

    function checkIsLogin() {
      if (sessionStorage.length < 1) {
        console.log("isLogin1 ?? :: ", isLogin);
      } else {
        setIsLogin(true);
        console.log("isLogin2 ?? :: ", isLogin);
      }
    }

    function headerIconTrue() {
      return (
        <h1 className="mypage_area">
          <a className="mypage_photo_cove" href="my_page.php">
            <img
              className="mypage_photo"
              src={defaultUserImg}
              alt="default_user.png"
            />
          </a>
        </h1>
      );
    }

    function headerTextTrue() {
      return (
        <div className="coar_area">
          <p>
            <Link to="/Join">로그인</Link>
          </p>
        </div>
      );
    }

    useEffect(() => {
      checkIsLogin();
      console.log("로그인 상태 :", isLogin);
    }, [isLogin]);

    return (
      <>
        {isLogin ? (
          <Header isLoginTrue={headerIconTrue()} />
        ) : (
          <Header isLoginTrue={headerTextTrue()} />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Community" component={Community} />
          <Route path="/Reference" component={Reference} />
          <Route path="/Write" component={Write} />
          <Route path="/Setting" component={Setting} />
          <Route path="/Join" component={Join} />
          <Route path="/Login" component={Login} />
          <Route path="/SaveWrite" component={SaveWrite} />
        </Switch>
      </>
    );
  };

  export default AppRouter;
  ```

> 로그인 인증 관련

- [https://www.daleseo.com/react-router-authentication/](https://www.daleseo.com/react-router-authentication/)
- [https://gaemi606.tistory.com/entry/React-로그인-정보-없을-경우-로그인-페이지로-redirect하기-react-router-PrivateRoute](https://gaemi606.tistory.com/entry/React-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%95%EB%B3%B4-%EC%97%86%EC%9D%84-%EA%B2%BD%EC%9A%B0-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C-redirect%ED%95%98%EA%B8%B0-react-router-PrivateRoute)

> 네아로 시도

- 실패...

# 7/16일 금요일

> 네이버 로그인 시도

- 코드

  ```jsx
  //네이버 로그인

  const NaverLoginHandler = () => {
    axios
      .get(NAVER_AUTH_URL)
      .then((response) => {
        console.log(response);
        if (response.data.error === 3) {
          sessionStorage.setItem(
            "naverLoginStatus",
            JSON.stringify(response.data.error)
          );
          history.push("/");
          window.location.replace("/");
          console.log(response.data.error);
        } else if (response.data.error === 2) {
          alert("필수항목을 체크해주세요.");
        } else if (response.data.error === 1) {
          alert("토큰오류");
        } else {
          location.replace(
            "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=jxNOYlz8FOqMBba83QbQ&redirect_uri=http://localhost:8080"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ```

> 카카오 로그인 시도

- 코드

  ```jsx
  // 카카오 로그인
  const kakaoLoginHandler = () => {
    axios
      .get(KAKAO_AUTH_URL)
      .then((response) => {
        console.log(response);
        if (response.data.error === 3) {
          sessionStorage.setItem(
            "kakaoLoginStatus",
            JSON.stringify(response.data.error)
          );
          history.push("/");
          window.location.replace("/");
        } else if (response.data.error === 2) {
          alert("필수항목을 체크해주세요.");
        } else if (response.data.error === 1) {
          alert("토큰오류");
        } else {
          location.replace(
            "https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost:8080%26client_id%3D4626efd0ab72ba3533e4947b9b02c37f"
          );
          sessionStorage.setItem("kakaoLogin", "true");
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ```

# 7/19일 월요일

> 카카오 로그인 손보기

> 글 작성 구현 시도

- 코드

  ```jsx
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import detailClickImg from "../images/detaile_click.png";
  import selectBackImg from "../images/select_back.png";
  import BackImg from "../images/back.png";
  import axios from "axios";
  import WriteSelectModal from "../components/WriteSelectModal";
  import WriteConfirmModal from "../components/WriteConfirmModal";
  import WriteSubmitModal from "../components/WriteSubmitModal";

  const Write = () => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState([]);
    const [url, setUrl] = useState("");
    const [selectModalOn, setSelectModalOn] = useState(false);
    const [confirmModalOn, setConfirmModalOn] = useState(false);
    const [submitModalOn, setSubmitModalOn] = useState(false);
    const [category, setCategory] = useState([]);

    const onChangeContent = (e) => {
      setContent(e.target.value);
      console.log(e.target.value);
    };

    const onChangeUrl = (e) => {
      setUrl(e.target.value);
      console.log(e.target.value);
    };

    const onChangeImg = (e) => {
      setImage(e.target.files);
      console.log(image);
    };

    const onOpenModal = () => {
      setSelectModalOn(!selectModalOn);
    };

    const onConfirmModal = () => {
      setConfirmModalOn(!confirmModalOn);
    };

    const onSubmitModal = () => {
      setConfirmModalOn(false);
      setSubmitModalOn(!submitModalOn);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      pushData();
      alert("글쓰기 완료");
    };

    const pushData = () => {
      const params = new URLSearchParams();
      params.append("comment_text", content);
      params.append("comment_file", image);
      params.append("comment_url", url);
      params.append("comment_select", category);
      axios({
        method: "post",
        url: "/write_text_in_db.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    //--------------- 모달 부분---------------------

    //---------------------------------------------
    return (
      <div className="wap write_wap">
        <div className="write_content">
          <form
            className="write_view"
            onSubmit={onSubmit}
            enctype="multipart/form-data"
          >
            <h2 className="write_view_title">글쓰기</h2>
            <section className="write_comment">
              <h2>코멘트 / 포트폴리오 입력</h2>
              <div name="write_text_form">
                <textarea
                  type="text"
                  name="comment1"
                  placeholder="내용"
                  className="coment_write comment_write_text write_text_box"
                  value={content}
                  onChange={onChangeContent}
                  required
                ></textarea>
              </div>
            </section>
            <section className="write_comment">
              <h2>
                이미지 추가<span>(선택)</span>
                <a className="detail" href="#">
                  <img
                    className="detail_img"
                    src={detailClickImg}
                    alt="detaile_click.png"
                  />
                </a>
              </h2>
              <section className="detail_box">
                <h2 className="hidden">툴팁</h2>
                <p className="detail_info">
                  참고 할 URL과
                  <br />
                  이미지가 있다면 입력해 주세요! URL과 이미지를 입력하면
                  썸네일과 함께 표시됩니다.
                </p>
                <span>
                  <a className="detail_img_cove" href="#">
                    <img
                      className="detail_img_back"
                      src={selectBackImg}
                      alt="back.png"
                    />
                  </a>
                </span>
              </section>
              <div className="filebox">
                <div name="write_file_form">
                  <input
                    type="file"
                    name="comment_file"
                    onChange={onChangeImg}
                    id="file"
                    accept="image/gif, image/jpeg, image/png"
                  />
                  <input
                    className="comment_group upload-name comment_file_text write_text_box"
                    placeholder="파일선택"
                    value={image}
                    readonly
                    disabled
                  />
                  <label for="file" href="#">
                    이미지 찾기
                  </label>
                </div>
              </div>
            </section>
            <section className="write_comment">
              <h2>
                URL<span>(선택)</span>
                <a className="detail2" href="#">
                  <img
                    className="detail_img"
                    src={detailClickImg}
                    alt="detaile_click.png"
                  />
                </a>
              </h2>
              <section className="detail_box2">
                <h2 className="hidden">툴팁</h2>
                <p className="detail_info">
                  참고 할 URL과
                  <br />
                  이미지가 있다면 입력해 주세요! URL과 이미지를 입력하면
                  썸네일과 함께 표시됩니다.
                </p>
                <span>
                  <a className="detail_img_cove" href="#">
                    <img
                      className="detail_img_back2"
                      src={selectBackImg}
                      alt="back.png"
                    />
                  </a>
                </span>
              </section>
              <div name="write_url_form">
                <input
                  type="text"
                  name="comment2"
                  placeholder="URL 입력"
                  className="comment_group comment_url comment_url_text write_text_box"
                  onChange={onChangeUrl}
                  value={url}
                />
              </div>
            </section>
            <section className="write_comment">
              <h2>분야</h2>
              <div className="comment_select_cove">
                <div name="write_select_form">
                  <input
                    type="text"
                    name="comment_select"
                    placeholder="분야 선택"
                    disabled
                    className="coment_write comment_group comment_select comment_select_text write_text_box"
                    value={category}
                    required
                  />
                  <a className="comment_select_img_cove" onClick={onOpenModal}>
                    <img
                      className="comment_select_img"
                      src={selectBackImg}
                      alt="select_back.png"
                    />
                  </a>
                  {selectModalOn ? (
                    <WriteSelectModal
                      class="write_select_popup_cove_on"
                      onOpenModal={onOpenModal}
                      category={category}
                      setCategory={setCategory}
                    />
                  ) : (
                    <WriteSelectModal
                      class="write_select_popup_cove_off"
                      onOpenModal={onOpenModal}
                      category={category}
                      setCategory={setCategory}
                    />
                  )}
                </div>
              </div>
            </section>
            <input
              type="submit"
              // type="button"
              // onClick={onConfirmModal}
              name="write_submit_on"
              className="write_submit_on"
              value="글쓰기"
            />
            {/* {confirmModalOn ? (
              <WriteConfirmModal
                class="write_comment_popup_cove_on"
                onConfirmModal={onConfirmModal}
              />
            ) : (
              <WriteConfirmModal
                class="write_comment_popup_cove_off"
                onConfirmModal={onConfirmModal}
              />
            )}
            {submitModalOn ? (
              <WriteSubmitModal
                class="write_comment_checking_popup_cove_on"
                onSubmitModal={onSubmitModal}
              />
            ) : (
              <WriteSubmitModal
                class="write_comment_checking_popup_cove_off"
                onSubmitModal={onSubmitModal}
              />
            )} */}
          </form>
        </div>
      </div>
    );
  };

  export default Write;
  ```

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

  # 7/14일 수요일

  ***

  > 로그인 관련

  - [https://ddeck.tistory.com/35](https://ddeck.tistory.com/35)

  > 카카오 - 소셜로그인 관련

  - [https://data-jj.tistory.com/53](https://data-jj.tistory.com/53)
  - [https://dev-seolleung2.netlify.app/Final Project/FinalProject-KakaoLogin/](https://dev-seolleung2.netlify.app/Final%20Project/FinalProject-KakaoLogin/)
  - Kakao Developer 공식문서 참고

  > LocalStorage & sessionStorage

  - [localStorage & sessionStorage](https://www.notion.so/localStorage-sessionStorage-aa303b710daa4d188bd25719a284b436)

  > 회원가입 - 로그인 백엔드와 연동 관련

  - php로 구현되어 있는 토큰 검증방식
    1. 사이트에 처음 접속시 토큰값을 부여한다.
    2. 토큰은 1시간동안 유지 되고 그 이후나 나가게 되면 사라지게 된다.
    3. 헤더는 모든 페이지에 있기 때문에 헤더에 토큰검증 로직을 넣어서 검증을 하고
       토큰이 없으면 첫 index 페이지로, 있으면 그대로 유지시킨다.
  - 회원가입 ~ 성공 시 로직
    1. 회원가입
    2. db로 데이터를 보낸다.
    3. 성공 시 유저 화면 으로 이동
  - 로그아웃 ~ 다시 로그인 시 로직
    1. 로그아웃
    2. 로그인 시도 시
    3. /\db에 저장되어 있는 일치하는 이메일 & 비밀번호를 비교 후 로그인

  > 로그인 성공 시 다른 페이지로 이동하는 방법

  - [https://www.python2.net/questions-812878.htm](https://www.python2.net/questions-812878.htm)
  - [https://www.daleseo.com/react-router-authentication/](https://www.daleseo.com/react-router-authentication/)
  - [https://ddeck.tistory.com/35](https://ddeck.tistory.com/35)

  # 7/15일 목요일

  ***

  > 회원가입 후 DB로 데이터 넘기고 로그인 화면으로 이동

  - 코드

    ```jsx
    const onSubmit = (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        return setPasswordError(true);
      }

      if (emailError) return;

      // validateEmail();
      console.log({ name, email, password, confirmPassword });

      if (password && email && name && confirmPassword) {
        alert("회원가입 완료!");
        pushData();
        history.push("/Login");
      }
    };
    ```

  > 로그인 후 sessionStorage에 정보 저장

  - `sessionStorage.setItem("user_email", inputEmail);`

  > 카카오 소셜 로그인 관련

  - 코드

    ```jsx
    import { KAKAO_AUTH_URL } from "../OAuth";

    const kakaoLoginHandler = () => {
      axios
        .get(KAKAO_AUTH_URL)
        .then((response) => {
          console.log(response);
          if (response.data.error === 3) {
            history.push("/");
          } else if (response.data.error === 2) {
            alert("필수항목을 체크해주세요.");
          } else {
            alert("오류");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    ```

  > 조건부 렌더링 시도

  - 코드

    ```jsx
    const AppRouter = () => {
      const [isLogin, setIsLogin] = useState(false);

      function checkIsLogin() {
        if (sessionStorage.length < 1) {
          console.log("isLogin1 ?? :: ", isLogin);
        } else {
          setIsLogin(true);
          console.log("isLogin2 ?? :: ", isLogin);
        }
      }

      function headerIconTrue() {
        return (
          <h1 className="mypage_area">
            <a className="mypage_photo_cove" href="my_page.php">
              <img
                className="mypage_photo"
                src={defaultUserImg}
                alt="default_user.png"
              />
            </a>
          </h1>
        );
      }

      function headerTextTrue() {
        return (
          <div className="coar_area">
            <p>
              <Link to="/Join">로그인</Link>
            </p>
          </div>
        );
      }

      useEffect(() => {
        checkIsLogin();
        console.log("로그인 상태 :", isLogin);
      }, [isLogin]);

      return (
        <>
          {isLogin ? (
            <Header isLoginTrue={headerIconTrue()} />
          ) : (
            <Header isLoginTrue={headerTextTrue()} />
          )}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Community" component={Community} />
            <Route path="/Reference" component={Reference} />
            <Route path="/Write" component={Write} />
            <Route path="/Setting" component={Setting} />
            <Route path="/Join" component={Join} />
            <Route path="/Login" component={Login} />
            <Route path="/SaveWrite" component={SaveWrite} />
          </Switch>
        </>
      );
    };

    export default AppRouter;
    ```

  > 로그인 인증 관련

  - [https://www.daleseo.com/react-router-authentication/](https://www.daleseo.com/react-router-authentication/)
  - [https://gaemi606.tistory.com/entry/React-로그인-정보-없을-경우-로그인-페이지로-redirect하기-react-router-PrivateRoute](https://gaemi606.tistory.com/entry/React-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%95%EB%B3%B4-%EC%97%86%EC%9D%84-%EA%B2%BD%EC%9A%B0-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C-redirect%ED%95%98%EA%B8%B0-react-router-PrivateRoute)

  > 네아로 시도

  - 실패...

  # 7/16일 금요일

  ***

  > 네이버 로그인 시도

  - 코드

    ```jsx
    //네이버 로그인

    const NaverLoginHandler = () => {
      axios
        .get(NAVER_AUTH_URL)
        .then((response) => {
          console.log(response);
          if (response.data.error === 3) {
            sessionStorage.setItem(
              "naverLoginStatus",
              JSON.stringify(response.data.error)
            );
            history.push("/");
            window.location.replace("/");
            console.log(response.data.error);
          } else if (response.data.error === 2) {
            alert("필수항목을 체크해주세요.");
          } else if (response.data.error === 1) {
            alert("토큰오류");
          } else {
            location.replace(
              "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=jxNOYlz8FOqMBba83QbQ&redirect_uri=http://localhost:8080"
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    ```

  > 카카오 로그인 시도

  - 코드

    ```jsx
    // 카카오 로그인
    const kakaoLoginHandler = () => {
      axios
        .get(KAKAO_AUTH_URL)
        .then((response) => {
          console.log(response);
          if (response.data.error === 3) {
            sessionStorage.setItem(
              "kakaoLoginStatus",
              JSON.stringify(response.data.error)
            );
            history.push("/");
            window.location.replace("/");
          } else if (response.data.error === 2) {
            alert("필수항목을 체크해주세요.");
          } else if (response.data.error === 1) {
            alert("토큰오류");
          } else {
            location.replace(
              "https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost:8080%26client_id%3D4626efd0ab72ba3533e4947b9b02c37f"
            );
            sessionStorage.setItem("kakaoLogin", "true");
            window.location.replace("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    ```

  # 7/19일 월요일

  ***

  > 카카오 로그인 손보기

  > 글 작성 구현 시도

  - 코드

    ```jsx
    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import detailClickImg from "../images/detaile_click.png";
    import selectBackImg from "../images/select_back.png";
    import BackImg from "../images/back.png";
    import axios from "axios";
    import WriteSelectModal from "../components/WriteSelectModal";
    import WriteConfirmModal from "../components/WriteConfirmModal";
    import WriteSubmitModal from "../components/WriteSubmitModal";

    const Write = () => {
      const [content, setContent] = useState("");
      const [image, setImage] = useState([]);
      const [url, setUrl] = useState("");
      const [selectModalOn, setSelectModalOn] = useState(false);
      const [confirmModalOn, setConfirmModalOn] = useState(false);
      const [submitModalOn, setSubmitModalOn] = useState(false);
      const [category, setCategory] = useState([]);

      const onChangeContent = (e) => {
        setContent(e.target.value);
        console.log(e.target.value);
      };

      const onChangeUrl = (e) => {
        setUrl(e.target.value);
        console.log(e.target.value);
      };

      const onChangeImg = (e) => {
        setImage(e.target.files);
        console.log(image);
      };

      const onOpenModal = () => {
        setSelectModalOn(!selectModalOn);
      };

      const onConfirmModal = () => {
        setConfirmModalOn(!confirmModalOn);
      };

      const onSubmitModal = () => {
        setConfirmModalOn(false);
        setSubmitModalOn(!submitModalOn);
      };

      const onSubmit = (e) => {
        e.preventDefault();
        pushData();
        alert("글쓰기 완료");
      };

      const pushData = () => {
        const params = new URLSearchParams();
        params.append("comment_text", content);
        params.append("comment_file", image);
        params.append("comment_url", url);
        params.append("comment_select", category);
        axios({
          method: "post",
          url: "/write_text_in_db.php",
          data: params,
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      //--------------- 모달 부분---------------------

      //---------------------------------------------
      return (
        <div className="wap write_wap">
          <div className="write_content">
            <form
              className="write_view"
              onSubmit={onSubmit}
              enctype="multipart/form-data"
            >
              <h2 className="write_view_title">글쓰기</h2>
              <section className="write_comment">
                <h2>코멘트 / 포트폴리오 입력</h2>
                <div name="write_text_form">
                  <textarea
                    type="text"
                    name="comment1"
                    placeholder="내용"
                    className="coment_write comment_write_text write_text_box"
                    value={content}
                    onChange={onChangeContent}
                    required
                  ></textarea>
                </div>
              </section>
              <section className="write_comment">
                <h2>
                  이미지 추가<span>(선택)</span>
                  <a className="detail" href="#">
                    <img
                      className="detail_img"
                      src={detailClickImg}
                      alt="detaile_click.png"
                    />
                  </a>
                </h2>
                <section className="detail_box">
                  <h2 className="hidden">툴팁</h2>
                  <p className="detail_info">
                    참고 할 URL과
                    <br />
                    이미지가 있다면 입력해 주세요! URL과 이미지를 입력하면
                    썸네일과 함께 표시됩니다.
                  </p>
                  <span>
                    <a className="detail_img_cove" href="#">
                      <img
                        className="detail_img_back"
                        src={selectBackImg}
                        alt="back.png"
                      />
                    </a>
                  </span>
                </section>
                <div className="filebox">
                  <div name="write_file_form">
                    <input
                      type="file"
                      name="comment_file"
                      onChange={onChangeImg}
                      id="file"
                      accept="image/gif, image/jpeg, image/png"
                    />
                    <input
                      className="comment_group upload-name comment_file_text write_text_box"
                      placeholder="파일선택"
                      value={image}
                      readonly
                      disabled
                    />
                    <label for="file" href="#">
                      이미지 찾기
                    </label>
                  </div>
                </div>
              </section>
              <section className="write_comment">
                <h2>
                  URL<span>(선택)</span>
                  <a className="detail2" href="#">
                    <img
                      className="detail_img"
                      src={detailClickImg}
                      alt="detaile_click.png"
                    />
                  </a>
                </h2>
                <section className="detail_box2">
                  <h2 className="hidden">툴팁</h2>
                  <p className="detail_info">
                    참고 할 URL과
                    <br />
                    이미지가 있다면 입력해 주세요! URL과 이미지를 입력하면
                    썸네일과 함께 표시됩니다.
                  </p>
                  <span>
                    <a className="detail_img_cove" href="#">
                      <img
                        className="detail_img_back2"
                        src={selectBackImg}
                        alt="back.png"
                      />
                    </a>
                  </span>
                </section>
                <div name="write_url_form">
                  <input
                    type="text"
                    name="comment2"
                    placeholder="URL 입력"
                    className="comment_group comment_url comment_url_text write_text_box"
                    onChange={onChangeUrl}
                    value={url}
                  />
                </div>
              </section>
              <section className="write_comment">
                <h2>분야</h2>
                <div className="comment_select_cove">
                  <div name="write_select_form">
                    <input
                      type="text"
                      name="comment_select"
                      placeholder="분야 선택"
                      disabled
                      className="coment_write comment_group comment_select comment_select_text write_text_box"
                      value={category}
                      required
                    />
                    <a
                      className="comment_select_img_cove"
                      onClick={onOpenModal}
                    >
                      <img
                        className="comment_select_img"
                        src={selectBackImg}
                        alt="select_back.png"
                      />
                    </a>
                    {selectModalOn ? (
                      <WriteSelectModal
                        class="write_select_popup_cove_on"
                        onOpenModal={onOpenModal}
                        category={category}
                        setCategory={setCategory}
                      />
                    ) : (
                      <WriteSelectModal
                        class="write_select_popup_cove_off"
                        onOpenModal={onOpenModal}
                        category={category}
                        setCategory={setCategory}
                      />
                    )}
                  </div>
                </div>
              </section>
              <input
                type="submit"
                // type="button"
                // onClick={onConfirmModal}
                name="write_submit_on"
                className="write_submit_on"
                value="글쓰기"
              />
              {/* {confirmModalOn ? (
                <WriteConfirmModal
                  class="write_comment_popup_cove_on"
                  onConfirmModal={onConfirmModal}
                />
              ) : (
                <WriteConfirmModal
                  class="write_comment_popup_cove_off"
                  onConfirmModal={onConfirmModal}
                />
              )}
              {submitModalOn ? (
                <WriteSubmitModal
                  class="write_comment_checking_popup_cove_on"
                  onSubmitModal={onSubmitModal}
                />
              ) : (
                <WriteSubmitModal
                  class="write_comment_checking_popup_cove_off"
                  onSubmitModal={onSubmitModal}
                />
              )} */}
            </form>
          </div>
        </div>
      );
    };

    export default Write;
    ```

  # 7/20일 화요일

  > SearchParams()

  - IE에서는 안 되지만, 모던 브라우저에서는 사용할 수 있는 기능
  - 쿼리스트링을 파싱하는 것과 같은 귀찮은 작업을 간단히 처리할 수 있어 편리
  - GET 요청 시 데이터를 전달
  - 사용 예시

    ```jsx
    const url3 = new URL(
      "https://www.zerocho.com?hello=zerocho&hi=world&hi=js"
    );
    url3.search; // ?hello=zerocho&hi=world&hi=js
    url3.searchParams; // {}

    // 메서드로 조작
    url3.searchParams.get("hello"); // zerocho
    url3.searchParams.getAll("hi"); // ['world', 'js']
    url3.searchParams.append("bye", "java");
    url3.search; // ?hello=zerocho&hi=world&hi=js&bye=java
    url3.searchParams.append("bye", "ruby");
    url3.search; // ?hello=zerocho&hi=world&hi=js&bye=java&bye=ruby
    url3.searchParams.set("bye", "python");
    url3.search; // ?hello=zerocho&hi=world&hi=js&bye=python
    url3.searchParams.delete("bye");
    url3.search; // ?hello=zerocho&hi=world&hi=js

    // axios
    const params = new URLSearchParams();
    params.append("param1", "value1");
    params.append("param2", "value2");
    axios.post("/foo", params);
    ```

- .append()
  - Element.append() 메서드 는 의 마지막 자식 뒤에 Node개체 또는 DOMString개체 집합을 삽입

> 글작성 - 파일보내는법

- 처음에는 이미지 파일을 axios로 보내도 data에 null 값이 들어갔다.
- 하지만 서칭을 통해 `FormData()` , `.append` , `headers: { "Content-Type": "multipart/form-data" }` 을 사용하여 data 전송에 성공했다.
- 코드

  ```jsx
  const pushData = () => {
    const params = new FormData();
    params.append("comment_text", content);
    params.append("comment_file", image);
    params.append("comment_url", url);
    params.append("comment_select", category);
    axios({
      method: "post",
      url: "/write_text_in_db.php",
      data: params,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ```

> 글작성 - 필수항목 작성 시 글쓰기 버튼 활성화 (조건부 렌더링)

- 코드

  ```jsx
  const [buttonOn, setButtonOn] = useState(false);

  // 버튼 비활성화 시 렌더링
  function btnDeactivate() {
    return (
      <input
        onClick={onConfirmModal}
        // type="submit"
        type="button"
        name="write_submit_off"
        className="write_submit_off"
        value="글쓰기"
        disabled
      />
    );
  }

  // 버튼 활성화 시 렌더링
  function btnActivate() {
    return (
      <input
        // type="submit"
        type="button"
        onClick={onConfirmModal}
        name="write_submit_on"
        className="write_submit_on"
        value="글쓰기"
      />
    );
  }

  // 값 체크 후 버튼 활성화 & 비활성화 체크
  function checkBtnOn() {
    if (content == "" || category == "") {
      setButtonOn(false);
    } else {
      setButtonOn(true);
    }
  }

  // 실시간 체크
  useEffect(() => {
    checkBtnOn();
    console.log("버튼 상태 :", buttonOn);
  });

  // 렌더링
  {
    buttonOn ? btnActivate() : btnDeactivate();
  }
  ```

> 글작성 - 글쓰기 버튼 클릭 > 모달에서 한번 더 확인 후 백엔드로 데이터 전송 (조건부 렌더링)

> 조건부 렌더링 진행중..

- 중간에 꼬여서 삽질을 했다..

# 7/21일 수요일

> 원래 작업 폴더 이름

- onstartup-react

> 글 등록하기 → 조건부 렌더링으로 모달 띄우기

- 컴포넌트를 나눠서 백엔드의 응답의 값에 따라 컴포넌트를 다르게 띄웠다.
- 코드

  ```jsx
  {
    submitIsTrueModal ? (
      <WriteSubmitIsTrueModal class="write_comment_popup_cove_on" />
    ) : (
      <WriteSubmitIsTrueModal class="write_comment_popup_cove_off" />
    );
  }
  {
    submitIsFalseModal ? (
      <WriteSubmitIsFalseModal
        class="write_comment_popup_cove_on"
        onSubmitFalseModal={onSubmitFalseModal}
        setSubmitIsFalseModalOn={setSubmitIsFalseModalOn}
      />
    ) : (
      <WriteSubmitIsFalseModal class="write_comment_popup_cove_off" />
    );
  }
  ```

> Content.js & ContentPage.js

- 홈 화면에 컨텐츠 이미지 렌더링

  - 이미지 가져오기
  - 이미지 값이 null인지 있는지 확인

    - 코드

      ```jsx
      // 이미지 값이 null인지 있는지 확인하는 함수
        function checkImg(idx, type) {
          const address = "http://15.164.227.114/web/";
          // 유저 프로필 사진 값 체크
          if (type == "user") {
            if (data.user_img_root[idx] == null || data.user_img_name[idx] == null) {
              return defaultUserImg;
            } else {
              return address + data.user_img_root[idx] + data.user_img_name[idx];
            }
          } // 유저가 등록한 사진 값 체크
          else if (type == "comment") {
            if (
              data.comment_img_root[idx] == null ||
              data.comment_img_name[idx] == null
            ) {
              return defaultUserImg;
            } else {
              return (
                address + data.comment_img_root[idx] + data.comment_img_name[idx]
              );
            }
          }
        }

      return (
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
                        userImgRoot={data.user_img_root[idx]}
                        userImgName={data.user_img_name[idx]}
                        commentImgRoot={data.comment_img_root[idx]}
                        commentImgName={data.comment_img_name[idx]}
                        checkUserImg={checkImg(idx, "user")}
                        checkCommentImg={checkImg(idx, "comment")}
                      />
                    );
                  })}
      )
      ```

> 컴포넌트 외부의 클릭 감지

- 코드

  ```jsx
  import React, { useRef, useEffect } from "react";

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          alert("You clicked outside of me!");
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  /**
   * Component that alerts if you click outside of it
   */
  export default function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
  }
  ```

# 7/22일 목요일

> 회원가입 & 로그인 데이터 전달하는 방식 변경

- GET → POST 방식으로 변경

  - 회원가입

    - 코드

      ```jsx
      const pushData = () => {
        const params = new FormData();
        params.append("user_name", name);
        params.append("user_email", email);
        params.append("user_password", password);
        axios({
          method: "post",
          url: "/join_member_normal.php",
          data: params,
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      ```

  - 로그인

    - 코드

      ```jsx
      const getData = () => {
        const params = new FormData();
        params.append("user_email", inputEmail);
        params.append("user_password", inputPassword);
        axios({
          method: "post",
          url: "/login.php",
          data: params,
        })
          .then((response) => {
            console.log(response.data.idx);
            if (response.data.error === 0) {
              // sessionStorage.setItem("");
              alert("로그인 성공");
            } else {
              alert("로그인 에러");
              console.log(response.data);
              setInputEmail("");
              setInputPassword("");
            }
            console.log(inputEmail);
            console.log(inputPassword);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      ```

  - 메인페이지 컨텐츠 렌더링
    - 실패..
    - 이유 : post 방식으로 data를 받아오는데 data가 배열이라 뿌려주는 방법을 모르겠다

> 회원가입 & 로그아웃

- sessionStorage .setItem & .removeItem 적용
  - sessionStorage가 생기고 없어지기는 하지만 헤더에 로그인 표시, 유저 프로필 표시가 실시간으로 바뀌지 않고 새로고침을 눌러줘야 바뀐다..

> 회원가입

- 회원가입 후 축하메세지가 뜬 뒤에 질문모달 퍼블리싱

# 7/23일 금요일

> 회원가입 후 축하한다는 모달 & 질문 모달 2개 퍼블리싱

> 막힌 부분

- 질문 모달에서 각각 버튼을 선택 했을 때 따로 색깔이 바뀌게 하는 법

  - 로직

    - 버튼 클릭 → 클릭 이벤트 발생 → set().add을 이용하여 배열에 담기 → 버튼 다시 클릭 → set().delete을 이용하여 배열에서 제거
    - 코드

      ```jsx
      const [commersItems, setCommersItems] = useState(new Set());

      const setcommersItemsHandler = (e) => {
        commersItems.add(e.target.value);
      };

      const onChangeButtonColor = () => {
        setButton(!button);
      };

      const commersButtonOnList = commersComponentArray.map((data) => {
        return (
          <button
            className={`join_member_qna_select_btn` ? `selected` : ""}
            onClick={onChangeButtonColor}
          >
            {data}
          </button>
        );
      });
      ```

  - 스타일 바꾸는 건 삼항연산자로 클래스를 다르게 주어서 변경한다.
  - button 말고 input="checkbox" 사용
  - set() 사용
    - 배열을 담고 제거하고 하는 문법인데 중복시키지 않는다.
    - 참고
      - [https://medium.com/@hongkevin/js-5-es6-map-set-2a9ebf40f96b](https://medium.com/@hongkevin/js-5-es6-map-set-2a9ebf40f96b)
      - [https://egg-programmer.tistory.com/282](https://egg-programmer.tistory.com/282)
  - input 상태 관리
    - [https://hyeok999.github.io/2020/01/04/react-velo-07/](https://hyeok999.github.io/2020/01/04/react-velo-07/)

- 메인화면에서 api 가져오는것을 GET→POST 변경 후 에러

  - 해결

    - 코드

      ```jsx
      const getData = () => {
        const params = new FormData();
        params.append("comment", 4);

        axios({
          method: "post",
          url: "/get_info.php",
          data: params,
        })
          .then((response) => {
            console.log(response);
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      ```

# 7/26일 월요일

> 회원가입 - 질문부분 데이터 전달

- 회원가입 양식 작성 후 질문 모달 2개 데이터 넘기기
- 코드

  ```jsx
  const [commersCheckedItems, setCommersCheckedItems] = useState(new Set()); // 커머스 -> 체크된 버튼들을 담는 state
  const [specialCheckedItems, setSpecialCheckedItems] = useState(new Set()); // 전문분야 -> 체크된 버튼들을 담는 state
  const [interestCheckedItems, setInterestCheckedItems] = useState(new Set()); // 관심분야 -> 체크된 버튼들을 담는 state

  // 커머스 itme들을 제어하는 함수
  const onCommersHandler = (e) => {
    commersCheckedItems.add(e.target.value);
    setCommersCheckedItems(commersCheckedItems);
    console.log(commersCheckedItems);
  };

  // 전문분야 itme들을 제어하는 함수
  const onSpecialHandler = (e) => {
    specialCheckedItems.add(e.target.value);
    setSpecialCheckedItems(specialCheckedItems);
    console.log(specialCheckedItems);
  };

  // 관심분야 itme들을 제어하는 함수
  const onInterestHandler = (e) => {
    interestCheckedItems.add(e.target.value);
    setInterestCheckedItems(interestCheckedItems);
    console.log(interestCheckedItems);
  };

  // 데이터 POST 방식으로 보내기
  const pushData = () => {
    const params = new FormData();
    params.append("user_name", name);
    params.append("user_email", email);
    params.append("user_password", password);
    params.append("commerce", [...commersCheckedItems]);
    params.append("specialty", [...specialCheckedItems]);
    params.append("interesting", [...interestCheckedItems]);
    axios({
      method: "post",
      url: "/response/join_member_normal.php",
      data: params,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ```

> 사이드바 드롭다운 관련

- 참고
  - [https://codesandbox.io/s/stack-63755719-ul-show-hide-6sk2x?file=/src/App.js](https://codesandbox.io/s/stack-63755719-ul-show-hide-6sk2x?file=/src/App.js)

> axios 주소 url 수정, 모달창에서 선택분야 데이터 넘기기

- 코드

  ```jsx
  // 데이터 POST 방식으로 보내기
  const pushData = () => {
    const params = new FormData();
    params.append("user_name", name);
    params.append("user_email", email);
    params.append("user_password", password);
    params.append("commerce", [...commersCheckedItems]);
    params.append("specialty", [...specialCheckedItems]);
    params.append("interesting", [...interestCheckedItems]);
    axios({
      method: "post",
      url: "/response/join_member_normal.php",
      data: params,
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.user_idx);
        sessionStorage.setItem("user_idx", response.data.user_idx);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ```

# 7/27일 화요일

> 사이드바 드롭다운 구현

- 코드

  ```jsx

  	// state 관리
  	const [open, setOpen] = useState(false);
    const [checkedItmes, setCheckedItems] = useState(new Set()); //클릭 된 것들 담는 state

  	// 클릭한 아이템을 담는 함수
    const onCheckedItemsHandler = (e) => {
      console.log(checkedItmes.values());
      if (checkedItmes.has(e.target.innerText)) {
        checkedItmes.delete(e.target.innerText);
        setOpen(false);
      } else {
        checkedItmes.add(e.target.innerText);
        setCheckedItems(checkedItmes);
        setOpen(true);
      }

  	//렌더링 부분
  	const componentArrayList = componentArray.map((data, index) => {
  	    return (
  	      <li key={index} className="side_sub_bar" onClick={onCheckedItemsHandler}>
  	        <a className="side_sub_menu">
  	          <span className="side_sub_menu_icon_cove">
  	            <img src={data.src} className="side_sub_menu_icon" />
  	          </span>
  	          <span className="sidemenu_text">{data.title}</span>
  	        </a>
  	        {checkedItmes.has(data.title)
  	          ? sideBarSubMenuHandlerOn()
  	          : sideBarSubMenuHandlerOff()}
  	      </li>
  	    );
  	  });

  ```

> 버튼 색깔 변경

- 코드

  ```jsx
  // 커머스 버튼 색상변경 핸들러
  const onCommersHandler = (data) => {
    let itemSet = new Set(commersCheckedItems);
    console.log(itemSet);
    if (commersCheckedItems.has(data)) {
      itemSet.delete(data);
      setCommersCheckedItems(itemSet);
    } else {
      itemSet.add(data);
      setCommersCheckedItems(itemSet);
    }
    console.log(data, commersCheckedItems.values());
  };

  // 커머스 관련 버튼 컴포넌트 Mapping
  const commersButtonOnList = commersComponentArray.map((data) => {
    return (
      <button
        className={`join_member_qna_select_btn ${
          commersCheckedItems.has(data) ? "selected" : ""
        }`}
        onClick={() => onCommersHandler(data)}
      >
        {data}
      </button>
    );
  });
  ```

> 모달 변경

- css 변경 필요

> 프로필 - 게이지바

- css를 통해 제어
- 코드

  ```jsx
  <div className="progress_bar_container">
                          <label for="progress_bar">
                            프로필 작성 단계
                            <span className="progress_bar_num">1/5</span>
                          </label>
                        </div>
                        <div>
                          <progress
                            id="progress_bar"
                            max="5"
                            value="1"
                          ></progress>
                        </div>
                      </div>
  ```

# 7/29일 목요일

---

> redux toolkit

- 리덕스를 사용할 수 있는 라이브러리로 엄청 편하고 쉽다고 한다.

> 마이페이지 수정 페이지 - (리스트 추가 & 제거 기능 구현 & 수정)

- 코드

  ```jsx
  // 1. 기존 input 에 값을 넣을 수 있는 state & 추가 한 값이 들어갈 수 있는 state 생성

  //경력사항
  const [careerItem, setCareerItem] = useState("");
  //경력사항을 담는 배열
  const [careerItemList, setCareerItemList] = useState([]);

  // 2. input에 변경되는 값을 감지하고 저장하는 함수를 작성

  // 경력추가 input 값 감지 함수
  const careerOnChangeHandler = (e) => {
    console.log(e.target.value);
    setCareerItem(e.target.value);
  };

  // 3. 추가 버튼을 누르면 값이 비었는지 체크 & careerItemList에 담는다 (추가)

  // 경력추가 버튼 기능
  const onCareerSubmit = () => {
    if (careerItem === "") {
      return;
    } else {
      setCareerItemList(careerItemList.concat(careerItem));
    }
    setCareerItem("");
  };

  // 4. x버튼을 누르면 누른 div 를 제거 (제거)

  // 추가한 항목 삭제버튼 기능
  const onCareerCancelClick = (item) => {
    const checkNewArray = careerItemList.filter((el) => el !== item);
    setCareerItemList(checkNewArray);
  };

  // 5. input & mapping

  <input
    type="text"
    className="mypage_input_add"
    placeholder="회사"
    value={careerItem}
    onChange={careerOnChangeHandler}
  />;
  {
    careerItemList.map((item) => {
      return (
        <div className="mypage_input_interest">
          {item}
          <a
            className="mypage_edit_tag_cancel_img_box"
            onClick={() => onCareerCancelClick(item)}
          >
            <img src={editTagImg} alt="edit_tag_cancel" />
          </a>
        </div>
      );
    });
  }
  ```

# 7/30일 금요일

> 관심분야 선택 기능 구현

- 코드

  ```jsx
  // 리스트 구현
  const selectsInterestListArray = [
      "커머스 진단",
      "상품기획MD",
      "콘텐츠",
      ...,
    ];

  // 관심분야 선택하기 컴포넌트 Mapping
    const selectsInterestList = selectsInterestListArray.map((data) => {
      return (
        <li
          className="mypage_edit_select_interest_list"
          onClick={() => onInterestSelectClick(data)}
        >
          <a className="wirte_select_list">{data}</a>
        </li>
      );
    });

  //관심분야 선택을 담는 배열
    const [interestSelectItemList, setInterestSelectItemList] = useState([]);

  // 관심분야 선택 클릭 함수 (항목 추가)
    const onInterestSelectClick = (data) => {
      console.log(data);
      setInterestSelectItemList(interestSelectItemList.concat(data));
    };

  // 관심분야 -> 추가한 항목 삭제 기능
    const onInterestCancelClick = (item) => {
      const checkNewArray = interestSelectItemList.filter((el) => el !== item);
      setInterestSelectItemList(checkNewArray);
    };

  // rendering
  {interestSelectItemList.map((item) => {
                  return (
                    <div className="mypage_input_interest">
                      {item}
                      <a
                        className="mypage_edit_tag_cancel_img_box"
                        onClick={() => onInterestCancelClick(item)}
                      >
                        <img src={editTagImg} alt="edit_tag_cancel" />
                      </a>
                    </div>
                  );
                })}
  ```

# 8/2일 월요일

> api와 연동하여 관심분야 선택 / 제거 기능 구현

- 코드

  ```jsx
  //api 받아오기

  const getCategoryData = () => {
    const params = new FormData();
    params.append("command", "ca");
    params.append("kind", "interesting");
    axios({
      method: "post",
      url: "/response/get_info.php",
      data: params,
    })
      .then((response) => {
        console.log("category response :", response.data);
        setInterestSelectItemList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //axios로 받아온 관심분야 선택을 담는 배열
  const [interestSelectItemList, setInterestSelectItemList] = useState({
    category_order_num: [],
    category_parent_idx: [],
    category_text: [],
  });

  // 관심분야 선택하기 컴포넌트 Mapping
  const selectsInterestList = interestSelectItemList.category_text.map(
    (data) => {
      return (
        <li
          className="mypage_edit_select_interest_list"
          onClick={() => onInterestSelectClick(data)}
        >
          <a className="wirte_select_list">{data}</a>
        </li>
      );
    }
  );

  //렌더링 부분
  {
    [...interestSelectItemRenderList].map((item) => {
      return (
        <div className="mypage_input_interest">
          {item}
          <a
            className="mypage_edit_tag_cancel_img_box"
            onClick={() => onInterestCancelClick(item)}
          >
            <img src={editTagImg} alt="edit_tag_cancel" />
          </a>
        </div>
      );
    });
  }

  // 관심분야 선택하기에서 선택한 것들을 담는 객체
  const [interestSelectItemRenderList, setInterestSelectItemRenderList] =
    useState(new Set());

  // 관심분야 선택 클릭 함수 (항목 추가)
  const onInterestSelectClick = (data) => {
    let interestAddSet = new Set(interestSelectItemRenderList);
    interestAddSet.add(data);
    setInterestSelectItemRenderList(interestAddSet);
    console.log(interestSelectItemRenderList.values());
  };

  // 관심분야 -> 추가한 항목 삭제 기능
  const onInterestCancelClick = (item) => {
    let interestSubSet = new Set(interestSelectItemRenderList);
    interestSubSet.delete(item);
    setInterestSelectItemRenderList(interestSubSet);
  };
  ```

> 사이드바 → api와 연동해서 렌더링

- 코드

  ```jsx
  const componentArrayList = categoryData.category_text.map((data, idx) => {
    return (
      <li className="side_sub_bar" onClick={onCheckedItemsHandler}>
        <a className="side_sub_menu">
          <span className="side_sub_menu_icon_cove">
            <img
              src={categoryData.category_img_root_name[idx]}
              className="side_sub_menu_icon"
            />
          </span>
          <span className="sidemenu_text">
            {categoryData.category_text[idx]}
          </span>
        </a>
        {checkedItmes.has(categoryData.category_text[idx])
          ? sideBarSubMenuHandlerOn()
          : sideBarSubMenuHandlerOff()}
      </li>
    );
  });

  const [categoryData, setCategoryData] = useState({
    category_img_root_name: [],
    category_order_num: [],
    category_parent_idx: [],
    category_text: [],
  });
  ```

> Write.js & WriteSelectModal.js → api와 연동해서 렌더링

- 코드

  ```jsx
  // Write.js

  const [categoryData, setCategoryData] = useState({
    category_img_root_name: [],
    category_order_num: [],
    category_parent_idx: [],
    category_text: [],
  });
  const [category, setCategory] = useState([]);

  const getCategoryData = () => {
    const params = new FormData();
    params.append("command", "ca");
    params.append("kind", "main");
    axios({
      method: "post",
      url: "/response/get_info.php",
      data: params,
    })
      .then((response) => {
        console.log("category response :", response.data);
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  // WriteSelectModal.js

  const selectList = props.categoryData.category_text.map((data, idx) => {
    return (
      <li>
        <a
          class="write_select_list"
          onClick={() => {
            props.setCategory(props.categoryData.category_text[idx]);
          }}
        >
          {props.categoryData.category_text[idx]}
        </a>
      </li>
    );
  });
  ```

> 회원가입 → 질문모달 2개 → api와 연동해서 렌더링

- 코드

  ```jsx
  const [commerceData, setCommerceData] = useState({
    category_order_num: [],
    category_parent_idx: [],
    category_text: [],
  });

  const [specialtyData, setSpecialtyData] = useState({
    category_order_num: [],
    category_parent_idx: [],
    category_text: [],
  });

  // 커머스 버튼 색상변경 핸들러
  const onCommersHandler = (data) => {
    let itemSet = new Set(commersCheckedItems);
    console.log(itemSet);
    if (commersCheckedItems.has(data)) {
      itemSet.delete(data);
      setCommersCheckedItems(itemSet);
    } else {
      itemSet.add(data);
      setCommersCheckedItems(itemSet);
    }
    console.log(data, commersCheckedItems.values());
  };

  // 커머스 관련 버튼 컴포넌트 Mapping
  const commersButtonOnList = commerceData.category_text.map((data) => {
    return (
      <button
        className={`join_member_qna_select_btn ${
          commersCheckedItems.has(data) ? "selected" : ""
        }`}
        onClick={() => onCommersHandler(data)}
      >
        {data}
      </button>
    );
  });
  ```
