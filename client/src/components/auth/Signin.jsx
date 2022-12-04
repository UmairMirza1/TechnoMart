import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function signin(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/user/signin", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      history.push("/");
    } else {
      setEmail("");
      setPassword("");
      history.push("/Signin");
    }
  }

  return (
    <div className="p-5">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={signin}>
            <h3>Log In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                value={email}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                value={password}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right">
              Not registered <a href="/Signup">Sign up!</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
