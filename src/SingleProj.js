// merge this with project grid, to get this info on there

import { projects, comingSoon } from './projectInfo.js'



function SingleProj({ index, projects }) {

    return (
        <div className='singleProjContainer proj-square'>
            {/* this indents a bit - why? */}
            <h2 className="projTitle">{projects[index]['name']}</h2>
            {/* blurb and desc can be one thing in projinfo */}
            <h3 className="projSubTitle">{projects[index]['desc']}</h3>
            <p className="projTech">{projects[index]['used']}</p>
            <div className="projImage">
                <img src={projects[index]['image']} alt="thumbnail of project"/>
            </div>
            <p className="projDesc">{projects[index]['blurb']}</p>
            <div className='projButtons'>
                {/* eslint-disable-next-line */}
                <a href={projects[index]['githubUrl']} target="_blank"><button>View Code</button></a>
                {/* eslint-disable-next-line */}
                <a href={projects[index]['liveSite']} target="_blank"><button>Visit Site</button></a>
            </div>
        </div>
    )
}

export function ComingSoonProj({ index, projects }) {

    return (
        <div className='singleProjContainer proj-square'>
        {/* this indents a bit - why? */}
        <h2 className="projTitle">{projects[index]['name']}</h2>
        {/* blurb and desc can be one thing in projinfo */}
        <h3 className="projSubTitle">{projects[index]['desc']}</h3>
        <p className="projTech">{projects[index]['used']}</p>
        <div className="projImage">
            <img src={projects[index]['image']} alt="thumbnail of project"/>
        </div>
        <p className="projDesc">{projects[index]['blurb']}</p>
    </div>
    )
}

export default SingleProj
