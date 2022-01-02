import {TextField } from "@mui/material"
import React from "react"

type PropsType = {
    value: string
    onChangeInput: (value: string) => void
}
 
export const Form: React.FC<PropsType> = ({value, onChangeInput}) => {
    return  <TextField id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={() => onChangeInput('')} sx={{m: '1em'}}  />
    }