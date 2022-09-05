import './App.css';
import { useState } from "react";
import MainContainer from './MainContainer';

function App() {

  const [isPortfolio, setIsPortfolio] = useState(true);
  const [proj, setProj] = useState('main')
  // keep state above but have options be portfolio/contact/proj1/proj2 etc.
  // pass as props into main section
  // main section page has functions for them all, or returns for them all based on state

  console.log(isPortfolio)
  return (
    <div className="app">

      <div className="nav-bar">
        <h2 onClick={() => [setIsPortfolio(true), setProj('main')]}>projects</h2>
        {/* eslint-disable-next-line */}
        <a href="images/Resume - Kimberley Rogers.pdf" target="_blank"><h2>resume</h2></a>
        {/* eslint-disable-next-line */}
        <a href="https://github.com/kimberleyrogers" target="_blank"><h2>github</h2></a>
        {/* eslint-disable-next-line */}
        <a href="https://www.linkedin.com/in/kimberley-rogers-melb/" target="_blank"><h2>linkedin</h2></a>  
        <h2 onClick={() => setIsPortfolio(false)}>about</h2>
      </div>
      <div className="header">
        <h1>kimberley rogers</h1>
        <a href="mailto:kimberleymrogers@gmail.com">e: kimberleymrogers@gmail.com</a>  
      </div>
      <MainContainer isPortfolio={isPortfolio} setIsPortfolio={setIsPortfolio} proj={proj} setProj={setProj}/>
    </div>
  );
}

export default App;
