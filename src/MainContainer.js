import SingleProj from "./SingleProj";
import Contact from "./About.js";
import ProjectGrid from "./ProjectGrid.js";
import { useState } from "react";


function MainContainer({isPortfolio, setIsPortfolio, proj, setProj}) {

    return (
        isPortfolio === true 
        ? <ProjectGrid setIsPortfolio={setIsPortfolio} proj={proj} setProj={setProj}/>
        : <Contact />
    )
}

export default MainContainer
