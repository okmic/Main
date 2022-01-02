import { Content, Description, Links, Me, Title } from "./index.styled";
import me from '../../img/me.jpg'
import { WrapperLinks } from "../WrapperLinks";

export const Main: React.FC = () => <Content>
    <Me>
        <img src={me} alt="me" />
    </Me>
    <Description>
        <Title fontFamily="mv boli" fontWeight="700" fontSize="95px" mb="15px">Hello</Title>
        <Title fontFamily="mv boli" fontWeight="500" fontSize="25px" mb='7px'>A Bit About Me</Title>
        <Title fontFamily='georgia' fontWeight="500" fontSize="15px" mb='15px' width='350px'>
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
        </Title>
        <Links>
            <WrapperLinks />
        </Links>
    </Description>
</Content>