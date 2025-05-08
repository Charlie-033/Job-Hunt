import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Resume = () => {
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
    <div className="lg:flex justify-between gap-10">
      <div className="lg:w-6/10">
        <animated.img
          style={animations}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          src="https://i.ibb.co.com/S7Pwypfq/resume-image.jpg"
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="lg:w-4/10 mt-10 space-y-5">
        <h2 className="text-4xl text-blue-950 font-bold">
          Build a good <br /> resume
        </h2>
        <p className="text-lg font-semibold text-gray-600">
          An efficient resume should promote your abilities and include tangible
          accomplishments that are relevant to the job you apply for. You should
          also prepare a cover letter that is concise and elaborates on how you
          can put your skills to use in the organization.
        </p>
        <animated.button
          style={props}
          onMouseEnter={() => setPressed(true)}
          onMouseLeave={() => setPressed(false)}
          className="btn bg-blue-950 text-white rounded-full"
        >
          Discover More
        </animated.button>
      </div>
    </div>
  );
};

export default Resume;
