import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: -8px -8px 20px #ffffff, 8px 8px 20px rgba(13, 39, 80, 0.16);
  height: 800px;
  width: 500px;
  background: #e6e7ee;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-size: 18px;
  color: ${({ black }) => (black ? "black" : "rgba(49, 52, 75, 0.6)")};
  margin-top: ${({ none }) => !none && "14px"};
  margin-bottom: 20px;
  margin-left: ${({ chap }) => chap && "90px"};
`;

export const Texts = styled.p`
  font-size: 20px;
  color: rgba(49, 52, 75, 0.6);
  margin-right: ${({ right }) => (right ? "194px" : "277px")};
  margin-bottom: 6px;
  margin-top: ${({ tops }) => (!tops ? "40px" : "28px")};
`;

export const InputCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e6e7ee;
  border: 1px solid #d1d9e6;
  border-radius: 5px;
`;

export const IconImg = styled.img`
  width: 37px;
  height: 37px;
  padding: 5px 8px;
`;

export const Inputs = styled.input`
  outline: none;
  border: none;
  font-size: 20px;
  padding-left: 10px;
  color: rgba(49, 52, 75, 0.6);
  width: 330px;
  height: 45px;
  background: #e6e7ee;
  box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
    inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ main }) => (main ? "30px" : "10px")};

  margin-right: ${({ main }) => main && "80px"};
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  box-shadow: inset -6px -6px 6px rgba(255, 255, 255, 0.64),
    inset 3px 3px 5px rgba(13, 39, 80, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 7px;
  margin-bottom: 16px;
`;

export const Btn = styled.div`
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  width: 360px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  :hover {
    box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
      inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  }
  color: #31344b;
  font-size: 24px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Word = styled.p`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const CircleIconCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 14px;
  margin-right: 14px;
  cursor: pointer;
  margin-bottom: 3px;
  box-shadow: -6px -6px 6px rgba(255, 255, 255, 0.64),
    3px 3px 5px rgba(13, 39, 80, 0.2);

  :hover {
    box-shadow: inset -6px -6px 6px rgba(255, 255, 255, 0.64),
      inset 3px 3px 5px rgba(13, 39, 80, 0.2);
  }
`;
