
import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Navigation } from '../Footer/index.styled'
import { WrapperLinks } from './WrapperLinks'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Typography } from '@mui/material'


const drawerBleeding = 36;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}))

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

const iOS =
    typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

type PropsType = {
    open: boolean
    toggleDrawer: (newOpen: boolean) => any
    setOpen: (open: boolean) => void
}

const SwipeableEdgeDrawer: React.FC<PropsType> = ({ open, toggleDrawer, setOpen }) => {

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible'
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
            onClick={toggleDrawer(true)}
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller sx={{
              backgroundColor: 'rgb(25, 118, 210)'
          }} />
        </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Navigation >
                        <Button
                            onClick={toggleDrawer(false)}
                            sx={{ position: "absolute", top: 0, right: 0 }}
                        >
                            <CloseIcon />
                        </Button>
                        <WrapperLinks setOpen={setOpen} />
                        
                    </Navigation>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

export default SwipeableEdgeDrawer