import React from "react";
import { Box, Circle, Container, Word, Wrapper } from "./style";
// img

export const Yutuqlar = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Circle>{/* <Img src={} alt='icons' /> */}</Circle>
          <div>
            <Word>200+</Word>
            <Word>Special course</Word>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Yutuqlar;
