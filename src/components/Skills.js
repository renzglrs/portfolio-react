import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Skills = () => {
  return (
    <>
        <Row>
            <Col>
                <h2 className="display-2 mb-5 fw-bold">
                  Skills <span className="text-primary">.</span>
                </h2>
            </Col>
        </Row>

        <Row>
            <Col sm={4}>
                <h3>Frontend</h3>
                <ul className="list-unstyled">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </Col>
            <Col sm={4}>
                <h3>Backend</h3>
                <ul className="list-unstyled">
                    <li>Node JS</li>
                    <li>MongoDB</li>
                    <li>ExpressJS</li>
                </ul>
            </Col>
            <Col sm={4}>
                <h3>Tools</h3>
                <ul className="list-unstyled">
                    <li>Microsoft Visual Studio Code</li>
                    <li>Figma</li>
                    <li>Trello</li>
                </ul>
            </Col>
        </Row>
                

    </>
  )
}

export default Skills;