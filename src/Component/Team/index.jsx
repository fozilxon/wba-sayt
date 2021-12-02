import React from "react";
import CardTeam from "../CardTeam";
import { Wrapper } from "./style";
import Sardorbek from "../../assets/img/Sardorbek.png";
import Hamzatbek from "../../assets/img/Hamzatbek.png";
import Zohidjon from "../../assets/img/Zohidjon.png";

export const Team = () => {
  return (
    <Wrapper>
      <CardTeam img={Sardorbek} name="Sardorbek Muhtorov" status="Frontend" />
      <CardTeam img={Zohidjon} name="Zohidjon Akbarov" status="Mobile" />
      <CardTeam img={Hamzatbek} name="Hamza Kuranbayev" status="Bekend" />
    </Wrapper>
  );
};

export default Team;
