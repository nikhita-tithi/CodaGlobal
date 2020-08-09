import { takeLatest, put } from "redux-saga/effects";
import { getRecipesListSuccess, getRecipesListError } from "./actions";

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const addExtraData = (data) => {
  return data.map((obj) => ({
    ...obj,
    rating: generateRandomNumber(1, 5),
    circlesInfo: {
      ingrediants: generateRandomNumber(5, 15),
      bucks: generateRandomNumber(100, 999),
      minutes: generateRandomNumber(10, 59),
    },
  }));
};

export function* requestRecipiesList() {
  try {
    const response = yield fetch("http://starlord.hackerearth.com/recipe")
      .then((data) => data.json())
      .then((json) => {
        return json;
      });

    const responseWithExtraData = addExtraData(response);

    yield put(getRecipesListSuccess(responseWithExtraData));
  } catch (error) {
    yield put(getRecipesListError(JSON.stringify(error.message)));
  }
}

export function* watchRootSaga() {
  yield takeLatest("GET_RECIPES_LIST", requestRecipiesList);
}
