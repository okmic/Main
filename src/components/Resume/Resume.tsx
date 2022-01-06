
import React from "react";
import { Footer } from "../Footer/Footer";
import { BoxRes } from "./BoxRes";
import { Hr, TitleScreen } from "../index.styled";
import { Skills } from "./Skills";
import { CVType, FooterType } from "../../types";

type PropsType = {
  footer: FooterType
  cv: CVType
}

export const Resume: React.FC<PropsType> = ({footer, cv}) => <>
  <TitleScreen>{cv.title}</TitleScreen>
  {cv.cv.map((i, index) => <div key={index}>
    <BoxRes
    key={index}
    titleOne={i.title}
    descTitle={i.about}
    descTitleTwo={i.aboutTwo}
    description={i.descr}
    descriptionTwo={i.descrTwo}
  />
  <Hr/>
  </div>)}
  <Skills skills={cv.skills}/>
  <Footer footer={footer} />
</>