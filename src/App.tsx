<<<<<<< HEAD
import './scss/style.scss'
import { Link } from 'react-router-dom'
import BoardList from '../src/scss/components/BoardList'
import AddNewBoard from './scss/components/NewBoard'


function App() {
    return (
        <div className='display_flex'>
        <BoardList/>
        <AddNewBoard />

        </div>
    

        
  )
=======
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
>>>>>>> 303610b6157aad7bd8f34e20032fa8a239fe4b73
}

export default App;
