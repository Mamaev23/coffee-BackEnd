import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk"
import { createLogger } from 'redux-logger/src'
import coffee from './features/Coffe'
import basket from "./features/Basket"

const logger = createLogger()

export const store = createStore(combineReducers({
  coffee,
  basket
}), applyMiddleware(thunk, logger))