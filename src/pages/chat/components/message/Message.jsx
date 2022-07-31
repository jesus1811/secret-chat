import { ContentField, Logo, Paragraph } from "@/styled-components";
import { TextMessage } from "../../styled-components";

const Message = ({ end, start, message }) => {
  return (
    <ContentField end={end} column start={start}>
      <article>
        {start ? (
          <>
            <Paragraph gray xxsmall>
              <Logo xSmall src={message.fotousuario} alt="perfil" />
              <Paragraph>{message.nombreusuario}</Paragraph>
              {message?.fechamensaje?.slice(0, 10)} {message?.horamensaje.slice(0, 5)}
            </Paragraph>
          </>
        ) : (
          <>
            <Paragraph gray xxsmall>
              {message?.fechamensaje?.slice(0, 10)} {message?.horamensaje.slice(0, 5)}
              <Paragraph>{message.nombreusuario}</Paragraph> <Logo xSmall src={message.fotousuario} alt="perfil" />
            </Paragraph>
          </>
        )}
      </article>
      <article>
        <TextMessage>{message?.textomensaje}</TextMessage>
      </article>
    </ContentField>
  );
};
export default Message;
