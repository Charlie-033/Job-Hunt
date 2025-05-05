import React from 'react';

const Interview = () => {
    return (
        <div className='lg:flex justify-between gap-5'>
            <div className='space-y-5'>
                <h2 className='text-4xl font-bold text-blue-950'>Perform during your <br />
                interview</h2>
                <div className='flex items-center gap-5'>
                    <img src="https://i.ibb.co.com/Gvrq3n3f/confidence-img.jpg" alt="" className='h-20 w-20 rounded-full p-3 bg-blue-100'/>
                    <div>
                        <h4 className='text-xl text-blue-950 font-semibold'>Confidence & Clarity</h4>
                        <p className='text-gray-600 font-medium'>Speak concisely, structure answers (e.g., STAR method), and maintain eye contact.</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <img src="https://i.ibb.co.com/6cS15hxT/adaptablility-img.jpg" alt="" className='h-20 w-20 rounded-full p-3 bg-blue-100'/>
                    <div>
                        <h4 className='text-xl text-blue-950 font-semibold'>Adaptability</h4>
                        <p className='text-gray-600 font-medium'>Adjust to the interviewer’s style (technical/behavioral) and pivot gracefully if stuck.</p>
                    </div>
                </div>
                <button className='btn bg-blue-950 text-white rounded-full hover:animate-pulse'>Discover More</button>
            </div>
            <div>
                <img src="https://i.ibb.co.com/dJ0DRcfs/job-interview.jpg" alt="" className='rounded-lg'/>
            </div>
        </div>
    );
};

export default Interview;