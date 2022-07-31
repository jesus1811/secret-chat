import axios from "axios";
export const keyUser = `${process.env.NEXT_PUBLIC_URL}/user`;

export const createUserService = async (keyUser, id, nombreUsuario, fotoUsuario) => {
  try {
    const response = await axios.post(keyUser, { id, nombreUsuario, fotoUsuario });
    if (response.status === 200) return response.data.message;
  } catch (err) {
    console.log(err);
    return "";
  }
};

export const readUserService = async (keyUser, id) => {
  try {
    const response = await axios.get(`${keyUser}/${id}`);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
    return {};
  }
};
