import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Auth.css";
import hero from "../assets/hero.png";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = login(form.email, form.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/dashboard");
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-left login-left">
          <h1>Welcome Back</h1>
          <p className="subtitle">
            Login to continue managing your academic dashboard
          </p>

          <form onSubmit={handleSubmit}>
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

            {error && <p className="auth-error">{error}</p>}

            <button className="signup-btn" type="submit">
              Login
            </button>

            <div className="or">
              <span></span>
              OR
              <span></span>
            </div>

            <button
              type="button"
              className="google-btn"
              onClick={() => navigate("/signup")}
            >
              Create new account
            </button>
          </form>
        </div>

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