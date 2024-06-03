import { Button } from "../../components/atoms";



const Header = () => {
    return (
        <div>

            <h1>Syncrona</h1>
            <Button text='Log In' type='info' width={"180px"} height={"50px"}/>
            <Button text='Register' type='info'  width={"180px"} height={"50px"}/>
            
        </div>
       
    );
};

export default Header