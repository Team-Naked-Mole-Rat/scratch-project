import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NavBar from '../components/pages/public/navbar/NavBar.js';

import NotFoundPage from '../components/pages/error/NotFoundPage.js';
import ErrorPage from '../components/pages/error/ErrorPage.js';

import AboutUsPage from '../components/pages/public/AboutUsPage.js';
import ContactUsPage from '../components/pages/public/ContactUsPage.js';
import SignInSelectPage from '../components/pages/public/SignInSelectPage.js';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      { path: '*', element: <NotFoundPage /> },
      {
        index: true,
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
      {
        path: "signin",
        element: <SignInSelectPage />,
      },
    ],
  },
]);