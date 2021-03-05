import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth'

export default function Signup() {
  return (
    <div id="login" className="auth">
      <div className="form-title">Sign Up</div>
      <form>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
      <button>Sign Up</button>
      <div className="auth-bottom-line">
        Already a member? <Link to="/login">Login</Link>
      </div>
    </div>
  )
}