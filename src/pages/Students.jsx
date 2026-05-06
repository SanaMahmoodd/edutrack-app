import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Notification from "../components/Notification";
import useNotification from "../hooks/useNotification";

import {
  Page,
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
} from "../ui/PageLayout";

import {
  Form,
  Input,
  StudentName,
  StudentEmail,
  Actions,
  ActionButton,
  SmallButtonWrap,
} from "../ui/StudentUI";

import {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} from "../api/studentService";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const { notification, showNotification } = useNotification();

  useEffect(() => {
    async function fetchStudents() {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch students:", error);
        showNotification("Failed to load students.", "error");
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (editingId) {
      try {
        if (editingId <= 10) {
          await updateStudent(editingId, form);
        }

        setStudents(
          students.map((student) =>
            student.id === editingId ? { ...student, ...form } : student
          )
        );

        setEditingId(null);
        setForm({ name: "", email: "" });
        showNotification("Student updated successfully.");
      } catch (error) {
        console.error("Failed to update student:", error);
        showNotification("Failed to update student.", "error");
      }

      return;
    }

    try {
      const createdStudent = await createStudent(form);

      setStudents([
        {
          ...createdStudent,
          ...form,
          id: Date.now(),
        },
        ...students,
      ]);

      setForm({ name: "", email: "" });
      showNotification("Student added successfully.");
    } catch (error) {
      console.error("Failed to add student:", error);
      showNotification("Failed to add student.", "error");
    }
  }

  function handleEdit(student) {
    setEditingId(student.id);
    setForm({
      name: student.name,
      email: student.email,
    });
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm({ name: "", email: "" });
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      if (id <= 10) {
        await deleteStudent(id);
      }

      setStudents(students.filter((student) => student.id !== id));
      showNotification("Student deleted successfully.");
    } catch (error) {
      console.error("Failed to delete student:", error);
      showNotification("Failed to delete student.", "error");
    }
  }

  if (loading) {
    return (
      <Page>
        <Notification
          show={notification.show}
          message={notification.message}
          type={notification.type}
        />

        <Container>
          <Subtitle>Loading students...</Subtitle>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
      />

      <Container>
        <Header>
          <Title>Students</Title>
          <Subtitle>
            Manage students using Axios CRUD operations and external API
            integration.
          </Subtitle>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Student name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <Input
            name="email"
            type="email"
            placeholder="Student email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Button type="submit">{editingId ? "Update" : "Add Student"}</Button>
        </Form>

        {editingId && (
          <SmallButtonWrap>
            <Button type="button" onClick={handleCancelEdit}>
              Cancel
            </Button>
          </SmallButtonWrap>
        )}

        <Grid>
          {students.map((student) => (
            <Card key={student.id}>
              <StudentName>{student.name}</StudentName>
              <StudentEmail>{student.email}</StudentEmail>

              <Actions>
                <ActionButton type="button" onClick={() => handleEdit(student)}>
                  Edit
                </ActionButton>

                <ActionButton
                  type="button"
                  $danger
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </ActionButton>
              </Actions>
            </Card>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}