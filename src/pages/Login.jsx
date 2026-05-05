import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthInput from "../components/uthInput";
import "../styles/Auth.css";
import hero from "../assets/hero.png";

const schema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const result = login(data.email, data.password);

    if (!result.success) {
      setError("email", { message: result.message });
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <AuthInput
              icon="✉"
              type="email"
              placeholder="Email Address"
              register={register("email")}
              error={errors.email}
            />

            <AuthInput
              icon="⌕"
              type="password"
              placeholder="Password"
              register={register("password")}
              error={errors.password}
            />

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