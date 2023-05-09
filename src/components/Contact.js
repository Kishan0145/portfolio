import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import email from "../assets/img/icons8-gmail-logo-48.png"
import wp from "../assets/img/wa-whatsapp-icon.png"
import call from "../assets/img/icons8-ringer-volume-48.png"

export const Contact = () => {


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <div className="write-email">
              <h2>Let's Connect</h2>
              <div className = 'email' >
                  <img className='email-img' src={email} alt="" />
                  <h3>kishansharma0145@gmail.com</h3>
              </div>
              <div className = 'email' >
                  <img className='email-img' src={call} alt="" />
                  <h3>+91 8619786323</h3>
              </div>
              <div className = 'email' >
                  <img className='email-img' src={wp} alt="" />
                  <h3>+91 7023409884</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
