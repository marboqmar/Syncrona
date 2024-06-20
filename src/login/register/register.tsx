import React, { useState } from "react";
import { Button, Input } from "../../components/atoms";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors: string[] = [];

    if (formData.username.trim() === "") {
      errors.push("Username is required.");
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      errors.push("Invalid email format.");
    }

    if (formData.password.length < 8) {
      errors.push("Password must be at least 8 characters.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
      console.log("Registration data:", formData);
      setFormData({ username: "", email: "", password: "" });
    }
  };
  return (
    <>
      <h1>Syncrona</h1>
      <div className="register__board">
        <form onSubmit={handleRegister}>
          <Input
            placeholder="Enter your username man"
            value={formData.username}
            onChange={handleChange}
            name="username"
            width="440px"
            height="68px"
            inputLabel="Username"
          />
          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            width="440px"
            height="68px"
            inputLabel="Email"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            width="440px"
            height="68px"
            inputLabel="Password"
          />
          <Button
            text="Create Account"
            type="primary"
            onClick={handleRegister}
            width="155px"
            height="55px"
          />
        </form>
      </div>
    </>
  );
};

export default Register;
