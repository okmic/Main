import styled from "styled-components"

export const WrapperLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const AWrapper = styled.div<{textColor: string}>`
    display: flex;
    align-items: center;
    color: ${(props) => props.textColor};
& a {
    font-weight: 700;
    font-size: 17px;
    margin: 9px 0;
    transition: 0.5s;
    color: ${(props) => props.textColor};
}
& a: hover {
    transition: 0.3s;
    color: rgb(238, 163, 2);
}`

export const ImgWrapper = styled.div`
    width: 100%;
    heigth: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
& img {
    width: 270px;
    border-radius: 50%;
}
@media screen and (max-width: 670px) {
    & img {
        margin: 0;
    }
}
`