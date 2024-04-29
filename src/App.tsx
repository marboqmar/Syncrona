import "./scss/style.scss";
import { Link } from "react-router-dom";
import BoardList from "../src/scss/components/BoardList";
import AddNewBoard from "../src/scss/components/NewBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Topbar from "./scss/components/topbar";

function App() {
  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div className="align__center">
        <div className="display_flex ">
          <div className="margin__5p align__center">
            <BoardList />
          </div>
          <div className="display_flex align__center  ">
            <AddNewBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
