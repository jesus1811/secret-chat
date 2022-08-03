import axios from "axios";

export const keyMessage = `${process.env.NEXT_PUBLIC_URL}/message`;

export const getMessageByRoomService = async (keyMessage, id) => {
  try {
    const response = await axios.get(`${keyMessage}/room/${id}`);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const createMessageService = async (texto, fecha, hora, idUsuario, idSala, router) => {
  try {
    const response = await axios.post(keyMessage, { texto, fecha, hora, idUsuario, idSala });
    if (response.status === 200) return response.data.message;
  } catch (err) {
    console.log(err);
    if (err.response.status === 400) router.push("/access");
  }
};
