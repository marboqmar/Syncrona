import { useState } from "react";
import { Button, Input } from "../components/atoms";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");

  const handleSendRecovery = () => {
    console.log("A link has been sent to your $(email)");
  };

  return (
    <>
      <h1>Recover Password</h1>
      <Input
        placeholder="Enter your email"
        value={email}
        width="440px"
        height="68px"
        inputLabel="Email"
        name="email"
        setValue={setEmail}
      />
      <Button text="Submit" onClick={handleSendRecovery} />
    </>
  );
};

export default RecoverPassword;
