import axios from "axios";
export const keyRoom = `${process.env.NEXT_PUBLIC_URL}/room`;

export const createRoomService = async (nombreSala) => {
  try {
    const response = await axios.post(keyRoom, { nombreSala });
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const readRoomsService = async (keyRoom) => {
  try {
    const response = await axios.get(keyRoom);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
