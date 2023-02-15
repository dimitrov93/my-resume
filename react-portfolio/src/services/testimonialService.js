import * as request from "./requester";

// const baseUrl = 'https://myresume-node-deployment.onrender.com/api/header';
const baseUrl = 'http://localhost:5000/api/testimonials';

export const getAll = () => request.get(baseUrl);
export const create = (data) => request.post(`${baseUrl}/create`, data);
export const remove = (id) => request.del(`${baseUrl}/${id}`);