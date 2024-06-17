import { useState } from 'react';
import { Button, Input, Checkbox, Radio, Image, Icon, Logo } from '../components/atoms';
import Task from '../components/molecules/task';
import '../scss/login.scss';
import '../scss/style.scss';
import '../scss/style.scss';
import { useTranslation } from 'react-i18next';
import Boards from '../boards/Boards';
import { Link } from 'react-router-dom';

const Login = () => {
  const { t, i18n } = useTranslation(['common', 'list']);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('este radiobox en concreto');
  const [task0, setTask0] = useState({
    title: '',
    positionId: 0,
    isFinished: false,
  });
  const logIn = () => {
    console.log('me clickearon banda');
  };
  return (
    <div>
      <div className="margin__center bg__login align__center ">
        <div>
          <div>
            <p className="login__input__tittle  livvic-regular">{t('common:Username')}</p>
            <Input
              placeholder={t('common:Username')}
              value={userName}
              width="80%"
              height="2rem"
              inputLabel=""
              name="username"
              setValue={setUserName}
              className="bg__input"
            />
          </div>
          <div>
            <p className="login__input__tittle">{t('common:Password')}</p>
            <Input
              placeholder={t('common:Password')}
              value={password}
              width="80%"
              height="2rem"
              inputLabel=""
              name="password"
              setValue={setPassword}
              type="password"
              className="bg__input"
            />
          </div>
        </div>
        <div className="margin__center flex__column align__center ">
          <Link to="/Boards">
            <Button
              text={t('Log in')}
              type="primary"
              onClick={logIn}
              width={'9.68rem'}
              height={'3.43rem'}
              className="login__button  livvic-regular "
            />
          </Link>
        </div>
      </div>
      <div className="justify__center">
        <div className="margin__center  TermsAndConditions flex__row ">
          <Checkbox
            setChecked={setChecked}
            text={t('Terms and conditions')}
            checked={checked}
            name="cualquier nombre"
          />
          <Checkbox setChecked={setChecked} text={t('Privacy policy')} checked={checked} name="cualquier nombre" />
        </div>
        <div className="margin__center TermsAndConditions ">
          <div>
            <button onClick={() => i18n.changeLanguage('en')} className="login__button--translation  livvic-regular ">
              English
            </button>
            <button onClick={() => i18n.changeLanguage('es')} className="login__button--translation  livvic-regular ">
              Spanish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
