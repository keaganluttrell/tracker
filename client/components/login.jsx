import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth'

export default function Login() {
  return (
    <div id="login" className="auth">
      <div className="form-title">Login</div>
      <form>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </form>
      <button>Login</button>
      <div className="auth-bottom-line">
        Not a member? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}