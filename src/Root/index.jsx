import React from "react";
//Component

import Navbar from "../Component/Navbar";

import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnePage from "../Page/onePage";
import TwoPage from "../Page/twoPage";
import FourPage from "../Page/fourPage";

export const Root = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={OnePage} />
      <Route path="/team" component={TwoPage} />
      <Route path="/course" component={FourPage} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
    </Router>
  );
};

export default Root;
