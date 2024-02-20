import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Heading = ({title}) => {
    return (
        <>
            <Row>
                <Col>
                    <h2 className="display-2 mb-5 fw-bold">
                        {title} <span className="text-primary">.</span>
                    </h2>
                </Col>
            </Row>
        </>
    )
}

export default Heading;