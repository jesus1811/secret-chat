import { Card, Container } from "@/components";
import { useField, useMessage, useUser } from "@/hooks";
import { useRouter } from "next/router";
import { ContentField, Field, Loading, Logo, Title } from "@/styled-components";
import { getCurrentDate, getCurrentTime } from "@/utils";
import { Message, MessageNull } from "./components";

const Sala = () => {
  const router = useRouter();
  const { messages, createMessage } = useMessage();
  const { user } = useUser();
  const texto = useField();
  const handleCreateMessage = () => {
    createMessage(texto.value, getCurrentDate(), getCurrentTime(), user.uid);
    texto.setValue("");
  };
  return (
    <Container title="Room">
      <Card title={`Sala ${router.query.codigo}`} scroll>
        <ContentField column gapCero>
          {messages?.length === 0 ? (
            <MessageNull />
          ) : (
            messages?.map((message, index) => (
              <Message key={index} end start={message.idusuario !== user.uid} message={message} />
            ))
          )}
        </ContentField>
        <ContentField absolute>
          <Field {...texto} placeholder="escribe mensaje aqui" type="text" />
          <Logo xSmall pointer src="/send.svg" alt="icon send" onClick={handleCreateMessage} />
        </ContentField>
      </Card>
    </Container>
  );
};

export default Sala;
