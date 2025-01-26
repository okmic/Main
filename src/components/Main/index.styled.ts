import styled from "styled-components"

const padding = "1rem"

export const Content = styled.main`
max-width: 1369px;
width: 100%;
padding: 1em;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;
`

export const ContentMe = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
padding-top: 1em;
@media screen and (max-width: 650px) {
    flex-wrap: wrap;
}
`
export const Me = styled.div`
display: flex;
max-width: 500px;
max-height: 100vh;
justify-content: flex-end;
padding: ${padding};
& img {
    object-fit: cover;
    max-width: 100%;
    border-radius: 50%;
    border: #0071c5 1px solid;
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
}
export const Title = styled.span<TitleProps>`
    max-width: ${(props) => props.width ? props.width : "100%"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "15px"};
    margin-bottom: ${(props) => props.mb ? props.mb : "0"};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : "none"};
`
/* font-family: ${(props) => props.fontFamily ? props.fontFamily : "Garamond, serif"}; */

export const Links = styled.nav`
width: 100%;
display: flex;
animation: balls 1.1s 1 forwards;
@keyframes balls {
    0% { transform: translateX(15vw); }
    100% { transform: translateX(0);}
   }
`
export const LinkBall = styled.div<{ color?: string, background?: string, fontFamily?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.color ? props.color : "white"};
    font-size: 15px;
    font-weight: 600;
    width: 115px;
    height: 115px;
    padding: 5px;
    border-radius: 50%;
    background: ${(props) => props.background ? props.background : "linear-gradient(145deg, rgb(238, 163, 2), rgb(255, 204, 0))"};
    border: 1px solid ${(props) => props.color ? props.color : "black"};
    margin-right: 15px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2), 
                inset 5px 5px 10px rgba(255, 255, 255, 0.3);
    transition: background 0.5s, transform 0.3s;

    &:hover {
        background-color: #bbbbbb;
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 750px) {
        width: 75px;
        height: 75px;
    }
    @media screen and (max-width: 650px) {
        width: 100px;
        height: 100px;
    }
    @media screen and (max-width: 350px) {
        width: 86px;
        height: 86px;
    }
    @media screen and (max-width: 300px) {
        width: 70px;
        height: 70px;
    }
    @media screen and (max-height: 450px) {
        max-width: 70px;
        max-height: 70px;
    }
    @media screen and (max-height: 300px) {
        width: 70px;
        height: 30px;
    }
`

export const BallHeader = styled.span`
    background-color: rgb(238, 163, 2);
    width: 21px;
    height: 21px;
    border-radius: 50%;
    margin-right: 9px;
`