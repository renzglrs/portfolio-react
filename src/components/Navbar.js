import { Row, Col, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row>
        <Col>
          <div class="d-flex flex-md-row align-items-center justify-content-between pt-5">
              <a href="./" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                <span class="fs-5 text-secondary">RG</span>
              </a>
              <div className="d-none d-md-block">
                <nav class="d-flex align-items-center gap-3 mt-2 mt-md-0 ms-md-auto">
                  <Link to="/" class="me-3 py-2 link-body-emphasis text-decoration-none">Home</Link>
                  <Link to="/projects" class="me-3 py-2 link-body-emphasis text-decoration-none">Projects</Link>
                  <a class="me-3 py-2 link-body-emphasis text-decoration-none"href="#about">About</a>
                  <a href="./test.html" class="ms-3 text-decoration-none text-dark"><i class="bi bi-moon"></i></a>
                </nav>
              </div>
              <div className="d-block d-md-none">
                <LuMenu onClick={handleShow} className="me-4"/>

                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>RG</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <nav class="d-flex flex-column align-items-center mt-2 mt-md-0 ms-md-auto">
                      <a class="me-3 py-2 link-body-emphasis text-decoration-none"href="#home">Home</a>
                      <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#projects">Projects</a>
                      <a class="me-3 py-2 link-body-emphasis text-decoration-none"href="#about">About</a>
                      <a href="./test.html" class="text-decoration-none text-dark"><i class="bi bi-moon"></i></a>
                    </nav>
                  </Offcanvas.Body>
                </Offcanvas>
                
              </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Navbar