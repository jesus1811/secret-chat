import { CardFooter, CardHead, Content } from "./Styled";
import { Title } from "@/styled-components";

export const Card = ({ children, title, scroll }) => {
  return (
    <Content>
      <CardHead>
        <Title>{title}</Title>
      </CardHead>
      <CardFooter scroll={scroll}>{children}</CardFooter>
    </Content>
  );
};
