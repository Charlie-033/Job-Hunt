import React from 'react';

const JobdetailsCard = () => {
    return (
        <div className="grid grid-cols-1 gap-8 ">
        {company.jobs?.map((job) => ( 
          <div key={job.id} className="bg-white p-4 rounded-lg shadow-md flex justify-start items-center border">
            <div>
            <img
              src={job.bannerImage}
              alt={job.title}
              className="h-40 w-full object-cover rounded"
            />
            </div>
           <div>
           <h3 className="text-xl font-semibold mt-2">{job.title}</h3>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-sm text-gray-700">{job.salary}</p>
            <p className="text-sm text-blue-600">{job.jobType}</p>
            <p className="mt-2">{job.description}</p>
           </div>

            <ul className="list-disc list-inside mt-2 text-sm">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
        <button className='btn'>Details</button>
        <button className='btn'>Apply now</button>
      </div>
    );
};

export default JobdetailsCard;