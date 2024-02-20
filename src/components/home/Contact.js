import { Row, Col } from 'react-bootstrap';
// import contactImg from "../assets/svg/contact-img.svg"

const Contact = () => {
  return (
    <>
        <Row>
            <Col>
                <div className="p-2">
                    <form action="">
                        <Row>
                            <Col>
                                <div class="mb-3">
                                    <label for="name" class="form-label"><h3>Name</h3></label>
                                    <input type="text" class="form-control" id="name" placeholder="Your name" />
                                </div>

                            </Col>
                            <Col>
                                <div class="mb-3">
                                    <label for="email" class="form-label"><h3>Email address</h3></label>
                                    <input type="email" class="form-control" id="email" placeholder="Your email" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"><h3>Send me a message</h3></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your message"></textarea>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-lg btn-dark mb-3 w-100">Send</button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Col>
            {/* <Col lg={6} className="d-none d-lg-flex justify-content-center align-items-center">
                <img src={contactImg} alt="contact-img" className="img-fluid" />
            </Col> */}
        </Row>
        
    </>
  )
}

export default Contact;