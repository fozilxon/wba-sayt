import React from "react";
//Component

import Navbar from "../Component/Navbar";

import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OnePage from "../Page/onePage";
import TwoPage from "../Page/twoPage";
import FourPage from "../Page/fourPage";
import { Container } from "./style";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Root = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Route exact path="/" component={OnePage} />
        <Route path="/team" component={TwoPage} />
        <Route path="/course" component={FourPage} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
      </Router>
    </Container>
  );
};

export default Root;
