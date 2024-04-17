import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import NavBar from "../components/navbar/NavBar.js";

import NotFound from "../pages/NotFound/NotFound.js";
import Error from "../pages/NotFound/Error.js";

import About from "../pages/About/About.js";
import Contact from "../pages/Contact/Contact.js";

import Register from "../pages/Login/Register.js";

import Plants from "../pages/Plants/Plants.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <Error />,
    children: [
      { path: "*", element: <NotFound /> },
      {
        index: true,
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // {
      //   path: "signin",
      //   element: <RegisterModal />,
      // },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "plants",
        element: <Plants />,
      },
    ],
  },
]);
