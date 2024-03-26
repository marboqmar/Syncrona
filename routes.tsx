import { createBrowserRouter } from 'react-router-dom';
import App from './src/App.tsx';
import Boards from './src/boards/boards.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
        {
            path: '/src/boards/boards',
            element: <Boards />
        }
])