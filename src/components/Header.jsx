import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import logo from "../assets/images/Logo.png";
import "../scss/Headers.scss";

export default function Header() {
  return (
    <Container fluid className="header-container">
      <Row className="p-3">
        <Col xs="auto">
          <Media object src={logo} className="logo-1day1song" alt="Logo" />
        </Col>
      </Row>
    </Container>
  );
}
