import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.large};
  text-align: center;
  color: ${(props) => props.theme.color.white};
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  text-align: center;
  color: ${(props) => props.theme.color.white};
  ${(props) =>
    props.small &&
    css`
      font-size: ${(props) => props.theme.fontSize.xSmall};
    `}
  ${(props) =>
    props.gray &&
    css`
      color: ${(props) => props.theme.color.gray};
    `};
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
      cursor: pointer;
      :hover {
        color: ${(props) => props.theme.color.lightGray};
      }
    `}
`;

export const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.medium};
  text-align: center;
  color: ${(props) => props.theme.color.white};
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;
