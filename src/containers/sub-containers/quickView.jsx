import React from "react";
import Modal from "react-bootstrap/Modal";
import { DetailsInfo } from "./detailsInfo";

export const QuickView = (props) => {
  const { name, description, rating, circlesInfo } = props;
  const { Dialog, Header, Title, Body } = Modal;
  const detailsInfoProps = {
    name,
    description,
    rating,
    circlesInfo,
  };
  return (
    <Dialog style={{ margin: 0 }}>
      <Header closeButton>
        <Title>RECIPE</Title>
      </Header>

      <Body style={{ textAlign: "center" }}>
        <DetailsInfo {...detailsInfoProps} />
      </Body>
    </Dialog>
  );
};
