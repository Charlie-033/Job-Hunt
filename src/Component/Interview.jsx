import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Interview = () => {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);

  const animations = useSpring({
    transform: hover ? "scale(0.9)" : "scale(1)",
    boxShadow: hover
      ? "0px 2px 5px rgba(0, 0, 0, 0.2)"
      : "0px 5px 15px rgba(0, 0, 0, 0)",
    config: { tension: 300, friction: 30 },
  });

  const props = useSpring({
    transform: pressed ? "scale(1.1)" : "scale(1)",
    boxShadow: pressed
      ? "0px 2px 5px rgba(0, 0, 0, 0.2)"
      : "0px 5px 15px rgba(0, 0, 0, 0)",
    config: { tension: 300, friction: 30 },
  });
  return (
    <div className="lg:flex justify-between gap-5">
      <div className="space-y-5">
        <h2 className="text-4xl font-bold text-blue-950">
          Perform during your <br />
          interview
        </h2>
        <div className="flex items-center gap-5">
          <img
            src="https://i.ibb.co.com/Gvrq3n3f/confidence-img.jpg"
            alt=""
            className="h-20 w-20 rounded-full p-3 bg-blue-100"
          />
          <div>
            <h4 className="text-xl text-blue-950 font-semibold">
              Confidence & Clarity
            </h4>
            <p className="text-gray-600 font-medium">
              Speak concisely, structure answers (e.g., STAR method), and
              maintain eye contact.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://i.ibb.co.com/6cS15hxT/adaptablility-img.jpg"
            alt=""
            className="h-20 w-20 rounded-full p-3 bg-blue-100"
          />
          <div>
            <h4 className="text-xl text-blue-950 font-semibold">
              Adaptability
            </h4>
            <p className="text-gray-600 font-medium">
              Adjust to the interviewer’s style (technical/behavioral) and pivot
              gracefully if stuck.
            </p>
          </div>
        </div>
        <animated.button
          style={props}
          onMouseEnter={() => setPressed(true)}
          onMouseLeave={() => setPressed(false)}
          className="btn bg-blue-950 text-white rounded-full "
        >
          Discover More
        </animated.button>
      </div>
      <div>
        <animated.img
        style={animations}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
          src="https://i.ibb.co.com/dJ0DRcfs/job-interview.jpg"
          alt=""
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Interview;
