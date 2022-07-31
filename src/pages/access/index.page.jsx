import { Card, Container } from "@/components";
import { useField, useUser } from "@/hooks";
import { Button, ContentField, Field, Logo, Paragraph } from "@/styled-components";

const Access = () => {
  const { handleGoogle, handleLogin,messageLogin } = useUser();
  const email = useField();
  const password = useField();
  return (
    <Container title="Access">
      <Card title="Acceso">
        <Logo small src="/icon-secret-chat.svg" alt="secret chat" />
        <ContentField column>
          <Field {...email} placeholder="Ingresar email" />
          <Field {...password} placeholder="Ingresar contraseña" />
        </ContentField>
        <ContentField>
          <Logo small pointer bg src="/google.svg" alt="google" onClick={handleGoogle} />
          <Button onClick={() => handleLogin(email.value, password.value)}>Ingresar</Button>
        </ContentField>
        <ContentField>
          <Paragraph small>No tienes cuenta? </Paragraph>
          <Paragraph bold small>
            Registrate aqui ya!
          </Paragraph>
        </ContentField>
        {messageLogin.isActive && <Paragraph>{messageLogin.message}</Paragraph>}
      </Card>
    </Container>
  );
};

export default Access;
