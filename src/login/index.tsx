import {useState} from 'react';
import { Button,Input, Checkbox, Radio, Image, Icon, Logo} from "../components/atoms";
import Task from '../components/molecules/task';
import "../scss/login.scss"
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
        <div className="margin__center ">
               
       
            <Input            
                placeholder='username' 
                value={userName}
                width='80%'
                height='2rem'
                inputLabel='Username'
                name='username'
                setValue={setUserName}
            />
            <Input            
                placeholder='password' 
                value={password}
                width='80%'
                height='2rem'
                inputLabel='Password'
                name='password'
                setValue={setPassword}
                type='password'
            />
            <Button text='Log in' type='primary' onClick={logIn} width={"9.68rem"} height={"3.43rem"}/>
            <p>tu user name: {userName}</p>
            <p>tu contraseña: {password}</p>
            <Checkbox  
                setChecked={setChecked}
                text='Acepto los términos, condiciones y la política de Privacidad de Syncrona'
                checked={checked}
                name= 'cualquier nombre'
            />
            <Radio 
                value='este radiobox en concreto'
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                text='ayura'
                groupName='Miaw'
            />
            <Radio 
                value='este otro radiobox en concreto'
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                text='pollo'
                groupName='Miaw'
            />
            <Icon
            iconName='Home'
            iconType='navigation'
            height= '1.25rem'
            fill= 'black'
            stroke= '0.13rem'
            strokeWidth= '0.25rem'
            />
            <Icon
            iconName='Clock'
            iconType='settings'
            height= '1.25rem'
            fill= 'black'
            stroke= '0.13rem'
            strokeWidth= '0.25rem'
            />
            <Task 
            name='task-0'
            data={task0}
            setData={setTask0}/>
        </div>
            

        
    )
}

export default Login