import React from "react"
import styled from "styled-components"
import { SkillsType } from "../../types/types";
import { Item, Wrapper, Span, Description } from '../index.styled';

const SkillItem = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
& img {
    max-height: 50px;
}
`
type SkillType = {
    image: string
    description: string
    color: string
}

const Skill: React.FC<SkillType> = ({ image, description, color }) => <SkillItem>
    <img src={image} alt={image} />
    <Span fw="500" textColor={color}>{description}</Span>
</SkillItem>

type PropsType = {
    skills: SkillsType
    color: string
}

export const Skills: React.FC<PropsType> = (
    { skills, color }) => <Wrapper>
        <Item>
            <Description>
                {skills.skill.map((s, index) => <Skill
                    key={index}
                    color={color}
                    image={s.img}
                    description={s.descr}
                />)}
            </Description>
        </Item>
    </Wrapper>

