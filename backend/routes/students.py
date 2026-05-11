from flask import Blueprint, request, jsonify
from models import db, Student

students_bp = Blueprint("students", __name__)


@students_bp.route("", methods=["GET"])
def get_students():
    students = Student.query.all()
    return jsonify([student.to_dict() for student in students])


@students_bp.route("/<int:id>", methods=["GET"])
def get_student(id):
    student = Student.query.get_or_404(id)
    return jsonify(student.to_dict())


@students_bp.route("", methods=["POST"])
def create_student():
    data = request.get_json()

    new_student = Student(
        name=data["name"],
        email=data["email"],
        course=data.get("course", "React"),
        gpa=data.get("gpa", 0),
        status=data.get("status", "Active"),
    )

    db.session.add(new_student)
    db.session.commit()

    return jsonify(new_student.to_dict()), 201


@students_bp.route("/<int:id>", methods=["PUT"])
def update_student(id):
    student = Student.query.get_or_404(id)
    data = request.get_json()

    student.name = data.get("name", student.name)
    student.email = data.get("email", student.email)
    student.course = data.get("course", student.course)
    student.gpa = data.get("gpa", student.gpa)
    student.status = data.get("status", student.status)

    db.session.commit()

    return jsonify(student.to_dict())


@students_bp.route("/<int:id>", methods=["DELETE"])
def delete_student(id):
    student = Student.query.get_or_404(id)

    db.session.delete(student)
    db.session.commit()

    return jsonify({"message": "Student deleted successfully"})