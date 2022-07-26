import styled, { css } from "styled-components";

const ContentField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
  ${(props) =>
    props.absolute &&
    css`
      position: fixed;
      bottom: 30px;
      background-color: ${(props) => props.theme.color.gray};
      width: 100%;
      max-width: 482px;
    `}
    ${(props) =>
    props.gapCero &&
    css`
      gap: 0;
    `}
`;
export default ContentField;
