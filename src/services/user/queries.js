import { axiosInstance } from "../axiosInstancia.service";

export const loginUser = async ({ user, password }) => {
  try {
    const response = await axiosInstance.get("/user", {
      params: { select: "*", user: `eq.${user}`, password: `eq.${password}` },
    });

    if (response.status === 200 && response) return response.data;
  } catch (error) {
    throw error;
  }
};
