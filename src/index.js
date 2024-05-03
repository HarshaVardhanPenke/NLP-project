// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import App from './components/App';
import ContactUs from './components/ContactUs';
import Signup from './components/Signup';
import Login from './components/Login';
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const AppLayout = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <Header />}
      <Outlet />
    </div>
  );
};


const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout isLoggedIn={isLoggedIn} />,

    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/aboutus",
        element:<AboutUs/>
      },
      {
        path:"/app",
        element:<App/>
      },
      {
        path:"/contactus",
        element:<ContactUs/>
      },
      {
        path:"/body",
        element:<Body/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
