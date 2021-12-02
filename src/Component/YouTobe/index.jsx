import React from "react";
import { Container, Div, Flexing, Img, Title, Wrapper } from "./style";
import more from "../../assets/icon/more.svg";
import CardYoutobe from "../Cards/CardYoutobe";

export const Youtobe = () => {
  return (
    <Container>
      <Flexing>
        <Title black>You Tobe</Title>
        <Div>
          <Title>All members</Title>
          <Img src={more} alt="all-icon" />
        </Div>
      </Flexing>
      <CardYoutobe />
    </Container>
  );
};

export default Youtobe;
