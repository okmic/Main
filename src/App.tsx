import { Header } from './Header'
import { AppWrapper, Content, Description, Links, Me, Title } from './index.styled';
import me from './me.jpg'

function App() {
  return (
    <AppWrapper>
      <Header />
      <Content>
        <Me>
            <img src={me} alt="me" />
        </Me>
        <Description>
            <Title fontWeight="700" fontSize="95px" mb="15px">Hello</Title>
            <Title fontWeight="500" fontSize="25px" mb='7px'>A Bit About Me</Title>
            <Title fontWeight="500" fontSize="15px" mb='15px' width='350px'>
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
            </Title>
            <Links>
                <a href='/#'>Resume</a>
                <a href='/#'>Projects</a>
                <a href='/#'>Contact</a>
            </Links>
        </Description>
      </Content>

    </AppWrapper>
  );
}

export default App
