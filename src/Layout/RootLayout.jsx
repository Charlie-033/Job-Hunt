import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Footer from '../Component/Footer';
import Feature from '../Component/Feature';

const RootLayout = () => {
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
            <section></section>
            <section></section>
            <section></section>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
        </div>
    );
};

export default RootLayout;