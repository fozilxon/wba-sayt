import styled from "styled-components";

export const Container = styled.div`
  width: 440px;
  height: 350px;
  margin-left: 20px;
  margin-right: 20px;
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const Img = styled.img`
  width: 150px;
  height: 50px;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  text-align: center;
  color: rgba(49, 52, 75, 0.6);
  font-size: 16px;
  width: 400px;
`;

export const Btn = styled.div`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  width: 124px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  margin-top: 30px;
  cursor: pointer;

  :hover {
    box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
      inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  }
`;
