import React from "react";
import { Btn, Conatiner, Item, NavItems, Title } from "./style";

export const Navbar = () => {
  return (
    <Conatiner>
      <Title>WB</Title>
      <NavItems>
        <Item href="#">Home</Item>
        <Item href="#">Team</Item>
        <Item href="#">Alumine</Item>
        <Item href="#">Course</Item>
        <Item href="#">YouTobe</Item>
      </NavItems>

      <Btn>Login</Btn>
    </Conatiner>
  );
};

export default Navbar;
