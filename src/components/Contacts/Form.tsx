import { TextField } from "@mui/material"
import React from "react"

type PropsType = {
    label: string
    value: string
    type: string
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Form: React.FC<PropsType> = React.memo(({ value, onChangeInput, label, type }) => {
    return <>
        <TextField
            type={type}
            id="outlined-basic"
            label={label}
            variant="outlined"
            value={value}
            onChange={onChangeInput}
            sx={{
                m: '0 1em 1em 0'
            }} />
    </>
}
)