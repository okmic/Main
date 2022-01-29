import { memo } from "react"
import { AboutPanel } from "./index.styled"
import DesktopMacIcon from '@mui/icons-material/DesktopMac'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare'

type PropsType = {
    handleSubmit: (order: boolean) => void
    setBrowserWidth: (f: boolean) => void
    disabledButton: boolean
}

export default memo(function About({ handleSubmit, setBrowserWidth, disabledButton } : PropsType) {
    return <AboutPanel>
        <button onClick={() => {
            handleSubmit(true)
            setBrowserWidth(false)
        }}
            disabled={disabledButton}>
            <DesktopMacIcon sx={{ fontSize: "25px" }} />
        </button>
        <button onClick={() => {
            handleSubmit(false)
            setBrowserWidth(true)
        }}
            disabled={disabledButton}>
            <MobileScreenShareIcon sx={{ fontSize: "25px" }} />
        </button>
    </AboutPanel>
})