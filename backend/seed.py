from app import app
from models import db, Student, Course

with app.app_context():
    db.drop_all()
    db.create_all()

    students = [
        Student(
            name="Sana Saleh",
            email="sana@gmail.com",
            course="React",
            gpa=3.9,
        ),
        Student(
            name="Mohamed Nasr",
            email="mohamed@gmail.com",
            course="Python",
            gpa=3.7,
        ),
    ]

    courses = [
        Course(name="React", students=28),
        Course(name="Python", students=22),
        Course(name="Flask", students=18),
    ]

    db.session.add_all(students)
    db.session.add_all(courses)

    db.session.commit()

    print("Database seeded successfully")