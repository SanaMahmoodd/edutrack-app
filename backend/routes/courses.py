from flask import Blueprint, request, jsonify
from models import db, Course

courses_bp = Blueprint("courses", __name__)


@courses_bp.route("", methods=["GET"])
def get_courses():
    courses = Course.query.all()
    return jsonify([course.to_dict() for course in courses])


@courses_bp.route("", methods=["POST"])
def create_course():
    data = request.get_json()

    new_course = Course(
        name=data["name"],
        students=data.get("students", 0),
    )

    db.session.add(new_course)
    db.session.commit()

    return jsonify(new_course.to_dict()), 201


@courses_bp.route("/<int:id>", methods=["PUT"])
def update_course(id):
    course = Course.query.get_or_404(id)
    data = request.get_json()

    course.name = data.get("name", course.name)
    course.students = data.get("students", course.students)

    db.session.commit()
    return jsonify(course.to_dict())


@courses_bp.route("/<int:id>", methods=["DELETE"])
def delete_course(id):
    course = Course.query.get_or_404(id)

    db.session.delete(course)
    db.session.commit()

    return jsonify({"message": "Course deleted successfully"})