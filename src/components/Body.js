import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import InfosMusic from "./InfosMusic";
import MusicCard from "./MusicCard";
import musicPhoto from "../assets/images/Musician.jpg";
import ThumbAlbum from "../assets/images/Thumb_Abbey_Road.jpg";

import "../scss/Body.scss";

export default function Body() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      <Container fluid className="body-container">
        <Row className="mb-5 p-2 p-md-5">
          <Col xs="12" className="p-2">
            <h1>
              Everyday a new <strong>song</strong>
            </h1>
          </Col>
          <Col xs="12" className="p-2">
            <h2>Discover. Listen. Listen again.</h2>
          </Col>
        </Row>
        <Container className="today-card-container">
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <InfosMusic />
            </Col>
          </Row>
        </Container>
        <Container className="title-last-week-img-container">
          <Row className="justify-content-center align-items-end">
            <Col xs="12" md="6" xl="7" className="order-1 order-md-0">
              <h1>Last week</h1>
            </Col>
            <Col xs="12" md="6" xl="5" className="p-0 order-0 order-md-1">
              <Media
                object
                src={musicPhoto}
                className="img-musician"
                alt="musician"
              />
            </Col>
          </Row>
        </Container>
        <Container className="lastweek-cards-container">
          <Row className="card-row flex-nowrap">
            {days.map((day) => (
              <Col xs="12" md="6" lg="4">
                <MusicCard
                  title="Here comes sun dxkjhjkfjhxhjf fxjfu"
                  singer="BBBBB"
                  album="CCCC"
                  thumbnail={ThumbAlbum}
                  day={day}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row className="msg justify-content-end">
            <Col xs="12">
              <h3 className="msg-end">See you tomorrow ...</h3>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
