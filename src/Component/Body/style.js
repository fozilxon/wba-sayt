import styled from "styled-components";
import bodyImg from "../../assets/img/body.png";
export const Container = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.div`
  background-image: url(${bodyImg});
  background-size: cover;
  width: 80%;
  height: 750px;
  display: flex;
  align-items: center;
  border-radius: 40px;
`;

export const Tanirovka = styled.div`
  background: linear-gradient(
    83.46deg,
    #3b5999 -3.47%,
    rgba(230, 231, 238, 0) 99.19%
  );
  border-radius: 40px;
  width: 100%;
  height: 720px;
  display: flex;
  padding: 50px 150px;
  align-items: center;
  justify-content: center;
`;

export const Box1 = styled.div`
  flex: 1;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 82px;
  color: #d1d9e6;
  width: 530px;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #d1d9e6;
  width: 600px;
  margin-top: 40px;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
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
