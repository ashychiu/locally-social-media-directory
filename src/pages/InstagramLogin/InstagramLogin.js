import React from "react";
import { Link } from "react-router-dom";
import InstagramLogo from "../../assets/Icons/instagram-logo.png";
import LoginButton from "../../assets/Buttons/login-button.svg";
import "./InstagramLogin.scss";
import { Button, Container, Row, Col } from "react-bootstrap";

const InstagramLogin = () => {
  return (
    <section className="instagram-login">
      <Container fluid className="instagram-login__container">
        <Row>
          <Col></Col>
          <Col className="instagram-login__card">
            <div className="instagram-login__card-container">
              <img
                src={InstagramLogo}
                className="instagram-login__logo"
                alt="Instagram Logo"
              />
              <form>
                <input
                  type="text"
                  name="username"
                  placeholder="username or email"
                  className="instagram-login__input"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  id="pw-field"
                  className="instagram-login__input"
                />
                <Link to="/add">
                  <img
                    src={LoginButton}
                    className="instagram-login__button"
                    alt="login button"
                  />
                </Link>
              </form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default InstagramLogin;
