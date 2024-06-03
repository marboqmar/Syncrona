import "./scss/style.scss";
import { Link } from "react-router-dom";
import { Button } from "./components/atoms";
import { useState } from "react";
import Register from "./login/register/register";
import Login from "./login/login";
import Header from "./scss/components/Header";
import "./scss/style.scss";

const funcionDelClick = () => {
  console.log("me clickearon banda");
};

function App() {
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
}

export default App;
