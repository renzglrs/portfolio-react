import ProjectList from "../components/projects/ProjectList";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ProjectPage = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <Container >
        <Row className="py-5">
          <Col>
            <Link to="/" className="btn-link mb-5 text-decoration-none text-dark fs-3"><i className="bi bi-arrow-left"></i> Back</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Heading title="Projects" />
            <ProjectList />
          </Col>
        </Row>
          
      </Container>
    </div>
  )
}

export default ProjectPage;