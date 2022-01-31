import styled from "styled-components"

export const WrapperMS = styled.div`
padding: 1em;
width: 100%;
min-height: 55vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`
export const ProjectBrowser = styled.div`
max-width: 250px;
max-height: 250px;
border-radius: 50%;
margin: 1em;
border: tomato 1px solid;
overflow: hidden;
& img{
    transition: 0.3s;
    transform: scale(1);
    max-width: 100%;
    cursor: pointer;
    overflow: hidden;
};
& img:hover {
    transition: 0.3s;
    transform: scale(1.1);
    overflow: hidden;
}
`