import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk"
import { createLogger } from 'redux-logger/src'
import coffee from './features/Coffe'
<<<<<<< HEAD
import basket from "./features/Basket"
=======
import authReducer from './features/Auth';
>>>>>>> main

const logger = createLogger()

export const store = createStore(combineReducers({
  coffee,
<<<<<<< HEAD
  basket
=======
  authReducer
>>>>>>> main
}), applyMiddleware(thunk, logger))