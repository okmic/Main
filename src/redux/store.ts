import { combineReducers, configureStore } from "@reduxjs/toolkit"
import appReducer, { InitType } from "./appReducer"

export type stateType = {
    appReducer: InitType
}
const rootReducers = combineReducers({
  appReducer
})

export const store = configureStore({
    reducer: rootReducers
})
