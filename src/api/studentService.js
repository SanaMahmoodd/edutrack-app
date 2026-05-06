import axiosClient from "./axiosClient";

export async function getStudents() {
  const response = await axiosClient.get("/users");
  return response.data;
}

export async function createStudent(studentData) {
  const response = await axiosClient.post("/users", studentData);
  return response.data;
}

export async function updateStudent(id, studentData) {
  const response = await axiosClient.put(`/users/${id}`, studentData);
  return response.data;
}

export async function deleteStudent(id) {
  const response = await axiosClient.delete(`/users/${id}`);
  return response.data;
}