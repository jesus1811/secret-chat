import { ContentField, Logo, Paragraph, SubTitle } from "@/styled-components";
import { TextMessage } from "../../styled-components";

const Message = ({ end, start, message }) => {
  return (
    <ContentField end={end} column start={start}>
      <article>
        <Paragraph gray xxsmall>
          {message?.fechamensaje?.slice(0, 10)} {message?.horamensaje.slice(0, 5)}
          <SubTitle>tu</SubTitle> <Logo xSmall src="/perfil.png" alt="perfil" />
        </Paragraph>
      </article>
      <article>
        <TextMessage>{message?.textomensaje}</TextMessage>
      </article>
    </ContentField>
  );
};
export default Message;
