import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({refrence}) => {
    const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["center end", "center center"],
  });
  return (
    <>
   
    <figure className="absolute left-0 stroke-dark">
      <svg width={"75"} height={"75"} viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="75" cy="50" r={"20"} className="stroke-primary stoke-1 fill-none" />
        <motion.circle
        style={{
            pathLength: scrollYProgress
        }}
        cx="75" cy="50" r={"20"} className="stroke-[5px] fill-light" />
        <circle cx="75" cy="50" r={"10"} className="animate-pulse stoke-1 fill-primary" />
      </svg>
    </figure>
    </>
  );
};

export default LiIcon;
