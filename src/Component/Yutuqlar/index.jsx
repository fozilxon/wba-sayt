import React from "react";
import { Box, Circle, Container, Word, Wrapper, Img } from "./style";
// img
import course from "../../assets/icon/course.svg";
import instruck from "../../assets/icon/instruck.svg";
import student from "../../assets/icon/student.svg";

export const Yutuqlar = () => {
  return (
    <Container>
      <Wrapper>
        {/* Box1 */}
        <Box>
          <Circle>
            <Img src={course} alt="icons" />
          </Circle>
          <div>
            <Word large>200+</Word>
            <Word>Special course</Word>
          </div>
        </Box>

        {/* Box2 */}
        <Box>
          <Circle>
            <Img src={instruck} alt="icons" />
          </Circle>
          <div>
            <Word large>450+</Word>
            <Word>Enrolled students</Word>
          </div>
        </Box>
        {/* Box3 */}
        <Box>
          <Circle>
            <Img src={student} alt="icons" />
          </Circle>
          <div>
            <Word large>10+</Word>
            <Word>Expert instructor</Word>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Yutuqlar;
