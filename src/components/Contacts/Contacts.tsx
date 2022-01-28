import { Hr, Item, Span, TitleScreen, Wrapper } from "../index.styled"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Social } from "../Footer/Footer"
import {  SocialWrapper } from "./index.styles";
import { Forms } from "./Forms"
import { useSelector } from "react-redux"
import { stateType } from "../../redux/store"
import { memo } from "react";



export default memo(function Contacts () {

    const contacts = useSelector((state: stateType) => state.appReducer.language.contacts)
    const color = useSelector((state: stateType) => state.appReducer.theme.styles.app)
    

    return <>
    <TitleScreen>{contacts.title}</TitleScreen>
    <Wrapper>
        <Item>
            <Span fs="17px" fw="500" textColor={color.color}>
                <a href="tel:+79887166917">
                <PhoneAndroidIcon sx={{marginBottom: "-6px"}}/>  +7(988)716-69-17
                </a>
            </Span>
            <Hr />
            <Span fs="17px" fw="500" textColor={color.color}>
                <a href="mailto:Okhtov.mz@gmail.com">
                    <MailOutlineIcon sx={{marginBottom: "-6px"}}/>  Okhtov.mz@gmail.com
                </a>
            </Span>
            <Hr />
            <SocialWrapper>
                <Social color={color.color} />
            </SocialWrapper>

        </Item>
        <Item>
            <Forms contacts={contacts} color={color} />
        </Item>
    </Wrapper>
</>
})

