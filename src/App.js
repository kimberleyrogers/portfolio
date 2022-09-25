import './AppMobile.css';
import './AppDesktop.css';
import './AppBoth.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Menu from "./Menu";
import About from './About';
import ProjectGrid from './ProjectGrid';
import { Header } from './Header';
import { Skills } from './Skills';

// to do
// resume?
// about me snappier
// in projects grid - the img box should be the same size for all - centre image
// same for buttons?
// less orange button - in header, like dark mode
// main buttons on desktop could do something CSS-y
// links in body could do the css adjust thing
// buttons in header, make them even sized, when they wrap, less margin on bottom on,




export function Home() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="app">

      <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </span> 
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
      <Header />
      <About />
      <ProjectGrid />
      <Skills />
      {/* <img src="https://ghchart.rshah.org/kimberleyrogers" alt="Kimberley's Github chart" /> */}
      <footer>Kimberley Rogers (2022)</footer>
    </div>
  );
}





export function App() {

  return (

    <div className="main-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectGrid />} />
          <Route path="/about" element ={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}