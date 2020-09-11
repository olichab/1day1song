import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Media,
  NavLink,
} from "reactstrap";
import iconPlay from "../assets/icons/play_circle_outline_orange.svg";

import "../scss/MusicCard.scss";

const MusicCard = ({ title, artist, album, year, cover, day, previewUrl }) => {
  return (
    <Card id="effectCard">
      <CardImg top src={cover} alt="thumnail-album" />
      <span className="card-day">{day}</span>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Row>
          <Col xs="9">
            <CardText>{artist}</CardText>
            <CardText>
              {album} — {year}
            </CardText>
          </Col>
          <Col xs="3" className="p-0">
            {previewUrl && (
              <a href={previewUrl}>
                <Media
                  object
                  src={iconPlay}
                  className="icon-play"
                  alt="icon play music"
                />
              </a>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

MusicCard.defaultProps = {
  title: "",
  artist: "",
  album: "",
  year: "",
  cover: "",
  day: "",
  previewUrl: "",
};

MusicCard.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  year: PropTypes.string,
  cover: PropTypes.string,
  day: PropTypes.string,
  previewUrl: PropTypes.string,
};

export default MusicCard;
