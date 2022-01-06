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
}

export const WrapperLinks: React.FC<PropsType> = ({ setOpen, links }) => <>
    {!setOpen
        ? <>
            <NavLink to="/Curriculum-Vitae">
                <LinkBall color='rgb(238, 163, 2)'>{links.cv}</LinkBall>
            </NavLink>
            <NavLink to="/Projects">
                <LinkBall color='rgb(255, 59, 37)'>{links.projects}</LinkBall>
            </NavLink>
            <NavLink to="/Contact">
                <LinkBall color='rgb(128, 216, 218)'>{links.contacts}</LinkBall>
            </NavLink>
        </>
        : <>
            <NavLink to="/Curriculum-Vitae" onClick={() => setOpen(false)}>
                <LinkBall color='rgb(238, 163, 2)'>{links.cv}</LinkBall>
            </NavLink>
            <NavLink to="/Projects" onClick={() => setOpen(false)}>
                <LinkBall color='rgb(255, 59, 37)'>{links.projects}</LinkBall>
            </NavLink>
            <NavLink to="/Contact" onClick={() => setOpen(false)}>
                <LinkBall color='rgb(128, 216, 218)'>{links.contacts}</LinkBall>
            </NavLink>
        </>}
</>