import React, { useContext, useRef } from "react";

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
    <div className="" 
    >
      {showingGrid ? (
        <ProjectGrid />
      ) : project === 1 ? (
        <ProjectCardLg
          title="JobTracker"
          tagline="lorem"
          description="asdasdasdasd asdasda asdasdas asdasda asdasdas asdasd asdasd"
          githubURL={project1GitHubURL.current}
          projectURL={project1LiveURL.current}
          image={JobTrackerImg}
          project={project}
        />
      ) : project === 2 ? (
        <ProjectCardLg
          title="Yahtzee!"
          tagline="lorem"
          description="asdasdasdasd asdasda asdasdas asdasda asdasdas asdasd asdasd"
          githubURL={project2GitHubURL.current}
          projectURL={project2LiveURL.current}
          image={YahtzeeImg}
          project={project}
        />
      ) : (
        <ProjectCardLg
          title="QuarterMaster"
          tagline="lorem"
          description="asdasdasdasd asdasda asdasdas asdasda asdasdas asdasd asdasd"
          githubURL={project3GitHubURL.current}
          projectURL={project3LiveURL.current}
          image={QuarterMasterImg}
          project={project}
        />
      )}
    </div>
  );
};

export default ProjectViewer;
