import styled, { css } from "styled-components";

const Logo = styled.img`
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
`;
export default Logo;
