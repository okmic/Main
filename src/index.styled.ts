import styled from 'styled-components'

const padding = "1rem"

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
export const Content = styled.div`
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
    border: #fff 1px solid;
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
}
export const Title = styled.span`
    max-width: ${(props: TitleProps) => props.width ? props.width  : "100%"};
    font-size: ${(props: TitleProps) => props.fontSize ? props.fontSize  : "15px"};
    margin-bottom: ${(props: TitleProps) => props.mb ? props.mb  : "0"};
    font-weight: ${(props: TitleProps) => props.fontWeight ? props.fontWeight  : "none"};
`
export const Links = styled.div`
width: 100%;
display: flex;
& a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 19px;
    font-weight: 600;
    min-width: 65px;
    min-height: 65px;
    max-width: 115px;
    max-height: 115px;
    padding: 5px;
    border-radius: 50%;
    background-color: rgb(238, 163, 2);
    border: black 1px solid;
    margin-right: 15px
}
`