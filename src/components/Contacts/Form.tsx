import { TextField } from "@mui/material"
import React from "react"

type PropsType = {
    label: string
    value: string
    type: string
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    theme: boolean
}

export const Form: React.FC<PropsType> = React.memo(({ value, onChangeInput, label, type, theme }) => {
/*     const color =  */ 
    return <>
        <TextField
            type={type}
            id="outlined-basic"
            label={label}
            variant="outlined"
            value={value}
            onChange={onChangeInput}
            color="success"
            
            sx={{
                m: '0 1em 1em 0',
                color: '#fff'
            }} />
    </>
}
)