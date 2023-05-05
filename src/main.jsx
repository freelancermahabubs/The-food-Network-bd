import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SingUp from "./components/SingUp/SingUp";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Blog from "./components/Blog/Blog";
import ChefRecipes from "./components/ChefRecipes/ChefRecipes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Terms from "./components/Terms/Terms";
import About from "./components/About/About";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chefrecipes/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-food-network-bd-server-freelancermahabubs.vercel.app/allData/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
