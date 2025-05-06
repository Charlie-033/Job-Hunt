import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import CompanyJob from "../Pages/CompanyJob";
import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        element: <MainLayout></MainLayout>
      },
      {
        path: '/industry/:id',
        loader: () => fetch("/data.json"),
        element: <CompanyJob></CompanyJob>
      },
      {
        path: "about",
        element: <p>About Page</p>,
      },
  ],
  }
  
]);
