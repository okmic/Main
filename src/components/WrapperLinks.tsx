import { NavLink } from "react-router-dom";
import { LinkBall } from "./Main/index.styled";

export const WrapperLinks = () => <>
            <NavLink to="/Resume">
                <LinkBall color='rgb(238, 163, 2)'>Resume</LinkBall>
            </NavLink>
            <NavLink to="Projects">
                <LinkBall color='rgb(255, 59, 37)'>Projects</LinkBall>
            </NavLink> 
            <NavLink to="Contact">
                <LinkBall color='rgb(128, 216, 218)'>Contact</LinkBall>
            </NavLink>
</>