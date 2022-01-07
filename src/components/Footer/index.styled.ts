import styled from "styled-components"

export const WrapperContact = styled.footer`
    display: flex;
    justify-content: space-between;
    aling-items: center;
    flex-wrap: wrap;
    border-top: 1px solid #bbbbbb;
    width: 100%;
    padding: 3em 0;
    margin-top: 10vh;
    & a {
        color: #fff;
    };
    @media screen and (max-width: 650px){
        dispay: flex;
        flex-direction: column;
        aling-items: center;
        margin-top: 5vh;
    }
`
export const ItemContact = styled.div<{theme: string}>`
    dispay: flex;
    flex-direction: column;
    aling-items: center;
    padding: 0 15px;
    & a {
        text-decoration: none;
        font-family: sans-serif;
        color: ${(props) => props.theme};
    }
    @media screen and (max-width: 650px){
        margin-bottom: 1.5em;
    }
`
export const WrapperSocial = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`

export const Navigation = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`