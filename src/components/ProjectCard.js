import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const ProjectCard = ({project}) => {

    const image = require("../img/" + project.image);
    const badges = project.technology.map(tech=> {
        return <span class="badge bg-secondary p-2 me-1">{tech}</span>
    })

    return (
    <>
        <article class="project_card h-100">
        <Container className="d-flex flex-column gap-3">
            <img src={image} class="img-fluid rounded-3"/>
            <div>
                {badges}
            </div>
            <h3>{project.title}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sit sequi laboriosam a nam culpa officia, laborum minima, praesentium corporis ipsa pariatur temporibus incidunt reiciendis placeat accusamus inventore ad nostrum.</p>
        </Container>
            
        </article>
    </>
    )
}

export default ProjectCard