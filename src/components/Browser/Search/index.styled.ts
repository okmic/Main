import styled from "styled-components"
import { bgColor, mediaScr, tColor } from "../index.styled"

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
    };
    @media screen and (max-width: 690px) {
        justify-content: center;
    }
`
export const ControlPanel = styled.div`
    width: 90%;
    display: flex;
`
export const Desctop = styled.div`
    display: flex;
    ${mediaScr}
`
export const Mobile = styled.button`
    display: black;
    @media screen and (min-width: 690px) {
        display: none;
    }
`
export const SearchPanel = styled.div`
    width: 90%;
    & input {
        width: 100%;
        height: 25px;
        padding-left: 1em;
        border: none;
        border-radius: 25px;
        background-color: ${bgColor};
        color: ${tColor}
    }
`
export const AboutPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5px;
    
`