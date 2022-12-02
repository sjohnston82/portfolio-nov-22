import React, { useContext } from "react";
import { motion } from "framer-motion"; 

import { ContainerContext } from "../context/ContainerContext";

const NameBanner = ({}) => {
  const pageContext = useContext(ContainerContext);

  return (

      <motion.div className="main-banner-container m-5 w-full bg-black p-5 ">
        <p
          className="name w-full bg-black p-4 text-5xl text-white"
          onClick={() => pageContext?.setShowingPage("landing")}
        >
          Stephen Johnston
        </p>
      </motion.div>
    
  );
};

export default NameBanner;
