import projects from './projectInfo.js'

function SingleProj({proj, setProj}) {


    return (
        <div className="central-container">
            <h2>this is a single project {proj}</h2>
            <p>{projects[proj]['name']}</p>
            <p>{projects[proj]['blurb']}</p>
            <p>{projects[proj]['githubUrl']}</p>
            <p>{projects[proj]['liveSite']}</p>
            <p>{projects[proj]['image']}</p>
        </div>
    )
}

export default SingleProj
