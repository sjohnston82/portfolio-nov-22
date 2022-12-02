import React, { useContext, Dispatch, SetStateAction } from "react";

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
      <button type="button" onClick={() => setShowingPage("skills")}>
        Skills
      </button>
      <button type="button" onClick={projectClickHandler}>
        Projects
      </button>
    </div>
  );
};

export default SidebarContainer;
