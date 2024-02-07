// import { Container } from 'react-bootstrap';

const ProjectCard = ({project}) => {

    const image = require("../img/" + project.image);
    // const badges = project.technology.map(tech=> {
    //     return <div class="badge bg-secondary text-light rounded-2 p-2 me-1">{tech}</div>
    // })

    return (
    <>
        <article class="project_card h-100">
            <div className="d-flex flex-column gap-3">
                <img src={image} class="img-fluid rounded-3" alt="projects"/>
                {/* <div className='d-flex'>
                    {badges}
                </div>
                <h3>{project.title}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sit sequi laboriosam a nam culpa officia, laborum minima, praesentium corporis ipsa pariatur temporibus incidunt reiciendis placeat accusamus inventore ad nostrum.</p> */}
            </div> 
        </article>
    </>
    )
}

export default ProjectCard