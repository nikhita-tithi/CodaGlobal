import React from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { QuickView } from "../containers/sub-containers";

export const CardComponent = (props) => {
  const { id, name, image, category, description } = props;
  const { Img, Body, Title, Text, Subtitle } = Card;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  return (
    <Card
      border="dark"
      style={{ margin: "5px auto", backgroundColor: "black", color: "white" }}
    >
      <Img variant="top" src={image} height="50%" />
      <Body className="my-card-body">
        <Title>{name}</Title>
        <Subtitle className="mb-2 text-muted">{category}</Subtitle>
        <Text>{description}</Text>
        <Button
          variant="outline-light"
          style={{ margin: "5px" }}
          onClick={() => handleShow()}
        >
          Quick view
        </Button>
        <Button
          variant="outline-light"
          style={{ margin: "5px" }}
          onClick={() => history.push(`/details/${id}`)}
        >
          View more
        </Button>
      </Body>
      <Modal show={show} onHide={handleClose} centered>
        <QuickView {...props} />
      </Modal>
    </Card>
  );
};
