import React from "react";

import { LikeIcon, Ratings, CirclesInfo } from "../../components";
import { Commentsection } from "./commentForm";

export const DetailsInfo = (props) => {
  const { name, description, rating, circlesInfo } = props;
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <Ratings rating={rating} />
      <p>DESCRIPTION</p>
      <p style={{ textAlign: "right" }}>
        {description}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed
        augue lacus viverra vitae. Nullam vehicula ipsum a arcu cursus vitae
        congue. Quisque sagittis purus sit amet volutpat consequat mauris nunc.
      </p>
      <CirclesInfo info={circlesInfo} />
      <h4>
        {"FAVOURITE THIS RECIPE"}
        <LikeIcon />
      </h4>
      <Commentsection />
    </React.Fragment>
  );
};
