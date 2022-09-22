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
