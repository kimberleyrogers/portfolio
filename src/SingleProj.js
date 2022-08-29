import projects from './projectInfo.js'


function SingleProj({proj, setProj}) {

    return (
        <div id='singleProjContainer'>
            <div className="projMain">
                <h2>{projects[proj]['name']}</h2>
            </div>
            <div className="projBlurb"> 
                <p>{projects[proj]['blurb']}</p>
                {/* eslint-disable-next-line */}
                <a href={projects[proj]['githubUrl']} target="_blank"><button>View Code</button></a>
                {/* eslint-disable-next-line */}
                <a href={projects[proj]['liveSite']} target="_blank"><button>Visit Site</button></a>
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
