import React from "react"
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import styled from "styled-components"
import TranslateIcon from '@mui/icons-material/Translate'
import { ColorsType } from "../AppBar/Header"
import UseSwitchesCustom from "./UseSwitchesCustom"
import { useDispatch, useSelector } from "react-redux"
import { switchLang } from "../../redux/appReducer"
import { stateType } from "../../redux/store"

type PropsType = {
    colors: ColorsType
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`

const SelectSwitches: React.FC<PropsType> = ({colors}) => {

    const lang = useSelector((state: stateType) => state.appReducer.language.order)
    const dispatch = useDispatch()
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(switchLang(event.target.value as "Eng" | "Ru"))
    }
    
    return (
        <Wrapper>
            <UseSwitchesCustom />
            <TranslateIcon  sx={{color: colors.color, fontSize: "29px"}} />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 50}}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={lang}
                    onChange={handleChange}
                    label={lang}
                    sx={{color: colors.color, backgroundColor: colors.background}}
                >
                    <MenuItem value={"Ru"}>Ru</MenuItem>
                    <MenuItem value={"Eng"}>Eng</MenuItem>
                </Select>
            </FormControl>
        </Wrapper>
    );
}

export default  SelectSwitches