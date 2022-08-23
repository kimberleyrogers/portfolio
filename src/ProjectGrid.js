import SingleProj from "./SingleProj"


function ProjectGrid({setContainerContent, proj, setProj}) {
console.log(proj)
    // below, on click set state
    
    if (proj === 'main') {
        return (
            <div className="central-container">
                <h2>this section for project iframes</h2>
                <div className="project-grid">
                    <div className="single-proj" onClick = {() => {setProj("0")}}>0</div>
                    <div className="single-proj" onClick = {() => {setProj("1")}}>1</div>
                    <div className="single-proj" onClick = {() => {setProj("2")}}>2</div>
                    <div className="single-proj" onClick = {() => {setProj("3")}}>3</div>
                    <div className="single-proj" onClick = {() => {setProj("4")}}>4</div>
                    <div className="single-proj" onClick = {() => {setProj("5")}}>5</div>
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
