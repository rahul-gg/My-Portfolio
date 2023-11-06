import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Project = (props) => {

    const listElements= props.projectData.projectTags.map(item=>{
        return <li className="project-tag" key={item.id}>{item.value}</li>
    })

    return (
        <div className="project-div">
            <div className="left"><FontAwesomeIcon className='project-logo' icon={faCode} /></div>
            <div className="right">
                <h2 className="project-title">{props.projectData.projectTitle}</h2>
                <p className="project-type">{props.projectData.projectType}</p>
                <p className="project-desc">{props.projectData.projectDesc}</p>
                <ul className="project-tag-list">
                    {listElements}
                </ul>
                <div className="see-project">
                    <p className="btn-text"><a href={props.projectData.projectLink}>See Project</a></p>
                </div>
            </div>
        </div>
    )
}

export default Project;