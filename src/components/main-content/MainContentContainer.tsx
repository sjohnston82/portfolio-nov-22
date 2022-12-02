import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "./Landing";
import Skills from "./Skills";

import { ContainerContext } from "../../context/ContainerContext";
import ProjectViewer from "./projects/ProjectViewer";

const MainContentContainer = () => {
  const context = useContext(ContainerContext);

  // this is necessary to stop ts from throwing an error about null checks
  if (!context) return null;
  const { showingPage, setShowingPage } = context;

  const variants = {
    enter: {
      x: -1000,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -1000,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="main-content-container m-5  bg-black p-5 text-white"
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        {showingPage === "skills" || "" ? (
          <Skills />
        ) : showingPage === "project" ? (
          <ProjectViewer />
        ) : showingPage === "skills" ? (
          <Skills />
        ) : (
          <Landing />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MainContentContainer;
