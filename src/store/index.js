import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { recipeReducer } from "./reducer";
import { watchRootSaga } from "./saga";

const rootReducer = combineReducers({ recipes: recipeReducer });
const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(watchRootSaga);

export default store;
