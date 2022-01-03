import React from "react"
import { Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { WrapperContact, ItemContact, WrapperSocial } from "./index.styled"

export const Footer: React.FC = () => <WrapperContact>
    <ItemContact>
        <Typography sx={{ fontWeight: 700 }}>Phone</Typography>
        <a href="tel:+79887166917">+7(988)716-69-17</a>
    </ItemContact>
    <ItemContact>
        <Typography sx={{ fontWeight: 700 }}>Email</Typography>
        <a href="mailto:Okhtov.mz@gmail.com">Okhtov.mz@gmail.com</a>
    </ItemContact>
    <ItemContact>
        <Typography sx={{ fontWeight: 700 }}>Write me</Typography>
        <Social />
    </ItemContact>
</WrapperContact>

export const Social: React.FC = () => <WrapperSocial>
    <a target="_blank" href=" https://wa.me/+79965248184">
        <WhatsAppIcon sx={{ fontSize: '25px' }} />
    </a>
    <a target="_blank" href=" https://t.me/OkhMichael"
        style={{ marginRight: '3px' }}>
        <TelegramIcon sx={{ fontSize: '25px' }} />
    </a>
    <a target="_blank" href=" https://github.com/Alpha-Lucky">
        <GitHubIcon sx={{ fontSize: '25px' }} />
    </a>
</WrapperSocial>