import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../scss/BrowserNotSupported.scss";

const BrowserNotSupported = () => {
  return (
    <Container className="browser-not-supported-container">
      <Row className="h-100 justify-content-center align-items-center">
        <Col xs="auto">
          <h2>
            Internet Explorer is not supported. Download Chrome or Firefox
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default BrowserNotSupported;
