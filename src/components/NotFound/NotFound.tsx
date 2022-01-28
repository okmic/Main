import { memo } from 'react'
import imgNotFound from '../../img/404.png'
import { Item, WrapperNF } from './NotFound.styled'

export default memo(function NotFound (){
return <WrapperNF>
    <img src={imgNotFound} alt="404 Not Found" />
    <Item>
        404 NOT FOUND
    </Item>
</WrapperNF>})
