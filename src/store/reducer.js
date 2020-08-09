import { mockData } from "../mockData";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
  filteredData: [],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPES_LIST":
      return { ...state, isLoading: true };
    case "GET_RECIPES_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        filteredData: action.payload,
      };
    case "GET_RECIPES_LIST_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: mockData, // Adding mockdata as API is failing in hosted environment due to CORS issue
        filteredData: mockData,
      };
    case "UPDATE_FILTERED_DATA":
      return { ...state, filteredData: action.payload };
    default:
      return state;
  }
};
