import React from "react";
import CompanyJob from "../Pages/CompanyJob";
import { Link } from "react-router";

const FeatureCompanies = ({ singleData }) => {
  // console.log(singleData)
  return (
    <div className="flex flex-col justify-center items-center px-2 py-8 bg-white rounded-2xl">
      <Link to={`/industry/${singleData.id}`}>
      <img src={singleData.logo} alt="" className="h-25 w-25 object-cover bg-white"/>
      </Link>
      <p className="text-2xl text-blue-950 font-semibold mt-3">{singleData.name}</p>
    </div>
  );
};

export default FeatureCompanies;
