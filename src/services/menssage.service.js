import axios from "axios";

export const keyMessage = `${process.env.NEXT_PUBLIC_URL}/message`;

export const getMessageByRoomService = async (keyMessage, id) => {
  try {
    const response = await axios.get(`${keyMessage}/room/${id}`);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createMessageService = async (keyMessage, texto, fecha, hora, idUsuario, idSala) => {
  try {
    const response = await axios.post(keyMessage, { texto, fecha, hora, idUsuario, idSala });
    if (response.status === 200) return response.data.message;
  } catch (err) {
    console.log(err);
  }
};
