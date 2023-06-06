import React, { useContext, useRef } from 'react';
import ThemeContext from '../context/ThemeContext';
import { DropDownContainer, DropDownHeader } from '../shared/DropDown';
import ThemesList from '../constants/themesList';
import { useTranslation } from 'react-i18next';
import useToggle from '../shared/hooks/useToggle';
import {
    ThemeSwitcherDropDownList,
    ThemeSwitcherDropDownListContainer,
    ThemeSwitcherListItem
} from './styled/ThemeSwitcher.styled';

function ThemeSwitcher({ closeSettings }: { closeSettings: Function }) {
    const [t] = useTranslation();
    const wrapperRef = useRef(null);
    const [toggleValue, toggle] = useToggle(wrapperRef, false);
    const { themeType, setThemeType } = useContext(ThemeContext);

    const onOptionClicked = (value: number) => {
        setThemeType(value);
        toggle();
        closeSettings();
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggle}>
                {t('themeButtonText')}
            </DropDownHeader>
            {toggleValue && (
                <ThemeSwitcherDropDownListContainer ref={wrapperRef}>
                    <ThemeSwitcherDropDownList>
                        {ThemesList.map(option => (
                            <ThemeSwitcherListItem
                                fontColor={option.font}
                                background={option.background}
                                hoverBackground={option.hoverBackground}
                                border={option.border}
                                isSelected={option.id === themeType}
                                onClick={() => onOptionClicked(option.id)}
                                key={option.id}
                            >
                                {option.title}
                            </ThemeSwitcherListItem>
                        ))}
                    </ThemeSwitcherDropDownList>
                </ThemeSwitcherDropDownListContainer>
            )}
        </DropDownContainer>
    );
}

export default ThemeSwitcher;
