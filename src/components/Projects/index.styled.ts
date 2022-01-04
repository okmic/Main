import styled from "styled-components"

export const WrapperLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const AWrapper = styled.div`
    display: flex;
    align-items: center;
a {
    font-weight: 700;
    font-size: 17px;
    margin: 9px 0;
    font-family: "mv boli", georgia;
}`

export const ImgWrapper = styled.div`
    width: 100%;
    heigth: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
& img {
    margin: 3em 0;
    width: 270px;
}
@media screen and (max-width: 670px) {
    & img {
        margin: 0;
    }
}
`