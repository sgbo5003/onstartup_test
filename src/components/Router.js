import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Community from "../routes/Community";
import Reference from "../routes/Reference";
import Write from "../routes/Write";
import Setting from "../routes/Setting";
import Join from "../routes/Join";
import Header from "./Header";
import SaveWrite from "../routes/SaveWrite";
import Login from "../routes/Login";

const AppRouter = () => {
  return (
    <>
      <Header />
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
