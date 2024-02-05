import { Container } from "react-bootstrap";
import ProjectList from "../components/ProjectList";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <Container >
          <div className="vh-100 pt-5">
            <div className="mb-5">
              <Link to="/" className="btn-link mb-5 text-decoration-none text-dark fs-3"><i class="bi bi-arrow-left"></i> Back</Link>
            </div>
            <h1 className="mb-5">Projects</h1>
            <ProjectList />
          </div>
      </Container>
    </div>
  )
}

export default ProjectsPage