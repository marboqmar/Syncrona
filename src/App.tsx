import "./scss/style.scss";
import { Link } from "react-router-dom";
import BoardList from "../src/scss/components/BoardList";
import AddNewBoard from "../src/scss/components/NewBoard";

function App() {
  return (
    <div>
      <BoardList />
      <AddNewBoard />
    </div>
  );
}

export default App;
