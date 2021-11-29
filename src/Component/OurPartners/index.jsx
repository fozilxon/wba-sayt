import React from "react";
import CardHomiylar from "../CardHomiylar";
import { Container, Wrapper } from "./style";
import airbnb from "../../assets/icon/airbnb.svg";
import paypal from "../../assets/icon/paypal.svg";
import ebay from "../../assets/icon/ebay.svg";

export const OurPartners = () => {
  return (
    <Container>
      <Wrapper>
        <CardHomiylar img={airbnb} />
        <CardHomiylar img={paypal} />
        <CardHomiylar img={ebay} />
        <CardHomiylar img={airbnb} />
        <CardHomiylar img={paypal} />
        <CardHomiylar img={ebay} />
      </Wrapper>
    </Container>
  );
};

export default OurPartners;
