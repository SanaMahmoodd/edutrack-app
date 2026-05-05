import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthInput from "../components/uthInput";
import Button from "../ui/Button";
import {
  AuthPage,
  AuthCard,
  AuthLeft,
  AuthTitle,
  AuthSubtitle,
} from "../ui/AuthLayout";

import "../styles/Auth.css";
import hero from "../assets/hero.png";

const schema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export default function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const result = signup(
      data.name,
      data.email,
      data.password,
      data.confirmPassword
    );

    if (!result.success) {
      setError("email", { message: result.message });
      return;
    }

    navigate("/dashboard");
  }

  return (
    <AuthPage>
      <AuthCard>
        <AuthLeft>
          <AuthTitle>Create Account</AuthTitle>
          <AuthSubtitle>
            Join EduTrack and start your academic journey
          </AuthSubtitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AuthInput
              icon="♡"
              placeholder="Full Name"
              register={register("name")}
              error={errors.name}
            />

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

            <AuthInput
              icon="⌕"
              type="password"
              placeholder="Confirm Password"
              register={register("confirmPassword")}
              error={errors.confirmPassword}
            />

            <label className="agree">
              <input type="checkbox" required defaultChecked />
              <span>
                I agree to the <b>Terms of Service</b> and <b>Privacy Policy</b>
              </span>
            </label>

            <Button type="submit">Sign Up</Button>

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
        </AuthLeft>

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
      </AuthCard>
    </AuthPage>
  );
}