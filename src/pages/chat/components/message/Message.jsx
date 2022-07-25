import React from "react";
import { ContentField, Logo, Paragraph, SubTitle } from "../../../../styled-components";
import { TextMessage } from "../../styled-components";

const Message = ({ end, start }) => {
  return (
    <ContentField end={end} column start={start}>
      <article>
        <Paragraph gray xxsmall>
          2022/07/25 17:15<SubTitle>tu</SubTitle> <Logo small src="/perfil.png" alt="perfil" />
        </Paragraph>
      </article>
      <article>
        <TextMessage>Hola como esta bro</TextMessage>
      </article>
    </ContentField>
  );
};
export default Message;
