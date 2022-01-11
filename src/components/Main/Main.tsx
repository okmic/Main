import { Content, Description, Links, Me, Title } from "./index.styled"
import me from '../../img/me.jpg'
import { WrapperLinks } from "../AppBar/WrapperLinks"
import { LinksType, MainType } from "../../types"
import { fontFamily } from "../../index.styled"

type PropsType = {
    state: MainType
    links: LinksType
    theme: boolean 
}

export const Main: React.FC<PropsType> = ({ state, links, theme }) => {

    const lang = state.title === "Hello"
    const color = !theme ? "rgb(19, 18, 18)" : '#fff'
    const fontSize = lang ? "95px" : "70px"

    return <Content>
            <Me>
                <img src={me} alt="me" />
            </Me>
            <Description>
                <Title fontFamily={fontFamily} fontWeight="800" fontSize={fontSize} mb="15px">{state.title}</Title>
                <Title fontFamily={fontFamily} fontWeight="700" fontSize="25px" mb='7px'><i>{state.about}</i></Title>
                <Title fontWeight="600" fontSize="15px" mb='15px' width='350px'>
                   <i>{state.descr}</i>
                </Title>
                <Links>
                    <WrapperLinks color={color} links={links} />
                </Links>
            </Description>
        </Content>
}

