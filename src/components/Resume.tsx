import React from 'react';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type PropsType = {
    titleOne: string
    titleTwo?: string
    descTitle?: string
    description: string
    descTitleTwo?: string
    descriptionTwo?: string
}

const Item = styled.div`
 background-color: #fff
`

const BoxRes: React.FC<PropsType> = (
    {titleOne, titleTwo, descTitle, 
    description, descTitleTwo, descriptionTwo}) => <Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
  <Grid item xs={10}>
    <Item>{titleOne}</Item>
    <Item>{titleTwo}</Item>
  </Grid>
  <Grid item xs={10} sx={{ textAlign: 'left' }}>
    <Item>{descTitle}</Item>
    <Item>{description}</Item>
    {descTitleTwo && <>
    <Item>{descTitleTwo}</Item>
    <Item>{descriptionTwo}</Item>
    </>
    }
  </Grid>
</Grid>
</Box>

export const Resume = () => <>
        <BoxRes 
    titleOne='Work'
    titleTwo='Experience'
    descTitle='2020 - Present'
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    />
        <BoxRes 
    titleOne='Education'
    descTitle='2015 - 2017'
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    descTitleTwo='2012 - 2015'
    descriptionTwo="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."
    />
        <BoxRes 
    titleOne='Skills'
    titleTwo='& Expertise'
    description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    />
</>