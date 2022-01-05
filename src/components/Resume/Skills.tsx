import styled from "styled-components"
import { Span } from "../index.styled"
import html from '../../img/skills/html.png'
import js from '../../img/skills/js.png'
import node from '../../img/skills/node.png'
import jq from '../../img/skills/jq.svg'
import react from '../../img/skills/react.svg'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    & span {
        margin-right: 1em
    }
    `
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
& img {
    max-height: 50px;
}
`
type PropsType = {
    image: string
    description: string
}

const Skill: React.FC<PropsType> = ({ image, description }) => <Item>
    <img src={image} alt={image} />
    <Span fw="500">{description}</Span>
</Item>

export const Skills = () => <Wrapper>
    <Box>
        <Skill image={html} description="I have practical experience in developing optimized, cross-browser, responsive and modern layouts, compatible with browsers, implemented using flex and grid technologies according to the BEM methodology. I am using a Sass preprocessor and can create CSS animations. If necessary, I can use the Bootstrap library." />
        <Skill image={js} description="If necessary, I can work with native JavaScript and create interactive applications without modern frameworks. I also keep my code readable and understandable by setting static typing with TypeScript, which will improve other developers' understanding of the code." />
        <Skill image={jq} description="When it comes to small web projects I use jQuery, it greatly simplifies things like viewing and manipulating HTML documents, event handling, animation, and Ajax with an easy-to-use API that works across multiple browsers. Through a combination of versatility, extensibility and development speed" />
        <Skill image={node} description="I don't have much backend experience, but in small projects like online shopping or landing pages with feedback forms, I can develop an API to transfer data over HTTP and Websocket in PHP or JS (nodeJS) using databases MySql or MongoDB." />
        <Skill image={react} description="I got introduced to React in 2019 and has since become the main tool in my luggage. I have experience developing fast, responsive user interfaces using the React library. From project to project, I try to improve my qualifications so that my code is more readable and reliable, important parts of the application are always accompanied by unit tests. I am using Redux for state management. To work with HTTP, I use the Axios library." />
    </Box>
</Wrapper>

