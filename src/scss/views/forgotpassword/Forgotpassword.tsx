import React from "react";
import "./forgotpassword.scss";

<body>
  <header>
    <div className="container">
      <a href="index.html" className="logo">
        Logo
      </a>
    </div>
  </header>

  <main>
    <section className="forgot-password">
      <p>Enter your email</p>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email"
        required
      />
      <p>You will receive a link to recover your password</p>
      <button type="submit">Submit</button>
    </section>
  </main>
</body>;
