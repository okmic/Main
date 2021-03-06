import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Dongle', sans-serif;
    font-family: 'Roboto Slab', serif;
}
body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    height: 100%;
}
a {
    text-decoration: none;
    cursor: pointer;
}
button {
    cursor: pointer;
}
/* полоса прокрутки (скроллбар) */
::-webkit-scrollbar {
    width: 11px; /* ширина для вертикального скролла */
    height: 5px; /* высота для горизонтального скролла */
    background-color: #bbbbbb;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: rgb(19, 18, 18);
    border-radius: 16em;
}

`
export default GlobalStyle

export const Theme = styled.div<{stateTheme: boolean}>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => !props.stateTheme ? '#fff' : 'rgba(59, 59, 59)' };
    color: ${(props) => !props.stateTheme ? 'rgb(19, 18, 18)' : '#fff' };
`

export const AppWrapper = styled.div<{colorText: string, backgroundColor: string}>`
min-height: 100vh;
position: relative;
top: 0;
left: 0;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.colorText};
`
export const Loading = styled.div`
padding: 1em;
font-size: 50px;
font-family: "mv boli"
`
