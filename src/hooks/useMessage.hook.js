import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

export const useMessage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);

  const createMessage = (texto, fecha, hora, idUsuario) => {
    socket.emit("messages", { texto, fecha, hora, idUsuario, idSala: router.query.codigo });
  };
  useEffect(() => {
    socket.emit("initial", router.query.codigo);
  }, []);
  useEffect(() => {
    socket.on("messages", (message) => {
      setMessages(message);
    });
  }, [messages]);

  return {
    createMessage,
    messages,
  };
};
