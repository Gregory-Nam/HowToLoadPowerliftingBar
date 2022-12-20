import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HelperMod from './HelperMod';
import CompMod from './CompMod';

const router = createBrowserRouter([
  {
    path:"/",
    element:
        <>
        <button className='MenuButton'>
          <a href="/CompMod">
            Comp mode
          </a>
        </button>
        <button className='MenuButton'>
          <a href="/HelperMod">
            Helper mode
          </a>
        </button></>

  }, 
  {
    path:"/HelperMod",
    element:<HelperMod/>
  },
  {
    path:"/CompMod",
    element:<CompMod/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <div className='App'>
      <h1>How to load your powerlifting bar ?</h1>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

