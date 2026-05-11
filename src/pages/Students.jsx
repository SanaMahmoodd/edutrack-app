import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Card from "../ui/Card";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
  StudentHeaderCard,
  Form,
  FormButtons,
  Input,
  StudentName,
  StudentEmail,
  Actions,
  ActionButton,
  ToolsBar,
  Select,
  Pagination,
  PageButton,
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

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const studentsPerPage = 6;
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

  const filteredStudents = students.filter((student) => {
    const searchMatch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterType === "all") return searchMatch;

    if (filterType === "gmail") {
      return searchMatch && student.email.includes("gmail");
    }

    if (filterType === "company") {
      return searchMatch && !student.email.includes("gmail");
    }

    return searchMatch;
  });

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;

  const displayedStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function buildStudentPayload() {
    return {
      ...form,
      course: "React",
      gpa: 3.7,
      status: "Active",
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = buildStudentPayload();

    if (editingId) {
      try {
        const updatedStudent = await updateStudent(editingId, payload);

        setStudents(
          students.map((student) =>
            student.id === editingId ? updatedStudent : student
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
      const createdStudent = await createStudent(payload);

      setStudents([createdStudent, ...students]);
      setForm({ name: "", email: "" });
      setCurrentPage(1);
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

    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
      await deleteStudent(id);

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
        <Navbar />

        <Container>
          <Subtitle>Loading students...</Subtitle>
        </Container>

        <Footer />
      </Page>
    );
  }

  return (
    <Page>
      <Navbar />

      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
      />

      <Container>
        <StudentHeaderCard>
          <Header>
            <Title>Students</Title>

            <Subtitle>
              Manage student records, search academic data, and organize student
              information in one place.
            </Subtitle>
          </Header>

          <ToolsBar>
            <Input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />

            <Select
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">All Students</option>
              <option value="gmail">Gmail Students</option>
              <option value="company">Company Emails</option>
            </Select>
          </ToolsBar>

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

            <FormButtons>
              <Button type="submit">
                {editingId ? "Update" : "Add Student"}
              </Button>

              {editingId && (
                <Button type="button" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              )}
            </FormButtons>
          </Form>
        </StudentHeaderCard>

        <Grid>
          {displayedStudents.map((student) => (
            <Card
              key={student.id}
              onClick={() => navigate(`/students/${student.id}`)}
              style={{ cursor: "pointer" }}
            >
              <StudentName>{student.name}</StudentName>

              <StudentEmail>{student.email}</StudentEmail>

              <Actions>
                <ActionButton
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(student);
                  }}
                >
                  Edit
                </ActionButton>

                <ActionButton
                  type="button"
                  $danger
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(student.id);
                  }}
                >
                  Delete
                </ActionButton>
              </Actions>
            </Card>
          ))}
        </Grid>

        <Pagination>
          <PageButton
            $wide
            type="button"
            onClick={() => setCurrentPage((page) => page - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PageButton>

          {Array.from({ length: totalPages || 1 }, (_, index) => (
            <PageButton
              key={index + 1}
              type="button"
              $active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}

          <PageButton
            $wide
            type="button"
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </PageButton>
        </Pagination>
      </Container>

      <Footer />
    </Page>
  );
}