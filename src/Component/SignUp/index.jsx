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

export const SignUp = () => {
  const [check, setCheck] = useState(false);

  const getTick = () => {
    setCheck(!check);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Create Account</Title>
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

        {/* confirim password input */}
        <Texts tops right>
          Confirim Password
        </Texts>
        <InputCon>
          <IconImg src={qulf} alt="" />
          <Inputs placeholder="Confirim Password" type="text" name="" id="" />
        </InputCon>

        {/* Remembered div */}
        <Flex main>
          <Circle onClick={getTick}>
            <i className={check ? "fa fa-check" : ""}></i>
          </Circle>
          <Text none>I agree to terms and conditions</Text>
        </Flex>
        {/* login div */}
        <Btn>Sign up</Btn>
        <Word>or </Word>
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
          <Text>Already have an account?</Text>
          <Text black>
            <strong>Login here</strong>
          </Text>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
