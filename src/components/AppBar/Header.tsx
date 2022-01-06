import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import React from "react"
import SwipeableEdgeDrawer from './Drawer'
import { BallHeader } from '../Main/index.styled'
import {NavLink} from 'react-router-dom'
import { LinksType } from '../../types'

type PropsType = {
    state: {
        name: string
    }
    links: LinksType
}

export const Header: React.FC<PropsType> = ({state, links}) => {

    const [open, setOpen] = React.useState(false)
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
      }

    return  (
        <AppBar position='static' component='header' sx={{backgroundColor: "white", color: 'black'}}>
            <Toolbar>
                <BallHeader />
                
                <Typography
                    variant='h6'
                    component="span"
                    sx={{flexGrow: 1, fontWeight: 600, fontFamily: "mv boli, georgia"}}
                >
                    <NavLink to="/Main">{state.name}</NavLink>
                </Typography>

                <IconButton
                onClick={toggleDrawer(true)}
                color="inherit"
                >
                    <MenuIcon 
                    sx={{fontSize: '50px'}}
                    />
                </IconButton>
                <SwipeableEdgeDrawer links={links} open={open} toggleDrawer={toggleDrawer} setOpen={setOpen} />
            </Toolbar>
        </AppBar>
    )
    }