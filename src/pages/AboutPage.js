import Heading from '../components/Heading';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <>
      <section id="hero_section">
        <div data-aos="fade-up" data-aos-duration="1500">
          <Container>
              <Row className="py-5">
                <Col>
                    <Link to="/" className="btn-link mb-5 text-decoration-none text-dark fs-3"><i className="bi bi-arrow-left"></i> Back</Link>
                </Col>
              </Row>
              <Row>
                <Col>
                    <Heading title="About me" />
                </Col>
              </Row>
          </Container>
        </div>
      </section> 
    </>
  )
}

export default AboutPage;