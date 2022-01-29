import { memo } from "react"
import { useDispatch } from "react-redux"
import { removeImages } from "../../../redux/browserReducer"
import { ControlPanel, Desctop, Mobile, SearchPanel } from "./index.styled"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ReplayIcon from '@mui/icons-material/Replay'
import HomeIcon from '@mui/icons-material/Home'

type PropsType = {
    setBrowserWidth: (f: boolean) => void
    projectName: string
}

export default memo(function Control({ setBrowserWidth, projectName }: PropsType) {

    const dispatch = useDispatch()
    const href = !projectName ? 'https://github.com/okmic' : `https://okmic.github.io/${projectName}`

    return <ControlPanel>
        <Desctop>
            <button onClick={() => {
                dispatch(removeImages())
                setBrowserWidth(false)
            }}>
                <ArrowBackIcon />
            </button>
            <button><ArrowForwardIcon /></button>
            <button><ReplayIcon /></button>
        </Desctop>
        <Mobile onClick={() => {
            dispatch(removeImages())
            setBrowserWidth(false)
            }}>
            <HomeIcon />
        </Mobile>
        <SearchPanel>
            <a href={href} rel="noreferrer" target="_blank">
                <input type="text" value={href} onChange={() => { }} />
            </a>
        </SearchPanel>
    </ControlPanel>
})