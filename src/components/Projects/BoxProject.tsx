import { Item, Span, Wrapper } from "../index.styled"
import { AWrapper, ImgWrapper, WrapperLink } from "./index.styled"
import { BallHeader } from "../Main/index.styled"

type PropsType = {
    title: string
    description: string
    image: string
    link?: {
        title: string
        href: string
    }
    reposit: {
        title: string
        href: string
    }
    theme: boolean
}

export const BoxProject: React.FC<PropsType> = ({ title, description, image, link, reposit, theme }) => {

    const color = !theme ? 'rgb(19, 18, 18)' : "#fff"

    return <Wrapper>
        <Item>
            <WrapperLink >
                <Span fs="23px" fw="550">{title}</Span>
                {link && <AWrapper theme={color}>
                    <BallHeader />
                    <a target="_blank" rel="noreferrer" href={link.href}>{link.title}</a>
                </AWrapper>}
                <AWrapper theme={color}>
                    <BallHeader />
                    <a target="_blank" rel="noreferrer" href={reposit.href}>
                        {reposit.title}
                    </a>
                </AWrapper>
            </WrapperLink>
            <Span fs="17px" fw="500">{description}</Span>
        </Item>
        <Item>
            <ImgWrapper>
                <img src={image} alt={title} />
            </ImgWrapper>
        </Item>
    </Wrapper>
}