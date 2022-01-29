import { createSlice } from "@reduxjs/toolkit"

import { BrowserInitialState } from "../data"


type AddImagesType = { 
    payload: {
        desktop: string | null
        mobile: string | null
        name: string
    }
}

const browserReducer = createSlice(
    {
    name: "browserReducer",
    initialState: BrowserInitialState,
    reducers: {
        addImages(state, action: AddImagesType) {
            debugger
           state.images.desktopImg = action.payload.desktop
           state.images.mobileImg = action.payload.mobile
           state.images.name = action.payload.name
        },
        removeImages(state) {
            state.images.desktopImg = null
            state.images.mobileImg = null
            state.images.name = ''
        }
    }
    //todo: do add description
})

export default browserReducer.reducer
export const {addImages, removeImages} = browserReducer.actions