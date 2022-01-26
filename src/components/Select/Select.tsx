import React from "react"
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import styled from "styled-components"
import TranslateIcon from '@mui/icons-material/Translate'
import { ColorsType } from "../AppBar/Header"
import UseSwitchesCustom from "./UseSwitchesCustom"

type PropsType = {
    lang: "Eng" | "Ru" 
    setLang: (lang: "Eng" | "Ru" ) => void
    theme: boolean
    setTheme: (ch: boolean) => void
    colors: ColorsType
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;

`

const SelectSwitches: React.FC<PropsType> = ({lang, setLang, theme, setTheme, colors}) => {

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as "Eng" | "Ru")
    }
    
    return (
        <Wrapper>
            <UseSwitchesCustom theme={theme} setTheme={setTheme} />
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