
import React from "react";
import { Link } from "react-router";    // core router Link
import { animated, useSpring } from "@react-spring/web";

function FeatureCompanies({ singleData }) {
  const [hovered, setHovered] = React.useState(false);

  const style = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    boxShadow: hovered
      ? "0px 5px 15px rgba(0,0,0,0.3)"
      : "0px 0px 0px rgba(0,0,0,0)",
      color: hovered ? "#5E40AF" : "#1F2937",    
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl cursor-pointer"
    >
      <Link to={`/industry/${singleData.id}`} className="flex flex-col justify-center items-center px-2 py-8 bg-white rounded-2xl cursor-pointer">
        <img
          src={singleData.logo}
          alt={singleData.name}
          className="h-24 w-24 object-cover bg-white"
        />
        <p className="text-2xl text-blue-950 font-semibold mt-3">
          {singleData.name}
        </p>
      </Link>
    </animated.div>
  );
}
export default FeatureCompanies;