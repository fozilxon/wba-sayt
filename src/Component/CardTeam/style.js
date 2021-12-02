import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 600px;
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  display: flex;
  margin-top: 200px;
`;

export const Box = styled.div`
  position: ${({ two }) => !two && "relative"};
  padding: ${({ two }) => two && "20px 70px 20px 80px "};
  display: ${({ two }) => !two && "flex"};
  flex-direction: ${({ two }) => !two && "column"};
  align-items: ${({ two }) => !two && "center"};
  flex: ${({ two }) => (two ? "1" : "1")};
`;

export const Circle = styled.div`
  background: #e6e7ee;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
    inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  position: absolute;
  top: -120px;
  left: 220px;
`;

export const Img = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  cursor: grab;
  transition: all 0.6s;
  :hover {
    width: 240px;
    height: 240px;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: ${({ small }) => (small ? "20px" : "30px")};
  width: ${({ width }) => width && "500px"};
  text-align: ${({ width }) => width && "center"};
  color: ${({ small }) => (small ? " rgba(49, 52, 75, 0.6)" : "#31344b")};
  margin-top: ${({ top }) => (top ? "140px" : "20px")};
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: ${({ floor }) => floor && "wrap"};
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 13px;
  margin-right: 13px;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: ${({ small }) => (small ? "400" : "600")};
  font-size: ${({ small }) => (small ? "17px" : "30px")};
  color: #31344b;
  margin-top: 20px;
`;

export const Btn = styled.div`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  padding: 14px 30px;
  font-size: 20px;
  color: #31344b;
  margin: 10px 10px 10px 10px;
  cursor: pointer;
  :hover {
    box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
      inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  }
`;
