import { memo } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { stateType } from "../../../redux/store"
import { BallHeader } from "../../Main/index.styled"
import { AWrapper } from "../../Projects/index.styled"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export default memo(function DescriptionBrowser() {

    const links = useSelector((state: stateType) => state.browserReducer.links)
    const titles = useSelector((state: stateType) => state.appReducer.language.linksTitle)
    const textColor = useSelector((state: stateType) => state.appReducer.theme.styles.app.color)

    if (!links.repository.href) {
        return <></>
    }

    return <Wrapper>
        {links.deployed && <AWrapper textColor={textColor}>
            <BallHeader />
            <a target="_blank" rel="noreferrer" href={links.deployed.href!}>
                {titles.t1}
            </a>
        </AWrapper>}
        <AWrapper textColor={textColor}>
            <BallHeader />
            <a target="_blank" rel="noreferrer" href={links.repository.href!}>
                {titles.t2}
            </a>
        </AWrapper>
    </Wrapper>
})