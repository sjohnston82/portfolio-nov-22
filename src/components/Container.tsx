import React, { useState, useContext, useRef } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NameBanner from "./NameBanner";
import ContactContainer from "./ContactContainer";
import MainContentContainer from "./main-content/MainContentContainer";
import SidebarContainer from "./SidebarContainer";
import Skills from "../components/main-content/Skills";

import { ContainerContext } from "../context/ContainerContext";
import Landing from "./main-content/Landing";
import ProjectGrid from "./main-content/projects/ProjectGrid";

import JobTrackerImg from "../../images/job-tracker.png";
import QuarterMasterImg from "../../images/logocropped.png";
import YahtzeeImg from "../../images/clipart1003392.png";
import ProjectCardLg from "./main-content/projects/ProjectCardLg";
// import pageShowingProps from '../types/types'

const Container = () => {
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
  // const [pageShowing, setPageShowing] = useState<string>("landing");

  return (
    <>
      
      <main className="gradient-border">
        <div className="main-container grid h-full grid-cols-12 grid-rows-6 gap-1 bg-black ">
          <NameBanner />
          <ContactContainer />
          <MainContentContainer />
          <SidebarContainer />
        </div>
      </main>
    </>
  );
};

export default Container;
