import { Link } from "react-router-dom";
import { Button } from "./components/atoms";
import { useState } from "react";
import Register from "./login/register/register";
import Login from "./login/login";
import Header from "./scss/components/Header";
import "./scss/login.scss";

const funcionDelClick = () => {
  console.log("me clickearon banda");
};

function App() {
  return (
    <div className="angled-gradient ">
      <Header />
      <Login />
    </div>
  );
}

export default App;
