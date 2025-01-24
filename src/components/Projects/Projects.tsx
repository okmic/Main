import { Hr, TitleScreen } from "../index.styled"
import { BoxProject } from "./BoxProject"
import { useSelector } from "react-redux"
import { stateType } from "../../redux/store"
import { memo } from "react"
import { WrapperProject } from "./index.styled"


export default memo(function Projects (){

  const projects = useSelector((state: stateType) => state.appReducer.language.projects)
  const textColor = useSelector((state: stateType) => state.appReducer.theme.styles.app.color)

  return <WrapperProject id="projects">
    <TitleScreen>{projects.title}</TitleScreen>
    {projects.projects.map((p, index) => <div key={index}>
      <BoxProject
        textColor={textColor}
        title={p.title}
        link={p.link}
        reposit={p.linkRep}
        description={p.descr}
        image={p.img}
      />
      {p.title === "GitHub" ? <br /> : <Hr />}
    </div>
    )}
  </WrapperProject>
})


