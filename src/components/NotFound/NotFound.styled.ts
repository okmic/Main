import styled from 'styled-components'

export const WrapperNF = styled.div`
position: relative;
top: 0;
left: 0;
margin: 0 auto;
max-width: 500px;
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
& img{
    max-width: 100%;
    max-height: 100%;
}
`
export const Item = styled.span`
color: #00015;
font-style: italic;
font-weight: bold;
font-size: 30px;
text-align: center;
`