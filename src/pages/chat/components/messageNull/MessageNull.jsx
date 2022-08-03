import { ContentField, Logo, Paragraph, SubTitle } from "@/styled-components";
import React from "react";

const MessageNull = () => {
  return (
    <ContentField column>
      <Logo src="/messageNull.svg" alt="message" />
      <SubTitle bold>Aun no hay Mensaje</SubTitle>
      <Paragraph>¡Inicia la conversación enviando un mensaje!</Paragraph>
    </ContentField>
  );
};

export default MessageNull;
