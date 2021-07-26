import React, { useEffect, useState } from "react";
import naverImg from "../images/naver.png";
import googleImg from "../images/google.png";
import kakaoImg from "../images/kakao.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { KAKAO_AUTH_URL } from "../OAuth";
import { NAVER_AUTH_URL } from "../OAuth";
import JoinSubmitModal from "../components/JoinSubmitModal";
import JoinSubmitQnaFirstModal from "../components/JoinSubmitQnaFirstModal";
import JoinSubmitQnaSecondModal from "../components/JoinSubmitQnaSecondModal";
// import { useForm } from "react-hook-form";

const Join = (props) => {
  const { naver } = window;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [buttonOn, setButtonOn] = useState(false);
  const [joinSubmitModalOn, setJoinSubmitModalOn] = useState(false);
  const [joinSubmitQnaModalOn, setJoinSubmitQnaModalOn] = useState(false);
  const [joinSubmitQnaSecondModalOn, setJoinSubmitQnaSecondModalOn] =
    useState(false);

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

  // 회원가입 버튼 비활성화
  function btnDeactivate() {
    return (
      <input
        className="join_member_submit_off"
        type="submit"
        name="join_member_submit"
        value="회원가입"
        disabled
      />
    );
  }

  // 회원가입 버튼 활성화
  function btnActivate() {
    return (
      <input
        className="join_member_submit_on"
        // type="submit"
        type="button"
        onClick={onJoinSubmitModal}
        name="join_member_submit"
        value="회원가입"
      />
    );
  }

  // 버튼 활성화 & 비활성화 체크
  function checkBtnOn() {
    if (name == "" || email == "" || password == "" || confirmPassword == "") {
      setButtonOn(false);
    } else {
      setButtonOn(true);
    }
  }

  // 회원가입 완료 시 축하한다는 메세지가 나오는 모달 제어
  const onJoinSubmitModal = () => {
    setJoinSubmitModalOn(true);
  };

  const onJoinSubmitQnaModal = () => {
    setJoinSubmitModalOn(false);
    setJoinSubmitQnaModalOn(true);
  };

  // 선택창 첫번째 모달 off, 두번째 모달 on
  const onJoinSubmitQnaSecondModal = () => {
    setJoinSubmitQnaModalOn(false);
    setJoinSubmitQnaSecondModalOn(true);
  };

  const history = useHistory();
  const { isLogin, setIsLogin } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 & 비밀번호 유효성 검사
    if (password !== confirmPassword) {
      return setPasswordError(true);
    }
    if (emailError) return;
    console.log({ name, email, password, confirmPassword });

    //회원가입 조건 다 만족 시 회원가입진행
    if (password && email && name && confirmPassword) {
      sessionStorage.setItem("email", email);
      alert("회원가입 완료!");
      pushData();
      history.push("/");
      setIsLogin(!isLogin);
    }
  };

  // 이메일 유효성 검사
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

  // 데이터 POST 방식으로 보내기
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

  // 실시간으로 state 변경 & 체크
  useEffect(() => {
    checkBtnOn();
  });

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
              {buttonOn ? btnActivate() : btnDeactivate()}
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
              // id="naverIdLogin"
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
          {joinSubmitModalOn ? (
            <JoinSubmitModal
              class="join_member_checked_cove_on"
              onJoinSubmitQnaModal={onJoinSubmitQnaModal}
            />
          ) : (
            <JoinSubmitModal class="join_member_checked_cove_off" />
          )}
          {joinSubmitQnaModalOn ? (
            <JoinSubmitQnaFirstModal
              class="join_member_checked_qna_cove_on "
              onJoinSubmitQnaSecondModal={onJoinSubmitQnaSecondModal}
            />
          ) : (
            // <JoinSubmitQnaFirstModal class="join_member_checked_qna_cove_off" />
            <JoinSubmitQnaFirstModal class="join_member_checked_qna_cove_off" />
            // <JoinSubmitQnaFirstModal
            //   class="join_member_checked_qna_cove_on"
            //   onJoinSubmitQnaSecondModal={onJoinSubmitQnaSecondModal}
            // />
          )}
          {joinSubmitQnaSecondModalOn ? (
            <JoinSubmitQnaSecondModal class="join_member_checked_qna_cove_on" />
          ) : (
            //<JoinSubmitQnaSecondModal class="join_member_checked_qna_cove_off" />
            <JoinSubmitQnaSecondModal class="join_member_checked_qna_cove_off" />
            //<JoinSubmitQnaSecondModal class="join_member_checked_qna_cove_on" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Join;
