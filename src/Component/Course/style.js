import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  width: 75%;
  margin-top: 60px;
  margin-bottom: 50px;
`;

export const Hr = styled.div`
  width: 75%;
  border-bottom: 2px solid #d1d9e6;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: ${({ small }) => (small ? "25px" : "47px")};
  width: ${({ small }) => small && "1100px"};
  margin-top: ${({ small }) => small && "10px"};
  color: ${({ small }) => (small ? "rgba(49, 52, 75, 0.6)" : "#31344b")};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1600px;
  margin-bottom: 150px;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 100px;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  color: rgba(49, 52, 75, 0.6);
  padding-left: 13px;
  font-size: 20px;
  background: #e6e7ee;
  box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
    inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px 0px 0px 8px;
  border: none;
  outline: none;
`;

export const BtnSearch = styled.div`
  background: #2d4cc8;
  width: 100px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e6e7ee;
  font-size: 18px;

  border: 1px solid #2d4cc8;
  box-sizing: border-box;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: rgb(4, 21, 133);
  }
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #31344b;
  margin-left: 90px;
  margin-top: ${({ front }) => (front ? "20px" : "200px")};
`;
