import React from "react";
import { Btn, Container, Text, Img } from "./style";

export const CardHomiylar = ({ img }) => {
  return (
    <Container>
      <Img src={img} alt="logo" />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus eu,
        quam vitae vestibulum. In ullamcorper consectetur aliquam laoreet
        laoreet. Placerat dolor in dui, dignissim imperdiet malesuada felis
        neque.{" "}
      </Text>
      <Btn>See Story</Btn>
    </Container>
  );
};

export default CardHomiylar;
