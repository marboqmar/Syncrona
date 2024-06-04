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
      <div className="bg__login align__center ">
        <div className="flex__column">
          <div>
          <p className="login__input__tittle">Username</p>
          <input type="text"  className="bg__input "/>
          </div>
          <div >
            <p className="login__input__tittle">Password</p>
            <input type="text" className="bg__input "/>
          </div>
        </div>
        
        <div className="margin__center " >
        <Button
          text="Log in"
          type="primary"
          onClick={logIn}
          width={"155px"}
          height={"55px"}
          className="login__button "
        />
        </div>
      </div>
    </div>
  );
};

export default Login;
