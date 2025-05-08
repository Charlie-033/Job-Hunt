import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useSpring, animated } from '@react-spring/web';


const Hero = ({handleScroll}) => {
  const [current, setCurrent] = useState(0);
  const slides = [
    "https://i.ibb.co.com/sv2x3N6Z/Job-hero-image.jpg",
    "https://i.ibb.co.com/S7VTmCZv/presentation-1.jpg",
    "https://i.ibb.co.com/20W094qV/presentation-2.jpg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [slides.length])

  const [pressed, setPressed] = useState(false);

  const props = useSpring({
    transform: pressed ? 'scale(0.95)' : 'scale(1)',
    boxShadow: pressed
      ? '0px 2px 5px rgba(0, 0, 0, 0.2)'
      : '0px 5px 15px rgba(0, 0, 0, 0.3)',
    config: { tension: 300, friction: 30 },
  });


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
          <animated.button
          style={{
            ...props,
            background: '#172554',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          onClick={handleScroll} className="btn bg-blue-900 text-white rounded-full">
            Get Started
          </animated.button>
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
      <div className="overflow-hidden w-full flex justify-center items-center">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0 flex justify-center">
            <img
              src={src}
              alt=""
              className="p-4 bg-white rounded-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Hero;
{
  /*  */
}
