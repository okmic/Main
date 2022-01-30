import React, { memo, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { stateType } from "../../redux/store"
import DescriptionBrowser from "./DescriptionBrowser"
import { BContainer, BPreloading, Content, ContentBrow, HeaderBrow, WrapperBrowser } from "./index.styled"
import MainScreen from "./MainScreen/MainScreen"
import { Search } from "./Search/Search"
import TabsItems from "./Tab/TabsItems"

type PropsType = {
    image?: string
    setStatusWidth: (s: boolean | null) => void
}

function incImg(src: string | undefined, setStatusWidth: (s: boolean | null) => void) {
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
    /*     const [preloading, setPreloading] = useState(false) */

    /*     const preloadingTM = () => {
           const timeout = setTimeout(() => {
                setPreloading(true)
            }, 3000)
            return () => clearTimeout(timeout)
        } */
    useEffect(() => {
        setImage(img)
        incImg(img!, setStatusWidth)
    }, [screen.images.desktopImg, img])

    /*     useEffect(() => {
            preloadingTM() 
        }, []) */

    const handleSubmit = (order: boolean) => {
        if (order) {
            setImage(screen.images.desktopImg)
        } else {
            setImage(screen.images.mobileImg)
        }
    }


    return <>
        {/*        <BPreloading preloading={preloading} />    */}
        <WrapperBrowser>

            <BContainer browserWidth={browserWidth}>
                <HeaderBrow>
                    <TabsItems />
                    <Search
                        statusWidth={statusWidth}
                        handleSubmit={handleSubmit}
                        projectName={screen.images.name}
                        setBrowserWidth={setBrowserWidth}
                        setStatusWidth={setStatusWidth} />
                </HeaderBrow>

                <ContentBrow>
                    <Content>
                        <ContBrowserWrapper image={image!} setStatusWidth={setStatusWidth} />
                        {!screen.images.desktopImg &&
                            <MainScreen mainScreen={screen.mainScreen} setImage={setImage} />
                        }
                    </Content>
                </ContentBrow>
            </BContainer>
            <DescriptionBrowser />
        </WrapperBrowser>
    </>

})

const ContBrowserWrapper: React.FC<PropsType> = ({ image, setStatusWidth }) => {

    useEffect(() => {
        incImg(image, setStatusWidth)
    }, [image])

    return <div>
        {image && <img src={image} alt="okmic" style={{ maxWidth: '100%' }} />}
    </div>
}
