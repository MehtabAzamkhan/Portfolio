import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Achievements from "./routes/Achievements";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <><Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      </>
  );
}

export default App;
