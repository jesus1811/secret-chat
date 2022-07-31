import { Card, Container } from "@/components";
import { useField, useUser } from "@/hooks";
import { Button, ContentField, Field, Logo, Paragraph } from "@/styled-components";
import { useRouter } from "next/router";
import React from "react";

const Register = () => {
  const name = useField();
  const email = useField();
  const password = useField();
  const router = useRouter();
  const { handleRegister, messageLogin } = useUser();

  const handleRedirect = () => {
    router.push("/access");
  };

  return (
    <Container title="register">
      <Card title="Registro">
        <Logo small src="/icon-secret-chat.svg" alt="secret chat" />
        <ContentField column>
          <Field {...name} placeholder="Ingresar nombre" />
          <Field {...email} placeholder="Ingresar email" />
          <Field {...password} placeholder="Ingresar contraseña" type="password" />
          <Button onClick={() => handleRegister(name.value, email.value, password.value)}>Registrar</Button>
        </ContentField>
        <ContentField>
          <Paragraph small>ya tienes cuenta?</Paragraph>
          <Paragraph bold small onClick={handleRedirect}>
            ir al login
          </Paragraph>
        </ContentField>
        {messageLogin.isActive && <Paragraph>{messageLogin.message}</Paragraph>}
      </Card>
    </Container>
  );
};

export default Register;
