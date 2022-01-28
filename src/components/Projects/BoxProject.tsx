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
    },
    textColor: string
}

export const BoxProject: React.FC<PropsType> = ({ title, description, image, link, reposit, textColor }) =>  <Wrapper>
        <Item>
            <WrapperLink >
                <Span fs="23px" fw="550" textColor={textColor}>{title}</Span>
                {link && <AWrapper textColor={textColor}>
                    <BallHeader />
                    <a target="_blank" rel="noreferrer" href={link.href}>{link.title}</a>
                </AWrapper>}
                <AWrapper textColor={textColor}>
                    <BallHeader />
                    <a target="_blank" rel="noreferrer" href={reposit.href}>
                        {reposit.title}
                    </a>
                </AWrapper>
            </WrapperLink>
            <Span fs="17px" fw="500" textColor={textColor}>{description}</Span>
        </Item>
        <Item>
            <ImgWrapper>
                <img src={image} alt={title} />
            </ImgWrapper>
        </Item>
    </Wrapper>