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

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(false);

  // function checkIsLogin() {
  //   if (sessionStorage.getItem("user_email") === null) {
  //     console.log("isLogin1 ?? :: ", isLogin);
  //   } else {
  //     setIsLogin(true);
  //     console.log("isLogin2 ?? :: ", isLogin);
  //   }
  // }
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
