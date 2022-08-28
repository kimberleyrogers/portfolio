import projects from './projectInfo.js'


function SingleProj({proj, setProj}) {

    return (
        <div id='singleProjContainer'>
            <div className="projMain">
                <h2>{projects[proj]['name']}</h2>
            </div>
            <div className="projBlurb"> 
                <p>{projects[proj]['blurb']}</p>
                <a href={projects[proj]['githubUrl']}><button>View Code</button></a>
                <a href={projects[proj]['liveSite']}><button>Visit Site</button></a>
            </div>
            <div className="projImages">
                <img src={projects[proj]['image']} alt="thumbnail of project"/>
                <img src={projects[proj]['image']} alt="thumbnail of project"/>
                <img src={projects[proj]['image']} alt="thumbnail of project"/>
            </div>
        </div>
    )
}

export default SingleProj
