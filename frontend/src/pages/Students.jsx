import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/ButtonUI";
import Card from "../ui/CardUI";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import ConfirmModal from "../components/ConfirmModal";

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

import { getCourses } from "../api/courseService";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    gpa: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [deleteId, setDeleteId] = useState(null);

  const navigate = useNavigate();
  const studentsPerPage = 6;
  const { notification, showNotification } = useNotification();

  useEffect(() => {
    async function fetchData() {
      try {
        const studentsData = await getStudents();
        const coursesData = await getCourses();

        setStudents(studentsData);
        setCourses(coursesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        showNotification("Failed to load students or courses.", "error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredStudents = students.filter((student) => {
    const searchMatch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course?.toLowerCase().includes(searchTerm.toLowerCase());

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

  function emptyForm() {
    return {
      name: "",
      email: "",
      course: "",
      gpa: "",
    };
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function buildStudentPayload() {
    return {
      name: form.name,
      email: form.email,
      course: form.course,
      gpa: Number(form.gpa),
      status: "Active",
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.course) {
      showNotification("Please select a course.", "error");
      return;
    }

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
        setForm(emptyForm());
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
      setForm(emptyForm());
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
      course: student.course || "",
      gpa: student.gpa || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleCancelEdit() {
    setEditingId(null);
    setForm(emptyForm());
  }

  function openDeleteModal(id) {
    setDeleteId(id);
  }

  function closeDeleteModal() {
    setDeleteId(null);
  }

  async function confirmDeleteStudent() {
    if (!deleteId) return;

    try {
      await deleteStudent(deleteId);

      setStudents(students.filter((student) => student.id !== deleteId));
      showNotification("Student deleted successfully.");
    } catch (error) {
      console.error("Failed to delete student:", error);
      showNotification("Failed to delete student.", "error");
    } finally {
      setDeleteId(null);
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

      <ConfirmModal
        show={Boolean(deleteId)}
        title="Delete Student"
        message="Are you sure you want to delete this student? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDeleteStudent}
        onCancel={closeDeleteModal}
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
              placeholder="Search by name, email, or course..."
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

            <Select
              name="course"
              value={form.course}
              onChange={handleChange}
              required
            >
              <option value="">Select course</option>

              {courses.map((course) => (
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              ))}
            </Select>

            <Input
              name="gpa"
              type="number"
              step="0.001"
              min="0"
              max="4"
              placeholder="GPA"
              value={form.gpa}
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

              <StudentEmail>
                {student.course || "No course"} • GPA {student.gpa ?? "N/A"}
              </StudentEmail>

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
                    openDeleteModal(student.id);
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