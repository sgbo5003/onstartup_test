import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Community from "../routes/Community";
import Reference from "../routes/Reference";
import Write from "../routes/Write";
import Setting from "../routes/Setting";
import Login from "../routes/Login";
import Header from "./Header";
import SaveWrite from "../routes/SaveWrite";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Community" component={Community} />
        <Route exact path="/Reference" component={Reference} />
        <Route exact path="/Write" component={Write} />
        <Route exact path="/Setting" component={Setting} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SaveWrite" component={SaveWrite} />
      </Switch>
    </>
  );
};

export default AppRouter;
