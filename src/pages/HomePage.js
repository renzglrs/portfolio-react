import { Container, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Heading from "../components/Heading";

const HomePage = () => {
  return (
    <>
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
                <Col className="d-flex justify-content-center">
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
      
      <section id="experience_section">
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 py-5 my-5">
          <Container>
            <Heading title="Contact me" />
            <Experience />
          </Container>
        </div>
      </section>
    </>
  )
}

export default HomePage;