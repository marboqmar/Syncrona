import "./scss/style.scss";
import Header from "./scss/components/Header";
import Login from "../src/login/index";
import "../src/scss/login.scss";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="angled-gradient ">
      <div className="center">
        <Header />
        <Login />
      </div>
    </div>
  );
}

export default App;
