import { CardFooter, CardHead, Content } from "./Styled";
import { Logo, Title } from "@/styled-components";
import { useUser } from "@/hooks";

export const Card = ({ children, title, scroll }) => {
  const handleBack = (e) => {
    e.preventDefault();
    history.back();
  };
  return (
    <Content>
      <CardHead>
        <Logo xSmall rotate pointer src="/leave.svg" onClick={handleBack} />
        <Title>{title}</Title>
      </CardHead>
      <CardFooter scroll={scroll}>{children}</CardFooter>
    </Content>
  );
};
