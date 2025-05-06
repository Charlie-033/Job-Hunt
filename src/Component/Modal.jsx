import React from "react";
import { MdLibraryAddCheck } from "react-icons/md";

const Modal = ({ job, id }) => {
  console.log(id);
  // const id = useParams();
  // console.log(id)
  return (
    <dialog id={id} className="modal ">
      <div className="modal-box bg-linear-to-b from-violet-200 to-slate-100">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-neutral absolute right-1 top-1 text-sm">
            X
          </button>
        </form>
        <div className=" p-4 rounded-lg border-2 border-white flex flex-col justify-start bg-linear-to-b from-violet-200 to-slate-100">
          <div>
            <img
              src={job.bannerImage}
              alt={job.title}
              className="h-40 w-40 object-cover rounded"
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mt-2">{job.title}</h3>
            <p>
              <span className="text-sm text-gray-600 px-3 rounded-full py-1 border border-gray-800 font-semibold">
                Salary : {job.salary}
              </span>
            </p>
            <p>
              <span className="text-sm text-green-600 px-3 rounded-full py-1 border border-green-800 font-semibold">
                Location : {job.location}
              </span>
            </p>
            <p>
              <span className="text-sm text-blue-600 px-3 rounded-full py-1 border border-blue-800 font-semibold">
                Jobtype : {job.jobType}
              </span>
            </p>
            <p className="mt-2 font-medium text-slate-700">{job.description}</p>
          </div>
          <p className="italic pt-2 underline font-semibold">Required Skills</p>
          <ul className=" mt-2 text-sm space-y-2 pb-3">
            {job.requirements.map((req, index) => (
              <li className="flex items-center gap-3" key={index}>
                <MdLibraryAddCheck />
                <span>{req}</span>
              </li>
            ))}
          </ul>
          <a
            href="/" // <-- Replace with your actual application link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-blue-950 text-white rounded-full w-full">Apply Now</button>
          </a>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
