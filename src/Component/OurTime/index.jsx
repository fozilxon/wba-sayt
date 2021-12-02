import React from "react";
import { Container, Div, Flexing, Img, Title, Wrapper } from "./style";
import CardTeacher from "../CardTeacher";
import Sardorbek from "../../assets/img/Sardorbek.png";
import Zohidjon from "../../assets/img/Zohidjon.png";
import Hamzatbek from "../../assets/img/Hamzatbek.png";
import Carousel from "react-elastic-carousel";
import more from "../../assets/icon/more.svg";

const breakPoints = [{ width: 1200, itemsToShow: 3 }];

export const OurTime = () => {
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
        <Carousel style={{ ourHeight: "800px" }} breakPoints={breakPoints}>
          <CardTeacher
            img={Sardorbek}
            status="Frontend"
            name="Sardorbek Muhtorov"
          />
          <CardTeacher img={Zohidjon} status="Mobile" name="Zohidjon Akbarov" />
          <CardTeacher
            img={Hamzatbek}
            status="Bekend"
            name="Hamza Kuranbayev"
          />
          <CardTeacher img={Zohidjon} status="Mobile" name="Zohidjon Akbarov" />
          <CardTeacher
            img={Hamzatbek}
            status="Bekend"
            name="Hamza Kuranbayev"
          />
          <CardTeacher
            img={Sardorbek}
            status="Frontend"
            name="Sardorbek Muhtorov"
          />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default OurTime;
