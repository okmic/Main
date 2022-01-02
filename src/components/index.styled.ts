import styled from "styled-components"

const padding = "1rem"

export const Content = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 650px) {
    flex-wrap: wrap-reverse;
  }
`
export const Me = styled.div`
display: flex;
max-width: 500px;
justify-content: flex-end;
padding: ${padding};
& img {
    max-width: 100%;
    border-radius: 50%;
    border: black 1px solid;
}
@media screen and (max-width: 650px) {
    max-width: 300px;
  }
`
export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: ${padding};

`
type TitleProps = {
    fontSize: string
    mb?: string
    fontWeight?: string
    width?: string
    fontFamily?: string
}
export const Title = styled.span`
    max-width: ${(props: TitleProps) => props.width ? props.width : "100%"};
    font-size: ${(props: TitleProps) => props.fontSize ? props.fontSize : "15px"};
    margin-bottom: ${(props: TitleProps) => props.mb ? props.mb : "0"};
    font-weight: ${(props: TitleProps) => props.fontWeight ? props.fontWeight : "none"};
    font-family: ${(props: TitleProps) => props.fontFamily ? props.fontFamily : "none"};
`
export const Links = styled.div`
width: 100%;
display: flex;
`
export const LinkBall = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: 600;
    width: 115px;
    height: 115px;
    padding: 5px;
    border-radius: 50%;
    background-color: ${(props: { color?: string }) => props.color ? props.color : "rgb(238, 163, 2)"};
    border: black 1px solid;
    margin-right: 15px;
    transition: 0.7s;
    font-family: mv boli;
    &:hover {
        transition: 0.5s;
        background-color: #bbbbbb;
    }
@media screen and (max-width: 750px) {
    max-width: 75px;
    max-height: 75px;
}
@media screen and (max-width: 650px) {
    max-width: 90px;
    max-height: 90px;
}
@media screen and (max-width: 350px) {
    max-width: 80px;
    max-height: 80px;
}
@media screen and (max-width: 300px) {
    max-width: 70px;
    max-height: 70px;
}
`
export const BallHeader = styled.span`
    background-color: rgb(238, 163, 2);
    width: 21px;
    height: 21px;
    border-radius: 50%;
    margin-right: 9px;
`
export const WrapperContact = styled.footer`
    display: flex;
    justify-content: space-between;
    aling-items: center;
    flex-wrap: wrap;
    border-top: 1px solid #bbbbbb;
    width: 100%;
    padding: 3em 0;
    margin-top: 20vh;
    @media screen and (max-width: 650px){
        dispay: flex;
        flex-direction: column;
        aling-items: center;
    }
`
export const ItemContact = styled.div`
    dispay: flex;
    flex-direction: column;
    aling-items: center;
    padding: 0 15px;
    & a {
        text-decoration: none;
        color: black;
        font-family: sans-serif;
    };
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