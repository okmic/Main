import { memo, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { stateType } from "../../redux/store"
import DescriptionBrowser from "./About/DescriptionBrowser"
import { BContainer, Content, ContentBrow, HeaderBrow, WrapperBrowser } from "./index.styled"
import MainScreen from "./MainScreen/MainScreen"
import { Search } from "./Search/Search"
import TabsItems from "./Tab/TabsItems"
import { ContBrowserWrapper } from "./About/ContBrowserWrapper"

export function incImg(src: string | undefined, setStatusWidth: (s: boolean | null) => void) {
    if (src) {
        const res = src.includes('Page')
        setStatusWidth(res)
    } else {
        return
    }
}

export default memo(function Browser() {

    const screen = useSelector((state: stateType) => state.browserReducer)
    const width = window.innerWidth

    const img = width > 690 ? screen.images.desktopImg : screen.images.mobileImg
    const [image, setImage] = useState<string | null>(img)

    const [statusWidth, setStatusWidth] = useState<boolean | null>(null)
    const [browserWidth, setBrowserWidth] = useState(false)


    useEffect(() => {
        setImage(img)
        incImg(img!, setStatusWidth)
    }, [screen.images.desktopImg, img])


    const handleSubmitImages = (order: boolean) => {
        if (order) {
            setImage(screen.images.desktopImg)
        } else {
            setImage(screen.images.mobileImg)
        }
    }


    return <>
        <WrapperBrowser>
            <BContainer browserWidth={browserWidth}>
                <HeaderBrow>
                    <TabsItems />
                    <Search
                        statusWidth={statusWidth}
                        handleSubmit={handleSubmitImages}
                        projectName={screen.images.name}
                        setBrowserWidth={setBrowserWidth}
                        setStatusWidth={setStatusWidth} />
                </HeaderBrow>

                <ContentBrow>
                    <Content>
                        <ContBrowserWrapper image={image!} setStatusWidth={setStatusWidth} />
                        {!screen.images.desktopImg &&
                            <MainScreen mainScreen={screen.mainScreen} />
                        }
                    </Content>
                </ContentBrow>
            </BContainer>
            <DescriptionBrowser />
        </WrapperBrowser>
    </>

})


