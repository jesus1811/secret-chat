import { useRouter } from "next/router";
import { CardFooter, CardHead, Content } from "./Styled";
import { Logo, Title } from "@/styled-components";
import { useUser } from "@/hooks";

export const Card = ({ children, title, scroll, isBack }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("./access");

    localStorage.clear();
  };
  return (
    <Content>
      <CardHead>
        {isBack && <Logo xSmall rotar pointer src="/leave.svg" onClick={handleBack} />}

        <Title>{title}</Title>
      </CardHead>
      {scroll && <div style={{ width: "100%", height: "90px", background: "#323232" }}></div>}
      <CardFooter scroll={scroll}>{children}</CardFooter>
    </Content>
  );
};
