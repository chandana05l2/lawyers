import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authcard from "../components/Authcard";
import "../components/Authcard.css";
import "../pages/AuthBackground.css"; // custom CSS for bg video



export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.email === form.email);
    if (userExists) {
      setError("Email already registered.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!validatePassword(form.password)) {
      setError(
        "Password must be at least 6 characters, include one uppercase, one lowercase, and one special character."
      );
      return;
    }

    const newUsers = [...users, { email: form.email, password: form.password }];
    localStorage.setItem("users", JSON.stringify(newUsers));
    localStorage.setItem("token", "demo-token");
    setError("");
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <video autoPlay muted loop className="bg-video">
        <source src="/images/bg.mp4" type="video/mp4" />
      </video>
      <Authcard>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")} className="link">
            Sign In
          </span>
        </p>
      </Authcard>
    </div>
  );
}

