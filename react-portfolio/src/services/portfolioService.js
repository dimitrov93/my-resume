import * as request from "./requester";

// const baseUrl = 'https://myresume-node-deployment.onrender.com/api/header';
const baseUrl = 'http://localhost:5000/api/portfolio';

export const getOne = (id) => request.get(`${baseUrl}/${id}`);
export const getAll = () => request.get(baseUrl);
export const createPortfolio = (data) => request.post(`${baseUrl}/create`, data);
export const updatePortfolio = (id, data) => request.put(`${baseUrl}/${id}`, data);
export const deletePortfolio = (id) => request.del(`${baseUrl}/${id}`);

