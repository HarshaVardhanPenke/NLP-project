// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import App from './components/App';
import ContactUs from './components/ContactUs';
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body/>
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
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
