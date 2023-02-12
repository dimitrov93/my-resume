import * as request from "./requester";

const baseUrl = 'https://myresume-node-deployment.onrender.com/api/header';

export const getHeader = () => request.get(baseUrl);
export const createHeader = (data) => request.post(baseUrl, data);
