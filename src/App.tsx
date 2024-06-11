import "./scss/style.scss";
import { Link } from "react-router-dom";
import BoardList from "./scss/components/BoardList";
import AddNewBoard from "../src/scss/components/NewBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Topbar from "./scss/components/topbar";
import { UserContextProvider } from "./scss/components/UserContext/UserContext";
import Header from "./scss/components/Header";
import Login from "../src/login/login";

function App() {
  return (
    <div className="angled-gradient ">
    <Header />
    <Login />
  </div>
  );
}

export default App;
