import "./scss/style.scss";
import { Link } from "react-router-dom";
import BoardList from "../src/scss/components/BoardList";
import AddNewBoard from "../src/scss/components/NewBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Topbar from "./scss/components/topbar";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div>
          <Topbar />
        </div>
        <div className="align__center display__flex ">
          <div className="margin__5p align__center">
            <BoardList />
          </div>
          <div className="display__flex align__center  ">
            <AddNewBoard />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
