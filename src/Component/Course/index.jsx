import React from "react";
import {
  Box,
  BtnSearch,
  Container,
  Hr,
  Flexing,
  Input,
  Title,
  Wrapper,
  Item,
} from "./style";
import Carousel from "react-elastic-carousel";
import Sardorbek from "../../assets/img/Sardorbek.png";
import Zohidjon from "../../assets/img/Zohidjon.png";
import Hamzatbek from "../../assets/img/Hamzatbek.png";
import OnlineCourseCard from "../OnlineCourseCard";
import Footer from "../Footer";

const breakPoints = [{ width: 1200, itemsToShow: 3 }];

export const Course = () => {
  return (
    <Container>
      <Box>
        <Title>Recommended by Webbarin</Title>
        <Title small>
          Enroll in popular courses based on enrollment data and ratings by
          learners from a variety of industries across Webbrain.
        </Title>
      </Box>
      <Hr></Hr>
      <Flexing>
        <Input type="text" placeholder="Search your courses" />
        <BtnSearch>Search</BtnSearch>
      </Flexing>
      <Wrapper>
        <Item front>Frontend</Item>
        {/* Frontend */}

        <Carousel style={{ ourHeight: "800px" }} breakPoints={breakPoints}>
          <OnlineCourseCard
            logo={Sardorbek}
            name="Sardor Muxtorov"
            price="100"
            status="Frontend"
          />
          <OnlineCourseCard
            logo={Sardorbek}
            name="Sardor Muxtorov"
            price="100"
            status="Frontend"
          />
          <OnlineCourseCard
            logo={Sardorbek}
            name="Sardor Muxtorov"
            price="100"
            status="Frontend"
          />
          <OnlineCourseCard
            logo={Sardorbek}
            name="Sardor Muxtorov"
            price="100"
            status="Frontend"
          />
          <OnlineCourseCard
            logo={Sardorbek}
            name="Sardor Muxtorov"
            price="100"
            status="Frontend"
          />
          <OnlineCourseCard
            logo={Sardorbek}
            name="Sardor Muxtorov"
            price="100"
            status="Frontend"
          />
        </Carousel>

        {/* Mobile */}
        <Item>Mobile</Item>

        <Carousel breakPoints={breakPoints}>
          <OnlineCourseCard
            logo={Zohidjon}
            name="Zohidjon Akbarov"
            price="140"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Zohidjon}
            name="Zohidjon Akbarov"
            price="140"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Zohidjon}
            name="Zohidjon Akbarov"
            price="140"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Zohidjon}
            name="Zohidjon Akbarov"
            price="140"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Zohidjon}
            name="Zohidjon Akbarov"
            price="140"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Zohidjon}
            name="Zohidjon Akbarov"
            price="140"
            status="Mobile"
          />
        </Carousel>

        {/* Bekend */}
        <Item>Bekend</Item>

        <Carousel breakPoints={breakPoints}>
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
        </Carousel>
      </Wrapper>
      <Footer />
    </Container>
  );
};
