import { memo } from "react"
import { useDispatch } from "react-redux"
import { removeDescriptions, removeImages } from "../../../redux/browserReducer"
import { ControlPanel, Desctop, Mobile, SearchPanel } from "./index.styled"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ReplayIcon from '@mui/icons-material/Replay'
import HomeIcon from '@mui/icons-material/Home'

type PropsType = {
    setBrowserWidth: (f: boolean) => void
    projectName: string
    setStatusWidth: (s: boolean | null) => void
}

export default memo(function Control({ setBrowserWidth, projectName, setStatusWidth }: PropsType) {

    const dispatch = useDispatch()
    const href = !projectName ? 'https://github.com/okmic' : `https://okmic.github.io/${projectName}`

    const handleSubmit = () => {
        dispatch(removeImages())
        setBrowserWidth(false)
        setStatusWidth(null)
        dispatch(removeDescriptions())
    }

    return <ControlPanel>
        <Desctop>
            <button onClick={handleSubmit}>
                <ArrowBackIcon />
            </button>
            <button><ArrowForwardIcon /></button>
            <button onClick={handleSubmit}><ReplayIcon /></button>
        </Desctop>
        <Mobile onClick={handleSubmit}>
            <HomeIcon />
        </Mobile>
        <SearchPanel>
            <a href={href} rel="noreferrer" target="_blank">
                <input type="text" value={href} onChange={() => { }} />
            </a>
        </SearchPanel>
    </ControlPanel>
})