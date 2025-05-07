import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import DocumentTitle from '../Component/DocumentTitle';

const Error = () => {
    DocumentTitle("Server error | Job Hunt")
    return (
        <div>
            <img src="https://i.ibb.co.com/1JGwSsNm/error-404-not-found.jpg" alt="" className='w-screen h-[85vh] object-cover'/>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold italic text-center mb-3 text-gray-600'>Page Not Found !</h2>
            <Link className='btn btn-primary flex justify-center w-1/8 mx-auto' to="/">Go Back Home</Link>
        </div>
    );
};

export default Error;