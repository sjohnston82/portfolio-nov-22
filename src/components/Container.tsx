import React, { useState, useContext } from "react";

import NameBanner from "./NameBanner";
import ContactContainer from "./ContactContainer";
import MainContentContainer from "./main-content/MainContentContainer";
import SidebarContainer from "./SidebarContainer";

import {ContainerContextProvider} from "../context/ContainerContext"
// import pageShowingProps from '../types/types'

const Container = () => {

  

  // const [pageShowing, setPageShowing] = useState<string>("landing");

  return (
    <ContainerContextProvider>
      <main className="gradient-border">
        <div className="main-container grid h-full grid-cols-12 grid-rows-6 gap-1 bg-black ">
          
          <NameBanner  />
          <ContactContainer />
          <MainContentContainer />
          <SidebarContainer />
        </div>
      </main>
    </ContainerContextProvider>
  );
};

export default Container;
