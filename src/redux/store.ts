import { combineReducers, configureStore } from "@reduxjs/toolkit"
import appReducer, { InitType } from "./appReducer"
import browserReducer, { InitTypeBrowser } from "./browserReducer"

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
