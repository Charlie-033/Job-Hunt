import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Footer from "../Component/Footer";
import Feature from "../Component/Feature";
import { Outlet } from "react-router";
import FeatureCompanies from "../Component/FeatureCompanies";
import Resume from "../Component/Resume";
import Interview from "../Component/Interview";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
