import styled, { css } from "styled-components";

export const ContentField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0px;

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
      position: absolute;
      width: 90%;
      background-color: ${(props) => props.theme.color.gray};
      max-width: 483px;
      top: 90px;
      border-radius: 0 0 12px 12px;
    `}
    ${(props) =>
    props.gapCero &&
    css`
      gap: 0;
    `}
`;

export const FormField = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px 10px;

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
      position: absolute;
      width: 100%;
      background-color: ${(props) => props.theme.color.gray};
      max-width: 483px;
      top: 90px;
      border-radius: 0 0 12px 12px;
    `}
    ${(props) =>
    props.gapCero &&
    css`
      gap: 0;
    `}
`;
