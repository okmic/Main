import React, { useState } from "react"
import { BContainer, Content, ContentBrow, HeaderBrow, WrapperBrowser } from "./index.styled"
import { Search } from "./Search/Search"
import { TabsItems } from "./Tab/TabsItems"
import desktop from '../../img/hadidjaPage.png'
import mobile from '../../img/hadidjaMobile.png'

export const Browser = () => {

    const width = window.innerWidth

    const [image, setImage] = useState(width > 690 ? desktop : mobile)

    const handleSubmit = (order: boolean) => {
        if (order){
            setImage(desktop)
        } else {
            setImage(mobile)
        }
    }
    
    return <WrapperBrowser>
        <BContainer>
            <HeaderBrow>
                <TabsItems />
                <Search handleSubmit={handleSubmit} />
            </HeaderBrow>
            <ContentBrow>
                <Content>
                    {
                        width <= 0 
                        ? <div>Loading...</div>
                        : <div>
                            <img src={image} alt="okmic" style={{maxWidth: '100%'}} />    
                        </div>
                    }
                </Content>
            </ContentBrow>
        </BContainer>
    </WrapperBrowser>
}


