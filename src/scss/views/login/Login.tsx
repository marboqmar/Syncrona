import React from "react";
import "./register.scss";
const LoginForm = () => { 
  return (
    <main>
      <section className="login-form">
        <h2>Login</h2>
        <form action="/login" method="post">
          <label htmlFor="username">username:</label>
          <input type="text" name="username" id="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
          <button type="submit">Log in</button>
          <p className="forgot-password">
            <a href="forgot-password.html">
              Forgot your password? Recover your password
            </a>
          </p>
          <p className="no-account">
            Don't have an account? <a href="register.html">Register now</a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
