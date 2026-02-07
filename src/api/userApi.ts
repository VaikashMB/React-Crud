import axios from "axios";
import type { User } from "../types/user";

const API_URL = "https://6986e5f08bacd1d773ebfc86.mockapi.io/users";

export const getUsers = () => axios.get<User[]>(API_URL);
export const createUser = (user: User) => axios.post(API_URL, user);
export const updateUser = (id: number, user: User) =>
  axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id: number) =>
  axios.delete(`${API_URL}/${id}`);
