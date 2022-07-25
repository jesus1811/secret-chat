import styled, { css } from "styled-components";

const Logo = styled.img`
  width: 200px;
  aspect-ratio: 1/1;
  ${(props) =>
    props.small &&
    css`
      width: 80px;
    `}

  ${(props) =>
    props.xSmall &&
    css`
      width: 55px;
      cursor: pointer;
    `}
    
  ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;
      background-color: ${(props) => props.theme.color.black};
      padding: 15px;
      border-radius: 10px;
    `}
`;
export default Logo;
