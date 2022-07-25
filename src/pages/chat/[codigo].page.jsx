import { useRouter } from "next/router";
import React from "react";
import { Card, Container } from "../../components";
import { ContentField, Field, Logo } from "../../styled-components";
import { Message } from "./components";

const Sala = () => {
  const router = useRouter();
  return (
    <Container title={`chat | numero ${router.query.codigo}`}>
      <Card title={`Sala ${router.query.codigo}`}>
        <ContentField column style={{ gap: "8px" }}>
          <Message end />
          <Message start />
          <Message end />
          <Message start />
          <Message end />
          <Message start />
        </ContentField>
        <ContentField>
          <Field placeholder="escribe mensaje aqui" />
          <Logo xSmall src="/send.svg" alt="icon send" />
        </ContentField>
      </Card>
    </Container>
  );
};

export default Sala;
