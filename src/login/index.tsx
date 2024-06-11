import {useState} from 'react';
import { Button,Input, Checkbox, Radio, Image, Icon, Logo} from "../components/atoms";
import Task from '../components/molecules/task';
import "../scss/login.scss";
import { useTranslation } from "react-i18next";
const Login = () => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [checked,setChecked]=useState(false);
    const [selectedOption,setSelectedOption]=useState('este radiobox en concreto');
    const [task0,setTask0]=useState({title: '', positionId: 0, isFinished: false});
    const logIn = ()=>{
        console.log("me clickearon banda");
    };
    return (
        <div >
                    <div className="margin__center bg__login align__center ">
                                        <div>
                                                            <div>
                                                                <p className="login__input__tittle  livvic-regular">Username</p>
                                                            <Input            
                                                            placeholder='username' 
                                                            value={userName}
                                                            width='80%'
                                                            height='2rem'
                                                            inputLabel=''
                                                            name='username'
                                                            setValue={setUserName}
                                                            className="bg__input"
                                                        />
                                                            </div>
                                                            <div>
                                                            <p className="login__input__tittle">Password</p>
                                                            <Input            
                                                            placeholder='password' 
                                                            value={password}
                                                            width='80%'
                                                            height='2rem'
                                                            inputLabel=''
                                                            name='password'
                                                            setValue={setPassword}
                                                            type='password'
                                                            className="bg__input"
                                                        />
                                                            </div>
                                        </div>
                                            <div className="margin__center flex__column align__center ">
                                                    <Button text='Log in' type='primary' onClick={logIn} width={"9.68rem"} height={"3.43rem"} className="login__button  livvic-regular "/>
                                            </div>
                                        
        </div>
        
            
                    <div  className='margin__center  TermsAndConditions flex__row '>
                                            <Checkbox  
                                        setChecked={setChecked}
                                        text='Términos y Condiciones'
                                        checked={checked}
                                        name= 'cualquier nombre'
                                    />
                                    <Checkbox  
                                        setChecked={setChecked}
                                        text='Política de privacidad'
                                        checked={checked}
                                        name= 'cualquier nombre'
                                    />
                                    
                        </div>                      
                        <div className='margin__center '>
                        <button
                                        onClick={() => i18n.changeLanguage("en")}
                                        className="move__Y Topbar__Options"
                                        >
                                        English
                                        </button>
                                        <button
                                        onClick={() => i18n.changeLanguage("es")}
                                        className="move__Y Topbar__Options"
                                        >
                                        Spanish
                                        </button>
                        </div>
                        
            
        </div>
            

        
    )
}

export default Login