import styled from "styled-components";

export const bgColor = 'rgba(31, 27, 27, 0.713)'
export const tColor = 'rgb(230, 217, 217)'
export const borderB = '1px solid black'

export const WrapperBrowser = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    padding: 1em 1em 0 1em;
`
export const BContainer = styled.div`
    width: 80vw;
    border: ${borderB};
`
export const HeaderBrow = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #bbbbbb;
    max-height: 50vh;
`
export const ContentBrow = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #bbbbbb;

`
export const Content = styled.div`
        max-height: 100%;
        overflow-y: scroll 
`