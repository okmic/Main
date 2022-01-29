import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { InitTypeBrowser } from "../types"
import appReducer, { InitType } from "./appReducer"
import browserReducer from "./browserReducer"

export type stateType = {
    appReducer: InitType
    browserReducer: InitTypeBrowser
}
const rootReducers = combineReducers({
  appReducer,
  browserReducer
})

export const store = configureStore({
    reducer: rootReducers
})
