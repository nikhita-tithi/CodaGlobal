import React from "react";

export const Commentsection = () => {
  return (
    <div
      style={{
        paddingTop: "20px",
        marginTop: "20px",
        borderTop: "1px solid black",
      }}
    >
      <div>
        <textarea
          placeholder="Enter Your Comments"
          style={{
            height: "100px",
            width: "400px",
            outline: "none",
            backgroundColor: "white",
            fontSize: "large",
          }}
        />
      </div>
      <div>
        <button
          style={{
            width: "100%",
            color: "white",
            outline: "none",
            backgroundColor: "black",
            fontSize: "large",
          }}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};
