import React from "react";
import CardHomiylar from "../CardHomiylar";
import { Container, Wrapper, Flexing, Title, Img, Div } from "./style";
import airbnb from "../../assets/icon/airbnb.svg";
import paypal from "../../assets/icon/paypal.svg";
import ebay from "../../assets/icon/ebay.svg";
import more from "../../assets/icon/more.svg";

export const OurPartners = () => {
  return (
    <Container>
      <Flexing>
        <Title black>Our Time</Title>
        <Div>
          <Title>All members</Title>
          <Img src={more} alt="all-icon" />
        </Div>
      </Flexing>
      <Wrapper>
        <CardHomiylar link="https://www.airbnb.ru/" img={airbnb} />
        <CardHomiylar link="https://www.paypal.com/ru/home" img={paypal} />
        <CardHomiylar link="https://www.ebay.com/" img={ebay} />
        <CardHomiylar link="https://www.airbnb.ru/" img={airbnb} />
        <CardHomiylar link="https://www.paypal.com/ru/home" img={paypal} />
        <CardHomiylar link="https://www.ebay.com/" img={ebay} />
      </Wrapper>
    </Container>
  );
};

export default OurPartners;
