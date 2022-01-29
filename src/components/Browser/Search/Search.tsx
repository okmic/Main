import React from "react"
import About from "./About"
import Control from "./Control"
import { WrapperSearch } from "./index.styled"

type PropsType = {
    handleSubmit: (order: boolean) => void
    setBrowserWidth: (f: boolean) => void
    projectName: string
}

export const Search: React.FC<PropsType> = ({handleSubmit, projectName, setBrowserWidth}) => {

    const disabledButton = projectName.length > 1 ? false : true

    return <WrapperSearch>
        <Control projectName={projectName} setBrowserWidth={setBrowserWidth} />
        <About setBrowserWidth={setBrowserWidth} disabledButton={disabledButton} handleSubmit={handleSubmit} />
    </WrapperSearch>
}


