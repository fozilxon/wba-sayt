import React from "react";
import { Container, Wrapper } from "./style";
import CardTeacher from "../CardTeacher";
import Sardorbek from "../../assets/img/Sardorbek.png";
import Zohidjon from "../../assets/img/Zohidjon.png";
import Hamzatbek from "../../assets/img/Hamzatbek.png";

export const OurTime = () => {
  return (
    <Container>
      <Wrapper>
        <CardTeacher
          img={Sardorbek}
          status="Frontend"
          name="Sardorbek Muhtorov"
        />
        <CardTeacher img={Zohidjon} status="Mobile" name="Zohidjon Akbarov" />
        <CardTeacher img={Hamzatbek} status="Bekend" name="Hamza Kuranbayev" />
      </Wrapper>
    </Container>
  );
};

export default OurTime;
