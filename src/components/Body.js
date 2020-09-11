import React, { lazy, Suspense } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import MusicCard from "./MusicCard";
import Loader from "./Loader";
import musicPhoto from "../assets/images/Musician.jpg";
import lastWeekTracks from "../assets/json/lastWeekTracks.json";
import "../scss/Body.scss";
const TodayMusic = lazy(() => import("./TodayMusic"));

export default function Body() {
  return (
    <>
      <Container fluid className="body-container p-0">
        <Container fluid className="intro-container">
          <Row className="mb-5">
            <Col xs="12" className="p-2">
              <h1>
                Everyday a new <strong>song</strong>
              </h1>
            </Col>
            <Col xs="12" className="p-2">
              <h2>Discover. Listen. Listen again.</h2>
            </Col>
          </Row>
        </Container>
        <Container className="today-music-container">
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <Suspense fallback={<Loader />}>
                <TodayMusic />
              </Suspense>
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
            {lastWeekTracks.map((track) => {
              const {
                day,
                title,
                artist,
                album,
                year,
                cover,
                previewUrl,
              } = track;
              return (
                <Col xs="12" md="6" lg="4" key={day}>
                  <MusicCard
                    title={title}
                    artist={artist}
                    album={album}
                    year={year}
                    cover={cover}
                    day={day}
                    previewUrl={previewUrl}
                  />
                </Col>
              );
            })}
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
