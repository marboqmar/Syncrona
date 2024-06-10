import {useState} from 'react';
import { Button,Input, Checkbox, Radio, Image, Icon, Logo} from "../components/atoms";
import Task from '../components/molecules/task';
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
        <>
        <Logo logoTheme='OrangeTheme'
        width='24px'/>
        <Image
        src='https://cdn.pixabay.com/photo/2014/02/24/21/39/pepperoni-273982_1280.jpg'
        alt='Un chile emo siendo rebanado por una cuchilla, circa 189172819'
        width='327 px'
        ></Image>
            <h1>Login</h1>
            <Input            
                placeholder='username' 
                value={userName}
                width='440px'
                height='68px'
                inputLabel='Username'
                name='username'
                setValue={setUserName}
            />
            <Input            
                placeholder='password' 
                value={password}
                width='440px'
                height='68px'
                inputLabel='Password'
                name='password'
                setValue={setPassword}
                type='password'
            />
            <Button text='Log in' type='primary' onClick={logIn} width={"155px"} height={"55px"}/>
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
            height= '20px'
            fill= 'black'
            stroke= '2px'
            strokeWidth= '4px'
            />
            <Icon
            iconName='Clock'
            iconType='settings'
            height= '20px'
            fill= 'black'
            stroke= '2px'
            strokeWidth= '4px'
            />
            <Task 
            name='task-0'
            data={task0}
            setData={setTask0}/>

        </>
    )
}

export default Login