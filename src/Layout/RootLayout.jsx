import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";
import DocumentTitle from "../Component/DocumentTitle";
import ScrollTop from "../Component/ScrollTop";

const RootLayout = () => {
  DocumentTitle("Home | Job Hunt")
  return (
    <>
    <ScrollTop/>
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
    </>
  );
};

export default RootLayout;
