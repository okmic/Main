import styled from "styled-components"

export const ChildrenContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
flex-direction: column;
`

export const TitleScreen = styled.h1`
  width: 100%;
  text-align: left;
  position: relative;
  margin: 0;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background:rgba(150, 150, 150, 0.5);
    position: absolute;
    bottom: -8px;
    left: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
  }
`

export const Hr = styled.hr`
  width: 90%;
  color: black;
`

export const BoxExpAndEducation = styled.div`
    display: flex;
    width: 1250px;
    margin: 1em 0;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box; 

    @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
        width: 90vw; /* На мобильных устройствах остаётся 100% */
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5em 0;
@media screen and (max-width: 650px) {
    flex-wrap: wrap;
    width: 100%;
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
& span {

}
`

export const Description = styled.div`
`

export const DescriptionTitle = styled.div`

`

type SpanType = {
    fs?: string
    fw?: string 
    textColor?: string
    marginB?: string
}

export const Span = styled.span<SpanType>`
    font-size: ${(props) => props.fs ? props.fs : "19px"};
    font-weight: ${(props) => props.fw ? props.fw : "700"};
    color: ${(props) => props.textColor ? props.textColor : 'red'};
    margin-bottom: ${(props) => props.marginB ? props.marginB : 0 };
& a {
    color: ${(props) => props.textColor ? props.textColor : 'red' }
}
`
