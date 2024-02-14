import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { skillsData } from '../data/data';


const Skills = () => {

    const skills_style = "px-2 my-1 bg-outline-success text-success border border-success border-2  rounded fs-4"

    return (
    <>
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
                {
                    skillsData.map((skill) => (
                        <div className={skills_style}>{skill}</div>
                    ))
                }
            </Col>
        </Row>
    </>
    )
}

export default Skills;