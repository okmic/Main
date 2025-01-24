import React from 'react';
import { Item, Wrapper, Description, Title, DescriptionTitle, Span } from '../index.styled';

type PropsType = {
  titleTwo?: string
  descTitle?: string
  description?: string
  descTitleTwo?: string
  descriptionTwo?: string
  color: string
}
export const BoxRes: React.FC<PropsType> = (
    { titleTwo, descTitle, description, descTitleTwo, descriptionTwo, color }) => <Wrapper>
      <Item>
        {titleTwo && <Title>
          <Span textColor={color}>{titleTwo}</Span>
        </Title>}
      </Item>
      <Item>
        <DescriptionTitle>
          <Span
            fs="19px"
            fw="600"
            textColor={color}
          >{descTitle}
          </Span>
        </DescriptionTitle>
        <Description>
          <Span
            fs="17px"
            fw="500"
            textColor={color}
          >{description}</Span>
        </Description>
        {descTitleTwo && <>
          <DescriptionTitle>
            <Span
              fs="19px"
              fw="600"
              textColor={color}
            >{descTitleTwo}
            </Span>
          </DescriptionTitle>
          <Description>
            <Span
              fs="17px"
              fw="500"
              textColor={color}
            >{descriptionTwo}</Span>
          </Description>
        </>
        }
      </Item>
    </Wrapper>