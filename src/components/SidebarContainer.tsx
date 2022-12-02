import React, { useContext, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { ContainerContext } from "../context/ContainerContext";

const SidebarContainer = () => {
  const pageContext = useContext(ContainerContext);

  if (!pageContext) return null;
  const { setShowingPage, setShowingGrid } = pageContext;

  const projectClickHandler = () => {
    setShowingPage("project");
    setShowingGrid(true);
  };

  return (
    <div className="sidebar-container m-5  bg-black p-5 text-lg text-white ">
      <Link to="/skills">
        <button type="button" onClick={() => setShowingPage("skills")}>
          Skills
        </button>
      </Link>
      <Link to="/projects">
        <button type="button" onClick={projectClickHandler}>
          Projects
        </button>
      </Link>
    </div>
  );
};

export default SidebarContainer;
