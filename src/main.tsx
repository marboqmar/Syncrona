import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx'
import './index.css'
import './i18n/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
