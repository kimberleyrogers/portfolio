import projects from './projectInfo.js'


function SingleProj({proj, setProj}) {

    return (
        <div>
            <h2>{projects[proj]['name']}</h2>
            <p>{projects[proj]['blurb']}</p>
            <a href={projects[proj]['githubUrl']}><button>View Code</button></a>
            <a href={projects[proj]['liveSite']}><button>Visit Site</button></a>
            <img src={projects[proj]['image']} alt="thumbnail of project"/>
          
        </div>
    )
}

export default SingleProj
