import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import React from "react"
import SwipeableEdgeDrawer from './Drawer'
import { BallHeader } from '../Main/index.styled'
import { NavLink } from 'react-router-dom'
import { LinksType } from '../../types'
import SelectSwitches from '../Select/Select'
import styled from 'styled-components'

export type ColorsType = {
    color: string
    background: string
}

type PropsType = {
    state: {
        name: string
    }
    links: LinksType
    lang: "Eng" | "Ru"
    setLang: (lang: "Eng" | "Ru") => void
    theme: boolean
    setTheme: (ch: boolean) => void
}
const Switch = styled.div`
    @media screen and (max-width: 530px) {
        display: none;
    }
`

export const Header: React.FC<PropsType> = ({ state, links, lang, setLang, theme, setTheme }) => {

    const [open, setOpen] = React.useState(false)
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    const colors =  {
        background: theme ? '#fff' : "rgba(59, 59, 59)",
        color: theme ? "rgb(19, 18, 18)" : '#fff'
    } 

    return (
        <AppBar position='static' component='header' sx={{backgroundColor: colors.background}}>
            <Toolbar>
                <BallHeader />
                <Typography
                    variant='h6'
                    component="span"
                    sx={{ flexGrow: 1, fontWeight: 600, fontFamily: "mv boli, georgia" }}
                >
                    <NavLink to="/" style={{ color: colors.color }}>{state.name}</NavLink>
                </Typography>
                <Switch>
                    <SelectSwitches colors={colors} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
                </Switch>

                <MenuIcon
                    onClick={toggleDrawer(true)}
                    sx={{ fontSize: '50px', cursor: 'pointer', color: colors.color}}
                />
                <SwipeableEdgeDrawer
                    colors={colors}
                    links={links}
                    open={open}
                    toggleDrawer={toggleDrawer}
                    setOpen={setOpen}
                    lang={lang}
                    setLang={setLang}
                    theme={theme}
                    setTheme={setTheme} />
            </Toolbar>
        </AppBar>
    )
}