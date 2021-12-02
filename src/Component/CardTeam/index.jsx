import React from "react";
import {
  Container,
  Box,
  Circle,
  Img,
  Title,
  Flexing,
  Icon,
  Item,
  Btn,
} from "./style";
import cardInstagram from "../../assets/icon/cardInstagram.svg";
import cardYoutobe from "../../assets/icon/cardYoutobe.svg";
import cardFacebook from "../../assets/icon/cardFacebook.svg";
import cardGithub from "../../assets/icon/cardGithub.svg";

export const CardTeam = ({ img, name, status }) => {
  return (
    <Container>
      <Box>
        <Circle>
          <Img src={img} alt="Sardorbek" />
        </Circle>
        <Title top>{name}</Title>
        <Title small>{status} Developer</Title>
        <Flexing>
          <a target="_blank" href="https://www.facebook.com/">
            <Icon src={cardFacebook} alt="icon" />
          </a>
          <a target="_blank" href="https://www.instagram.com/?hl=ru">
            <Icon src={cardInstagram} alt="icon" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/c/WebBrainAcademy/featured"
          >
            <Icon src={cardYoutobe} alt="icon" />
          </a>
          <a target="_blank" href="https://github.com/">
            <Icon src={cardGithub} alt="icon" />
          </a>
        </Flexing>
        <Title width small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus
          eu, quam vitae vestibulum.
        </Title>
      </Box>
      <Box two>
        <Item>Lorem ipsum dolor sit amet</Item>
        <Item small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus
          eu, quam vitae vestibulum. In ullamcorper consectetur aliquam laoreet
          laoreet. Placerat dolor in dui, dignissim imperdiet malesuada felis
          neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          lacus eu, quam vitae vestibulum. In ullamcorper consectetur aliquam
          laoreet laoreet. Placerat dolor in dui, dignissim imperdiet malesuada
          felis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec lacus eu, quam vitae vestibulum. In ullamcorper consectetur
          aliquam laoreet laoreet. Placerat dolor in dui, dignissim imperdiet
          malesuada felis neque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec lacus eu, quam vitae vestibulum. In ullamcorper
          consectetur aliquam laoreet laoreet. Placerat dolor in dui, dignissim
          imperdiet malesuada felis neque.{" "}
        </Item>
        <Flexing floor>
          <Btn>Html</Btn>
          <Btn>Css</Btn>
          <Btn>Bootstrap</Btn>
          <Btn>Sass</Btn>
          <Btn>Javascript</Btn>
          <Btn>React Js</Btn>
          <Btn>Angular Js</Btn>
          <Btn>Node Js</Btn>
        </Flexing>
      </Box>
    </Container>
  );
};

export default CardTeam;
