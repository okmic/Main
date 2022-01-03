import React from "react"
import { NavLink } from "react-router-dom"
import { LinkBall } from "../Main/index.styled"

type PropsType = {
    setOpen?: (ser: boolean) => void
}

export const WrapperLinks: React.FC<PropsType> = ({ setOpen }) => <>

    {!setOpen
        ? <>
            <NavLink to="/Resume">
                <LinkBall color='rgb(238, 163, 2)'>Resume</LinkBall>
            </NavLink>
            <NavLink to="/Projects">
                <LinkBall color='rgb(255, 59, 37)'>Projects</LinkBall>
            </NavLink>
            <NavLink to="/Contact">
                <LinkBall color='rgb(128, 216, 218)'>Contact</LinkBall>
            </NavLink>
        </>
        : <>
            <NavLink to="/Resume" onClick={() => setOpen(false)}>
                <LinkBall color='rgb(238, 163, 2)'>Resume</LinkBall>
            </NavLink>
            <NavLink to="/Projects" onClick={() => setOpen(false)}>
                <LinkBall color='rgb(255, 59, 37)'>Projects</LinkBall>
            </NavLink>
            <NavLink to="/Contact" onClick={() => setOpen(false)}>
                <LinkBall color='rgb(128, 216, 218)'>Contact</LinkBall>
            </NavLink>
        </>}
</>