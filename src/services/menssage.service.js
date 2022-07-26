import axios from "axios";

export const keyMessage = `${process.env.NEXT_PUBLIC_URL}/message/`;

export const getMessageByRoom = async (keyMessage, id) => {
  try {
    const response = await axios.get(keyMessage + "room/" + id);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createMessage = async (keyMessage, texto, fecha, hora, idUsuario) => {
  try {
    const response = await axios.post(keyMessage, { texto, fecha, hora, idUsuario });
    if (response.status === 200) return response.data.message;
  } catch (err) {
    console.log(err);
  }
};
