import { Title } from "../../styled-components";
import { CardFooter, CardHead, Content } from "./Styled";

const Card = ({ children, title, scroll }) => {
  return (
    <Content>
      <CardHead>
        <Title>{title}</Title>
      </CardHead>
      <CardFooter scroll={scroll}>{children}</CardFooter>
    </Content>
  );
};

export default Card;
