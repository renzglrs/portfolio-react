import { Row, Col } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Row>
        <Col>
          <div class="d-flex flex-column flex-md-row align-items-center justify-content-between py-5">
              <a href="./" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                <span class="fs-5 text-secondary">RG</span>
              </a>
              <nav class="d-inline-flex align-items-center mt-2 mt-md-0 ms-md-auto">
                <a class="me-3 py-2 link-body-emphasis text-decoration-none"href="#home">Home</a>
                <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#projects">Projects</a>
                <a class="me-3 py-2 link-body-emphasis text-decoration-none"href="#about">About</a>
              </nav>
              <a href="./test.html" class="ms-3 text-decoration-none text-dark"><i class="bi bi-moon"></i></a>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Navbar