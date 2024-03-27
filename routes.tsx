import { createBrowserRouter } from 'react-router-dom';
import App from './src/App.tsx';
import Patterns from './src/scss/views/Patterns.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/Patterns',
        element: <Patterns />
    }
])