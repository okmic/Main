import React from "react"
import { AboutPanel, ControlPanel, Person, SearchPanel, WrapperSearch } from "./index.styled"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ReplayIcon from '@mui/icons-material/Replay'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PersonIcon from '@mui/icons-material/Person'

export const Search = () => <WrapperSearch>
        <ControlPanel>
            <button><ArrowBackIcon /></button>
            <button><ArrowForwardIcon /></button>
            <button><ReplayIcon /></button>
            <SearchPanel>
            <input type="text" value="http://okmic/" />
            </SearchPanel>
        </ControlPanel>
        <AboutPanel>
            <Person>
                <button>
                    <PersonIcon />
                </button>
            </Person>
            <button><MoreVertIcon sx={{fontSize: "30px"}} /></button>
        </AboutPanel>
</WrapperSearch>