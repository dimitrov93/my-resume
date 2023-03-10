import * as request from "./requester";


const baseUrl = 'https://myresume-node-deployment.onrender.com/api/auth';
// const baseUrl = "http://localhost:5000/api/auth";

export const login = (email, password) =>
  request.post(`${baseUrl}/login`, { email, password });

export const logout = async (accessToken) => {
  try {
    const response = await fetch(`${baseUrl}/logout`, {
      headers: {
        "X-Authorization": accessToken,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
