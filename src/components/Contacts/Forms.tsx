import React, { FocusEvent } from "react"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { fontFamily } from "../../index.styled"
import { ContactsType } from "../../types"
import { Span } from "../index.styled"
import Form from "./Form"
import { Inputs, WrapperForm } from "./index.styles"

type PropsType = {
    contacts: ContactsType
    color: string
}

export const Forms: React.FC<PropsType> = ({ contacts, color }) => {

    const [feedback, setFeedback] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailEror] = useState(contacts.valid)
    const [validForm, setValidForm] = useState(false)

    useEffect(() => {
        if (emailError) {
            setValidForm(false)
        } else {
            setValidForm(true)
        }

    }, [emailError])

    const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
        if (event.target.name === "email") {
                setEmailDirty(true)
        }
    }
    let handleNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    let handleEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailEror(contacts.mailValid)
        } else {
            setEmailEror('')
            setValidForm(true)
        }
    }

    let handleMessageChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    const handleButton = (name: string, email: string, message: string) => {
        
        const n = name.toLowerCase()
        const e = email.toLowerCase()
        const m = message.toLowerCase()

        try {
            fetch("http://b91871dw.beget.tech/telegram.php", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({ n, e, m })
            })
                .then(res => res.text())
                .then(res => {
                    if (res === "200") {
                        setFeedback(!feedback)
                    }
                })
                setValidForm(false)
                setName('')
                setEmail('')
                setMessage('')
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return !feedback ? <WrapperForm>
        <Inputs>
            <Form
                type="text"
                value={name}
                onChangeInput={handleNameChanged}
                label={contacts.lebals.name}
                color={color} />
            {(emailDirty && emailError) && <Span marginB="9px" textColor="tomato" fs="15px">{emailError}</Span>}
            <Form
                blurHandler={blurHandler}
                name="email"
                type="email"
                value={email}
                onChangeInput={handleEmailChanged}
                label={contacts.lebals.email}
                color={color}
                validate={emailDirty && emailError ? true : false} />
        </Inputs>
        <Inputs>
            <Form
                blurHandler={blurHandler}
                name="message"
                type="text"
                value={message}
                onChangeInput={handleMessageChanged}
                label={contacts.lebals.message}
                color={color} />
            <Button
                disabled={!validForm}
                onClick={() => handleButton(name, email, message)}
                variant="contained"
                sx={{ fontFamily: fontFamily }}
            >{contacts.lebals.submit}</Button>
        </Inputs>
    </WrapperForm>
        : <Span>{contacts.submit}</Span>
}
