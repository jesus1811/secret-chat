import styled, { css } from "styled-components";

const ContentField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.end &&
    css`
      align-items: flex-end;
    `}
  ${(props) =>
    props.start &&
    css`
      align-items: flex-start;
    `}
`;
export default ContentField;
