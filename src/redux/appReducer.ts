import { createSlice } from "@reduxjs/toolkit"
import { DataEng, DataRu } from "../data"
import {dataType} from '../types'

export type InitType = {
    language: dataType
    theme: {
        status: boolean
        styles: {
            app: StylesType,
            header: StylesType
        }
    }
}
type StylesType = {
    color: string
    background: string
}

const initialState = {
    language: DataRu,
    theme: {
        status: false,
        styles: {
            app: {
                color: '#000',
                background: '#fff'
            },
            header: {
                color: '#fff',
                background: 'rgba(59, 59, 59)'
            }
        }
    }
} as InitType

const appReducer = createSlice(
    {
    name: "toolkit",
    initialState,
    reducers: {
        switchLang(state, action) {
            if(action.payload === "Eng") {
                if (state.language.order === "Eng") {
                    return
                } else {
                    state.language = DataEng
                }
            } else if(action.payload === "Ru") {
                if (state.language.order === "Ru") {
                    return
                } else {
                    state.language = DataRu
                }
            }
        },
        changeTheme(state) {
            state.theme.status = !state.theme.status
        },
        changeAppTheme(state) {
            if(!state.theme.status) {
                state.theme.styles.app.color = "rgba(59, 59, 59)"
                state.theme.styles.app.background = '#fff'
            } else {
                state.theme.styles.app.color = "#fff"
                state.theme.styles.app.background = 'rgba(59, 59, 59)'
            }
        },
        changeHeaderAndBarTheme(state) {
            if(!state.theme.status) {
                state.theme.styles.header.color = "#fff"
                state.theme.styles.header.background = 'rgba(59, 59, 59)'
            } else {
                state.theme.styles.header.color = "rgba(59, 59, 59)"
                state.theme.styles.header.background = '#fff'
            }
        }
    }
})

export default appReducer.reducer
export const {switchLang, changeTheme, changeAppTheme, changeHeaderAndBarTheme} = appReducer.actions