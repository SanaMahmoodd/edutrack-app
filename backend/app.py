from flask import Flask
from flask_cors import CORS

from config import Config
from models import db

from routes.students import students_bp
from routes.courses import courses_bp
from routes.auth import auth_bp

app = Flask(__name__)

app.config.from_object(Config)

CORS(app)

db.init_app(app)

app.register_blueprint(students_bp, url_prefix="/api/students")
app.register_blueprint(courses_bp, url_prefix="/api/courses")
app.register_blueprint(auth_bp, url_prefix="/api/auth")


@app.route("/")
def home():
    return {"message": "EduTrack Flask API is running"}


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)