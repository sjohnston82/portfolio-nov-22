import React, { useContext } from "react";

import { ContainerContext } from "../../../context/ContainerContext";
import TechCardMini from "./TechCardMini";

interface ProjectCardSmProps {
  title: string;
  tagline: string;
  techUsed: string[];
  image: any;
  projectNumber: number;
}

const ProjectCardSm = ({
  title,
  tagline,
  techUsed,
  image,
  projectNumber,
}: ProjectCardSmProps) => {
  const context = useContext(ContainerContext);

  if (!context) return null;
  const { setShowingGrid, setProject, project } = context;

  const selectJob = () => {
    setShowingGrid(false);
    setProject(projectNumber);
  };

  return (
    <div
      className="h-fit cursor-pointer rounded-3xl border border-white bg-black p-5 normal-case text-white hover:scale-[102%]"
      onClick={selectJob}
    >
      <img
        src={image}
        alt="project image"
        className="m-auto h-40 w-40 rounded-2xl p-3"
      />
      <p className="mb-3 text-center text-3xl">{title}</p>
      <p className="min-h-[60px] w-fit max-w-[250px] border-l-2 border-slate-900 pl-2 text-sm ">
        {tagline}
      </p>
      <p className="my-3 text-center text-lg italic">Tech Used:</p>
      <div className="m-auto flex w-60 flex-wrap justify-center gap-x-5 gap-y-3">
        {techUsed.map((item) => {
          return <TechCardMini image={item} />;
        })}
      </div>
    </div>
  );
};

export default ProjectCardSm;
