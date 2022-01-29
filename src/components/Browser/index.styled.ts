import styled from "styled-components";

export const bgColor = 'rgba(31, 27, 27, 0.713)'
export const tColor = 'rgb(230, 217, 217)'
export const borderB = '1px solid rgba(31, 27, 27, 0.713)'
export const mediaScr = '@media screen and (max-width: 690px) {display: none;}'

export const WrapperBrowser = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    padding: 1em 1em 0 1em;
`
export const BContainer = styled.div<{browserWidth: boolean}>`
    ${props => !props.browserWidth ? "width: 90vw;" : "max-width: 1500vw;"};
    min-height: 70vh;
    border: ${borderB};
`
export const HeaderBrow = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #bbbbbb;
    max-height: 50vh;
`
export const ContentBrow = styled.div`
    transition: 0.3s;
    width: 100%;
    height: 70vh;
    background-color: #bbbbbb;

`
export const Content = styled.div`
    max-height: 100%;
    overflow-y: auto; 
`