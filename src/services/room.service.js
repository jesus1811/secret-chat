import axios from "axios";
export const keyRoom = `${process.env.NEXT_PUBLIC_URL}/room`;

export const createRoomService = async (keyRoom, idSala, nombreSala) => {
  try {
    const response = await axios.post(keyRoom, { idSala, nombreSala });
    if (response.status === 200) return response.data.message;
  } catch (err) {
    console.log(err);
    return "";
  }
};
