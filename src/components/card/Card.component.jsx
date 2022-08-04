import { useRouter } from "next/router";
import { CardFooter, CardHead, Content } from "./Styled";
import { Logo, Title } from "@/styled-components";
import { useUser } from "@/hooks";

export const Card = ({ children, title, scroll }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <Content>
      <CardHead>
        <Logo xSmall rotar pointer src="/leave.svg" onClick={handleBack} />
        <Title>{title}</Title>
      </CardHead>
      <CardFooter scroll={scroll}>{children}</CardFooter>
    </Content>
  );
};
