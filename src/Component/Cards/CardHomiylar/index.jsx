import React from "react";
import { Btn, Container, Text, Img } from "./style";

export const CardHomiylar = ({ img, link }) => {
  return (
    <Container>
      <Img src={img} alt="logo" />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus eu,
        quam vitae vestibulum. In ullamcorper consectetur aliquam laoreet
        laoreet. Placerat dolor in dui, dignissim imperdiet malesuada felis
        neque.{" "}
      </Text>
      <a href={link} target="_blank">
        <Btn>See Story</Btn>
      </a>
    </Container>
  );
};

export default CardHomiylar;
