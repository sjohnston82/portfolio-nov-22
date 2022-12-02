import { useState, useContext } from "react";

import Container from "./components/Container";

import { ContainerContextProvider } from "./context/ContainerContext";

function App() {
  return (
    <>
      <div className="relative z-0 h-screen bg-black p-16">
        <div className="border-cover absolute  top-0 left-0 bg-black "></div>
        <ContainerContextProvider>
          <Container />
        </ContainerContextProvider>
      </div>
    </>
  );
}

export default App;
