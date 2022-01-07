import React from "react"
import { NavLink } from "react-router-dom"
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
            <NavLink to="/Curriculum-Vitae">
                <LinkBall background='rgb(238, 163, 2)' color={color}>{links.cv}</LinkBall>
            </NavLink>
            <NavLink to="/Projects">
                <LinkBall background='rgb(255, 59, 37)' color={color}>{links.projects}</LinkBall>
            </NavLink>
            <NavLink to="/Contact">
                <LinkBall background='rgb(128, 216, 218)' color={color}>{links.contacts}</LinkBall>
            </NavLink>
        </>
        : <>
            <NavLink to="/Curriculum-Vitae" onClick={() => setOpen(false)}>
                <LinkBall background='rgb(238, 163, 2)' color={color}>{links.cv}</LinkBall>
            </NavLink>
            <NavLink to="/Projects" onClick={() => setOpen(false)}>
                <LinkBall background='rgb(255, 59, 37)' color={color}>{links.projects}</LinkBall>
            </NavLink>
            <NavLink to="/Contact" onClick={() => setOpen(false)}>
                <LinkBall background='rgb(128, 216, 218)' color={color}>{links.contacts}</LinkBall>
            </NavLink>
        </>}
</>