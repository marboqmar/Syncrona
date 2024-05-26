import "./scss/style.scss";
import { Link } from "react-router-dom";
import BoardList from "../src/scss/components/BoardList";
import AddNewBoard from "../src/scss/components/NewBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Topbar from "./scss/components/topbar";
import { UserContextProvider } from "./scss/components/UserContext/UserContext";
import { UserContext } from "./scss/components/UserContext/UserContext";
import { useContext } from "react";

function App() {
  const { updateTask } = useContext(UserContext);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <UserContextProvider>
          <div>
            <Topbar />
          </div>
          <div className="align__center display__flex  ">
            <div className=" align__center" style={{ margin: "10px" }}>
              <BoardList value={updateTask}/>
            </div>
            <div
              className="display__flex align__center  "
              style={{ margin: "10px" }}
            >
              <AddNewBoard value={updateTask}/>
            </div>
          </div>
        </UserContextProvider>
      </div>
    </DndProvider>
  );
}

export default App;
