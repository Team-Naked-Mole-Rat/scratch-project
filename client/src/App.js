import './styles/css/public_App.css'
import './styles/css/public_navbar.css'

import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.js'; 
import BackgroundImage from './components/pages/public/visual/BackgroundImage.js';


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <BackgroundImage/>
    </>

  );
}

export default App;