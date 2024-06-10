import React, { useState } from "react";
import { Button, Input } from "../components/atoms";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }
    console.log("Sending password reset email to:", email);
    setEmail("");
  };

  return (
    <>
      <h1>Forgot Password</h1>
      <p>You will receive a link to recover your password.</p>
      <form onSubmit={handleForgotPassword}>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          width="440px"
          height="68px"
          inputLabel="Email"
        />
        <Button
          text="Send Reset Link"
          type="primary"
          onClick={handleForgotPassword}
          width="155px"
          height="55px"
        />
      </form>
    </>
  );
};

export default ForgotPassword;
