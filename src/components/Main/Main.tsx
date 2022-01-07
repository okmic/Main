import { Content, Description, Links, Me, Title } from "./index.styled"
import me from '../../img/me.jpg'
import { WrapperLinks } from "../AppBar/WrapperLinks"
import { LinksType, MainType } from "../../types"

type PropsType = {
    state: MainType
    links: LinksType
    theme: boolean 
}

export const Main: React.FC<PropsType> = ({ state, links, theme }) => {

    const color = !theme ? "rgb(19, 18, 18)" : '#fff'
    
    return <Content>
            <Me>
                <img src={me} alt="me" />
            </Me>
            <Description>
                <Title fontFamily="mv boli" fontWeight="700" fontSize="95px" mb="15px">{state.title}</Title>
                <Title fontFamily="mv boli" fontWeight="500" fontSize="25px" mb='7px'>{state.about}</Title>
                <Title fontFamily='georgia' fontWeight="500" fontSize="15px" mb='15px' width='350px'>
                   {state.descr}
                </Title>
                <Links>
                    <WrapperLinks color={color} links={links} />
                </Links>
            </Description>
        </Content>
}

