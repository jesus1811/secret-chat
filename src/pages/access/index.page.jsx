import { Card, Container } from "@/components";
import { Button, ContentField, Field, Logo, Paragraph } from "@/styled-components";

const Access = () => {
  return (
    <Container title="Access">
      <Card title="Acceso">
        <Logo small src="/icon-secret-chat.svg" alt="secret chat" />
        <ContentField column>
          <Field placeholder="Ingresar email" />
          <Field placeholder="Ingresar contraseña" />
        </ContentField>
        <ContentField>
          <Logo small pointer bg src="/google.svg" alt="google" />
          <Button>Ingresar</Button>
        </ContentField>
        <ContentField>
          <Paragraph small>No tienes cuenta? </Paragraph>
          <Paragraph bold small>
            Registrate aqui ya!
          </Paragraph>
        </ContentField>
      </Card>
    </Container>
  );
};

export default Access;
