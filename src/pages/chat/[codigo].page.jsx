import { useRouter } from "next/router";
import React from "react";
import { Card, Container } from "../../components";
import { ContentField, Field, Logo } from "../../styled-components";
import { Message } from "./components";

const Sala = () => {
  const router = useRouter();
  return (
    <Container title={`chat | numero ${router.query.codigo}`}>
      <Card title={`Sala ${router.query.codigo}`} scroll>
        <ContentField column gapCero>
          <Message end />
          <Message start />
          <Message end />
          <Message end />
        </ContentField>
        <ContentField absolute>
          <Field placeholder="escribe mensaje aqui" />
          <Logo xSmall pointer src="/send.svg" alt="icon send" />
        </ContentField>
      </Card>
    </Container>
  );
};

export default Sala;
