import React from "react"
import About from "./About"
import Control from "./Control"
import { WrapperSearch } from "./index.styled"

type PropsType = {
    handleSubmit: (order: boolean) => void
    setBrowserWidth: (f: boolean) => void
    projectName: string
    statusWidth: boolean | null
    setStatusWidth: (s: boolean | null) => void
}

export const Search: React.FC<PropsType> = ({handleSubmit, projectName, setBrowserWidth, statusWidth, setStatusWidth}) => {

    const disabledButton = projectName.length > 1 ? false : true

    return <WrapperSearch>
        <Control projectName={projectName} setBrowserWidth={setBrowserWidth} setStatusWidth={setStatusWidth} />
        <About setBrowserWidth={setBrowserWidth} disabledButton={disabledButton} handleSubmit={handleSubmit} statusWidth={statusWidth} />
    </WrapperSearch>
}


