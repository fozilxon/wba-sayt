import styled from "styled-components";

export const Conatiner = styled.div`
  width: 100%;
  height: 110px;
  background: #e6e7ee;
  box-shadow: 0px 4px 20px rgba(13, 39, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Title = styled.h1`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  width: 70px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-weight: 700;
  font-size: 23px;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
`;

export const Item = styled.a`
  text-decoration: none;
  margin-left: 35px;
  margin-right: 35px;
  font-size: 18px;
  cursor: pointer;
`;

export const Btn = styled.div`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  width: 200px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d4cc8;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
      inset 5px 5px 8px rgba(13, 39, 80, 0.16);
    width: 205px;
    height: 60px;
  }
`;
