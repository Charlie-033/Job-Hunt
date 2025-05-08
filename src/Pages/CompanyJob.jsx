import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import JobCard from "../Component/JobCard";
import DocumentTitle from "../Component/DocumentTitle";

const CompanyJob = () => {
  const [company, setCompany] = useState([]);
  const { id } = useParams();
  // console.log(id);
  const data = useLoaderData();
  // console.log(data)
  useEffect(() => {
    const selectedCompany = data.find((singleData) => singleData.id == id);
    setCompany(selectedCompany);
  }, [data, id]);
  DocumentTitle("Company-Details | Job Hunt")

  return (
    <div className="py-5 w-11/12 mx-auto">
      <div className="lg:flex justify-start gap-10  py-10 px-5 shadow-2xl bg-linear-65 from-purple-200 to-neutral-200 rounded-xl">
        <div>
          <img
            src={company.logo}
            alt=""
            className="h-50 w-50 lg:h-70 lg:w-70 rounded-xl"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 italic">
            Company Name : {company.name}
          </h2>
          <p className="text-xl font-semibold text-neutral-700">
            Location : {company.location}
          </p>
          <p className="text-lg font-semibold text-neutral-700">
            Website :{" "}
            <a className="text-indigo-600 italic" href={company.website}>
              {company.website}
            </a>
          </p>
          <p className="text-lg font-semibold text-neutral-700">
            Industry : {company.industry}
          </p>
          <p className="font-bold italic">"{company.slogan}"</p>
        </div>
      </div>
      <h2 className="text-3xl py-10 text-center font-semibold text-blue-950 italic border-b-2">
        Available Job Category
      </h2>
      <div className="grid grid-cols-1 gap-8 py-8">
        {company.jobs?.map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default CompanyJob;
