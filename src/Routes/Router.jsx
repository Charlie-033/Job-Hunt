import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    loader: () => fetch("/data.json"),
    children: [{}],
  },
  {
    path: "about",
    element: <p>About Page</p>,
  },
]);
