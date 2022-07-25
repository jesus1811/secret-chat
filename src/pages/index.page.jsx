import React from "react";
import { Card, Container } from "../components";
import {
  Button,
  ContentField,
  Field,
  Logo,
  Paragraph,
  Title,
} from "../styled-components";

const Index = () => {
  return (
    <Container title="Home">
      <Card title="Home">
        <Logo src="/icon-secret-chat.svg" alt="secret-chat" />
        <Title>SECRET CHAT</Title>
        <Paragraph small>Tu chat privado donde nadie te espia 😊</Paragraph>
        <Paragraph small>o si? 🤨</Paragraph>
        <ContentField>
          <Field placeholder="Ingresar codigo de sala" />
          <Button>Ingresar</Button>
        </ContentField>
      </Card>
    </Container>
  );
};
export default Index;
