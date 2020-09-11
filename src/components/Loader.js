import React from "react";
import { Row, Col } from "reactstrap";
import { Ring } from "react-spinners-css";

const Loader = () => {
  return (
    <Row className="loader-container align-items-center">
      <Col>
        <Ring color="#c8d6e5" size={50} />
      </Col>
    </Row>
  );
};

export default Loader;
