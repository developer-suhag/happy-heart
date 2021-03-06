import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./SingleService.css";

const SingleService = ({ service }) => {
  const { id, name, img1, description } = service;
  //   handle click
  const history = useHistory();
  const handleClick = () => {
    history.push(`/services/${id}`);
  };
  return (
    <div>
      <Card className="h-100 shadow-sm animate__animated animate__fadeInUp animate__delay-1s">
        <div className="overflow-hidden">
          <Card.Img
            className="img-fluid service-img"
            variant="top"
            src={img1}
          />
        </div>
        <Card.Body className="py-3">
          <Card.Title>{name.slice(0, 25)}..</Card.Title>
          <Card.Text>{description.slice(0, 80)}...</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white border-0 pb-3">
          <Button
            onClick={handleClick}
            className="happy-btn btn-danger px-4 py-2 rounded-3 animate__animated animate__backInUp animate__delay-1s"
          >
            Learn More
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SingleService;
