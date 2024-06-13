import React, { useState } from 'react';
import { Button, Input } from '../components/atoms';
import '../scss/recover.scss';
import '../scss/register.scss';
import '../scss/style.scss';
import '../scss/login.scss';
import '../scss/colors.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      alert('Please enter your email address.');
      return;
    }
    console.log('Sending password reset email to:', email);
    setEmail('');
  };

  return (
    <div className="angled-gradient">
      <div className="align__center flex margin__center justify__center">
        <h1>Forgot Password</h1>
      </div>
      <form onSubmit={handleForgotPassword}>
        <div className="recover__dimensions margin__centerA  ">
          <div>
            <p className="login__input__tittle livvic-regular">Enter your email</p>
            <p className="login__input__tittle  livvic-regular">You will receive a link to recover.</p>
          </div>
          <Input
            placeholder=""
            value={email}
            onChange={event => setEmail(event.target.value)}
            name=""
            width="80%"
            height="4.85rem"
            inputLabel=""
            className="bg__input"
          />
          <div className="margin__center  align__center ">
            <Button
              text=" Submit"
              type="primary"
              onClick={handleForgotPassword}
              width="9.8rem"
              height="4.85rem"
              className="login__button  livvic-regular  "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
