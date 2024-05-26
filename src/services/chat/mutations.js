import { axiosInstance } from "../axiosInstancia.service";

export const postCreateMessage = async ({ description, user_id }) => {
  if (!user_id) return;
  try {
    const response = await axiosInstance.post("/chat", {
      description,
      user_id,
    });
    if (response.status === 200 && response) return response.data;
  } catch (error) {
    throw error;
  }
};
