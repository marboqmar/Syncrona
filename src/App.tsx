import './scss/style.scss'
import { Link } from 'react-router-dom'
import { Button } from './components/atoms'

const funcionDelClick= ()=>{
    console.log("me clickearon banda");
};

function App() {
    return (
        <>
            <h1>Home</h1>
            <Link to='/login'>Login</Link>
            <h1>Patterns</h1>
            <Link to='/Patterns'>Patterns</Link>
            <Button text='soy un botón' type='info' onClick={funcionDelClick} width={"180px"} height={"50px"}/>
        </>
  )
}

export default App
