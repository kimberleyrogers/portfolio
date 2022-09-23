import './AppMobile.css';
import './AppDesktop.css';
import './AppBoth.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from 'react';
import Menu from "./Menu";
import About from './About';
import ProjectGrid from './ProjectGrid';
import { Header } from './Header';
import { Skills } from './Skills';

// to do
// make paragraph text on projects bigger for mobile
// resume?
// about me snappier
// in projects grid - the img box should be the same size for all - centre image
// same for buttons?




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