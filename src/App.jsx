import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/watches' element={<Watches/>}> */}
      </Routes>
    </>
  );
}

export default App;
