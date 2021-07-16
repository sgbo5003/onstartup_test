import React, { useEffect, useState } from "react";
import naverImg from "../images/naver.png";
import googleImg from "../images/google.png";
import kakaoImg from "../images/kakao.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { KAKAO_AUTH_URL } from "../OAuth";
// import { NAVER_AUTH_URL } from "../OAuth";
// import { useForm } from "react-hook-form";
// http://15.164.227.114/web/src/php/join_member_normal.php?user_name:%22%22&user_email:%22%22&user_password:%22%22

const Join = () => {
  const { naver } = window;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // 카카오 로그인
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

  // 네이버 로그인

  // const NaverLoginHandler = () => {
  //   axios
  //     .get(NAVER_AUTH_URL)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const NaverLoginHandler = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "jxNOYlz8FOqMBba83QbQ",
      callbackUrl: "http://15.164.227.114/web/src/php/join_sns_naver.php",
      loginButton: { color: "green", type: 3, height: 60 },
      isPopup: false,
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const history = useHistory();
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

  // const validatePassword = (password, confirmPassword) => {
  //   if (password !== confirmPassword) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const validateEmail = (email) => {
    const regExp =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
    if (regExp.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
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

  return (
    <div className="wap login_join_wap">
      <div className="login_join_content">
        <div className="login_join_view">
          <h2 className="login_join_title">
            커머스 관련 인사이트를
            <br />
            온스타트업에서 만나보세요!
          </h2>
          <div className="login_form_group">
            <section className="login_form">
              <p>
                앗! 이미 회원이신가요?
                <Link to="/Login" className="login_btn">
                  로그인하기
                </Link>
              </p>
            </section>

            <section className="kakao_form" onClick={kakaoLoginHandler}>
              <p>
                <img src={kakaoImg} alt="kakao" />
                카카오 3초만에 가입하기
              </p>
            </section>
            <section className="login_form_line">
              <p>또는</p>
              <div></div>
            </section>
          </div>
          <div className="login_text_group">
            <h2 className="login_member_join_title">일반 회원가입하기</h2>
            <form className="login_member_join_form" onSubmit={onSubmit}>
              <p>이름</p>
              <input
                className="join_member_text join_member_name"
                type="text"
                name="join_member_name"
                placeholder="이름 입력"
                value={name}
                required
                onChange={onChangeName}
              />
              <p>이메일</p>
              <div className="result-email"></div>
              <input
                className="join_member_text join_member_email"
                type="email"
                name="join_member_email"
                placeholder="이메일 입력"
                value={email}
                required
                onChange={onChangeEmail}
              />
              {emailError && (
                <div style={{ color: "red" }}>
                  이메일 형식이 일치하지 않습니다.
                </div>
              )}
              <p>비밀번호</p>
              <div className="result-pass"></div>
              <input
                className="join_member_text join_member_pass"
                type="password"
                name="join_member_pass"
                placeholder="비밀번호 입력"
                value={password}
                required
                onChange={onChangePassword}
              />
              <p>비밀번호 확인</p>
              <div className="result-re-pass"></div>
              <input
                className="join_member_text join_member_repass"
                type="password"
                name="join_member_repass"
                placeholder="비밀번호 입력"
                value={confirmPassword}
                required
                onChange={onChangeConfirmPassword}
              />
              {passwordError && (
                <div style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
              <span>
                '회원가입'을 누름으로써 온스타트업의
                <a className="service_tab" href="#">
                  이용약관
                </a>
                과
                <a className="policy_tab" href="#">
                  개인정보 처리 방침
                </a>
                에 동의합니다.
              </span>
              <input
                className="join_member_submit"
                type="submit"
                name="join_member_submit"
                value="회원가입"
                // disabled
              />
              <a className="service_center_join_btn" href="#">
                고객센터
              </a>
            </form>
            <section className="login_form_line">
              <p>또는</p>
              <div></div>
            </section>
            <section
              className="naver_form"
              id="naverIdLogin"
              onClick={NaverLoginHandler}
            >
              <p>
                <img src={naverImg} alt="naver" />
                네이버 간편가입
              </p>
            </section>
            <section className="google_form">
              <p>
                <img src={googleImg} alt="google" />
                구글 간편가입
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
