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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.color.white};
  ${(props) =>
    props.xsmall &&
    css`
      font-size: ${(props) => props.theme.fontSize.xSmall};
    `}
  ${(props) =>
    props.xxsmall &&
    css`
      font-size: ${(props) => props.theme.fontSize.xxSmall};
    `}
    
  ${(props) =>
    props.gray &&
    css`
      color: ${(props) => props.theme.color.lightGray};
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
