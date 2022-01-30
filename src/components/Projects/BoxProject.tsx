import { Item, Span, Wrapper } from "../index.styled"
import { AWrapper, ImgWrapper, WrapperLink } from "./index.styled"
import { BallHeader } from "../Main/index.styled"
import { Link } from "react-router-dom"
import { addDescription, addImages } from "../../redux/browserReducer"
import { useDispatch } from "react-redux"

type PropsType = {
    title: string
    description: string
    image: string
    link?: LinkType
    reposit: {
        title: string
        href: string
    },
    textColor: string
}
type LinkType = {
    title: string
    href: string
    desctopImg?: string
    mobileImg?: string
    name?: string
}
type PayloadType = {
    desktop: string
    mobile: string
    name:  string
    t1: string
    l1: string
    t2: string
    l2: string
}

export const BoxProject: React.FC<PropsType> = ({ title, description, image, link, reposit, textColor }) =>  {

    const dispatch = useDispatch()

    const payload = {
        desktop: link?.desctopImg as string,
        mobile:link?.mobileImg as string,
        name: link?.name as string,
        t1: link?.title,
        l1: link?.href,
        t2: reposit.title,
        l2: reposit.href
    } as PayloadType

    const handlesubmit = (payload: PayloadType) => {
        dispatch(addImages({
            desktop: payload.desktop,
            mobile: payload.mobile,
            name: payload.name,
        }))
        dispatch(addDescription({
            l1: payload.l1,
            l2: payload.l2
        }))
    }

    return <Wrapper>
    <Item>
        <WrapperLink >
            <Span fs="23px" fw="550" textColor={textColor}>{title}</Span>
            {link && <AWrapper textColor={textColor}>
                <BallHeader />
                <Link to="/Browser" onClick={() => handlesubmit(payload)}>{link.title}</Link>
{/*                 <a target="_blank" rel="noreferrer" href={link.href}>{link.title}</a> */}
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
}