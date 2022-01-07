import { TextField } from "@mui/material"
import React from "react"

type PropsType = {
    label: string
    value: string
    type: string
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    color: string
}

const Form: React.FC<PropsType> = ({ value, onChangeInput, label, type, color }) => {

    return <>
        <TextField
            type={type}
            id="outlined-basic"
            label={label}
            variant="outlined"
            value={value}
            onChange={onChangeInput}
            color="primary"
            InputLabelProps={{
                style: {
                  color: color

                } }}
            sx={{
                m: '0 1em 1em 0',
           }} />
    </>
}

export default React.memo(Form)