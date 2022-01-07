import React from "react"
import { Hr, TitleScreen} from "../index.styled"
import { BoxProject } from "./BoxProject"
import {  ProjectsType } from "../../types"

type PropsType = {
  projects: ProjectsType
}

export const Projects: React.FC<PropsType> = ({projects}) => <>
  <TitleScreen>{projects.title}</TitleScreen>
  {projects.projects.map((p, index) => <div key={index}>
    <BoxProject
    title={p.title}
    link={p.link}
    reposit={p.linkRep}
    description={p.descr}
    image={p.img}
  />
  {p.title === "GitHub" ? <br /> : <Hr />}
  </div>
)}
</>


