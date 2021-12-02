import styled from "styled-components";

export const Container = styled.div`
  width: 440px;
  height: 420px;
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 0px 0px 0px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Circle = styled.div`
  background: #e6e7ee;
  /* background-color: red; */
  box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
    inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 26%;
  top: -100px;
`;

export const Img = styled.img`
  width: 185px;
  height: 185px;
  border-radius: 50%;
  transition: all 0.5s;
  cursor: grab;
  :hover {
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.div`
  font-size: ${({ small }) => (small ? "15px" : "22px")};
  font-weight: ${({ small }) => (small ? "normal" : "bold")};
  color: ${({ small }) => (small ? "rgba(49, 52, 75, 0.6)" : "black")};
  margin-top: ${({ bottom }) => (bottom ? "5px" : "20px")};
  width: ${({ width }) => width && "370px"};
  text-align: ${({ width }) => width && "center"};
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
