import { ContentField, Logo, Paragraph } from "@/styled-components";
import { TextMessage } from "../../styled-components";
import moment from "moment";
const Message = ({ end, start, message }) => {
  return (
    <ContentField end={end} column start={start}>
      <article>
        {start ? (
          <>
            <Paragraph gray xxsmall>
              <Logo xSmall rounded src={message?.user?.photo} alt="perfil" />
              <Paragraph>{message?.user?.name}</Paragraph>
              {moment.utc(message?.created_at).local().format("MMM DD, YYYY hh:mm A")}
            </Paragraph>
          </>
        ) : (
          <>
            <Paragraph gray xxsmall>
              {moment.utc(message?.created_at).local().format("MMM DD, YYYY hh:mm A")}
              <Paragraph>yo</Paragraph> <Logo xSmall rounded src={message?.user?.photo} alt="perfil" />
            </Paragraph>
          </>
        )}
      </article>
      <article>
        <TextMessage>{message?.description}</TextMessage>
      </article>
    </ContentField>
  );
};
export default Message;
