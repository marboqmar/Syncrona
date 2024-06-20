import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Patterns from "./scss/views/Patterns.tsx";
import Login from "./login/login.tsx";
import Register from "./login/register/register.tsx";
import RecoverPass from "../src/login/recover-pass.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Recover-password",
        element: <RecoverPass />,
      },
    ],
  },
]);
