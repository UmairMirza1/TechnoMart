import React, { Component } from 'react'
export default function SignUp () {


      return (
      <div className="p-5">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
            <h3>Log In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
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
    )
  }
