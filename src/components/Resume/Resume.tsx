
import React from "react"
import { BoxRes } from "./BoxRes"
import { Hr, TitleScreen } from "../index.styled"
import { Skills } from "./Skills"
import { CVType } from "../../types"

type PropsType = {
  cv: CVType
  theme: boolean
}

export const Resume: React.FC<PropsType> = ({cv, theme}) => {

  const color = !theme ? 'rgb(19, 18, 18)' : "#fff"

  return <>
  <TitleScreen>{cv.title}</TitleScreen>
  {cv.cv.map((i, index) => <div key={index}>
    <BoxRes
    color={color}
    key={index}
    titleOne={i.title}
    descTitle={i.about}
    descTitleTwo={i.aboutTwo}
    description={i.descr}
    descriptionTwo={i.descrTwo}
  />
  <Hr/>
  </div>)}
  <Skills color={color} skills={cv.skills}/>
</>
}

