import { Card, Container } from "@/components";
import { useField } from "@/hooks";
import { ContentField, Field, FormField, Logo } from "@/styled-components";
import { useEffect, useState } from "react";
import { getAllChatsService, postCreateMessage } from "@/services";
import { Message } from "./chat/components";
import { useRouter } from "next/router";
import { supabase } from "@/services/axiosInstancia.service";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const ID_USER = "e7ce61a9-0650-450c-8c16-6129c30706fb";
  const renderUser = () => {
    if (typeof window !== "undefined") {
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString);
      return user;
    }
    return {};
  };
  const texto = useField();
  const handleCreateMessage = async () => {
    if (texto.value === "") return;
    try {
      setIsPending(true);
      await postCreateMessage({ description: texto.value, user_id: renderUser()?.id });

      // getAllChats();
    } catch (error) {
    } finally {
      setIsPending(false);
      texto.setValue("");
    }
  };

  const getAllChats = async () => {
    try {
      const response = await getAllChatsService();
      if (response) setMessages(response);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    getAllChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  useEffect(() => {
    const channel = supabase
      .channel("custom-insert-channel")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "chat" }, (payload) => {
        console.log("Change received!", payload);

        getAllChats();
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <Container title="Chat">
      <Card title={`Chat`} scroll isBack>
        <ContentField column gapCero>
          {messages?.map((message, index) => (
            <Message key={index} end start={message?.user?.id !== renderUser()?.id} message={message} />
          ))}
        </ContentField>

        <FormField
          absolute
          onSubmit={(e) => {
            e.preventDefault();
            if (isPending) return;
            handleCreateMessage();
          }}
        >
          <Field {...texto} placeholder="escribe mensaje aqui" type="text" />
          {!isPending && (
            <Logo
              xSmall
              pointer
              src="/send.svg"
              alt="icon send"
              onClick={() => {
                if (isPending) return;
                handleCreateMessage();
              }}
            />
          )}
        </FormField>
      </Card>
    </Container>
  );
};
export default Index;
