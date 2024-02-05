import React, { useEffect } from 'react'

const ProjectCard = ({project}) => {

    const image = require("../img/" + project.image);

    return (
    <>
        <article class="project_card h-100">
            <img src={image} class="img-fluid"/>
        </article>
    </>
    )
}

export default ProjectCard