// import { Container } from 'react-bootstrap';

const ProjectCard = ({project}) => {

    const image = require("../img/projects/" + project.image);
    // const badges = project.technology.map(tech=> {
    //     return <div class="badge bg-secondary text-light rounded-2 p-2 me-1">{tech}</div>
    // })
    const badges = project.technology.join(", ");


    return (
    <>
        <article class="h-100 d-flex flex-column gap-3">
            <div className="project_card">
                <img src={image} class="project_img rounded-3" alt="projects"/>
                <div className="d-flex flex-column justify-content-center align-items-center gap-4 rounded-3 overlay">
                    <h2>{project.title}</h2>
                    <div className="d-flex gap-3">
                        <a href="https://gloriosorenz.github.io/my-portfolio/" type="button" class="btn btn-dark">
                            <i class="ri-link"></i>
                            Live
                        </a>
                        <a href="https://github.com/gloriosorenz/my-portfolio" type="button" class="btn btn-dark">
                            <i class="ri-github-fill"></i>
                            Github
                        </a>
                    </div>
                </div>
            </div> 
            <div>
                <h6>{project.title}</h6>
                <h6 className="text-secondary">{badges}</h6>
            </div>
        </article>
    </>
    )
}

export default ProjectCard