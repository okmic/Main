import { ButtonsBrow, TabsBrowser, TabB, Tabs, Button, AddTab, TitleTab } from "./index.styled"
import { Link } from "react-router-dom"
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import CloseIcon from '@mui/icons-material/Close'
import RemoveIcon from '@mui/icons-material/Remove'
import img from '../../../img/M.png'

export const TabsItems = () => <TabsBrowser>
    <Tabs>
        <TabB>
            <TitleTab>
                <img src={img} alt={img} />
                <span>okmic</span>
            </TitleTab>
            <CloseIcon sx={{ fontSize: '12px' }} />
        </TabB>
        <AddTab>
            <span>+</span>
        </AddTab>
    </Tabs>
    <ButtonsBrow>
        <Button>
            <RemoveIcon sx={{ fontSize: '19px' }} />
        </Button>
        <Button>
            <UnfoldLessIcon sx={{ fontSize: '19px' }} />
        </Button>
        <Link to="/Projects">
            <Button hoverColor="red">
                <CloseIcon sx={{ fontSize: '19px' }} />
            </Button>
        </Link>
    </ButtonsBrow>
</TabsBrowser>