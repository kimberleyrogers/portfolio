import SingleProj from "./SingleProj";
import projects from './projectInfo.js';



function ProjectGrid({setContainerContent, proj, setProj}) {
console.log(proj)
    // below, on click set state
    
    if (proj === 'main') {
        return (
            <div className="central-container">
                <div className="project-grid">
                    <div className="single-proj" onClick = {() => {setProj("0")}}>
                        <p className="title">{projects[0]['name']}</p>
                        <p>{projects[0]['used']}</p>
                    </div>
                    <div className="single-proj" onClick = {() => {setProj("1")}}>
                        <p className="title">{projects[1]['name']}</p>
                        <p>{projects[1]['used']}</p>
                    </div>
                    <div className="single-proj" onClick = {() => {setProj("2")}}>
                        <p className="title">{projects[2]['name']}</p>
                        <p>{projects[2]['used']}</p>
                    </div>
                    <div className="single-proj" onClick = {() => {setProj("3")}}>
                        <p className="title">{projects[3]['name']}</p>
                        <p>{projects[3]['used']}</p>
                    </div>
                    {/* <div className="single-proj" onClick = {() => {setProj("4")}}>
                        <p className="title">{projects[4]['name']}</p>
                        <p>{projects[4]['used']}</p>
                    </div>
                    <div className="single-proj" onClick = {() => {setProj("5")}}>
                        <p className="title">{projects[5]['name']}</p>
                        <p>{projects[5]['used']}</p>
                    </div> */}
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
