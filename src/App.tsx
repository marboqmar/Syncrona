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
}

export default App
