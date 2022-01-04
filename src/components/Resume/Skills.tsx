import styled from "styled-components"
import { Span } from "../index.styled"

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        & span {
            margin-right: 1em
        }
    `

export const Skills = () => <Wrapper>
        <Span>TypeScript</Span>
        <Span>JavaScript</Span>
        <Span>jQuery</Span>
        <Span>Node JS</Span>
        <Span>PHP</Span>
        <Span>React</Span>
        <Span>Go</Span>
</Wrapper>

