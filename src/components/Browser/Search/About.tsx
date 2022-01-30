import { memo } from "react"
import { AboutPanel } from "./index.styled"
import DesktopMacIcon from '@mui/icons-material/DesktopMac'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare'

type PropsType = {
    handleSubmit: (order: boolean) => void
    setBrowserWidth: (f: boolean) => void
    disabledButton: boolean
    statusWidth: boolean | null
}

export default memo(function About({ handleSubmit, setBrowserWidth, disabledButton, statusWidth } : PropsType) {
    
    const desktop = statusWidth === null ? 'rgb(230, 217, 217)' : statusWidth ? "firebrick" : 'rgb(230, 217, 217)'
    const mobile = statusWidth === null ? 'rgb(230, 217, 217)' : statusWidth ? 'rgb(230, 217, 217)' : "firebrick"
    
    return <AboutPanel>
        <button onClick={() => {
            handleSubmit(true)
            setBrowserWidth(false)
        }}
            disabled={disabledButton}>
            <DesktopMacIcon sx={{ fontSize: "25px", color: desktop}} />
        </button>
        <button onClick={() => {
            handleSubmit(false)
            setBrowserWidth(true)
        }}
            disabled={disabledButton}>
            <MobileScreenShareIcon sx={{ fontSize: "25px", color: mobile}} />
        </button>
    </AboutPanel>
})