import styled from "styled-components";

export const bgColor = 'rgba(31, 27, 27, 0.713)'
export const tColor = 'rgb(230, 217, 217)'
export const borderB = '1px solid rgba(31, 27, 27, 0.713)'
export const mediaScr = '@media screen and (max-width: 690px) {display: none;}'

export const WrapperBrowser = styled.div`
    width: 98vw;
    max-width: 1500px;
    padding: 1em 1em 0 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

/* display: ${({preloading}) => preloading ? 'none' : 'block' }; */
export const BPreloading = styled.div<{display: string}>`
    display: ${({display}) => display};
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 188;
    transtition: 1s;

`

export const BContainer = styled.div<{browserWidth: boolean}>`
    ${props => !props.browserWidth ? "width: 100%;" : "max-width: 100%"};
    min-height: 70vh;
    z-index: 1;
    border: ${bgColor} 10px double;
    border-radius: 15px;
    background-color: #bbbbbb;
    @media screen and (max-width: 750px) {
        width: 100%;
        max-width: 1300px;
    }
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