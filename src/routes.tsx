import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Patterns from './scss/views/Patterns.tsx';
import Login from './login/login.tsx';
import Register from './login/register.tsx';
import RecoverPass from '../src/login/recover-pass.tsx';
import Boards from './boards/Boards.tsx';
import Landing from './landing-page/landing-page.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/Register',
        element: <Register />,
      },
      {
        path: '/Recover-password',
        element: <RecoverPass />,
      },
      {
        path: '/Boards',
        element: <Boards />,
      },
      {
        path: '/Landing',
        element: <Landing />,
      },
    ],
  );
