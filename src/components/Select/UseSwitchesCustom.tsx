import clsx from 'clsx'
import { SwitchInput, SwitchRoot, SwitchThumb, SwitchTrack } from './index.styled'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from '../../redux/store'
import { changeTheme } from '../../redux/appReducer'


export default function UseSwitchesCustom ()  {
  
  const dispatch = useDispatch()
  const checked = useSelector((state: stateType) => state.appReducer.theme.status)

  const onChange = () => dispatch(changeTheme())

  const color = !checked ? "rgb(238, 163, 2)" : "#000" 
  
  const stateClasses = {
    checked,
    onChange
  }

  return (
    <SwitchRoot aria-readonly  className={clsx(stateClasses)} onClick={onChange}>
      <SwitchTrack>
        <SwitchThumb  aria-readonly sx={{backgroundColor: color}} className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput />
    </SwitchRoot>
  );
}
