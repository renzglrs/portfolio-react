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
          <div className="d-flex flex-md-row align-items-center justify-content-between pt-5">
              <Link to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none fw-bold">
                <span className="fs-5 text-secondary">R<span className="text-dark">G</span></span>
              </Link>
              <div className="d-none d-md-block">
                <nav className="d-flex align-items-center gap-3 mt-2 mt-md-0 ms-md-auto">
                  <Link to="/" className="me-3 py-2 link-body-emphasis text-decoration-none">Home</Link>
                  <Link to="/projects" className="me-3 py-2 link-body-emphasis text-decoration-none">Projects</Link>
                  <Link to="/about" className="me-3 py-2 link-body-emphasis text-decoration-none">About</Link>
                  {/* TODO: Switch to dark mode */}
                  {/* <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div> */}
                </nav>
              </div>
              <div className="d-block d-md-none">
                <div className="burger_menu text-dark fs-3"><LuMenu onClick={handleShow} className="me-4"/></div>
                
                {/* Offcanvas */}
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold"><span className="fs-5 text-secondary">R<span className="text-dark">G</span></span></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <nav className="d-flex flex-column align-items-start mt-2 mt-md-0 ms-md-auto fs-3">
                      <Link to="/portfolio-react" className="me-3 py-2 link-body-emphasis text-decoration-none">Home</Link>
                      <Link to="/projects" className="me-3 py-2 link-body-emphasis text-decoration-none">Projects</Link>
                      <Link to="/about" className="me-3 py-2 link-body-emphasis text-decoration-none">About</Link>
                      {/* TODO: Switch to dark mode */}
                      {/* <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      </div> */}
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

export default Navbar;