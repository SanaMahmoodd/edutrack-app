# EduTrack — Full Stack Student Management Dashboard

EduTrack is a modern full stack academic management platform designed to simplify student administration workflows through a clean and professional interface.

The system allows administrators to manage students, courses, reports, and profile settings while integrating a Flask backend API with a React frontend application.

---

# Features

- Authentication System (Login / Register)
- Protected Routes
- Student Management
- Add / Edit / Delete Students
- Course Management
- Reports & CSV Export
- Profile Management
- Profile Image Upload
- Search, Filters & Pagination
- Responsive Modern UI
- Full Backend API Integration
- LocalStorage Session Persistence

---

# Tech Stack

## Frontend
- React
- React Router
- Styled Components
- Axios
- React Hook Form
- Yup Validation
- Vite

## Backend
- Flask
- Flask SQLAlchemy
- Flask CORS
- JWT Authentication
- SQLite Database

---

# Project Structure

```bash
frontend/
backend/
```

---

# Installation

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python seed.py
python app.py
```

---

# API Endpoints

## Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`

## Profile
- PUT `/api/auth/profile`

## Students
- GET `/api/students`
- POST `/api/students`

## Courses
- GET `/api/courses`
- POST `/api/courses`

---

# UI Highlights

- Glassmorphism Design
- Luxury Dark Theme
- Gold Accent Colors
- Animated Background Effects
- Responsive Layout
- Professional Dashboard Components

---

# Author

Designed & Developed by Sana Saleh

GitHub:
https://github.com/SanaMahmoodd