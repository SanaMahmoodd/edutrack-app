import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import ConfirmModal from "../components/ConfirmModal";

import useNotification from "../hooks/useNotification";

import Button from "../ui/ButtonUI";
import Card from "../ui/CardUI";

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
  FormButtons,
  Input,
  StudentName,
  StudentEmail,
  Actions,
  ActionButton,
  StudentHeaderCard,
} from "../ui/StudentUI";

import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../api/courseService";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [deleteId, setDeleteId] = useState(null);

  const { notification, showNotification } = useNotification();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        showNotification("Failed to load courses.", "error");
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!courseName.trim()) {
      showNotification("Please enter a course name.", "error");
      return;
    }

    if (editingId) {
      try {
        const updatedCourse = await updateCourse(editingId, {
          name: courseName,
        });

        setCourses(
          courses.map((course) =>
            course.id === editingId ? updatedCourse : course
          )
        );

        setEditingId(null);
        setCourseName("");
        showNotification("Course updated successfully.");
      } catch (error) {
        console.error("Failed to update course:", error);
        showNotification("Failed to update course.", "error");
      }

      return;
    }

    try {
      const newCourse = await createCourse({
        name: courseName,
        students: 0,
      });

      setCourses([newCourse, ...courses]);
      setCourseName("");
      showNotification("Course added successfully.");
    } catch (error) {
      console.error("Failed to add course:", error);
      showNotification("Failed to add course.", "error");
    }
  }

  function handleEdit(course) {
    setEditingId(course.id);
    setCourseName(course.name);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleCancelEdit() {
    setEditingId(null);
    setCourseName("");
  }

  function openDeleteModal(id) {
    setDeleteId(id);
  }

  function closeDeleteModal() {
    setDeleteId(null);
  }

  async function confirmDeleteCourse() {
    if (!deleteId) return;

    try {
      await deleteCourse(deleteId);

      setCourses(courses.filter((course) => course.id !== deleteId));
      showNotification("Course deleted successfully.");
    } catch (error) {
      console.error("Failed to delete course:", error);
      showNotification("Failed to delete course.", "error");
    } finally {
      setDeleteId(null);
    }
  }

  if (loading) {
    return (
      <Page>
        <Navbar />

        <Container>
          <Subtitle>Loading courses...</Subtitle>
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
        title="Delete Course"
        message="Are you sure you want to delete this course? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDeleteCourse}
        onCancel={closeDeleteModal}
      />

      <Container>
        <StudentHeaderCard>
          <Header>
            <Title>Courses</Title>

            <Subtitle>
              Manage course records, update course information, and track
              students enrolled in each course.
            </Subtitle>
          </Header>

          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Course name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />

            <Input
              type="text"
              placeholder="Students count"
              disabled
              value={editingId ? "Auto managed" : "0"}
              readOnly
            />

            <FormButtons>
              <Button type="submit">
                {editingId ? "Update Course" : "Add Course"}
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
          {courses.map((course) => (
            <Card key={course.id}>
              <StudentName>{course.name}</StudentName>

              <StudentEmail>
                {course.students} students enrolled
              </StudentEmail>

              <Actions>
                <ActionButton
                  type="button"
                  onClick={() => handleEdit(course)}
                >
                  Edit
                </ActionButton>

                <ActionButton
                  type="button"
                  $danger
                  onClick={() => openDeleteModal(course.id)}
                >
                  Delete
                </ActionButton>
              </Actions>
            </Card>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Page>
  );
}