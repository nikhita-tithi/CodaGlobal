import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipesList, updateFilteredData } from "../store/actions";
import { ListingHeader, ListingContainer } from "./sub-containers";
import { Container } from "react-bootstrap";

const ListingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesList());
  }, [dispatch]);

  const { recipes } = useSelector((rootReducer) => rootReducer);
  const { isLoading, data, filteredData } = recipes;

  const handleSearch = (inputValue) => {
    const filterData = data.filter((obj) =>
      obj.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(inputValue, filterData);
    dispatch(updateFilteredData(filterData));
  };

  return (
    <Container>
      <ListingHeader handleSearch={handleSearch} />
      {filteredData.length === 0 ? (
        <h2 style={{ textAlign: "center", padding: "20px" }}> NO DATA</h2>
      ) : (
        <ListingContainer data={filteredData ?? data} isLoading={isLoading} />
      )}
    </Container>
  );
};

export default ListingPage;
