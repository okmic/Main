import React from "react"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styled from "styled-components";
import Switches from "./Switch"
import LanguageIcon from '@mui/icons-material/Language';

type PropsType = {
    lang: "Eng" | "Ru" 
    setLang: (lang: "Eng" | "Ru" ) => void
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;

`

const SelectSwitches: React.FC<PropsType> = ({lang, setLang}) => {

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as "Eng" | "Ru")
    }
    return (
        <Wrapper>
            <LanguageIcon  sx={{color: "rgb(19, 18, 18)", fontSize: "32px"}} />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={lang}
                    onChange={handleChange}
                    label={lang}
                >
                    <MenuItem value={"Eng"}>Eng</MenuItem>
                    <MenuItem value={"Ru"}>Ru</MenuItem>
                </Select>
            </FormControl>
            <Switches />
        </Wrapper>
    );
}

export default  SelectSwitches