import './styles/css/public_navbar.css';
import './styles/css/public_App.css';
import './styles/css/public_signin.css';
import './styles/css/public_modal.css'
// import "tailwindcss/tailwind.css";
// import "css/styles.css'"

import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.js'; 
import BackgroundImage from './components/pages/public/visual/BackgroundImage.js';
import { ModalProvider } from './components/pages/public/visual/ModalContext.js';

const App = () => {

  return (
    <ModalProvider>

      <RouterProvider router={router} />

      <BackgroundImage/>

    </ModalProvider>

  );
}

export default App;