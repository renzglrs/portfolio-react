import ProjectCard from "./ProjectCard"
import projectsData from "../data/projectsData"
import { Row, Col } from "react-bootstrap"


const ProjectList = () => {
    return (
    <>
        <Row>
                { 
                    projectsData.map(project => { 
                        return (
                            <Col lg={6} className="mb-4">
                                <ProjectCard project={project} /> 
                            </Col>
                        )
                    })
                }  
        </Row>
    </>

    )
}

export default ProjectList