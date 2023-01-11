import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import { Helmet } from 'react-helmet';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import { Successful } from './Successful';
// userssignin@1
const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
       <Helmet>
      <title>Chukwuma Victor</title>
      <meta name="description" content="Helmet application" />
      </Helmet>
      <Signup/>
    </div>,
  },
  {
    path: "/successfull",
    element: 
    <div className='successful'>
      <Successful/>
    </div>,
  },
]);
function App() {
  return (
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}


export default App;
