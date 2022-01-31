import { memo, useEffect } from "react"
import { incImg } from "../Browser"


type PropsType = {
    image?: string
    setStatusWidth: (s: boolean | null) => void
}

export const ContBrowserWrapper: React.FC<PropsType> = memo(({ image, setStatusWidth, children}) => {
    
    useEffect(() => {
        incImg(image, setStatusWidth)
    }, [image, setStatusWidth])

    return <div>
        {children}
        {image && <img src={image} alt="okmic" style={{ maxWidth: '100%' }} />}
    </div>
})
