import styled from "styled-components";

const Field = styled.input`
  width: 100%;
  max-width: 403px;
  padding: 8px 20px;
  text-align: left;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.xSmall};
  background-color: ${(props) => props.theme.color.black};
  border: 1px solid transparent;
  outline: none;
  border-radius: 10px;
  :focus {
    border: 1px solid ${(props) => props.theme.color.primary};
  }
`;

export default Field;
