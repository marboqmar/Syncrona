import React from "react";
import "./recoverpassword.scss";
<body>
  <header>
    <h2>Recover Password</h2>
  </header>

  <main>
    <section className="recover-form">
      <p>Enter your email</p>
      <form action="#" method="post">
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />
      </form>
      <p>You will receive a link to recover your password</p>
      <button type="submit">Send Recovery Link</button>
    </section>
  </main>
</body>
