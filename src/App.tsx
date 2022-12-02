import { useState } from "react";

import Container from "./components/Container";


function App() {

  return (
    <>
      <div className="relative z-0 h-screen bg-black p-16">
        <div className="border-cover absolute  top-0 left-0 bg-black "></div>
        <Container  />
      </div>
    </>
  );
}

export default App;
