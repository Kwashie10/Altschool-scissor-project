import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import ForgottenPassword from "./components/ForgottenPassword";
import UrlShortener from "./URL shortener/UrlShortener";
import QrCodes from "./URL shortener/QrCodes";
import Learnmore from "./components/Learnmore";
import GetTouch from "./components/GetTouch";
import WelcomeMessage from "./components/WelcomeMessage";




const router = createBrowserRouter([
  {
    path: "WelcomeMessage",
    element: <WelcomeMessage />,
  },
  {

    path: "/",
    element: <App />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "ForgottenPassword",
    element: <ForgottenPassword />,
  },


 

  {
    path: "UrlShortener",
    element: <UrlShortener />,
  },
  {
    path: "QrCodes",
    element: <QrCodes />,
  },
  {
    path: "Learnmore",
    element: <Learnmore />,
  },

  {
    path: "GetTouch",
    element: <GetTouch />,
  },
  
 
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
