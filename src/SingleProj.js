// merge this with project grid, to get this info on there

import projects from './projectInfo.js'



function SingleProj({ index }) {

    return (
        <div className='singleProjContainer grid-square'>
            <h2 className="title">{projects[index]['name']}</h2>
            <p className="desc">{projects[index]['desc']}</p>
            <p>{projects[index]['used']}</p>
            <div className="projImage">
                <img src={projects[index]['image']} alt="thumbnail of project"/>
            </div>
            <div className='projButtons'>
                {/* eslint-disable-next-line */}
                <a href={projects[index]['githubUrl']} target="_blank"><button>View Code</button></a>
                {/* eslint-disable-next-line */}
                <a href={projects[index]['liveSite']} target="_blank"><button>Visit Site</button></a>
            </div>
        </div>
    )
}

export default SingleProj
