import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  border-top: 2px solid #d1d9e6;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  flex: ${({ large }) => (large ? "3" : "1")};
  display: flex;
  flex-direction: ${({ wb }) => wb && "column"};
  align-items: ${({ wb }) => wb && "center"};
  justify-content: ${({ wb }) => wb && "center"};

  border-bottom: 2px solid #d1d9e6;
`;

export const Div = styled.div`
  flex: ${({ big }) => (big ? "3" : "2")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #31344b;
  margin-top: -40px;
`;

export const Flexing = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #e6e7ee;
  box-shadow: -6px -6px 6px rgba(255, 255, 255, 0.64),
    3px 3px 5px rgba(13, 39, 80, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  margin-right: 7px;
  cursor: pointer;
  :hover {
    box-shadow: inset -6px -6px 6px rgba(255, 255, 255, 0.64),
      inset 3px 3px 5px rgba(13, 39, 80, 0.2);
  }
`;

export const Icon = styled.img`
  width: 25px;
`;

export const Text = styled.div`
  color: "#31344B";
  font-size: ${({ small }) => (small ? "14px" : "20px")};
  margin-top: ${({ box4 }) => (box4 ? "40px" : "20px")};
  margin-left: ${({ wb }) => (wb ? "0px" : "120px")};
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
`;

export const Input = styled.input`
  background: #e6e7ee;
  box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
    inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  width: 350px;
  margin-top: 20px;
  height: 45px;
  font-size: 20px;
  color: rgba(49, 52, 75, 0.6);
  padding-left: 15px;
  margin-left: 120px;
  outline: none;
`;

export const Btn = styled.div`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px rgba(255, 255, 255, 0.64),
    5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  width: ${({ wb }) => (wb ? "80px" : "350px")};
  height: ${({ wb }) => (wb ? "55px" : "45px")};
  color: ${({ wb }) => (wb ? "blue" : " rgba(49, 52, 75, 0.6)")};
  margin-left: ${({ wb }) => (wb ? "0px" : "120px")};
  font-weight: ${({ wb }) => wb && "700"};
  margin-top: 15px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
      inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  }
`;
