import styled from "styled-components";

export const TitleScreen = styled.h1`
  width: 90%;
  text-align: left;
  font-family: "mv boli" , georgia;
`

export const Hr = styled.hr`
  width: 90%;
  color: black;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

@media screen and (max-width: 650px) {
    flex-wrap: wrap;
}
`
export const Item = styled.div`
    max-width: 100%;
    margin: 1em;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Title = styled.div`
    min-width: 250px;
    overflow: auto;
& span{

}
`
export const Description = styled.div`
`
export const DescriptionTitle = styled.div`

`
type SpanType = {
    fs?: string
    fw?: string 
}
export const Span = styled.span<SpanType>`
    font-size: ${(props) => props.fs ? props.fs : "19px"};
    font-weight: ${(props) => props.fw ? props.fw : "700"};
    fontFamily: "mv boli, georgia";
`