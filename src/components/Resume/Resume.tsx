
import { Footer } from "../Footer/Footer";
import { BoxRes } from "./BoxRes";
import { Hr, TitleScreen } from "../index.styled";

export const Resume = () => <>
  <TitleScreen>Curriculum-Vitae</TitleScreen>
  <BoxRes
    titleOne='Work'
    titleTwo='Experience'
    descTitle='2017 - Present'
    description="Since 2017, he has carried out various orders for the development and maintenance of software under the leadership of senior staff, worked with CRM systems, databases, web applications, website, mobile applications, fire extinguishing software and emergency notification systems."
  />
  <Hr/>
  <BoxRes
    titleOne='Education'
    descTitle='20.07.2016 - 26.06.2021'
    description="09.03.03 Applied Informatics, Bachelor's Degree. 1000924 5276007"
    descTitleTwo='23.07.2019 - 25.06.2015'
    descriptionTwo="09.02.04 Information systems (by industry), Diploma of secondary vocational education. Qualification, Information Systems Technician. 110904 0000091."
  />
   <Hr/>
  <BoxRes
    titleOne='Skills'
  />
  <Footer />
</>