import jwt
import datetime

from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from models import db, User

auth_bp = Blueprint("auth", __name__)

SECRET_KEY = "edutrack-secret-key"


@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    existing_user = User.query.filter_by(email=data["email"]).first()

    if existing_user:
        return jsonify({"message": "Email already exists"}), 400

    hashed_password = generate_password_hash(data["password"])

    user = User(
        name=data["name"],
        email=data["email"],
        password=hashed_password,
    )

    db.session.add(user)
    db.session.commit()

    token = jwt.encode(
        {
            "user_id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1),
        },
        SECRET_KEY,
        algorithm="HS256",
    )

    return jsonify(
        {
            "message": "User registered successfully",
            "token": token,
            "user": user.to_dict(),
        }
    ), 201


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    user = User.query.filter_by(email=data["email"]).first()

    if not user:
        return jsonify({"message": "Invalid email or password"}), 401

    if not check_password_hash(user.password, data["password"]):
        return jsonify({"message": "Invalid email or password"}), 401

    token = jwt.encode(
        {
            "user_id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1),
        },
        SECRET_KEY,
        algorithm="HS256",
    )

    return jsonify(
        {
            "token": token,
            "user": user.to_dict(),
        }
    )


@auth_bp.route("/profile", methods=["PUT"])
def update_profile():
    data = request.get_json()

    current_email = data.get("currentEmail")

    if not current_email:
        return jsonify({"message": "Current email is required"}), 400

    user = User.query.filter_by(email=current_email).first()

    if not user:
        return jsonify({"message": "User not found"}), 404

    new_email = data.get("email", user.email)

    existing_user = User.query.filter(
        User.email == new_email,
        User.id != user.id,
    ).first()

    if existing_user:
        return jsonify({"message": "Email already exists"}), 400

    user.name = data.get("name", user.name)
    user.email = new_email

    db.session.commit()

    return jsonify(
        {
            "message": "Profile updated successfully",
            "user": user.to_dict(),
        }
    )