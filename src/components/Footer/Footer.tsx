import React from "react"
import { Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { WrapperContact, ItemContact, WrapperSocial } from "./index.styled"
import { FooterType } from "../../types"

type PropsType = {
    footer: FooterType
    theme: boolean
}

export const Footer: React.FC<PropsType> = ({footer, theme}) => { 
    
    const color = !theme ? 'rgb(19, 18, 18)' : "#fff"
    
    return <WrapperContact>
    <ItemContact theme={color}>
        <Typography sx={{ fontWeight: 700 }}>{footer.phone}</Typography>
        <a href="tel:+79887166917">+7(988)716-69-17</a>
    </ItemContact>
    <ItemContact theme={color}>
        <Typography sx={{ fontWeight: 700 }}>{footer.writeMe}</Typography>
        <Social color={color} />
    </ItemContact>
    <ItemContact>
        <Typography sx={{ fontWeight: 700 }}>React Application</Typography>
        <Typography sx={{ fontWeight: 700 }}>By Michael Okhtov.</Typography>
    </ItemContact>
</WrapperContact>}

export const Social: React.FC<{color: string}> = ({color}) => <WrapperSocial>
    <a href="mailto:Okhtov.mz@gmail.com">
        <EmailIcon sx={{ fontSize: '25px', marginRight: '5px', color: color}} />
    </a>
    <a target="_blank" href=" https://wa.me/+79965248184">
        <WhatsAppIcon sx={{ fontSize: '25px', color: color}} />
    </a>
    <a target="_blank" href=" https://t.me/OkhMichael"
        style={{ marginRight: '3px' }}>
        <TelegramIcon sx={{ fontSize: '25px', color: color}} />
    </a>
    <a target="_blank" href=" https://github.com/Alpha-Lucky">
        <GitHubIcon sx={{ fontSize: '25px', color: color}} />
    </a>
</WrapperSocial>