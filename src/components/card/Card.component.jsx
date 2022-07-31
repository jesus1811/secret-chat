import { CardFooter, CardHead, Content } from "./Styled";
import { Title } from "@/styled-components";

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
