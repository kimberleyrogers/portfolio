import './App.css';
import ProjectGrid from './ProjectGrid';
import Contact from './Contact';
import { useState } from "react";

function App() {

  const [containerContent, setContainerContent] = useState('portfolio');
  // keep state above but have options be portfolio/contact/proj1/proj2 etc.
  // pass as props into main section
  // main section page has functions for them all, or returns for them all based on state


  return (
    <div className="app">

      <div className="nav-bar">
        <a href="https://github.com/kimberleyrogers"><h2>github</h2></a>
        <a href="https://www.linkedin.com/in/kimberley-rogers-melb/"><h2>linkedin</h2></a>
        <a href="hello"><h2>resume</h2></a>
        {/* make the internal links have 'link mouse' on hover to match the above */}
        <h2 onClick={() => setContainerContent('portfolio')}>projects</h2>
        <h2 onClick={() => setContainerContent('contact')} id="contact">contact me</h2>
      </div>
      <div className="header">
        <h1>site name</h1>
      </div>
      {containerContent === "portfolio" ? <ProjectGrid /> : <Contact />}
    </div>
  );
}

export default App;
