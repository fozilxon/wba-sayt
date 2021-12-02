import styled from "styled-components";

export const Wrapper = styled.div`
  width: 75%;
  height: 600px;
  display: flex;
  margin-top: 100px;
`;

export const Box = styled.div`
  flex: ${({ flexing }) => (flexing ? "5" : "4")};
  display: ${({ flexing }) => flexing && "flex"};
  flex-wrap: ${({ flexing }) => flexing && "wrap"};
  margin-left: ${({ flexing }) => flexing && "20px"};
`;
export const Iframe = styled.iframe`
  width: 100%;
  height: ${({ small }) => (small ? "190px" : "400px")};
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: ${({ small }) => (small ? "14px" : "22px")};
  line-height: ${({ small }) => (small ? "22px" : "32px")};
  color: #31344b;
  padding: 8px 6px 0px 20px;
`;

export const BigContainer = styled.div`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  width: 350px;
  height: 275px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
