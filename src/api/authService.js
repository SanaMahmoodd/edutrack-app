import axiosClient from "./axiosClient";

export async function updateProfile(profileData) {
  const response = await axiosClient.put("/auth/profile", profileData);
  return response.data;
}