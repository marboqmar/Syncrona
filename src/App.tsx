import "./scss/style.scss";
import { Link } from "react-router-dom";
import BoardList from "../src/scss/components/BoardList";
import AddNewBoard from "../src/scss/components/NewBoard";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragDropContextProvider } from "react-dnd";



function App() {
  return (
    <DragDropContextProvider backend={HTML5Backend}>
       <div className="display_flex">
      <div >
        <BoardList />
      </div>
      <div className="display_flex">
        <AddNewBoard />
      </div>
    </div>
    </DragDropContextProvider>
   
   
  );
}

export default App;
