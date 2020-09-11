import React, { useState, useEffect } from "react";
import { Container, Row, Col, Media, NavLink } from "reactstrap";
import fetchApiSpotify from "./helpers.js/fetchApiSpotify";
import iconPlay from "../assets/icons/play_circle_outline_black.svg";
import iconSpotify from "../assets/icons/logo_spotify.svg";
import "../scss/TodayMusic.scss";

const InfosMusic = () => {
  const [infos, setInfos] = useState(null);
  useEffect(() => {
    const currentTime = Date.now();
    let cachedTrack = JSON.parse(localStorage.getItem("track"));
    if (cachedTrack && currentTime > cachedTrack.deadline) {
      cachedTrack = null;
    }
    if (cachedTrack) {
      setInfos(cachedTrack.trackInfos);
    } else {
      const fetchTrack = async () => {
        const deadline = new Date().setHours(23, 59, 0, 0); // today at 23:59,
        const result = await fetchApiSpotify();
        setInfos(result);
        localStorage.setItem(
          "track",
          JSON.stringify({
            trackInfos: result,
            deadline,
          })
        );
      };
      fetchTrack();
    }
  }, []);

  return (
    <Container fluid className="infos-music-container">
      {infos && (
        <Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <Media
              left
              object
              src={infos.cover}
              className="cover-album"
              alt=""
            />
          </Col>
          <Col xs="auto" className="text-infos-music">
            <p className="title-song">{infos.title}</p>
            <p className="title-singer">{infos.artist}</p>
            <p className="title-album">
              {infos.album} — {infos.year}
            </p>
            {infos.previewUrl && (
              <NavLink href={infos.previewUrl}>
                <Media
                  object
                  src={iconPlay}
                  className="icon-play"
                  alt="icon play music"
                />
              </NavLink>
            )}
            {infos.externalUrl && (
              <NavLink href={infos.externalUrl} target="_blank">
                <Media
                  object
                  src={iconSpotify}
                  className="icon-spotify"
                  alt="icon spotify"
                />
              </NavLink>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default InfosMusic;
