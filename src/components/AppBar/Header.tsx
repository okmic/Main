import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Toolbar, Typography } from "@mui/material"
import { memo, useEffect, useState } from "react"
import SwipeableEdgeDrawer from './Drawer'
import { BallHeader } from '../Main/index.styled'
import { NavLink } from 'react-router-dom'
import SelectSwitches from '../Select/Select'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from '../../redux/store'
import { changeHeaderAndBarTheme } from '../../redux/appReducer'

export type ColorsType = {
    color: string
    background: string
}

const Switch = styled.div`
    @media screen and (max-width: 530px) {
        display: none;
    }
`

export default memo(function Header () {
    const name = useSelector((state: stateType) => state.appReducer.language.header.name) 
    const colors = useSelector((state: stateType) => state.appReducer.theme.styles.header)
    const theme = useSelector((state: stateType) => state.appReducer.theme.status)

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    useEffect(() => {
        dispatch(changeHeaderAndBarTheme())
    }, [theme, dispatch])

    return (
        <AppBar position='static' component='header' sx={{backgroundColor: colors.background}}>
            <Toolbar>
                <BallHeader />
                <Typography
                    variant='h6'
                    component="span"
                    sx={{ flexGrow: 1, fontWeight: 600 }}
                >
                    <NavLink to="/" style={{ color: colors.color}}>{name}</NavLink>
                </Typography>
                <Switch>
                    <SelectSwitches colors={colors} />
                </Switch>

                <MenuIcon
                    onClick={toggleDrawer(true)}
                    sx={{ fontSize: '50px', cursor: 'pointer', color: colors.color}}
                />
                <SwipeableEdgeDrawer
                    colors={colors}
                    open={open}
                    toggleDrawer={toggleDrawer}
                    setOpen={setOpen}
                />
            </Toolbar>
        </AppBar>
    )
})