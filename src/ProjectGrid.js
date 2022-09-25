import SingleProj, { ComingSoonProj } from "./SingleProj";
import { projects, comingSoon } from './projectInfo.js';



function ProjectGrid() {

    
    
        return (
            
                <section id="project-section">
                    <h2 className="section-title">projects</h2>
                    <div id="project-grid">
                        {projects.map((project, index) => {

                            return (
                                <SingleProj index={index} projects={projects}/>
                            )
                        })}
                        <div className='proj-square'>
                        <h2 className="projTitle" >Future Projects</h2>
                        <ul className="projDesc">
                            <li>an interactive dashboard with AFL player stats <br></br> (Python | React.js)</li>
                            <li>a portfolio for a creative in the TV industry <br></br> (React.js)</li>
                            {/* eslint-disable-next-line */}
                            <li>an interactive page allowing you to follow the relationships, connections and rumours of your favourite celebrities. If <a href="https://www.laineygossip.com/" target="_blank">Lainey Gossip</a> had an API, I'd be there already <br></br>(React.js)</li>
                        </ul>
                        </div>
                        {/* {comingSoon.map((soon, index) => {

                            return (
                                <ComingSoonProj index={index} projects={comingSoon}/>
                            )
                        })} */}

                    </div>
                </section>

            
        )
      

}

export default ProjectGrid
