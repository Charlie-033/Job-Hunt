import React from "react";
import Hero from "../Component/Hero";
import { useLoaderData } from "react-router";
import Feature from "../Component/Feature";
import Resume from "../Component/Resume";
import Interview from "../Component/Interview";
import FeatureCompanies from "../Component/FeatureCompanies";
import DocumentTitle from "../Component/DocumentTitle";
import Count from "../Component/Count";
import { useRef } from "react";

const MainLayout = () => {
  const companiesRef = useRef(null);
  const handleScroll = () => {
    if (companiesRef.current) {
      companiesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const data = useLoaderData();
  // console.log(data)
  DocumentTitle("Home | Job Hunt");
  return (
    <div>
      <Hero handleScroll={handleScroll}></Hero>
      <section>
        <Feature></Feature>
      </section>
      <section
        
        className="bg-linear-to-b from-violet-200 to-slate-100 py-20"
      >
        <h3 className="text-4xl text-center text-blue-950 font-bold">
          Featured Companies
        </h3>
        <div ref={companiesRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 md:px-8 lg:px-32 gap-8 py-10 mx-auto">
          {data.map((singleData, index) => (
            <FeatureCompanies
              key={index}
              singleData={singleData}
            ></FeatureCompanies>
          ))}
        </div>
      </section>
      <section className="px-3 md:px-8 lg:px-20 gap-8 py-10 mx-auto bg-base-200">
        <Resume></Resume>
      </section>
      <section className="px-3 md:px-8 lg:px-20 gap-8 py-10 mx-auto bg-linear-to-l from-slate-200 to-amber-100 ">
        <Interview></Interview>
      </section>
      <section>
        <Count></Count>
      </section>
    </div>
  );
};

export default MainLayout;
