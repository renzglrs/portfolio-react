import ProjectCard from "./ProjectCard"
import projectsData from "../data/data"
import { Row, Col } from "react-bootstrap"


const ProjectList = () => {
    return (
    <>
        <Row>
                { 
                    projectsData.map(project => { 
                        return (
                            <Col lg={6} className="mb-4">
                                <ProjectCard key={project.id} project={project} /> 
                            </Col>
                        )
                    })
                }  
        </Row>
    </>

    )
}

export default ProjectList