import React, { MutableRefObject } from "react";

import Transitions from "../../Transition";

interface ProjectCardProps {
  title: string;
  tagline: string | null;
  description: string | null;
  githubURL: string;
  projectURL: string;
  image: any;
  project: number;
}

const ProjectCardLg = ({
  title,
  tagline,
  description,
  githubURL,
  projectURL,
  image,
  project,
}: ProjectCardProps) => {
  return (
    <Transitions>
      <div className="project-card grid grid-cols-3 grid-rows-4 gap-1  bg-[#212023]">
        <div className="img-container  col-start-1 col-end-2 row-start-1 row-end-4 mt-1  ">
          <img className="h-full max-w-full rounded-3xl p-5 " src={image} />
        </div>

        {project === 1 && (
          <div className="project-title col-start-2 col-end-4 bg-[#212023]">
            <p className="font-['Titillium Web'] mt-5 text-center text-6xl font-bold normal-case text-white">
              Job<span className="text-[#f9b636]">Tracker</span>
            </p>
          </div>
        )}

        <div className="project-description col-start-2 col-end-4 row-start-2 row-end-4 ">
          {description}
        </div>
        <div className="project-links col-start-1 col-end-4 flex justify-center gap-32">
          <a href={githubURL}>Github</a>
          <a href={projectURL}>See it Live</a>
        </div>
      </div>
    </Transitions>
  );
};

export default ProjectCardLg;
