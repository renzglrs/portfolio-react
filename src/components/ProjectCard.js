// import { Container } from 'react-bootstrap';
import { FaLaptop, FaGithub } from "react-icons/fa";


const ProjectCard = ({project}) => {
    const image = require("../assets/img/projects/" + project.image);
    const badges = project.technology.join(", ");


    return (
    <>
        <article class="h-100 d-flex flex-column gap-3">
            <div className="project_card">
                <img src={image} class="project_img rounded-3" alt="projects"/>
                <div className="d-flex flex-column justify-content-center align-items-center gap-4 rounded-3 overlay">
                    <h2>{project.title}</h2>
                    <div className="d-flex gap-3">
                        <a 
                        href={project.links.live} 
                        target="_blank"
                        type="button" 
                        class="btn btn-dark"
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-title="Open Live Preview."
                        >
                            <div className="p-2 d-flex align-items-center fs-1">
                                <FaLaptop />
                            </div>
                        </a>
                        <a 
                        href={project.links.github} 
                        target="_blank"
                        type="button" 
                        class="btn btn-dark"
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-title="Open Gitub Repository."
                        >
                            <div className="p-2 d-flex align-items-center fs-1">
                                <FaGithub />
                            </div>
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