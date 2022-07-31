import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { createMessageService, getMessageByRoomService, keyMessage } from "../services";

export const useMessage = () => {
  const router = useRouter();
  const [message, setMessage] = useState({ messages: "", active: false });
  const { data, error } = useSWR(keyMessage, (url) => getMessageByRoomService(url, router.query.codigo));
  const { mutate } = useSWRConfig();

  const createMessage = async (texto, fecha, hora, idUsuario) => {
    const data = createMessageService(keyMessage, texto, fecha, hora, idUsuario, router.query.codigo);
    if (data) {
      setMessage({ ...message, messages: data.message, active: true });
      mutate(keyMessage);
    }
  };
  
  useEffect(() => {
    mutate(keyMessage);
  }, [router.query.codigo, message]);

  return {
    messages: data,
    isLoading: !error && !data,
    isError: error,
    createMessage,
    message,
  };
};