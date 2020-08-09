import React from "react";
import { CardComponent } from "../../components";
import { Container, Row, CardColumns } from "react-bootstrap";

export const ListingContainer = ({ data }) => {
  return (
    <Container>
      <Row>
        <CardColumns>
          {data.map((cardData) => (
            <CardComponent {...cardData} key={cardData.id} />
          ))}
        </CardColumns>
      </Row>
    </Container>
  );
};
