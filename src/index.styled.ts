import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    font-family: georgia, sans-serif;
}
a {
    text-decoration: none;
    color: rgb(19, 18, 18);
    cursor: pointer;
}
/* полоса прокрутки (скроллбар) */
::-webkit-scrollbar {
    width: 15px; /* ширина для вертикального скролла */
    height: 5px; /* высота для горизонтального скролла */
    background-color: #bbbbbb;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: #143861;
    border-radius: 16em;
}

/* Стрелки */

::-webkit-scrollbar-button:vertical:start:decrement {
    background: linear-gradient(120deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(240deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
    linear-gradient(0deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #f6f8f4;
}

::-webkit-scrollbar-button:vertical:end:increment {
    background:
        linear-gradient(300deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(60deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(180deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #fff;
}

::-webkit-scrollbar-button:horizontal:start:decrement {
    background:
        linear-gradient(30deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(150deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(270deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #f6f8f4;
}

::-webkit-scrollbar-button:horizontal:end:increment {
    background:
        linear-gradient(210deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(330deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
        linear-gradient(90deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
    background-color: #f6f8f4;
}
`
export default GlobalStyle

export const AppWrapper = styled.div`
max-width: 1500px;
position: relative;
top: 0;
left: 0;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`
export const Loading = styled.div`
padding: 1em;
font-size: 50px;
font-family: "mv boli"
`
