import { useState } from "react"
import { Hr, Item, Span, TitleScreen, Wrapper } from "../Resume/index.styled"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Social } from "../Footer/Footer"
import { Form } from "./Form"
import { WrapperForm, Inputs, SocialWrapper } from "./index.styles";
import { Button } from "@mui/material"


export const Contacts = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    let handleNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    } 

    let handleLastNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    } 

    let handleEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    } 

    let handleMessageChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    } 

    const handleButton = (name: string, lastName: string, email: string, message: string) => {
        let array = [
            { 
            "Имя пользователя: ": name ,
            "Фамилия пользователя: ": lastName,
            "Email: " : email,
            "Сообщение: ": message
        }
        ]
        console.log(array);
    }

    return <>
    <TitleScreen>Contact</TitleScreen>
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
                <Span>Social</Span>
                <Social />
            </SocialWrapper>

        </Item>
        <Item>
            <WrapperForm>
                <Inputs>
                    <Form type="text" value={name} onChangeInput={handleNameChanged} label="First Name" />
                    <Form type="text" value={lastName} onChangeInput={handleLastNameChanged} label="Last Name" />
                </Inputs>
                <Inputs>
                    <Form type="email" value={email} onChangeInput={handleEmailChanged} label="Email" />
                    <Form type="text" value={message} onChangeInput={handleMessageChanged} label="Message" />
                </Inputs>
                <Button
                onClick={() => handleButton(name, lastName, email, message)}
                sx={{marginBottom: '3em'}}
                variant="contained" 
                >submit</Button>
            </WrapperForm>
        </Item>
    </Wrapper>
</>
}

