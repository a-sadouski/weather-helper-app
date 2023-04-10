import {createContext, Dispatch, SetStateAction} from "react";

interface ILanguageContext {
    languageType: number;
    setLanguageType: Dispatch<SetStateAction<number>>;
}

const LanguageContext = createContext<ILanguageContext>({
    languageType: 0,
    setLanguageType: () => {}
});

export default LanguageContext;