import React from "react";
import { RiFindReplaceLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

import { VscGitStashApply } from "react-icons/vsc";
import { FaCheckCircle } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="bg-base-200 px-3 md:px-8 lg:px-16 py-10">
      <h2 className="text-4xl text-center py-5 text-blue-950 font-bold">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card-body shadow-lg rounded-2xl flex flex-col items-center justify-center space-y-2">
          <RiFindReplaceLine className="w-15 h-15"/>
          <h3 className="text-xl font-semibold text-blue-900">Browse Listings</h3>
          <p className="text-md text-gray-600 text-center font-semibold">Search through variety job openings from different companies</p>
        </div>
        <div className="card-body shadow-lg rounded-2xl flex flex-col items-center justify-center space-y-2">
          <TbListDetails className="w-15 h-15"/>
          <h2 className="text-xl font-semibold text-blue-900">View Details</h2>
          <p className="text-md text-gray-600 text-center font-semibold">Read job enteria responsibilities, and qualifications</p>
        </div>
        <div className="card-body shadow-lg rounded-2xl flex flex-col items-center justify-center space-y-2">
          <VscGitStashApply className="w-15 h-15"/>
          <h2 className="text-xl font-semibold text-blue-900">Cheak Qualifications</h2>
          <p className="text-md text-gray-600 text-center font-semibold">Ensure your meet job requirements and qualifications</p>
        </div>
        <div className="card-body shadow-lg rounded-2xl flex flex-col items-center justify-center space-y-2">
          <FaCheckCircle className="w-15 h-15"/>
          <h2 className="text-xl font-semibold text-blue-900">Apply Online</h2>
          <p className="text-md text-gray-600 text-center font-semibold">Submit your application directs, through current platform online</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
