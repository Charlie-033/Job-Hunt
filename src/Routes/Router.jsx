import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <RootLayout></RootLayout>
            }
        ]
    }
])