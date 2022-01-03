import imgNotFound from '../../img/404.png'
import { WrapperNF } from './NotFound.styled'

let NotFound = () => <WrapperNF>
    <div>
        <img src={imgNotFound} alt="404 Not Found" />
    </div>
    <div>
        <span>
            404 NOT FOUND
        </span>
    </div>
</WrapperNF>

export default NotFound