import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import ProjectList from "../components/projects/ProjectList";
import Skills from "../components/home/Skills";
import Heading from "../components/Heading";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <section>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Container fluid>
            <Row>
              <Col className="p-0">
                <div className="m-0 p-1 bg-warning text-center fw-bold">
                  Work in progress
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <header id="navbar_section">
        <div data-aos="fade-up" data-aos-duration="1500">
          <Container>
              <Navbar />
          </Container>
        </div>
      </header>
    
      <section id="hero_section">
        <div data-aos="fade-up" data-aos-duration="1500">
          <Container>
              <Hero />
          </Container>
        </div>
      </section>


      <section id="projects_section">
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 pb-5 mb-5">
          <Container >
                <Heading title="Projects" />
                <ProjectList />
                <Col className="py-5 d-flex justify-content-center">
                    <Link to="/projects" className="text-decoration-none text-dark">See more <FaArrowRight /></Link>
                </Col>
          </Container>
        </div>
      </section>

      <section id="skills_section">
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 py-5 my-5">
          <Container>
            <Heading title="Skills" />
            <Skills />
          </Container>
        </div>
      </section>
      
      <section id="contact_section">
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 py-5 my-5">
          <Container>
            <Heading title="Contact me" />
            <Contact />
          </Container>
        </div>
      </section>

      <section id="footer_section">
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 py-5 my-5">
          <Container>
            <Footer />
          </Container>
        </div>
      </section>
    </>
  )
}

export default HomePage;