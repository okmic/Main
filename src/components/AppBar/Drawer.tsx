
import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Navigation } from '../Footer/index.styled'
import { WrapperLinks } from './WrapperLinks'
import { LinksType } from '../../types'
import SelectSwitches from '../Select/Select'
import { ColorsType } from './Header'


const drawerBleeding = 36;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}))

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}))

const Switch = styled(Box)(() => ({
    width: "100%",
    maxHeight: '30px',
    display: 'flex',
    justifyContent: 'flex-end',
}))

const iOS =
    typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

type PropsType = {
    open: boolean
    toggleDrawer: (newOpen: boolean) => any
    setOpen: (open: boolean) => void
    links: LinksType
    lang: "Eng" | "Ru"
    setLang: (lang: "Eng" | "Ru") => void
    theme: boolean
    setTheme: (ch: boolean) => void
    colors: ColorsType
}

const SwipeableEdgeDrawer: React.FC<PropsType> = ({ open, toggleDrawer, setOpen, links, lang, setLang, theme, setTheme, colors }) => {

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: colors.background
                    }}
                >
                    <Puller sx={{
                        backgroundColor: colors.color
                    }} />
                    <Navigation >
                        <WrapperLinks links={links} setOpen={setOpen} color={colors.color} />
                    </Navigation>
                    <Switch>
                    <SelectSwitches colors={colors} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
                </Switch>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}

export default SwipeableEdgeDrawer