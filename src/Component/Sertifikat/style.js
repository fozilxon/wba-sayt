import styled from "styled-components";

export const Conatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 100px;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 600px;
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  padding: 40px 20px 30px 80px;
  display: flex;
  margin-top: 80px;
`;

export const Box = styled.div`
  flex: ${({ text }) => (text ? "4" : "5")};
  margin-top: ${({ text }) => text && "80px"};
  padding-left: ${({ text }) => text && "100px"};
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 32px;
  color: ${({ more }) => (more ? "#2D4CC8" : "rgba(49, 52, 75, 0.6)")};
  margin-top: ${({ more }) => (more ? "0px" : "25px")};
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: 140px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 10px;
  margin-left: 40px;
`;

export const Div = styled.div`
  display: flex;
  width: 75%;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 78px;
  color: #31344b;
`;
