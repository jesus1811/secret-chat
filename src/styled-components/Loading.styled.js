import styled from "styled-components";

const Loading = styled.div`
  border: solid 6px rgba(0, 0, 0, 0.1);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border-left-color: ${(props) => props.theme.color.primary};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
