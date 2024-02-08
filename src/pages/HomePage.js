import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

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
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 py-5 my-5">
          <Container >
                <h2 className="display-2 mb-5 fw-bold">
                  Projects <span className="text-primary">.</span>
                </h2>
                <ProjectList />
          </Container>
        </div>
      </section>

      <section id="skills_section">
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 py-5 my-5">
          <Container>
            <Skills />
          </Container>
        </div>
      </section>
      
      <section id="experience_section">
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 py-5 my-5">
          <Container>
            <Experience />
          </Container>
        </div>
      </section>
    </>
  )
}

export default HomePage;