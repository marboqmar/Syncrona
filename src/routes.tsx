import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Login from './login';
import Patterns from './scss/views/Patterns.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/patterns',
        element: <Patterns />
    }
])