import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk"
import { createLogger } from 'redux-logger/src'
import coffee from './features/Coffe'
import authReducer from './features/Auth';

const logger = createLogger()

export const store = createStore(combineReducers({
  coffee,
  authReducer
}), applyMiddleware(thunk, logger))