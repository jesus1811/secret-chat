import { Title } from "../../styled-components";
import { CardFooter, CardHead, Content } from "./Styled";

const Card = ({ children, title }) => {
  return (
    <Content>
      <CardHead>
        <Title>{title}</Title>
      </CardHead>
      <CardFooter>{children}</CardFooter>
    </Content>
  );
};

export default Card;
