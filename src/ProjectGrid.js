import SingleProj from "./SingleProj";
import projects from './projectInfo.js';


function ProjectGrid({setContainerContent, proj, setProj}) {
console.log(proj)
    // below, on click set state
    
    if (proj === 'main') {
        return (
            <div className="central-container">
                <div className="project-grid">
                    <div className="single-proj" onClick = {() => {setProj("0")}}>{projects[0]['name']}</div>
                    <div className="single-proj" onClick = {() => {setProj("1")}}>{projects[1]['name']}</div>
                    <div className="single-proj" onClick = {() => {setProj("2")}}>{projects[2]['name']}</div>
                    <div className="single-proj" onClick = {() => {setProj("3")}}>{projects[3]['name']}</div>
                    <div className="single-proj" onClick = {() => {setProj("4")}}>{projects[0]['name']}</div>
                    <div className="single-proj" onClick = {() => {setProj("5")}}>{projects[0]['name']}</div>
                </div>
            </div>
        )
        } else {
            return (
                <SingleProj proj={proj} />
            )
        }

}

export default ProjectGrid
