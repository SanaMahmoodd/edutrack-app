import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import useNotification from "../hooks/useNotification";

import Button from "../ui/Button";
import Card from "../ui/Card";

import { Page, Container, Header, Title, Subtitle, Grid } from "../ui/PageLayout";

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

export default function Courses() {
  const [courses, setCourses] = useState([
    { id: 1, name: "React", students: 28 },
    { id: 2, name: "Python", students: 22 },
    { id: 3, name: "Flask", students: 18 },
  ]);

  const [courseName, setCourseName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const { notification, showNotification } = useNotification();

  function handleSubmit(e) {
    e.preventDefault();

    if (!courseName.trim()) {
      showNotification("Please enter a course name.", "error");
      return;
    }

    if (editingId) {
      setCourses(
        courses.map((course) =>
          course.id === editingId ? { ...course, name: courseName } : course
        )
      );

      setEditingId(null);
      setCourseName("");
      showNotification("Course updated successfully.");
      return;
    }

    const newCourse = {
      id: Date.now(),
      name: courseName,
      students: 0,
    };

    setCourses([newCourse, ...courses]);
    setCourseName("");
    showNotification("Course added successfully.");
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

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    setCourses(courses.filter((course) => course.id !== id));
    showNotification("Course deleted successfully.");
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
              type="number"
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

              <StudentEmail>{course.students} students enrolled</StudentEmail>

              <Actions>
                <ActionButton type="button" onClick={() => handleEdit(course)}>
                  Edit
                </ActionButton>

                <ActionButton
                  type="button"
                  $danger
                  onClick={() => handleDelete(course.id)}
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