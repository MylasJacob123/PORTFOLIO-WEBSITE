import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/CoverPage";
import Assessments from "./components/Assessments";
import Projects from "./components/Projects";
import SkillMatrix from "./components/SkillMatrix";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components//Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assessments" element={<Assessments />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<SkillMatrix />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutMe />} />
      </Routes>
      <Footer  />
      </BrowserRouter>
    </div>
  );
}

export default App;
