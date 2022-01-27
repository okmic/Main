import React from "react"
import { AboutPanel, Desctop, ControlPanel, SearchPanel, WrapperSearch, Mobile } from "./index.styled"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ReplayIcon from '@mui/icons-material/Replay'
import HomeIcon from '@mui/icons-material/Home'
import DesktopMacIcon from '@mui/icons-material/DesktopMac'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare'

type PropsType = {
    handleSubmit: (order: boolean) => void
}

export const Search: React.FC<PropsType> = ({handleSubmit}) => {

    return <WrapperSearch>
        <ControlPanel>
            <Desctop>
                <button><ArrowBackIcon /></button>
                <button><ArrowForwardIcon /></button>
                <button><ReplayIcon /></button>
            </Desctop>
            <Mobile><HomeIcon /></Mobile>
            <SearchPanel>
                <input type="text" value="http://okmic/" onChange={() => { }} />
            </SearchPanel>
        </ControlPanel>
        <AboutPanel>
            <button onClick={() => handleSubmit(true)} >
                <DesktopMacIcon sx={{ fontSize: "25px" }} />
            </button>
            <button onClick={() =>  handleSubmit(false)}>
                <MobileScreenShareIcon sx={{ fontSize: "25px" }} />
            </button>
        </AboutPanel>
    </WrapperSearch>
}