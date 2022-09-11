// merge this with project grid, to get this info on there

import projects from './projectInfo.js'



function SingleProj({ index }) {

    return (
        <div className='singleProjContainer grid-square'>
            {/* this indents a bit - why? */}
            <h2 className="title">{projects[index]['name']}
            {/* blurb and desc can be one thing in projinfo */}
            <span className="desc"> - {projects[index]['desc']}</span></h2>
            <p>{projects[index]['used']}</p>
            <div className="projImage">
                <img src={projects[index]['image']} alt="thumbnail of project"/>
            </div>
            <p className="desc">{projects[index]['blurb']}</p>
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
