import React from 'react';
import { Item, Wrapper, Description, Title, DescriptionTitle, Span } from '../index.styled';
import { Skills } from './Skills';

type PropsType = {
  titleOne: string
  titleTwo?: string
  descTitle?: string
  description: string
  descTitleTwo?: string
  descriptionTwo?: string
}

export const BoxRes: React.FC<PropsType> = (
    { titleOne, titleTwo, descTitle,
      description, descTitleTwo, descriptionTwo }) => <Wrapper>
      <Item>
        <Title>
          <Span>{titleOne}</Span>
        </Title>
        {titleTwo && <Title>
          <Span>{titleTwo}</Span>
        </Title>}
      </Item>
      <Item>
        <DescriptionTitle>
          <Span
            fs="19px"
            fw="600"
          >{descTitle}
          </Span>
        </DescriptionTitle>
        <Description>
          <Span
            fs="17px"
            fw="500"
          >{description}</Span>
        </Description>
        {descTitleTwo && <>
          <DescriptionTitle>
            <Span
              fs="19px"
              fw="600"
            >{descTitleTwo}
            </Span>
          </DescriptionTitle>
          <Description>
            <Span
              fs="17px"
              fw="500"
            >{descriptionTwo}</Span>
          </Description>
        </>
        }
          {titleOne === "Skills" && <Skills />  }
      </Item>
    </Wrapper>