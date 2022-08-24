import projects from './projectInfo.js'


function SingleProj({proj, setProj}) {

    // making a variable with the object
    let imageSrc = projects[proj]['image']


    return (
        <div>
            <h2>{projects[proj]['name']}</h2>
            <p>{projects[proj]['blurb']}</p>
            <a href="{projects[proj]['githubUrl']}"><button>View Code</button></a>
            <a href="{projects[proj]['liveSite']}"><button>Visit Site</button></a>
            {/* nothing displays */}
            <img src="{imageSrc}" alt="thumbnail of project"/>
            {/* printing file url from object */}
            <p>{projects[proj]['image']}</p>
            {/* printing variable - prints as expected */}
            <p>{imageSrc}</p>
            {/* displays perfectly */}
            <img src="assets/wordle_snip.png" alt="works"/>
        </div>
    )
}

export default SingleProj
