import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Community from "../routes/Community";
import Reference from "../routes/Reference";
import Write from "../routes/Write";
import Setting from "../routes/Setting";
import Join from "../routes/Join";
import Header from "./Header";
import SaveWrite from "../routes/SaveWrite";
import Login from "../routes/Login";
import defaultUserImg from "../images/default_user.png";
import Mypage from "../routes/Mypage";
import AccountManagement from "../routes/AccountManagement";
import ChangePassword from "../routes/ChangePassword";
import Notice from "../routes/Notice";
import Question from "../routes/Question";
import MypageEdit from "../routes/MypageEdit";

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isDropClick, setIsDropClick] = useState(false);

  function checkIsLogin() {
    if (sessionStorage.length < 1) {
      console.log("isLogin1 ?? :: ", isLogin);
    } else {
      setIsLogin(true);
      // console.log("isLogin2 ?? :: ", isLogin);
    }
  }

  function headerIconTrue() {
    return (
      <h1 className="mypage_area">
        <Link className="mypage_photo_cove" to="/Mypage">
          <img
            className="mypage_photo"
            src={defaultUserImg}
            alt="default_user.png"
          />
        </Link>
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
  });

  return (
    <>
      {isLogin ? (
        <Header
          isDropClick={isDropClick}
          setIsDropClick={setIsDropClick}
          isLoginTrue={headerIconTrue()}
        />
      ) : (
        <Header
          isDropClick={isDropClick}
          setIsDropClick={setIsDropClick}
          isLoginTrue={headerTextTrue()}
        />
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Community" component={Community} />
        <Route path="/Reference" component={Reference} />
        <Route path="/Write" component={Write} />
        <Route path="/Setting" component={Setting} />
        <Route
          path="/Join"
          component={Join}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
        <Route
          path="/Login"
          component={Login}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
        <Route path="/SaveWrite" component={SaveWrite} />
        <Route exact path="/Mypage" component={Mypage} />
        <Route path="/Mypage/edit" component={MypageEdit} />
        <Route path="/AccountManagement" component={AccountManagement} />
        <Route path="/ChangePassword" component={ChangePassword} />
        <Route path="/Notice" component={Notice} />
        <Route path="/Question" component={Question} />
      </Switch>
    </>
  );
};

export default AppRouter;
