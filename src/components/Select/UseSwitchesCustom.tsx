import React from 'react'
import clsx from 'clsx';
import { SwitchInput, SwitchRoot, SwitchThumb, SwitchTrack } from './index.styled';

type ThemesType = {
  theme: boolean
  setTheme: (th: boolean) => void
}

const MUISwitch: React.FC<ThemesType> = ({theme, setTheme}) => {

  let checked = theme
  let onChange = () => setTheme(!theme)
  const color = !theme ? "rgb(238, 163, 2)" : "#000" 
  
  const stateClasses = {
    checked,
    onChange
  };

  return (
    <SwitchRoot className={clsx(stateClasses)} onClick={onChange}>
      <SwitchTrack>
        <SwitchThumb  sx={{backgroundColor: color}} className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput />
    </SwitchRoot>
  );
}

export default function UseSwitchesCustom({theme, setTheme}: ThemesType) {
  return <MUISwitch theme={theme} setTheme={setTheme} />
}