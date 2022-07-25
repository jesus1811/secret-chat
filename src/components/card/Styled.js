import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
`;

export const CardHead = styled.article`
  width: 100%;
  background-color: ${(props) => props.theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
  padding: 10px 20px;
`;

export const CardFooter = styled.article`
  width: 100%;
  background-color: ${(props) => props.theme.color.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 12px 12px;
  padding: 20px;
  gap: 10px;
`;
