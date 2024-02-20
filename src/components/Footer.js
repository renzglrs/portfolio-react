import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <>
            <Row>
                <Col>
                    <nav className="d-flex gap-3 mt-2 mt-md-0 ms-md-auto">
                        <Link to="/" className="me-3 py-2 link-body-emphasis text-decoration-none"><h5>Home</h5></Link>
                        <Link to="/projects" className="me-3 py-2 link-body-emphasis text-decoration-none"><h5>Projects</h5></Link>
                        <Link to="/about" className="me-3 py-2 link-body-emphasis text-decoration-none"><h5>About</h5></Link>
                    </nav>
                </Col>
                <Col className="d-flex justify-content-end">
                    <SocialLinks />
                </Col>
            </Row>
            <Row>
                <Col className="my-3 d-flex justify-content-end">
                    <div>
                        <h6>Created by Renz Glorioso &#169; {year}</h6>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Footer