import { Card, Container } from "@/components";
import { useField } from "@/hooks";
import { loginUser } from "@/services/user/queries";
import { Button, ContentField, Field, FormField, Logo, Paragraph } from "@/styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Access = () => {
  const router = useRouter();
  const user = useField();
  const password = useField();
  const [error, setError] = useState();

  const handleLogin = async () => {
    const response = await loginUser({ user: user.value, password: password.value });
    if (response?.length !== 0) {
      const user = response?.[0];
      localStorage.setItem("user", JSON.stringify(user));
      return router.push("/");
    }

    return setError("Usuario y contraseña incorrecta");
  };

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    if (!user) {
      router.push("/access");
    }
    if (user) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container title="Access">
      <Card title="Acceso">
        <Logo small src="/icon-secret-chat.svg" alt="secret chat" />
        <FormField
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          column
        >
          <Field {...user} placeholder="Ingresar usuario" />
          <Field {...password} placeholder="Ingresar contraseña" type="password" />
          <ContentField>
            {/* <Logo small pointer bg src="/google.svg" alt="google" /> */}
            <Button onClick={() => handleLogin()}>Ingresar</Button>
          </ContentField>
        </FormField>

        {<Paragraph>{error}</Paragraph>}
      </Card>
    </Container>
  );
};

export default Access;
