import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ContextTheme } from '../../context/ThemeProvider';
import { Bar } from './styles';

export default function Navbar() {
  const { toggleTheme, theme } = useContext(ContextTheme);
  const { title } = theme;

  return (
    <Bar>
      <div />
      <h1>Movie Night</h1>
      <Switch
        height={20}
        width={40}
        handleDiameter={20}
        onColor="#E8E9EB"
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedHandleIcon={
          <img
            alt="sun"
            src="./sun.png"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          />
        }
        uncheckedHandleIcon={
          <img
            alt="moon"
            src="./moon.png"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          />
        }
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Bar>
  );
}
