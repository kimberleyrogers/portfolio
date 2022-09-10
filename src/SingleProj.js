import projects from './projectInfo.js'


function SingleProj({proj, setProj}) {

    return (
        <div id='singleProjContainer'>
            <div className="projAbout">
                <h2>{projects[proj]['name']}</h2>
                <p>is...</p>
                <p>{projects[proj]['blurb']}</p>
            </div>
            <div className="projTech"> 
            <p>tech stack</p>
                <p>{projects[proj]['used']}</p>
            </div>
            <div className='projButtons'>
                {/* eslint-disable-next-line */}
                <a href={projects[proj]['githubUrl']} target="_blank"><button>View Code</button></a>
                {/* eslint-disable-next-line */}
                <a href={projects[proj]['liveSite']} target="_blank"><button>Visit Site</button></a>

            </div>
            <div className="projImage">
                <img src={projects[proj]['image']} alt="thumbnail of project"/>
            </div>
        </div>
    )
}

export default SingleProj
