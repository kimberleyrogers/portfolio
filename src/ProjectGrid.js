import SingleProj from "./SingleProj";
import projects from './projectInfo.js';



function ProjectGrid({setContainerContent, proj, setProj}) {
console.log(proj)
    // below, on click set state
    
    if (proj === 'main') {
        return (
            
                <section id="project-grid">
                    <div className="grid-square" onClick = {() => {setProj("0")}}>
                        <h2 className="title">PROJECT: {projects[0]['name']}</h2>
                        <p className="desc">{projects[0]['desc']}</p>
                        <p>{projects[0]['used']}</p>
                    </div>
                    <div className="grid-square" onClick = {() => {setProj("1")}}>
                        <h2 className="title">{projects[1]['name']}</h2>
                        <p>{projects[1]['used']}</p>
                    </div>
                    <div className="grid-square" onClick = {() => {setProj("2")}}>
                        <h2 className="title">{projects[2]['name']}</h2>
                        <p>{projects[2]['used']}</p>
                    </div>
                    <div className="grid-square" onClick = {() => {setProj("3")}}>
                        <h2 className="title">{projects[3]['name']}</h2>
                        <p>{projects[3]['used']}</p>
                    </div>
                </section>
            
        )
        } else {
            return (
                <SingleProj proj={proj} />
            )
        }

}

export default ProjectGrid
