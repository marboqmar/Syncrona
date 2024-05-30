import "./scss/style.scss";
import { Link } from "react-router-dom";
import BoardList from "./scss/components/BoardList";
import AddNewBoard from "../src/scss/components/NewBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Topbar from "./scss/components/topbar";
import { UserContextProvider } from "./scss/components/UserContext/UserContext";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <UserContextProvider>
          <div>
            <Topbar />
          </div>
          <div className="align__center display__flex  ">
            <div
              className=" align__center display__flex "
              style={{ margin: "10px" }}
            >
              <BoardList />
            </div>
            <div
              className="display__flex align__center  "
              style={{ margin: "10px" }}
            >
              <AddNewBoard />
            </div>
          </div>
        </UserContextProvider>
      </div>
    </DndProvider>
  );
}

export default App;
