import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import Banner from "../components/Banner";
import ProjectList from "../components/ProjectList";

const HomePage = () => {
  return (
    <>
      <section id="hero_section">
        <div data-aos="fade-up" data-aos-duration="1500">
          <Container className="d-flex flex-column gap-3 justify-content-center align-items-center vh-100 text-center">
              <div className="mb-3">
                  <Banner />
              </div>
              <Navbar />
              <SocialLinks />
          </Container>
        </div>
      </section>


      <section id="projects_section">
        <div data-aos="fade-up" data-aos-duration="1500" className="h-100 pt-5">
          <Container >
              <div >
                <h2 className="display-2 mb-5">Projects</h2>
                <ProjectList />
              </div>
          </Container>
        </div>
      </section>
        
        
    </>
  )
}

export default HomePage;