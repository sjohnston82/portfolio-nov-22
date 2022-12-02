import React, { useContext } from "react";

import { Link } from "react-router-dom";

import ProjectCardSm from "./ProjectCardSm";

import { ContainerContext } from "../../../context/ContainerContext";

import JobTrackerImg from "../../../../images/job-tracker.png";
import QuarterMasterImg from "../../../../images/logocropped.png";
import YahtzeeImg from "../../../../images/clipart1003392.png";
import Transitions from "../../Transition";

// interface ProjectProps {
//   project: number | null;
//   setProject: Dispatch<SetStateAction<number>>;
//   setShowingGrid: Dispatch<SetStateAction<boolean>>;
// }

const ProjectGrid = () => {
  const context = useContext(ContainerContext);

  if (!context) return null;
  const { setProject, setShowingGrid } = context;

  return (
    <Transitions>
      <div className="m-auto flex h-full  items-stretch justify-center gap-7  bg-black">
        <Link to="/projects/project1">
          <ProjectCardSm
            title="JobTracker"
            tagline="JobTracker is a full-stack application that enables users to track and organize their job hunting info."
            techUsed={[
              "javascript",
              "react",
              "sass",
              "aws",
              "mongodb",
              "nodejs",
            ]}
            image={JobTrackerImg}
            projectNumber={1}
          />
        </Link>
        <Link to="/projects/project2">
          <ProjectCardSm
            title="Yahtzee!"
            tagline="Yahtzee! is a MERN stack application utilizing socketio for real-time games and chat with friends."
            techUsed={[
              "javascript",
              "react",
              "socketio",
              "mongodb",
              "css",
              "nodejs",
            ]}
            image={YahtzeeImg}
            projectNumber={2}
          />
        </Link>
        <Link to="/projects/project3">
          <ProjectCardSm
            title="QuarterMaster"
            tagline="QuarterMaster is a pantry inventory management application that uses a Vue front-end and a django back-end."
            techUsed={[
              "javascript",
              "mongodb",
              "vue",
              "django",
              "css",
              "python",
            ]}
            image={QuarterMasterImg}
            projectNumber={3}
          />
        </Link>
      </div>
    </Transitions>
  );
};

export default ProjectGrid;
