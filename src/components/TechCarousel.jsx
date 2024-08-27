import { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const TechCarousel = ({ techs }) => {

  return (
    <div className="relative w-screen h-40 overflow-hidden  mx-auto">
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-ctp-crust before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-ctp-crust after:to-transparent after:filter after:blur-3"></div>
      <div>
        {techs.map((tech, index) => (
          <div key={index}>
            <img src={tech.image} alt={tech.name} className="w-20"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
