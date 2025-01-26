import React from "react"
import { LinkBall } from "../Main/index.styled"

type PropsType = {
    setOpen?: (ser: boolean) => void
    links: {
        cv: string
        projects: string
        contacts: string
    }
    color: string
}


export const WrapperLinks: React.FC<PropsType> = ({ setOpen, links, color }) => <>
    {!setOpen
        ? <>
            <a href="#Curriculum-Vitae">
                <LinkBall background='rgb(238, 163, 2)' color={color}>{links.cv}</LinkBall>
            </a>
            <a href="#projects">
                <LinkBall background='rgb(255, 59, 37)' color={color}>{links.projects}</LinkBall>
            </a>
            <a href="#bottom">
                <LinkBall background='rgb(128, 216, 218)' color={color}>{links.contacts}</LinkBall>
            </a>
        </>
        : <>
            <a href="#Curriculum-Vitae" onClick={() => setOpen(false)}>
                <LinkBall background='rgb(238, 163, 2)' color={color}>{links.cv}</LinkBall>
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
                <LinkBall background='rgb(255, 59, 37)' color={color}>{links.projects}</LinkBall>
            </a>
            <a href="#bottom" onClick={() => setOpen(false)}>
                <LinkBall background='rgb(128, 216, 218)' color={color}>{links.contacts}</LinkBall>
            </a>
        </>}
</>