import React from "react";
import "./register.scss";
export const Register = () => {
  return (
    <>
      <header>
        <div className="container">
          <a href="index.html" className="logo"></a>
        </div>
      </header>

      <main>
        <section className="register-form">
          <h1>Create Account</h1>
          <div>
            <label htmlFor="username">
              <b>Enter your username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
              required
            />

            <label htmlFor="email">
              <b>Enter your email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />

            <label htmlFor="psw">
              <b>Enter your password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />

            <label htmlFor="psw-repeat">
              <b>Repeat your password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              id="psw-repeat"
              required
            />
            <hr />
            <button type="submit" className="registerbtn">
              Create Account
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
