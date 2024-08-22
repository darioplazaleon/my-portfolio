import { useEffect } from "react";
import { motion } from "framer-motion";

const TechCarousel = ({ techs }) => {
  const duplicatedSlides = [...techs, ...techs, ...techs];

  return (
    <div className="relative w-full h-40 overflow-hidden  mx-auto">
      <motion.div
        className="flex gap-2 w-full h-full"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0" style={{ width: `${100 / techs.lenght}%` }}
          >
            <div className="flex flex-col items-center justify-center bg-white rounded-lg w-40 h-full">
              <img src={slide.image} alt={slide.name} className="w-20 h-full" />
              <p>{slide.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechCarousel;
