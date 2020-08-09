import React from "react";
import { Navbar } from "react-bootstrap";

export const ListingHeader = ({ handleSearch }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <h2>Pizza & Noodles</h2>
        </Navbar.Brand>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Navbar>
    </>
  );
};
