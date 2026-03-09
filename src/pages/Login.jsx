import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <h2 className="login-title">Welcome to Koott</h2>

        <p className="login-subtitle">
          Find your campus team and collaborate on projects
        </p>

        <form className="login-form">

          <input
            type="email"
            placeholder="Email address"
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />

          <button className="login-button">
            Login
          </button>

        </form>

        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;