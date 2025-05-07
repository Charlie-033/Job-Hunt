import React from "react";

const About = () => {
  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="lg:flex items-center justify-between">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co.com/nvJg3sS/about-us-banner.jpg"
            alt=""
            className=" object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center space-y-3">
          <h2 className="text-3xl lg:text-4xl text-blue-950 font-bold">
            JobHunt
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800">
            About Us
          </h3>
          <p className="text-gray-600 italic">
            "JobHunt connects talented professionals with top employers. Browse
            thousands of job listings, apply instantly, and get hired faster.
            Our platform matches skills to opportunities, ensuring career growth
            and success."
          </p>
        </div>
      </div>
      <div className="space-y-10 py-10">
        <div>
          <h3 className="text-2xl font-semibold">1. Our Mission</h3>
          <p className="text-gray-700 font-medium">
            At JobTrack, our mission is to empower job seekers and employers
            alike by building a smart, accessible, and effective job-search
            ecosystem. We believe that finding the right job or the right
            candidate shouldn’t be overwhelming — it should be seamless,
            efficient, and human-centered.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">2.What We Do</h3>
          <p className="text-gray-700 font-medium">
            We provide a powerful platform that connects job seekers with
            meaningful opportunities. Whether you're launching your career,
            transitioning into a new field, or looking for your next big
            challenge, JobTrack is designed to support your professional growth.
          </p>
            <p className="font-semibold">Key features include:</p>
          <ul className="space-y-3 list-disc list-inside">
            <li> A wide range of curated job listings across industries</li>
            <li> Advanced filters to tailor search results</li>
            <li> Personalized job alerts and recommendations</li>
            <li> Resume builder and easy application tools</li>
            <li> Real-time application tracking</li>
          </ul>
        </div>
        <div>
            <h3 className="text-2xl font-semibold">3. Who We Serve</h3>
            <p className="text-gray-700 font-medium"><span className="text-lg text-black">Job Seekers: </span>From entry-level candidates to seasoned professionals, JobTrack helps individuals discover jobs that match their skills, interests, and goals.</p>
            <p className="text-gray-700 font-medium"><span className="text-lg text-black">Employers & Recruiters: </span> We make it easy for companies to find the right talent through smart listing tools, employer branding options, and access to a growing pool of qualified applicants.</p>
            <p className="text-gray-700 font-medium"><span className="text-lg text-black">Recruiters: </span> Giving agencies the tools they need to connect talent with opportunity efficiently.</p>
        </div>
        <div>
            <h3 className="text-2xl font-semibold">4. Our Core Values</h3>
            <ul className="space-y-3 list-disc list-inside">
                <li> Transparency — Real jobs, real companies, real people</li>
                <li> Accessibility — Designed for users of all experience levels</li>
                <li> Integrity — Committed to ethical and fair recruitment practices</li>
                <li> Innovation — Always improving based on user feedback and job market trends</li>
            </ul>
        </div>
        <div>
            <h3 className="text-2xl font-semibold">5. Testimonials</h3>
            <p className="text-blue-600 italic">"I found my current remote developer role through JobTrack in just two weeks! The filtering tools are a lifesaver."</p>
            <h4 className="font-semibold">— Priya D., Front-End Developer</h4>
            <p className="text-blue-600 italic"> "As a recruiter, I’ve saved hours every week using JobTrack’s streamlined dashboard."</p>
            <h4 className="font-semibold">— Mark E., HR Consultant</h4>
            <p className="text-blue-600 italic">"Finally, a job platform that doesn’t feel overwhelming. Clean, fast, and actually helpful!"</p>
            <h4 className="font-semibold">— Tariq H., Digital Marketing Specialist</h4>
        </div>
        <div>
            <h3 className="text-2xl font-semibold">6. A Note from Our Founder</h3>
            <p className="text-green-600 italic font-medium">“JobTrack started with a simple idea — that job searching shouldn’t feel like a full-time job itself. We built this platform with care, using real feedback from people navigating the modern workforce. Whether you’re hiring or applying, we’re here to make your journey better.”</p>
            <h4 className="font-semibold">Henry K, Founder & CEO</h4>
        </div>
        <div>
            <h3 className="text-2xl font-semibold">7. Join Us on the Journey</h3>
            <p className="text-gray-800 font-medium">Whether you're searching for your first job, your dream role, or your next hire, JobTrack is here to help. We're continually evolving to meet the changing needs of the job market and our users.</p>
            <h4 className="font-semibold">Let us help you take the next step.</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
