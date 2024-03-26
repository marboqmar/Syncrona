import { createBrowserRouter } from 'react-router-dom';
import App from './src/App.tsx';
import Boards from './src/boards/Boards.tsx';
import Patterns from './src/scss/views/Patterns.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
        {
            path: '/src/boards/boards',
            element: <Boards />
        },
    {
        path: '/src/scss/views/Patterns',
        element: <Patterns />
    }
])