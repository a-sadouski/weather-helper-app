import { createContext } from 'react';
import { IThemeContext } from '../constants';

const ThemeContext = createContext<IThemeContext>({
    themeType: 0,
    setThemeType: () => {}
});

export default ThemeContext;
