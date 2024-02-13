import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Skills = () => {

    const skills_style = "px-2 my-1 bg-outline-success text-success border border-success border-2  rounded fs-4"

    return (
    <>
        <Row>
            <Col>
                <h2 className="display-2 mb-5 fw-bold">
                  Skills <span className="text-primary">.</span>
                </h2>
            </Col>
        </Row>

        {/* <Row>
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
        </Row> */}


        <Row>
            <Col className="skills_wrapper d-flex flex-wrap gap-2">
                <div className={skills_style}>HTML</div>
                <div className={skills_style}>CSS</div>
                <div className={skills_style}>Javascript</div>
                <div className={skills_style}>React JS</div>
                <div className={skills_style}>Node JS</div>
                <div className={skills_style}>Express JS</div>
                <div className={skills_style}>MongoDB</div>
                <div className={skills_style}>Git</div>
                <div className={skills_style}>Postman</div>
                <div className={skills_style}>SASS</div>
                <div className={skills_style}>Microsoft Visual Studio Code</div>
                <div className={skills_style}>Jira</div>
                <div className={skills_style}>Confluence</div>
                <div className={skills_style}>Figma</div>
                <div className={skills_style}>Trello</div>
            </Col>
        </Row>
    </>
    )
}

export default Skills;