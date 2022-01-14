import React from "react";
import { Link } from "react-router-dom";
import InstagramLogo from "../../assets/instagram.svg";
import "./InstagramLogin.scss";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const InstagramLogin = () => {
  return (
    <section className="instagram-login">
      <Container fluid className="instagram-login__container">
        <Row>
          <Col></Col>
          <Col className="instagram-login__card">
            <img
              src={InstagramLogo}
              className="instagram-login__logo"
              alt="Instagram Logo"
            />
            <Form>
              <Form.Group
                className="instagram-login__input"
                controlId="formGroupEmail"
              >
                <Form.Control type="email" placeholder="username or email" />
              </Form.Group>
              <Form.Group
                className="instagram-login__input"
                controlId="formGroupPassword"
              >
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
            </Form>
            <Link path="/">
              <Button variant="secondary" size="lg" id="ig-submitbtn">
                Log In
              </Button>
            </Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default InstagramLogin;
