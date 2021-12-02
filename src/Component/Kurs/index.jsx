import React from "react";
import OnlineCourseCard from "../OnlineCourseCard";
import { Container, Wrapper, Flexing, Title, Div, Img } from "./style";
import Sardorbek from "../../assets/img/Sardorbek.png";
import Zohidjon from "../../assets/img/Zohidjon.png";
import Hamzatbek from "../../assets/img/Hamzatbek.png";
import Carousel from "react-elastic-carousel";
import more from "../../assets/icon/more.svg";

const breakPoints = [{ width: 1200, itemsToShow: 3 }];

export const Kurs = () => {
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
        <Carousel breakPoints={breakPoints}>
          <OnlineCourseCard
            logo={Sardorbek}
            name="Sardor Muxtorov"
            price="100"
            status="Frontend"
          />
          <OnlineCourseCard
            logo={Zohidjon}
            name="Zohidjon Akbarov"
            price="140"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Hamzatbek}
            name="Hamza Kuranboyev"
            price="120"
            status="Bekend"
          />
          <OnlineCourseCard
            logo={Hamzatbek}
            name="Hamza Kuranboyev"
            price="120"
            status="Bekend"
          />
          <OnlineCourseCard
            logo={Zohidjon}
            name="Zohidjon Akbarov"
            price="140"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Sardorbek}
            name="Sardor Muxtorov"
            price="100"
            status="Frontend"
          />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Kurs;
