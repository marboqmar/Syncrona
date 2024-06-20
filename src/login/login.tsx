import { useState } from "react";
import { Button, Input, Checkbox } from "../components/atoms";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const logIn = () => {
    console.log("me clickearon banda");
  };
  return (
    <div className="margin__center ">
      <div className="bg__login align__center  ">
        <div className="flex__column">
          <div>
            <p className="login__input__tittle  livvic-regular">Username</p>

            <Input
              placeholder=""
              width="80%"
              height="2rem"
              value={userName}
              name="name"
              className="bg__input"
            />
          </div>
          <div>
            <p className="login__input__tittle">Password</p>
            <Input
              placeholder=""
              width="80%"
              height="2rem"
              value={password}
              name="name"
              className="bg__input"
            />
          </div>
        </div>

        <div className="margin__center flex__column align__center ">
          <Button
            text="Log in"
            type="primary"
            onClick={logIn}
            width={"9.68rem"}
            height={"3.43rem"}
            className="login__button  livvic-regular "
          />
        </div>
        <div className="align__center flex__column">
          <p>
            <span className="color__syncrona--white  livvic-regular">
              Forgot your password?
            </span>{" "}
            <span className="color__synrcona--black  livvic-regular">
              Recover your password
            </span>
          </p>
          <p>
            <span className="color__syncrona--white  livvic-regular">
              Don’t have an account?
            </span>
            <span className="color__synrcona--black  livvic-regulars">
              Register now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
