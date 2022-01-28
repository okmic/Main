
import { BoxRes } from "./BoxRes"
import { Hr, TitleScreen } from "../index.styled"
import { Skills } from "./Skills"
import { useSelector } from "react-redux"
import { stateType } from "../../redux/store"
import { memo } from "react"


export default memo(function Resume (){
  
  const cv = useSelector((state: stateType) => state.appReducer.language.cv)
  const color = useSelector((state: stateType) => state.appReducer.theme.styles.app.color)

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
})
