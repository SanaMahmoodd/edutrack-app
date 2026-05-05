import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Auth.css";
import hero from "../assets/hero.png";

export default function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = signup(
      form.name,
      form.email,
      form.password,
      form.confirmPassword
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/dashboard");
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-left">
          <h1>Create Account</h1>
          <p className="subtitle">
            Join EduTrack and start your academic journey
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span>♡</span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <span>✉</span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <span>⌕</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <small>◎</small>
            </div>

            <div className="input-box">
              <span>⌕</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <small>◎</small>
            </div>

            <label className="agree">
              <input type="checkbox" defaultChecked />
              <span>
                I agree to the <b>Terms of Service</b> and{" "}
                <b>Privacy Policy</b>
              </span>
            </label>

            {error && <p className="auth-error">{error}</p>}

            <button className="signup-btn" type="submit">
              Sign Up
            </button>

            <div className="or">
              <span></span>
              OR
              <span></span>
            </div>

            <button
              className="google-btn"
              type="button"
              onClick={() => navigate("/login")}
            >
              Already have an account? Login
            </button>
          </form>
        </div>

        {/* RIGHT SIDE (ما غيرناها) */}
        <div className="auth-right">
          <div className="gold-circle big"></div>
          <div className="gold-circle small"></div>

          <span className="spark spark1"></span>
          <span className="spark spark2"></span>
          <span className="spark spark3"></span>
          <span className="line line1"></span>
          <span className="line line2"></span>

          <div className="hero-wrap">
            <img src={hero} alt="Graduation cap" />
          </div>

          <h2>Smart. Simple. Academic.</h2>
          <p className="right-text">
            Manage students, courses, and progress <br />
            all in one beautiful platform.
          </p>
        </div>
      </section>
    </main>
  );
}