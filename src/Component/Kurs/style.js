import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 280px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  width: 1600px;
`;

export const Flexing = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 20px;
  margin-left: 30px;
  margin-top: 7px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: ${({ black }) => (black ? "bold" : "600")};
  font-size: 52px;
  line-height: 78px;
  color: ${({ black }) => (black ? " #31344b" : "#2d4cc8")};
`;
