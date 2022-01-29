import React, { memo, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { stateType } from "../../redux/store"
import { BContainer, Content, ContentBrow, HeaderBrow, WrapperBrowser } from "./index.styled"
import MainScreen from "./MainScreen/MainScreen"
import { Search } from "./Search/Search"
import { TabsItems } from "./Tab/TabsItems"

type PropsType = {
    image?: string
}

export default memo(function Browser () {

    const screen = useSelector((state: stateType) => state.browserReducer)
    const width = window.innerWidth

    const img =  width > 690 ? screen.images.desktopImg : screen.images.mobileImg
    const [image, setImage] = useState<string | null>(img)

    const [browserWidth, setBrowserWidth] = useState(false)

    useEffect(() => {
        setImage(img)
    }, [screen.images.desktopImg, img])

    const handleSubmit = (order: boolean) => {
        if (order){
            setImage(screen.images.desktopImg)
        } else {
            setImage(screen.images.mobileImg)
        }
    }

    return <WrapperBrowser>
        <BContainer browserWidth={browserWidth}>
            <HeaderBrow>
                <TabsItems />
                <Search 
                handleSubmit={handleSubmit} 
                projectName={screen.images.name}
                setBrowserWidth={setBrowserWidth}  />
            </HeaderBrow>
            <ContentBrow>
                <Content>
                    <ContBrowserWrapper image={image!} />
                    {!screen.images.desktopImg &&
                     <MainScreen mainScreen={screen.mainScreen} setImage={setImage} />
                    }
                </Content>   
            </ContentBrow>
        </BContainer>
    </WrapperBrowser>
})

const ContBrowserWrapper: React.FC<PropsType> = ( {image} ) => <div>
         {image && <img src={image} alt="okmic" style={{maxWidth: '100%'}} />}
        </div>  


