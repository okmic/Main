import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addDescription, addImages } from "../../../redux/browserReducer"
import { stateType } from "../../../redux/store"
import { MainScreenType } from "../../../types"
import { ProjectBrowser, WrapperMS } from "./index.styled"


type PropsType = {
    mainScreen: Array<MainScreenType>
    setImage: (url: string) => void
}


export default memo(function MainScreen({mainScreen, setImage}: PropsType) {

    const dispatch = useDispatch()
    const links = useSelector((state: stateType) => state.appReducer.language.projects.projects)

    
    const mapDescription = (links: any, type: string) => {
        links.filter((item: any) => item.title === type).map((item: any) =>  dispatch(addDescription({
            l1: item.link?.href === null || undefined ? null : item.link!.href,
            l2: item.linkRep.href
        })))}

    
    const handleSubmit = (desktop: string | null, mobile: string | null, name: string, typeArg: string) => {
        dispatch(addImages({desktop, mobile, name}))
        mapDescription(links, typeArg)
        }

    return <WrapperMS>
            {mainScreen.map((item, index) => <ProjectBrowser key={index} onClick={() => {handleSubmit(item.desktop, item.mobile, item.name, item.type)}}>
                {!item.link 
                ?<img src={item.img} alt={item.img} />
                : <a target="_blank"  href={item.link} rel="noreferrer">
                <img src={item.img} alt={item.img} />
                </a>}
        </ProjectBrowser>)}
    </WrapperMS>
})