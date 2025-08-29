import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full z-30 w-screen h-screen bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full z-20 w-screen h-screen bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full z-10 w-screen h-screen bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      />
    </>
  );
};

export default TransitionEffect;
