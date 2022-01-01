import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import React from "react"
 
export const Header: React.FC = () => {
    return  (
        <AppBar position='static' component='header' sx={{backgroundColor: "white", color: 'black'}}>
            <Toolbar>
                <Typography
                    variant='h3'
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    MUI
                </Typography>
                <IconButton 
                color="inherit"
                >
                    <MenuIcon 
                    sx={{fontSize: '50px'}}
                    />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
    }