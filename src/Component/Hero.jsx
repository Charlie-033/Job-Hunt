import React from "react";
import { FcSearch } from "react-icons/fc";


const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between bg-linear-to-r from-blue-300 to-blue-100   px-3 md:px-8 lg:px-16 py-5">
      <div className="md:ml-6 lg:ml-16 space-y-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-blue-950">
          Chill Job Hunt,
          <br /> Hot Opportunities
        </h1>
        <p className="text-lg font-semibold text-gray-600">
          Explore job listings across multiple companies effortlessly. With
          Taxy, your next big career move is just a click away—smart, speedy,
          and personalized. Start your journey today!
        </p>
        <div className="lg:flex gap-24">
          <button className="btn bg-blue-900 text-white rounded-full">
            Get Started
          </button>
          <div className="join rounded full">
            <div>
              <label className="input border-none join-item rounded-full">
                <input type="email" placeholder="Find Your Job...." required className="text-blue-900 font-semibold border-none"/>
              </label>
            </div>
            <button className="btn bg-green-700 text-white join-item rounded-full ml-3">Find Job</button>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://i.ibb.co.com/sv2x3N6Z/Job-hero-image.jpg"
          alt=""
          className="p-5 bg-white rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
{
  /*  */
}
