import React from "react"
import { LinkBall } from "../Main/index.styled"

type PropsType = {
    setOpen?: (ser: boolean) => void
    links: {
        cv: string
        projects: string
        contacts: string
    }
    theme: boolean
}

export const WrapperLinks: React.FC<PropsType> = ({ setOpen, links, theme }) => {
    const renderLink = (href: string, text: string, backgroundColor: string) => (
        <a href={href} onClick={setOpen ? () => setOpen(false) : undefined}>
            <LinkBall background={backgroundColor} color="#333333">
                {text}
            </LinkBall>
        </a>
    )

    return (
        <>
            {renderLink("#Curriculum-Vitae", links.cv, theme ? '#D6D600' : '#F2B400')}  {/* CV background */}
            {renderLink("#projects", links.projects, theme ? '#FF7043' : '#FF9E80')}  {/* Projects background */}
            {renderLink("#bottom", links.contacts, theme ? '#4FC3F7' : '#81D4FA')}  {/* Contacts background */}
        </>
    )
}
