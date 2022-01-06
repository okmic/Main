import React from "react"
import { Hr, TitleScreen} from "../index.styled"
import { Footer } from "../Footer/Footer"
import { BoxProject } from "./BoxProject"
import { FooterType, ProjectsType } from "../../types"

type PropsType = {
  footer: FooterType
  projects: ProjectsType
}

export const Projects: React.FC<PropsType> = ({footer, projects}) => <>
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
  <Footer footer={footer}/>
</>


