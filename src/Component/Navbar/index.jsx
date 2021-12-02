import React from "react";
import { NavLink } from "react-router-dom";
import { Btn, Conatiner, Item, NavItems, Title } from "./style";

export const Navbar = () => {
  return (
    <Conatiner>
      <Title>WB</Title>
      <NavItems>
        <NavLink
          exact
          activeStyle={{
            color: "#2d4cc8",
          }}
          to="/"
        >
          <Item href="#">Home</Item>
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#2d4cc8",
          }}
          to="/team"
        >
          <Item href="#">Team</Item>
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#2d4cc8",
          }}
          to="/alumine"
        >
          <Item href="#">Alumine</Item>
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#2d4cc8",
          }}
          to="/course"
        >
          <Item href="#">Course</Item>
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#2d4cc8",
            background: "white",
            border: "1px solid #2d4cc8",
            padding: "7px",
          }}
          to="/youtobe"
        >
          <Item href="#">YouTobe</Item>
        </NavLink>
      </NavItems>

      <NavLink
        activeStyle={{
          color: "#2d4cc8",
        }}
        to="/login"
      >
        <Btn>Login</Btn>
      </NavLink>
    </Conatiner>
  );
};

export default Navbar;
