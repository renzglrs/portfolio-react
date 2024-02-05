import { Container } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/SocialLinks'
import Banner from '../components/Banner'

const HomePage = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500">
        <Container className="d-flex flex-column gap-3 justify-content-center align-items-center vh-100 text-center">
            <div className="mb-3">
                <Banner />
            </div>
            <Navbar />
            <SocialLinks />
        </Container>
      </div>
        
    </>
  )
}

export default HomePage