import React from "react"
import { useState } from "react"
import { Hr, Item, Span, TitleScreen, Wrapper } from "../index.styled"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Social } from "../Footer/Footer"
import  Form  from "./Form"
import { WrapperForm, Inputs, SocialWrapper } from "./index.styles";
import { Button } from "@mui/material"
import { ContactsType } from "../../types"
import { fontFamily } from "../../index.styled"

type PropsType = {
    contacts: ContactsType
    theme: boolean
}

export const Contacts: React.FC<PropsType> = ({contacts, theme }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const color = !theme ? 'rgb(19, 18, 18)' : "#fff"

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
            <Span fs="17px" fw="500" color={color}>
                <a href="tel:+79887166917">
                <PhoneAndroidIcon sx={{marginBottom: "-6px"}}/>  +7(988)716-69-17
                </a>
            </Span>
            <Hr />
            <Span fs="17px" fw="500" color={color}>
                <a href="mailto:Okhtov.mz@gmail.com">
                    <MailOutlineIcon sx={{marginBottom: "-6px"}}/>  Okhtov.mz@gmail.com
                </a>
            </Span>
            <Hr />
            <SocialWrapper>
                <Social color={color} />
            </SocialWrapper>

        </Item>
        <Item>
            <WrapperForm>
                <Inputs>
                    <Form type="text"  value={name} onChangeInput={handleNameChanged} label={contacts.lebals.name} color={color}  />
                    <Form type="email" value={email} onChangeInput={handleEmailChanged} label={contacts.lebals.email} color={color} />
                </Inputs>
                <Inputs>
                    <Form type="text" value={message} onChangeInput={handleMessageChanged} label={contacts.lebals.message} color={color} />
                    <Button
                onClick={() => handleButton(name, email, message)}
                variant="contained"
                sx={{fontFamily: fontFamily}}
                >{contacts.lebals.submit}</Button>
                </Inputs>

            </WrapperForm>
        </Item>
    </Wrapper>
</>
}

