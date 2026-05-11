import axiosClient from "./axiosClient";

export async function getStudents() {
  const response = await axiosClient.get("/students");
  return response.data;
}

export async function getStudent(id) {
  const response = await axiosClient.get(`/students/${id}`);
  return response.data;
}

export async function createStudent(studentData) {
  const response = await axiosClient.post("/students", studentData);
  return response.data;
}

export async function updateStudent(id, studentData) {
  const response = await axiosClient.put(`/students/${id}`, studentData);
  return response.data;
}

export async function deleteStudent(id) {
  const response = await axiosClient.delete(`/students/${id}`);
  return response.data;
}