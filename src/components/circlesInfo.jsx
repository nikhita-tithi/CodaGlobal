import React from "react";

export const CirclesInfo = ({ info }) => {
  return (
    <div>
      {Object.entries(info).map(([key, value]) => {
        return (
          <div
            style={{
              textAlign: "center",
              backgroundColor: "black",
              borderRadius: "50%",
              color: "white",
              width: "100px",
              height: "100px",
              display: "inline-block",
              alignItems: "center",
              padding: "20px 0",
              margin: "10px",
            }}
          >
            <h3 style={{ marginBottom: 0 }}>{value}</h3>
            <p style={{ fontSize: "small" }}>{key}</p>
          </div>
        );
      })}
    </div>
  );
};
