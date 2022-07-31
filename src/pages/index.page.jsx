import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, ContentField, Field, Logo, Paragraph, Title } from "@/styled-components";
import { useField, useUser } from "@/hooks";
import { Card, Container } from "@/components";

const Index = () => {
  const router = useRouter();
  const codigoSala = useField();
  const { user } = useUser();
  const [MessageError, setMessageError] = useState({
    message: "",
    error: false,
  });
  const handleClick = () => {
    if (!codigoSala.value) setMessageError({ message: "Codigo de sala invalido", error: true });
    if (codigoSala.value) router.push(`/chat/${codigoSala.value}`);
  };
  useEffect(() => {
    if (!user.uid) router.push("/access");
  }, []);
  return (
    <Container title="Home">
      <Card title="Home">
        <Logo src="/icon-secret-chat.svg" alt="secret-chat" />
        <Title>SECRET CHAT</Title>
        <Paragraph small>Tu chat privado donde nadie te espia 😊</Paragraph>
        <Paragraph small>o si? 🤨</Paragraph>
        <ContentField>
          <Field {...codigoSala} placeholder="Codigo" type="text" />
          <Button onClick={handleClick}>Ingresar</Button>
        </ContentField>
        {MessageError.error && <Paragraph>{MessageError.message}</Paragraph>}
      </Card>
    </Container>
  );
};
export default Index;
