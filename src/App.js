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
// about me snappier

export function Home() {

  const [isOpen, setIsOpen] = useState(false);

  function colourChange() {
    console.log('change colour')
  }


  return (
    <div className="app">

      <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>

      
        {/* <p id="change-colour">less orange?<button onClick={() => colourChange()}>slider</button></p> */}
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