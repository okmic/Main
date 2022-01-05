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
    description="The Fine Art Canvas project is my graduate work at the university, aimed at promoting artists free of charge, as well as selling their paintings without commission. Currently, the development of this project is not stopped, but is actively moving towards the SEO and the server side."
    image={canvas}
  />
  <Hr />
  <BoxProject
    title="Hadidja Sweets"
    link="https://alpha-lucky.github.io/hadidja-sweets/"
    reposit="https://github.com/Alpha-Lucky/hadidja-sweets"
    description="The online store Hadidja Sweets is focused on selling confectionery, the project may seem simple in appearance, but serious problems arose with the optimization, since the customer insisted on heavy decorative files like (video). This example shows my experience with cross-browser compatibility and web application optimization. The design was also developed by me."
    image={hadidja}
  />
    <Hr />
    <BoxProject
    title="GitHub"
    reposit="https://github.com/Alpha-Lucky?tab=repositories"
    description="Since the vast majority of my projects are private, I am not allowed to show them publicly. But on the web service GitHub I have posted all my projects and templates, there you can see how I write the code. There you can also find a project where I train my JS-technology skills 'Social-Network/Way-of-the-Samurai'"
    image={gb}
  />
  <Footer />
</>


