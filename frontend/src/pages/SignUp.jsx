import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthInput from "../components/AuthInput";
import Button from "../ui/ButtonUI";

import {
  AuthPage,
  AuthCard,
  AuthLeft,
  AuthTitle,
  AuthSubtitle,
  Agree,
  OrDivider,
  GoogleButton,
  AuthRight,
  GoldCircle,
  Spark,
  Line,
  HeroWrap,
  AuthRightTitle,
  RightText,
} from "../ui/AuthLayout";

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
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    const result = await signup(
      data.name,
      data.email,
      data.password,
      data.confirmPassword
    );

    if (!result.success) {
      setError("email", {
        message: result.message,
      });

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

            <Agree>
              <input type="checkbox" required defaultChecked />

              <span>
                I agree to the <b>Terms of Service</b> and{" "}
                <b>Privacy Policy</b>
              </span>
            </Agree>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Sign Up"}
            </Button>

            <OrDivider>
              <span></span>
              OR
              <span></span>
            </OrDivider>

            <GoogleButton type="button" onClick={() => navigate("/login")}>
              Already have an account? Login
            </GoogleButton>
          </form>
        </AuthLeft>

        <AuthRight>
          <GoldCircle $big />
          <GoldCircle $small />

          <Spark $one />
          <Spark $two />
          <Spark $three />

          <Line $one />
          <Line $two />

          <HeroWrap>
            <img src={hero} alt="Graduation cap" />
          </HeroWrap>

          <AuthRightTitle>Smart. Simple. Academic.</AuthRightTitle>

          <RightText>
            Manage students, courses, and progress <br />
            all in one beautiful platform.
          </RightText>
        </AuthRight>
      </AuthCard>
    </AuthPage>
  );
}