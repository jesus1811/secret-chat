import styled, { css } from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  position: relative;
`;

export const CardHead = styled.article`
  width: 100%;
  background-color: ${(props) => props.theme.color.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px 12px 0 0;
  padding: 10px 10px;
`;

export const CardFooter = styled.article`
  width: 100%;
  background-color: ${(props) => props.theme.color.gray};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 0 0 12px 12px;
  padding: 10px;
  gap: 10px;
  ${(props) =>
    props.scroll &&
    css`
      overflow-y: auto;
      height: 500px;
    `}
`;
