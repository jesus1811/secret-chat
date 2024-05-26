import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.primary} !important;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.white};
  border-radius: 10px;
  padding: 6px 22px;
  ${(props) =>
    props.disable &&
    css`
      background-color: ${(props) => props.theme.color.disable};
      cursor: initial;
    `}
`;
