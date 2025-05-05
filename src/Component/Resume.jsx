import React from 'react';

const Resume = () => {
    return (
        <div className='lg:flex justify-between gap-10'>
        <div className='lg:w-6/10'>
            <img src="https://i.ibb.co.com/S7Pwypfq/resume-image.jpg" alt="" className='rounded-lg'/>
        </div>
        <div className='lg:w-4/10 mt-10 space-y-5'>
            <h2 className='text-4xl text-blue-950 font-bold'>Build a good <br /> resume</h2>
            <p className='text-lg font-semibold text-gray-600'>An efficient resume should promote your abilities and include tangible accomplishments that are relevant to the job you apply for. You should also prepare a cover letter that is concise and elaborates on how you can put your skills to use in the organization.</p>
            <button className='btn bg-blue-950 text-white rounded-full hover:animate-pulse'>Discover More</button>
        </div>
    </div>
    );
};

export default Resume;