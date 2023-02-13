import * as request from "./requester";

// const baseUrl = 'https://myresume-node-deployment.onrender.com/api/header';
const baseUrl = 'http://localhost:5000/api/portfolio';

export const getAll = () => request.get(baseUrl);
