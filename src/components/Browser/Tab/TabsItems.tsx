import React from "react"
import { ButtonsBrow, TabsBrowser, TabB, Tabs, Button, AddTab } from "./index.styled"
import { VscCollapseAll } from 'react-icons/vsc'
import CloseIcon from '@mui/icons-material/Close'
import RemoveIcon from '@mui/icons-material/Remove'

export const TabsItems = () => <TabsBrowser>
        <Tabs>
            <TabB>
                <span>Michael</span>
                <CloseIcon sx={{fontSize: '12px'}} />
            </TabB>
                <AddTab>
                    <span>+</span>
                </AddTab>
        </Tabs>
        <ButtonsBrow>
            <Button>
                <RemoveIcon sx={{fontSize: '19px'}} />
            </Button>
            <Button>
                <VscCollapseAll fontSize={19} />
            </Button>
            <Button>
                <CloseIcon sx={{fontSize: '19px'}} />
            </Button>
        </ButtonsBrow>
    </TabsBrowser>