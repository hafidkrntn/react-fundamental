import React from "react"
import { Container, Row, Col } from 'react-bootstrap'



const Homepage = () => {
    return (
      <section className="intro" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={2} xl={7}>
                    <span className="tagline">Welcome to React Hooks By. Hafid</span>
                    <h1> {`Hi I'am coding enthusiast`} <span className="wrap">Web Developer</span></h1>
                    <p>in here I learn based practice react hooks using API to display data.</p>
                </Col>
            </Row>
        </Container>
      </section>

    )
}

export default Homepage;