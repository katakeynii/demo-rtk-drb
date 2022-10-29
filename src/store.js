import {
    createStore,
    applyMiddleware,
    compose
  } from "redux";
import appReducers from "./reducers";
import middlewares from "./middlewares";
import promiseMiddleware from 'redux-promise-middleware'
import promise from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';
// import logger from 'redux-logger'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
const store = createStore(
  appReducers,
  {},
  composeEnhancers(
    applyMiddleware(...middlewares, ReduxThunk , promise)
  )

);

export default store;