import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../scss/Footer.scss";

export default function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row className="p-3 text-center">
        <Col xs="12">
          Photo by{" "}
          <a href="https://unsplash.com/@kostic86?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Konstantin Aal
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/music?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </Col>
      </Row>
    </Container>
  );
}
