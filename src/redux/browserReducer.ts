import { createSlice } from "@reduxjs/toolkit"
import { BrowserInitialState } from "../data"


type AddImagesType = { 
    payload: {
        desktop: string | null
        mobile: string | null
        name: string
    }
}
type AddDescriptionType = {
    payload: {
        l1: string | null
        l2: string
    }
}

const browserReducer = createSlice(
    {
    name: "browserReducer",
    initialState: BrowserInitialState,
    reducers: {
        addImages(state, action: AddImagesType) {
           state.images.desktopImg = action.payload.desktop
           state.images.mobileImg = action.payload.mobile
           state.images.name = action.payload.name
        },
        addDescription(state, action: AddDescriptionType) {
            state.links.deployed.href = action.payload.l1
            state.links.repository.href = action.payload.l2
        },
        removeImages(state) {
            state.images.desktopImg = null
            state.images.mobileImg = null
            state.images.name = ''
        },
        removeDescriptions(state) {
            state.links.deployed.title = null
            state.links.deployed.href = null
            state.links.repository.title = null
            state.links.repository.href = null
        }
    }
})

export default browserReducer.reducer
export const {addImages, addDescription, removeImages, removeDescriptions} = browserReducer.actions