import React from "react";
import {
  Box,
  Circle,
  Container,
  Div,
  Flexing,
  Icon,
  Title,
  Wrapper,
  Text,
  Input,
  Btn,
} from "./style";
import git from "../../assets/icon/git.svg";
import facebook from "../../assets/icon/facebook.svg";
import google from "../../assets/icon/google.svg";

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Box large>
          <Div big>
            <Title>
              Neumorphism UI PRO is a premium Bootstrap UI Kit built based on
              the newest design trend called Neumorphism.
            </Title>
            <Flexing>
              <a
                target="_blank"
                href="https://www.facebook.com/search/top?q=webbrain%20academy"
              >
                <Circle>
                  <Icon src={facebook} alt="icon" />
                </Circle>
              </a>
              <a target="_blank" href="https://www.google.ru/">
                <Circle>
                  <Icon src={google} alt="icon" />
                </Circle>
              </a>
              <a target="_blank" href="https://github.com/">
                <Circle>
                  <Icon src={git} alt="icon" />
                </Circle>
              </a>
            </Flexing>
          </Div>
          <Div>
            <Text bold>Web brain</Text>
            <Text>Team</Text>
            <Text>Partners</Text>
            <Text>Lessons</Text>
            <Text>About us</Text>
          </Div>
          <Div>
            <Text bold>Others</Text>
            <Text>Docs</Text>
            <Text>Changelog</Text>
            <Text>Liceness</Text>
            <Text>Support</Text>
          </Div>
          <Div big>
            <Text bold box4>
              Others
            </Text>
            <Text small>
              Join our mailing list. We write rarely, but only the best content
            </Text>
            <Input type="text" placeholder="example@company.com" />
            <Btn>Subscribe</Btn>
            <Text small>
              We’ll never share your detailes. See our Privacy Policy
            </Text>
          </Div>
        </Box>
        <Box wb>
          <Btn wb>WB</Btn>
          <Text wb>Copyright @ Webbrain 2021. All rights reserved</Text>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Footer;
