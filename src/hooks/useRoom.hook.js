import { useState } from "react";
import { createRoomService } from "@/services";

export const useRoom = () => {
  const [messageRoom, setMessageRoom] = useState({ isActive: false, message: "" });
  const handleCreateRoom = async () => {
    const data = await createRoomService("sala");
    setMessageRoom({ ...messageRoom, isActive: true, message: `${data.message} Numero de sala: ${data.data.idSala}` });
  };
  return {
    handleCreateRoom,
    messageRoom,
  };
};
