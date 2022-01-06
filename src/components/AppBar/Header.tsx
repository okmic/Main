import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import React from "react"
import SwipeableEdgeDrawer from './Drawer'
import { BallHeader } from '../Main/index.styled'
import { NavLink } from 'react-router-dom'
import { LinksType } from '../../types'
import SelectSwitches from '../Select/Select'
import styled from 'styled-components'

type PropsType = {
    state: {
        name: string
    }
    links: LinksType
    lang: "Eng" | "Ru"
    setLang: (lang: "Eng" | "Ru") => void
}
const Switch = styled.div`
    @media screen and (max-width: 530px) {
        display: none;
    }
`

export const Header: React.FC<PropsType> = ({ state, links, lang, setLang }) => {

    const [open, setOpen] = React.useState(false)
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return (
        <AppBar position='static' component='header' sx={{ backgroundColor: "white", color: 'black' }}>
            <Toolbar>
                <BallHeader />
                <Typography
                    variant='h6'
                    component="span"
                    sx={{ flexGrow: 1, fontWeight: 600, fontFamily: "mv boli, georgia" }}
                >
                    <NavLink to="/Main">{state.name}</NavLink>
                </Typography>
                <Switch>
                    <SelectSwitches lang={lang} setLang={setLang} />
                </Switch>
                <IconButton
                    onClick={toggleDrawer(true)}
                    color="inherit"
                >
                    <MenuIcon
                        sx={{ fontSize: '50px', color: "rgb(19, 18, 18)" }}
                    />
                </IconButton>
                <SwipeableEdgeDrawer
                    links={links}
                    open={open}
                    toggleDrawer={toggleDrawer}
                    setOpen={setOpen}
                    lang={lang}
                    setLang={setLang} />
            </Toolbar>
        </AppBar>
    )
}