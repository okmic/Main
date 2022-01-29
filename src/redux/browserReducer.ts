import { createSlice } from "@reduxjs/toolkit"
import canvas from '../img/Canvas.jpg'
import hadidja from '../img/Hadidja.jpg'
import gb from '../img/gb.jpg'
import canvasD from '../img/canvasPage.png'
import hadidjaD from '../img/hadidjaPage.png'
import hadidjaM from '../img/hadidjaMobile.png'


export type InitTypeBrowser = {
    images: ImagesType
    mainScreen: Array<MainScreenType>
}

export type ImagesType = {
    desktopImg: string | null
    mobileImg: string | null
    name: string
}

export type MainScreenType = {
    img: string 
    desktop: string | null
    mobile: string | null
    link?: string
    name: string
}

const initialState = {
    images: {
        desktopImg: null,
        mobileImg: null,
        name: ''
    },
    mainScreen: [
        {img: canvas, desktop: canvasD, mobile: canvasD, name: "Canvas"},
        {img: hadidja, desktop: hadidjaD, mobile: hadidjaM, name: "hadidja-sweets"},
        {img: gb, link: 'https://github.com/okmic', desktop: null, mobile: null, name: "" }
    ]
} as InitTypeBrowser

const browserReducer = createSlice(
    {
    name: "browserReducer",
    initialState,
    reducers: {
        addImages(state, action) {
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
})

export default browserReducer.reducer
export const {addImages, removeImages} = browserReducer.actions