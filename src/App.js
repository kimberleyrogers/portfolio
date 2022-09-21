import './AppMobile.css';
import './AppDesktop.css';
import './AppBoth.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from 'react';
import MainContainer from './MainContainer';
import Menu from "./Menu";
import About from './About';
import ProjectGrid from './ProjectGrid';
import { Header } from './Header';
import { Skills } from './Skills';




export function Home() {

  const [isOpen, setIsOpen] = useState(false);

  // const [isPortfolio, setIsPortfolio] = useState(true);
  // const [proj, setProj] = useState('main')


  return (
    <div className="app">

    <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
      menu
    </span>
      
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
      <Header />
      <About />
      <Skills />
      {/* <MainContainer isPortfolio={isPortfolio} setIsPortfolio={setIsPortfolio} proj={proj} setProj={setProj}/> */}
      <ProjectGrid />
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