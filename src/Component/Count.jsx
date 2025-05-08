import React from "react";
import CountUp from "react-countup";
import { animated, useSpring } from "@react-spring/web";

const Count = () => {
    const [hovered, setHovered] = React.useState(false);

  const style = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    boxShadow: hovered
      ? "0px 5px 15px rgba(0,0,0,0.3)"
      : "0px 0px 0px rgba(0,0,0,0)",
      color: hovered ? "#3E40AF" : "#1F2937",    
    config: { tension: 100, friction: 20 },
  });

  return (
    <div className="pb-16 hidden md:block">
      <div className="mx-32 lg:flex justify-between items-center mt-20">
        <animated.div
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="p-10 mr-8 bg-linear-to-b from-blue-200 to-white shadow-md rounded-lg flex flex-col items-center gap-3 cursor-pointer">
          <CountUp start={0} end={1000000} delay={0} duration={10}>
            {({ countUpRef }) => (
              <div className="text-4xl font-semibold">
                <span ref={countUpRef} />
                <span className="font-bold">+</span>
              </div>
            )}
          </CountUp>
          <p className="text-lg font-semibold ">Over 1M Daily Active User</p>
        </animated.div>
        <animated.div
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="p-10 mr-8 bg-linear-to-b from-green-200 to-white shadow-md rounded-lg flex flex-col items-center gap-3 cursor-pointer">
          <CountUp start={0} end={12000} delay={0} duration={10}>
            {({ countUpRef }) => (
              <div className="text-4xl font-semibold">
                <span ref={countUpRef} />
                <span className="font-bold">+</span>
              </div>
            )}
          </CountUp>
          <p className="text-lg font-semibold ">Over 12k open job positions</p>
        </animated.div>
        <animated.div
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="mr-8 p-10  bg-linear-to-b from-orange-200 to-white shadow-md rounded-lg flex flex-col items-center gap-3 cursor-pointer">
          <CountUp start={0} end={5000000} delay={0} duration={10}>
            {({ countUpRef }) => (
              <div className="text-4xl font-semibold">
                <span ref={countUpRef} />
                <span className="font-bold">+</span>
              </div>
            )}
          </CountUp>
          <p className="text-lg font-semibold ">Over 5M story shared</p>
        </animated.div>
      </div>
    </div>
  );
};

export default Count;
