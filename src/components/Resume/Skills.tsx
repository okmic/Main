import React from "react"
import styled from "styled-components"
import { SkillsType } from "../../types";
import { Item, Wrapper, Title, Span, Description } from '../index.styled';

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
}

const Skill: React.FC<SkillType> = ({ image, description }) => <SkillItem>
    <img src={image} alt={image} />
    <Span fw="500">{description}</Span>
</SkillItem>

type PropsType = {
    skills: SkillsType
  }

export const Skills: React.FC<PropsType> = (
    { skills }) => <Wrapper>
      <Item>
        <Title>
          <Span>{skills.title}</Span>
        </Title>
      </Item>
      <Item>
        <Description>
            {skills.skill.map((s, index) => <Skill
                key={index}
                image={s.img}
                description={s.descr}
            />)}
        </Description>
</Item>
</Wrapper>

