import styled from "styled-components";
import { bgColor, tColor } from "../index.styled";

export const TabsBrowser = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3px 1px 0 3px;
    width: 100%;
    background-color: #bbbbbb;
`
export const Tabs = styled.div`
    display: flex;
    align-items: center;
`

export const TabB = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 7px;
    margin: 0 5px 0 5px;
    width: 150px;
    height: 30px;
    background-color: ${bgColor};
    color: ${tColor};
    border-top-left-radius: 11px 11px;
    border-top-right-radius: 11px 11px;
    border-bottom-left-radius: -11px -11px;
    border-bottom-right-radius: -11px -11px;
    & span {
        margin-left: 9px;
        font-size: 15px;
    };
`
export const ButtonsBrow = styled.div`
    display: flex;
    justify-content: space-araund;
    align-items: center;
    min-height: 100%;
    margin-bottom: 3px
`
export const AddTab = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${bgColor};
    & span {
        color: ${tColor};
        font-size: 23px;
    }
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${bgColor};
    height: 27px;
    width: 27px;
    margin: 1px;
    color: ${tColor};
`
