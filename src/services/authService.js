import * as request from "./requester";

<<<<<<< Updated upstream:react-portfolio/src/services/authService.js
// const baseUrl = "http://localhost:5000/api/auth";
const baseUrl = "https://myresume-node-deployment.onrender.com/api/auth";
=======
const baseUrl = 'https://myresume-node-deployment.onrender.com/api/auth';
// const baseUrl = "http://localhost:5000/api/auth";
>>>>>>> Stashed changes:src/services/authService.js

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
