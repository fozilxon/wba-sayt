import React, { useState } from "react";
import email from "../../assets/icon/email.svg";
import qulf from "../../assets/icon/qulf.svg";
import google from "../../assets/icon/google.svg";
import facebook from "../../assets/icon/facebook.svg";
import git from "../../assets/icon/git.svg";
import {
  Container,
  Title,
  Text,
  Texts,
  IconImg,
  InputCon,
  Inputs,
  Flex,
  Circle,
  Btn,
  Word,
  CircleIconCon,
  Wrapper,
} from "./style";
import { Link } from "react-router-dom";

export const Login = () => {
  const [check, setCheck] = useState(false);

  const getTick = () => {
    setCheck(!check);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Sign in to our platform</Title>
        <Text>Login here using your username and password</Text>
        {/* email input */}
        <Texts>Your email</Texts>
        <InputCon>
          <IconImg src={email} alt="email-icon" />
          <Inputs placeholder="example@company.com" type="text" name="" id="" />
        </InputCon>

        {/* password input */}
        <Texts tops>Password</Texts>
        <InputCon>
          <IconImg src={qulf} alt="" />
          <Inputs placeholder="Password" type="text" name="" id="" />
        </InputCon>

        {/* Remembered div */}
        <Flex main>
          <Flex>
            <Circle onClick={getTick}>
              <i className={check ? "fa fa-check" : ""}></i>
            </Circle>
            <Text none>Remembered me</Text>
          </Flex>
          <Text chap>Lost password?</Text>
        </Flex>
        {/* login div */}
        <Btn>Login</Btn>
        <Word>or login with</Word>
        {/* main icons */}
        <Flex>
          <CircleIconCon>
            <img className="" src={facebook} alt="facebook" />
          </CircleIconCon>
          <CircleIconCon>
            <img className="" src={google} alt="google" />
          </CircleIconCon>
          <CircleIconCon>
            <img className="" src={git} alt="git" />
          </CircleIconCon>
        </Flex>

        <Flex>
          <Text right>Not registered?</Text>
          <Link to="/signUp">
            <Text black>
              <strong>Create account</strong>
            </Text>
          </Link>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Login;
