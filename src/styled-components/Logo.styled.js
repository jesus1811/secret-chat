import styled, { css } from "styled-components";

export const Logo = styled.img`
  width: 200px;
  aspect-ratio: 1/1;
  ${(props) =>
    props.small &&
    css`
      width: 75px;
    `}

  ${(props) =>
    props.xSmall &&
    css`
      width: 35px;
    `}
    
  ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;
    `}

  ${(props) =>
    props.bg &&
    css`
      background-color: ${(props) => props.theme.color.black};
      padding: 12px;
      border-radius: 10px;
    `}

    ${(props) =>
    props.rounded &&
    css`
      border-radius: 100%;
    `}
    ${(props) =>
    props.rotar &&
    css`
      transform: rotate(180deg);
    `}
`;
