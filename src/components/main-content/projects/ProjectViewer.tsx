import React, { useContext, useRef } from "react";

import { Outlet } from "react-router-dom";

import ProjectCardLg from "./ProjectCardLg";
import ProjectGrid from "./ProjectGrid";

import { ContainerContext } from "../../../context/ContainerContext";

import JobTrackerImg from "../../../../images/job-tracker.png";
import QuarterMasterImg from "../../../../images/logocropped.png";
import YahtzeeImg from "../../../../images/clipart1003392.png";

const ProjectViewer = () => {
  const context = useContext(ContainerContext);

  if (!context) return null;
  const { showingGrid, project } = context;

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
  return (
    <div className="">
      
      <Outlet />
    </div>
  );
};

export default ProjectViewer;
