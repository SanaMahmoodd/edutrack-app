import axiosClient from "./axiosClient";

export async function registerUser(data) {
  const response = await axiosClient.post("/auth/register", data);
  return response.data;
}

export async function loginUser(data) {
  const response = await axiosClient.post("/auth/login", data);
  return response.data;
}

export async function updateProfile(data) {
  const response = await axiosClient.put("/auth/profile", data);
  return response.data;
}