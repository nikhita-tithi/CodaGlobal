import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { DetailsInfo } from "./sub-containers";

const DetailsPage = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { id } = match.params;
  const {
    recipes: { data },
  } = useSelector((rootReducer) => rootReducer);

  const DetailsData = data.filter((obj) => obj.id === Number(id));
  const { name, image, description, rating, circlesInfo } = DetailsData[0];
  const detailsInfoProps = {
    name,
    description,
    rating,
    circlesInfo,
  };

  return (
    <Container>
      <Row style={{ marginBottom: "10px" }}>
        <span onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
          <FaArrowLeft style={{ marginRight: "10px" }} />
          Go Back
        </span>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            <Image src={image} rounded width="100%" />
          </Row>
          <Row>
            <h4>Ingredients :</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              iaculis nunc sed augue lacus viverra vitae. Nullam vehicula ipsum
              a arcu cursus vitae congue. Quisque sagittis purus sit amet
              volutpat consequat mauris nunc. Ullamcorper dignissim cras
              tincidunt lobortis feugiat vivamus at. Sodales ut etiam sit amet
              nisl purus in mollis. Quis eleifend quam adipiscing vitae proin
              sagittis nisl rhoncus. Nulla pellentesque dignissim enim sit.
            </p>
            <h4>How to Prepare :</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              iaculis nunc sed augue lacus viverra vitae. Nullam vehicula ipsum
              a arcu cursus vitae congue. Quisque sagittis purus sit amet
              volutpat consequat mauris nunc. Ullamcorper dignissim cras
              tincidunt lobortis feugiat vivamus at. Sodales ut etiam sit amet
              nisl purus in mollis. Quis eleifend quam adipiscing vitae proin
              sagittis nisl rhoncus. Nulla pellentesque dignissim enim sit.
            </p>
          </Row>
        </Col>
        <Col md={6}>
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              paddingLeft: "10px",
            }}
          >
            <DetailsInfo {...detailsInfoProps} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPage;
