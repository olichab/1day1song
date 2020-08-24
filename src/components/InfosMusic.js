import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import ThumbAlbum from "../assets/images/Thumb_Abbey_Road.jpg";
import "../scss/InfosMusic.scss";

// eslint-disable-next-line react/prefer-stateless-function
export default class InfosMusic extends Component {
  render() {
    return (
      <Container fluid className="infos-music-container">
        <Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <Media
              left
              object
              src={ThumbAlbum}
              className="thumb-album"
              alt="Thumbnail album"
            />
          </Col>
          <Col xs="auto" className="text-infos-music">
            <p className="title-song">Here comes the sun</p>
            <p className="title-singer">The beatles</p>
            <p className="title-album">Abbey Road — 1969</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
