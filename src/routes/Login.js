import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wap login_wap">
      <div className="login_pass_content">
        <div className="login_pass_view">
          <h2 className="login_view_title">로그인</h2>
          <div className="login_view_join_member">
            <p>
              아직 회원이 아니신가요? 5초 안에
              <Link to="/Join" className="join_member_btn">
                가입하기
              </Link>
            </p>
          </div>
          <form name="login_account_set_list" className="login_account_group">
            <p>이메일</p>
            <input
              className="login_account_text_box login_account_email"
              type="email"
              placeholder="이메일 입력"
              name="new_email"
              maxlength="20"
            />
            <div id="error_mail" className="result-email result-check"></div>
            <p>비밀번호</p>
            <input
              className="login_account_text_box login_account_pass"
              type="password"
              placeholder="비밀번호 입력"
              name="new_pass"
              maxlength="20"
            />
            <div id="error_tel" className="result-tel result-check"></div>
          </form>
          <form className="login_submit_group">
            <input
              className="login_submit_normal"
              type="submit"
              name="account_submit"
              value="로그인"
              disabled
            />
            <input
              className="login_submit_active"
              type="submit"
              name="account_submit"
              value="로그인"
            />
          </form>
          <div className="login_help_group">
            <a className="service_center_btn" href="#">
              고객센터
            </a>
            <a className="help_pass_btn" href="#">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
