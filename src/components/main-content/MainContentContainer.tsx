import React, { useContext, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "./Landing";
import Skills from "./Skills";

import { ContainerContext } from "../../context/ContainerContext";
import ProjectViewer from "./projects/ProjectViewer";
import ProjectGrid from "./projects/ProjectGrid";
import ProjectCardLg from "./projects/ProjectCardLg";

import JobTrackerImg from "../../../images/job-tracker.png";
import QuarterMasterImg from "../../../images/logocropped.png";
import YahtzeeImg from "../../../images/clipart1003392.png";

const MainContentContainer = () => {
  const context = useContext(ContainerContext);

  // this is necessary to stop ts from throwing an error about null checks
  if (!context) return null;
  const { showingPage, setShowingPage, project } = context;

  const project1GitHubURL = useRef<string>(
    "https://github.com/sjohnston82/job-tracker"
  );
  const project1LiveURL = useRef<string>("https://job-tracker.xyz");
  const project2GitHubURL = useRef<string>(
    "https://github.com/mcbridz/pdx_yahtzee"
  );
  const project2LiveURL = useRef<string>(
    "https://pdxcg-yahtzee.herokuapp.com/"
  );
  const project3GitHubURL = useRef<string>(
    "https://github.com/sjohnston82/quartermaster/"
  );
  const project3LiveURL = useRef<string>(
    "https://quartermaster.pythonanywhere.com/"
  );

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
    <>
  
      <div className="main-content-container h-full w-full ">
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
        ></motion.div>
        <Routes>
          <Route path="/" element={<ProjectViewer />}>
            <Route index element={<Landing />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<ProjectGrid />} />
            <Route
              path="projects/project1"
              element={
                <ProjectCardLg
                  title="JobTracker"
                  tagline="lorem"
                  description="asdasdasdasd asdasda asdasdas asdasda asdasdas asdasd asdasd"
                  githubURL={project1GitHubURL.current}
                  projectURL={project1LiveURL.current}
                  image={JobTrackerImg}
                  project={project}
                />
              }
            />
            <Route
              path="projects/project2"
              element={
                <ProjectCardLg
                  title="Yahtzee!"
                  tagline="lorem"
                  description="asdasdasdasd asdasda asdasdas asdasda asdasdas asdasd asdasd"
                  githubURL={project2GitHubURL.current}
                  projectURL={project2LiveURL.current}
                  image={YahtzeeImg}
                  project={project}
                />
              }
            />
            <Route
              path="projects/project3"
              element={
                <ProjectCardLg
                  title="QuarterMaster"
                  tagline="lorem"
                  description="asdasdasdasd asdasda asdasdas asdasda asdasdas asdasd asdasd"
                  githubURL={project3GitHubURL.current}
                  projectURL={project3LiveURL.current}
                  image={QuarterMasterImg}
                  project={project}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default MainContentContainer;
