import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const LikeIcon = () => {
  const [liked, setLiked] = React.useState(true);

  if (liked) {
    return (
      <FaHeart
        color="red"
        style={{ margin: "-5px 0 0 10px", cursor: "pointer" }}
        onClick={() => setLiked(!liked)}
      />
    );
  }
  return (
    <FaRegHeart
      style={{ margin: "-5px 0 0 10px", cursor: "pointer" }}
      onClick={() => setLiked(!liked)}
    />
  );
};
