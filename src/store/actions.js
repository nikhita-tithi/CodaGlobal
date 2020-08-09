export const getRecipesList = () => ({
  type: "GET_RECIPES_LIST",
});

export const getRecipesListSuccess = (data) => ({
  type: "GET_RECIPES_LIST_SUCCESS",
  payload: data,
});

export const getRecipesListError = (error) => ({
  type: "GET_RECIPES_LIST_ERROR",
  payload: error,
});

export const updateFilteredData = (data) => ({
  type: "UPDATE_FILTERED_DATA",
  payload: data,
});
