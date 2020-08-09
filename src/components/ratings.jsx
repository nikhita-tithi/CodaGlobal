import React from "react";
import { Badge } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export const Ratings = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(
      <FaStar color="gold" style={{ margin: "5px" }} key={`star-${i}`} />
    );
  }
  return (
    <span style={{ fontSize: "large" }}>
      <Badge variant="secondary" style={{ margin: "5px" }}>
        {rating}/5
      </Badge>
      {stars}
    </span>
  );
};
