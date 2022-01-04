import { Hr, TitleScreen} from "../index.styled"
import canvas from '../../img/Canvas.png'
import hadidja from '../../img/Hadidja.png'
import gb from '../../img/gb.jpg'
import { Footer } from "../Footer/Footer"
import { BoxProject } from "./BoxProject"


export const Projects = () => <>
  <TitleScreen>Projects</TitleScreen>
  <BoxProject
    title="Fine Art Canvas"
    link="https://alpha-lucky.github.io/Canvas/"
    reposit="https://github.com/Alpha-Lucky/Canvas"
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    image={canvas}
  />
  <Hr />
  <BoxProject
    title="Hadidja Sweets"
    link="https://github.com/Alpha-Lucky/hadidja-sweets"
    reposit="https://alpha-lucky.github.io/hadidja-sweets/"
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    image={hadidja}
  />
    <Hr />
    <BoxProject
    title="GitHub"
    reposit="https://github.com/Alpha-Lucky?tab=repositories"
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    image={gb}
  />
  <Footer />
</>


