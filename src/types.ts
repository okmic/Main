export type MainType = {
    title: string
    about: string
    descr: string
}
export type LinksType = {
    cv: string
    projects: string
    contacts: string
}
export type FooterType = {
    phone: string
    email: string
    writeMe: string
}
export type ProjectsDataType = {
    title: string
    link?: {
        title: string
        href: string
        desctopImg: string
        mobileImg: string
        name?: string
    }
    linkRep: {
        title: string
        href: string
    }
    img: string
    descr: string
}
export type ProjectsType = {
    title: string 
    projects: Array<ProjectsDataType>
}

export type CVDataType = {
    title: string
    about: string
    aboutTwo?: string
    descr: string
    descrTwo?: string
}

export type SkillsType = {
    title: string
    skill: Array<{
        img: string
        descr: string 
    }>
}

export type CVType = {
    title: string 
    cv: Array<CVDataType>
    skills: SkillsType
}

export type ContactsType = {
    title: string
    valid: string
    mailValid: string
    submit: string
    lebals: {
        name: string
        email: string
        message: string
        submit: string
    }
}

export type dataType = {
    order: "Ru" | "Eng"
    linksTitle: {
        t1: string
        t2: string
    }
    main: MainType
    header: {
        name: string
    }
    links: LinksType
    footer: FooterType
    projects: ProjectsType
    cv: CVType
    contacts: ContactsType
}

export type InitTypeBrowser = {
    links: BrowserLinksType
    images: ImagesType
    mainScreen: Array<MainScreenType>
}

export type BrowserLinksType = {
    deployed: {
        title: string | null
        href: string | null
    }
    repository: {
        title: string | null
        href: string | null
    }
}

export type ImagesType = {
    desktopImg: string | null
    mobileImg: string | null
    name: string
}

export type MainScreenType = {
    img: string 
    desktop: string | null
    mobile: string | null
    link?: string
    name: string
    type: string
}