import React from "react";
import { Circle, Container, Flexing, Icons, Img, Text } from "./style";
import cardFacebook from "../../assets/icon/cardFacebook.svg";
import cardGithub from "../../assets/icon/cardGithub.svg";
import cardYoutobe from "../../assets/icon/cardYoutobe.svg";
import cardInstagram from "../../assets/icon/cardInstagram.svg";

export const CardTeacher = ({ img, status, name }) => {
  return (
    <Container>
      <Circle>
        <Img src={img} alt="Teacher1" />
      </Circle>

      <Text>{name}</Text>
      <Text bottom small>
        {status} Developer
      </Text>

      <Flexing>
        <Icons src={cardFacebook} alt="icon" />
        <Icons src={cardInstagram} alt="icon" />
        <Icons src={cardYoutobe} alt="icon" />
        <Icons src={cardGithub} alt="icon" />
      </Flexing>

      <Text width small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus eu,
        quam vitae vestibulum. In ullamcorper consectetur aliquam laoreet
        laoreet. Placerat dolor in dui, dignissim imperdiet malesuada felis
        neque.{" "}
      </Text>
    </Container>
  );
};

export default CardTeacher;
