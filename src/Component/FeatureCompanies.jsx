import React from "react";

const FeatureCompanies = ({ singleData }) => {
  return (
    <div className="flex flex-col justify-center items-center px-2 py-8 bg-white rounded-2xl">
      <img src={singleData.logo} alt="" className="h-25 w-25 object-cover bg-white"/>
      <p className="text-2xl text-blue-950 font-semibold mt-3">{singleData.name}</p>
    </div>
  );
};

export default FeatureCompanies;
