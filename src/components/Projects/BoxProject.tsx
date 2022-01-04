import { Item, Span, Wrapper } from "../index.styled"
import { AWrapper, ImgWrapper, WrapperLink } from "./index.styled"
import { BallHeader } from "../Main/index.styled"

type PropsType = {
    title: string
    description: string
    image: string
    link?: string
    reposit: string
}

export const BoxProject: React.FC<PropsType> = ({ title, description, image, link, reposit }) => <Wrapper>
    <Item>
        <WrapperLink >
            <Span fs="23px" fw="550">{title}</Span>
            {link && <AWrapper>
                <BallHeader />
                <a target="_blank" rel="noreferrer" href={link}>Link to the deployed version</a>
            </AWrapper>}
            <AWrapper>
                <BallHeader />
                <a target="_blank" rel="noreferrer" href={reposit}>
                    {title === "GitHub" ? "GitHub profile link" : "Repository link"}
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