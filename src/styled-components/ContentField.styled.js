import styled, { css } from "styled-components";

const ContentField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 20px 0;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;
export default ContentField;
