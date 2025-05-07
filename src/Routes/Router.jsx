import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import CompanyJob from "../Pages/CompanyJob";
import MainLayout from "../Layout/MainLayout";
import Loader from "../Component/Loader";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Pages/Profile";
import ProfileEdit from "../Pages/ProfileEdit";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Forgotpass from "../Pages/Forgotpass";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <MainLayout></MainLayout>
      },
      {
        path: '/industry/:id',
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRoute>
        <CompanyJob></CompanyJob>
        </PrivateRoute> 
      },
      {
        path: "about",
        element: <About></About>,
      },
      
  ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'edit-profile',
        element: <ProfileEdit></ProfileEdit>
      },
      {
        path: 'forgot-pass',
        element: <Forgotpass></Forgotpass>
      }
    ]
  },
  {
    path: "404/not-found",
    element: <Error></Error>
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);
