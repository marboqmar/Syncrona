import { useState } from 'react';
import { Button, Input } from '../components/atoms';
import '../scss/recover.scss';
import '../scss/register.scss';
import '../scss/style.scss';
import '../scss/login.scss';
import '../scss/colors.scss';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');

  const handleSendRecovery = () => {
    console.log('A link has been sent to your $(email)');
  };

  return (
    <div>
      <div className="angled-gradient ">
        <div className="justify__center display__flex">
          <h1 className="login__tittle livvic-regular">Recover Password</h1>
        </div>
        <div className="recover__dimensions margin__centerA  ">
          <div>
            <p className="login__input__tittle  livvic-regular">Email</p>
            <Input
              placeholder="Enter your email"
              value={email}
              width="440px"
              height="68px"
              inputLabel=""
              name="email"
              setValue={setEmail}
              className="bg__input"
            />
          </div>
          <div className="margin__center align__center">
            <Button
              text="Submit"
              type="primary"
              onClick={handleSendRecovery}
              width={'9.68rem'}
              height={'3.43rem'}
              className="login__button  livvic-regular"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
