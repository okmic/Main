
import { Footer } from "../Footer/Footer";
import { BoxRes } from "./BoxRes";
import { Hr, TitleScreen } from "./index.styled";

export const Resume = () => <>
  <TitleScreen>Resume</TitleScreen>
  <BoxRes
    titleOne='Work'
    titleTwo='Experience'
    descTitle='2020 - Present'
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
  />
  <Hr/>
  <BoxRes
    titleOne='Education'
    descTitle='2015 - 2017'
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    descTitleTwo='2012 - 2015'
    descriptionTwo="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
  />
   <Hr/>
  <BoxRes
    titleOne='Skills'
    titleTwo='& Expertise'
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
  />
  <Footer />
</>