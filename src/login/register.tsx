import React, { useState } from 'react';
import { Button, Input } from '../components/atoms';
import '../scss/style.scss';
import '../scss/register.scss';
import '../scss/login.scss';

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors: string[] = [];

    if (formData.username.trim() === '') {
      errors.push('Username is required.');
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      errors.push('Invalid email format.');
    }

    if (formData.password.length < 8) {
      errors.push('Password must be at least 8 characters.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
      console.log('Registration data:', formData);
      setFormData({ username: '', email: '', password: '' });
    }
  };
  return (
    <div className="angled-gradient r">
      <div className="align__center flex margin__center justify__center">
        <h1 className="login__tittle livvic-regular">Syncrona</h1>
      </div>
      <div className="bg__login register--dimensions margin__center">
        <div className="">
          <form onSubmit={handleRegister}>
            <div>
              <p className="login__input__tittle  livvic-regular">Username</p>
              <Input
                placeholder="Enter your username man"
                value={formData.username}
                onChange={handleChange}
                name="username"
                width="80%"
                height="4.85rem"
                className="bg__input "
              />
            </div>
            <div>
              <p className="login__input__tittle  livvic-regular">Email</p>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                width="80%"
                height="4.85rem"
                className="bg__input"
              />
            </div>
            <div>
              <p className="login__input__tittle  livvic-regular">Password</p>
              <Input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                width="80%"
                height="4.85rem"
                className="bg__input"
              />
            </div>

            <div className="margin__center  align__center ">
              <Button
                text="Create Account"
                type="primary"
                onClick={handleRegister}
                width="80%"
                height="3.44rem"
                className="login__button  livvic-regular "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
