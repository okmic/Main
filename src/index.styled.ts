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
