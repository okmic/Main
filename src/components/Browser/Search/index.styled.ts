import styled from "styled-components"
import { bgColor, tColor } from "../index.styled"

export const WrapperSearch = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${bgColor};
    margin-top: -1px;
    position: relative;
    & button {
        background: none;
        border: none;
        color: ${tColor};
    }
`
export const ControlPanel = styled.div`
    width: 90%;
    display: flex;
`
export const SearchPanel = styled.div`
    width: 50%;
    & input {
        width: 100%;
        height: 25px;
        padding-left: 1em;
        border: none;
        border-radius: 25px;
    }
`
export const AboutPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5px;
`
export const Person = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #bbbbbb;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
        color: ${bgColor}
    }
`