import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import DocumentTitle from '../Component/DocumentTitle';

const AuthLayout = () => {
    DocumentTitle("Auth | Job Hunt")
    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;