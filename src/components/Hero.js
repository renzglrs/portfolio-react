import { Row, Col } from "react-bootstrap";
import BannerButton from "./BannerButton";
import SocialLinks from "./SocialLinks";
const Hero = () => {
  return (
    <>
        <Row className="hero">
          <Col md={6} className="my-5">
            <div className="header-box h-100 d-flex flex-column justify-content-center gap-3 text-start ">
              <h2 className="fw-light">Hello, I'm Renz <i class="bi bi-cup-hot"></i></h2>
              <h1 className="display-1 fw-bold"><span className="text-primary">Full Stack</span> Web Developer</h1>
              <h5 class="fw-normal">
                  I am a
                  <code class="d-inline text-secondary fw-medium"> &lt;Full Stack Web Developer /&gt; </code>
                  based in the Philippines. Explore my work and let's connect for exciting opportunities!
              </h5>
              <BannerButton />
              <SocialLinks />
            </div>
          </Col>

          <Col md={6} className="img-box d-flex flex-column justify-content-center align-items-center">
              <img src={require("../img/me.png")} alt="profile" className="hero_image img-fluid" />
          </Col>
            
        </Row>
    </>
  )
}

export default Hero;