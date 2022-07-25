import styled, { css } from "styled-components";

const Logo = styled.img`
  width: 200px;
  aspect-ratio: 1/1;
  ${(props) =>
    props.small &&
    css`
      width: 80px;
    `}
`;
export default Logo;
