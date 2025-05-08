import React from 'react';
import DocumentTitle from '../Component/DocumentTitle';

const Blogs = () => {
    DocumentTitle("Blogs | Job Hunt")
    return (
      <div className='w-11/12 mx-auto py-10 space-y-24'>
          <div className='lg:flex justify-between gap-5'>
            <div className='lg:w-5/12'>
                <img src="https://i.ibb.co.com/S7VTmCZv/presentation-1.jpg" alt="" className='rounded '/>
            </div>
            <div className='lg:w-7/12 space-y-3'>
                <h4 className='text-lg font-semibold'>Mastering the Art of Presentations: Engaging Teams with Confidence</h4>
                <p>In today’s professional landscape, the ability to deliver a compelling presentation is more than just a skill—it’s a career asset. Whether you’re pitching a new idea, presenting quarterly results, or leading a training session, how you communicate can make or break your message. The image above captures a powerful moment of a business professional engaging his team in a modern office setting. This setting reflects the importance of clarity, structure, and confidence in workplace communication.</p>
                <p>The speaker stands poised and confident, using hand gestures to emphasize key points. Behind him, a flip chart displays a simple diagram, likely used to support his narrative. The team, seated around a conference table, appears attentive and engaged—an indication of the presenter’s command over the room. The environment, with its clean lines, natural light, and professional attire, adds to the overall tone of focus and collaboration.</p>
                <p>What makes this scene effective is not just the speaker’s delivery but also the setup. The visual aid (the flip chart), open body language, and eye contact all contribute to an impactful presentation.</p>
            </div>
        </div>
          <div className='lg:flex justify-between gap-5'>
            <div className='lg:w-7/12 space-y-3'>
                <h4 className='text-lg font-semibold'>Empowering Communication: Leading with Confidence and Data</h4>
                <p>Effective communication is at the heart of every successful business, and this image is a great example of what empowered leadership looks like in a modern workplace. A confident speaker stands at the forefront, presenting key data to an engaged team. With visual aids on the board and printed reports in hand, she commands the room not just with information—but with clarity and poise.</p>
                <p>The scene reflects a collaborative environment. Each team member is actively listening, with laptops and notes in front of them, suggesting this is more than just a presentation—it’s a shared moment of strategy, planning, or innovation. Natural light floods the room, fostering openness and transparency, qualities that are vital in any team setting.</p>
                <p>What stands out most is the speaker’s approach: using a mix of body language, eye contact, and data visualization to make her point. She doesn’t just present charts—she tells a story with them. This is a valuable reminder that data alone isn’t persuasive; it’s how you communicate it that makes the difference.</p>
            </div>
            <div className='lg:w-5/12'>
                <img src="https://i.ibb.co.com/20W094qV/presentation-2.jpg" alt="" className='rounded '/>
            </div>
        </div>
      </div>
    );
};

export default Blogs;