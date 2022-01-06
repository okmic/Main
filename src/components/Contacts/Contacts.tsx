import React from "react"
import { useState } from "react"
import { Hr, Item, Span, TitleScreen, Wrapper } from "../index.styled"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Social } from "../Footer/Footer"
import { Form } from "./Form"
import { WrapperForm, Inputs, SocialWrapper } from "./index.styles";
import { Button } from "@mui/material"
import { ContactsType } from "../../types"

type PropsType = {
    contacts: ContactsType
}

export const Contacts: React.FC<PropsType> = ({contacts}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    let handleNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    } 

    let handleEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    } 

    let handleMessageChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    } 

    const handleButton = (name: string, email: string, message: string) => {
        let array = [
            { 
            "Имя пользователя: ": name ,
            "Email: " : email,
            "Сообщение: ": message
        }
        ]
        console.log(array);
    }

    return <>
    <TitleScreen>{contacts.title}</TitleScreen>
    <Wrapper>
        <Item>
            <Span fs="17px" fw="500">
                <a href="tel:+79887166917">
                <PhoneAndroidIcon sx={{marginBottom: "-6px"}}/>  +7(988)716-69-17
                </a>
            </Span>
            <Hr />
            <Span fs="17px" fw="500">
                <a href="mailto:Okhtov.mz@gmail.com">
                    <MailOutlineIcon sx={{marginBottom: "-6px"}}/>  Okhtov.mz@gmail.com
                </a>
            </Span>
            <Hr />
            <SocialWrapper>
                <Span>{contacts.social}</Span>
                <Social />
            </SocialWrapper>

        </Item>
        <Item>
            <WrapperForm>
                <Inputs>
                    <Form type="text" value={name} onChangeInput={handleNameChanged} label={contacts.lebals.name} />
                    <Form type="email" value={email} onChangeInput={handleEmailChanged} label={contacts.lebals.email} />
                </Inputs>
                <Inputs>
                    <Form type="text" value={message} onChangeInput={handleMessageChanged} label={contacts.lebals.message} />
                    <Button
                onClick={() => handleButton(name, email, message)}
                variant="contained" 
                >{contacts.lebals.submit}</Button>
                </Inputs>

            </WrapperForm>
        </Item>
    </Wrapper>
</>
}

