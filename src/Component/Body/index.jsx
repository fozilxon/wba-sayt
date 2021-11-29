import React from "react";

import {
  Container,
  Img,
  Tanirovka,
  Box1,
  Text,
  Item,
  Flexing,
  Input,
  BtnSearch,
} from "./style";

export const Body = () => {
  return (
    <Container>
      <Img>
        <Tanirovka>
          <Box1>
            <Text>Find our best courses & Become the master</Text>
            <Item>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacus eu, quam vitae vestibulum. Lorem ipsum dolor sit amet.
            </Item>
            <Flexing>
              <Input placeholder="Search your courses" type="text" />
              <BtnSearch>Search</BtnSearch>
            </Flexing>
          </Box1>
          <Box1></Box1>
        </Tanirovka>
      </Img>
    </Container>
  );
};

export default Body;
