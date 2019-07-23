import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// Redux Devtools only available at NODE_ENV === 'development'
// TODO: check that if name of REDUX DEVTOOLS are deprecated 
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// Actually, I don't know how this works
// TODO:
const configure = (preloadedState) => createStore(
  reducers, preloadedState, composeEnhancers(applyMiddleware(...middlewares))
);

export default configure;