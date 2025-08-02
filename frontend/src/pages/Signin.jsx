import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authcard from "../components/Authcard";
import "../components/Authcard.css";
import "../pages/AuthBackground.css";



export default function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      localStorage.setItem("token", "demo-token");
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <video autoPlay muted loop className="bg-video">
        <source src="./images/bg.mp4" type="video/mp4" />
      </video>
      <Authcard>
        <h2>Sign In</h2>
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
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} className="link">
            Sign Up
          </span>
        </p>
      </Authcard>
    </div>
  );
}

