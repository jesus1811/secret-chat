import styled from "styled-components";

export const Field = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 8px 20px;
  text-align: left;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.small};
  background-color: ${(props) => props.theme.color.black};
  border: 1px solid transparent;
  outline: none;
  margin: 15px 0;
  border-radius: 10px;
  :focus {
    border: 1px solid ${(props) => props.theme.color.primary};
  }
`;
