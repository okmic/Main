import * as React from 'react';
import Switch from '@mui/material/Switch';

type PropsType = {
  theme: boolean 
  setTheme: (t: boolean) => void}

export default function ControlledSwitches({theme, setTheme}: PropsType) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked);
  };

  return (
    <Switch
      checked={theme}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}