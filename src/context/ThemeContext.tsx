import {createContext, Dispatch, SetStateAction} from "react";

interface IThemeContext {
    themeType: number;
    setThemeType: Dispatch<SetStateAction<number>>;
}

const ThemeContext = createContext<IThemeContext>({
    themeType: 0,
    setThemeType: () => {}
});

export default ThemeContext;