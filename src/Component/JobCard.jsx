import React from "react";
import Modal from "./Modal";

const JobCard = ({ job }) => {
  return (
    <div className=" p-4 rounded-lg shadow-md lg:flex gap-5 border border-gray-300 bg-base-200">
      <div>
        <img
          src={job.bannerImage}
          alt={job.title}
          className="h-40 w-40 object-cover rounded"
        />
      </div>
      <div className="lg:flex flex-1 justify-between items-center">
        <div>
        <h3 className="text-xl font-bold mt-2 text-blue-950">{job.title}</h3>
        <p className="text-gray-600">{job.location}</p>
        <p className="text-sm text-gray-700">{job.salary}</p>
        <p className="text-sm text-blue-600">{job.jobType}</p>
        <p className="mt-2">{job.description}</p>
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
