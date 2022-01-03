import { Hr, Item, Span, TitleScreen, Wrapper } from "../Resume/index.styled";
import canvas from '../../img/Canvas.png'
import hadidja from '../../img/Hadidja.png'
import { Footer } from "../Footer/Footer";


export const Projects = () => <>
    <TitleScreen>Projects</TitleScreen>
    <BoxProject
    title="Fine Art Canvas"
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    image={canvas}
    />
    <Hr />
    <BoxProject
    title="Hadidja Sweets"
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    image={hadidja}
    />
    <Footer />
</>

type PropsType = {
    title: string
    description: string
    image: string
}

const BoxProject: React.FC<PropsType> = ({title, description, image}) => <Wrapper>
<Item>
  <Span fs="23px" fw="550">{title}</Span>
  <Span fs="17px" fw="500">{description}</Span>
</Item>
<Item>
  <img src={image} alt={title} style={{
      maxWidth: '277px'
  }}  />
</Item>
</Wrapper>