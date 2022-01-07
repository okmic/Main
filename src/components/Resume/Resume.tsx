
import React from "react"
import { BoxRes } from "./BoxRes"
import { Hr, TitleScreen } from "../index.styled"
import { Skills } from "./Skills"
import { CVType } from "../../types"

type PropsType = {
  cv: CVType
}

export const Resume: React.FC<PropsType> = ({cv}) => <>
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
</>