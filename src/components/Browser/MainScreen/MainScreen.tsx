import { memo } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addImages } from "../../../redux/browserReducer"
import { MainScreenType } from "../../../types"

export const WrapperMS = styled.div`
    padding: 1em;
    width: 100%;
    max-width: 1500px;
    min-height: 55vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`
export const ProjectBrowser = styled.div`
    max-width: 250px;
    max-height: 250px;
    border-radius: 50%;
    border: tomato 1px solid;
    overflow: hidden;
    & img{
        transition: 0.3s;
        transform: scale(1);
        max-width: 100%;
        cursor: pointer;
    };
    & img:hover {
        transition: 0.3s;
        transform: scale(1.1);
    }
`
type PropsType = {
    mainScreen: Array<MainScreenType>
    setImage: (url: string) => void
}

export default memo(function MainScreen({mainScreen, setImage}: PropsType) {

    const dispatch = useDispatch()
    const handleSubmit = (desktop: string | null, mobile: string | null, name: string) => {
        dispatch(addImages({desktop, mobile, name}))
    }

    return <WrapperMS>
            {mainScreen.map((item, index) => <ProjectBrowser key={index} onClick={() => handleSubmit(item.desktop, item.mobile, item.name)}>
                {!item.link 
                ?<img src={item.img} alt={item.img} />
                : <a target="_blank"  href={item.link} rel="noreferrer">
                <img src={item.img} alt={item.img} />
                </a>}
        </ProjectBrowser>)}
    </WrapperMS>
})