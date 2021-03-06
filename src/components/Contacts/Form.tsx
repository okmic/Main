import { TextField } from "@mui/material"
import React, { FocusEvent } from "react"

type PropsType = {
    label: string
    value: string
    type: string
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    color: string
    name?: string
    validate?: boolean
    blurHandler?: (event: FocusEvent<HTMLInputElement>) => void
}

const Form: React.FC<PropsType> = ({ value, onChangeInput, label, type, color, name, validate, blurHandler}) => {

    return <>
        <TextField
            onBlur={blurHandler && blurHandler}
            name={name}
            type={type}
            id="outlined-basic"
            label={label}
            variant="outlined"
            value={value}
            onChange={onChangeInput}
            color="primary"
            error={validate}
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