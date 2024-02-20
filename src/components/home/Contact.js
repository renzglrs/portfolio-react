import { Row, Col } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [alertSuccess, setAlertSuccess] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_rxsnpz9', 'template_qdpetch', form.current, {
            publicKey: 'XmXyXTRd9YQk3jZ3C',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setAlertSuccess(true);
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    const showAlertSuccess = () => {
        return (
            <>
                <div className="alert alert-success alert-dismissible fade show text-center" role="alert">
                    <strong>Success!</strong> Your message was sent successfully.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{setAlertSuccess(false)}}></button>
                </div>
            </>
        )
    }

    return (
        <>
            <Row>
                <Col>
                    <div className="p-2">
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col>
                                    <div className="mb-3">
                                        <label htmlFor="from_name" className="form-label"><h3>Name</h3></label>
                                        <input type="text" className="form-control" id="from_name" name="from_name" placeholder="Your name" required/>
                                    </div>

                                </Col>
                                <Col>
                                    <div className="mb-3">
                                        <label htmlFor="reply_to" className="form-label"><h3>Email address</h3></label>
                                        <input type="email" className="form-control" id="reply_to" name="reply_to" placeholder="Your email" required/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label"><h3>Send me a message</h3></label>
                                        <textarea className="form-control" id="message" name="message" rows="5" placeholder="Your message" required></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" value="Send" className="btn btn-lg btn-dark mb-3 w-100" />
                                    </div>
                                </Col>
                            </Row>
                        </form>
                        {alertSuccess ? showAlertSuccess() : null}
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