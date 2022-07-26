import styled from "styled-components";

const TextMessage = styled.p`
  font-size: ${(props) => props.theme.fontSize.xSmall};
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.black};
  padding: 10px;
  border-radius: 10px;
`;
export default TextMessage;
