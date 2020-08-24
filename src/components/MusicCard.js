import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "../scss/MusicCard.scss";

const MusicCard = ({ title, singer, album, thumbnail, day }) => {
  return (
    <Card>
      <CardImg top src={thumbnail} alt="thumnail-album" />
      <span className="card-day">{day}</span>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{singer}</CardText>
        <CardText>{album}</CardText>
      </CardBody>
    </Card>
  );
};

export default MusicCard;
