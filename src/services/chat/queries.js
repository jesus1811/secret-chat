import { axiosInstance } from "../axiosInstancia.service";

export const getAllChatsService = async () => {
  try {
    const response = await axiosInstance.get("/chat", {
      params: { select: "*,user:user_id(*)", order: `created_at.desc` },
    });
    if (response.status === 200 && response) return response.data;
  } catch (error) {
    throw error;
  }
};
