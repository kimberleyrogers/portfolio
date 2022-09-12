import SingleProj from "./SingleProj";
import projects from './projectInfo.js';



function ProjectGrid() {

    
    
        return (
            
                <section id="project-section">
                    <h2 className="section-title">my projects</h2>
                    <div id="project-grid">
                        {projects.map((project, index) => {

                            return (
                                <SingleProj index={index} />
                            )
                        })}
                    </div>
                </section>

            
        )
      

}

export default ProjectGrid
