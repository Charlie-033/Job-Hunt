import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Footer from '../Component/Footer';
import Feature from '../Component/Feature';
import { Outlet, useLoaderData } from 'react-router';
import FeatureCompanies from '../Component/FeatureCompanies';
import Resume from '../Component/Resume';
import Interview from '../Component/Interview';

const RootLayout = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
         <header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <Hero></Hero>
         </header>
         <main>
            <section>
                <Feature></Feature>
            </section>
            <section className='bg-linear-to-b from-violet-200 to-slate-100 py-20'>
                <h3 className='text-4xl text-center text-blue-950 font-bold'>Featured Companies</h3>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 md:px-8 lg:px-32 gap-8 py-10 mx-auto'>
                {
                    data.map((singleData, index) => <FeatureCompanies key={index} singleData={singleData}></FeatureCompanies>)
                }
                </div>
            </section>
            <section className='px-3 md:px-8 lg:px-20 gap-8 py-10 mx-auto bg-base-200'>
                <Resume></Resume>
            </section>
            <section className='px-3 md:px-8 lg:px-20 gap-8 py-10 mx-auto bg-linear-to-l from-slate-200 to-amber-100 '>
                <Interview></Interview>
            </section>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
        </div>
    );
};

export default RootLayout;