import React from "react";
import Modal from "./Modal";

const JobCard = ({ job }) => {
  return (
    <div className=" p-4 rounded-lg shadow-md lg:flex gap-5 border border-gray-300 bg-base-200 items-center">
      <div>
        <img
          src={job.bannerImage}
          alt={job.title}
          className="h-40 w-40 object-cover rounded"
        />
      </div>
      <div className="lg:flex flex-1 justify-between items-center">
        <div className="space-y-4">
        <h3 className="text-xl font-bold mt-2 text-blue-950">{job.title}</h3>
        <p><span className="text-sm text-gray-600 px-3 rounded-full py-1 border border-gray-800 font-semibold">Salary : {job.salary}</span> </p>
        <p><span className="text-sm text-green-600 px-3 rounded-full py-1 border border-green-800 font-semibold">Location : {job.location}</span> </p>
        <p><span className="text-sm text-blue-600 px-3 rounded-full py-1 border border-blue-800 font-semibold">Jobtype : {job.jobType}</span> </p>
        <p className="mt-2 font-medium text-slate-700">{job.description}</p>
        </div>
      <div>
        <button onClick={() => document.getElementById(`modal_${job.id}`).showModal()} className="btn btn-info rounded-full px-8">Details</button>
        <Modal job={job} id={`modal_${job.id}`}></Modal>
    </div>
      </div>
    </div>
  );
};

export default JobCard;
