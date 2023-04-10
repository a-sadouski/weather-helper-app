import React, {useContext, useState} from 'react';
import ThemeContext from "../../context/ThemeContext";
import {DropDownContainer, DropDownListContainer, DropDownHeader, DropDownList, ListItem} from "../../shared/DropDown"
import styled from "styled-components";
import ThemesList from "../../utils/ThemesList";
import {useTranslation} from "react-i18next";

const ThemeSwitcherDropDownListContainer = styled(DropDownListContainer)`
  position: relative;
  top: -68px;
  left: -115px;
`

const ThemeSwitcherDropDownList = styled(DropDownList)`
    width: 100px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


interface IThemeSwitcherItemProps {
    fontColor: string,
    hoverBackground: string,
    background: string,
    border: string,
    isSelected: boolean,
}

const ThemeSwitcherListItem = styled<any>(ListItem)`
  border-radius: 10px;
  padding: 4px;
  color: ${(props: IThemeSwitcherItemProps) => props.fontColor};
  background-color: ${(props: IThemeSwitcherItemProps) => props.background};
  border: 1px solid ${(props: IThemeSwitcherItemProps) => props.border};
  &:hover {
    background-color: ${(props: IThemeSwitcherItemProps) => props.hoverBackground};
  }
`;


function ThemeSwitcher({ closeSettings }: { closeSettings: Function }) {

    const [t] = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen((isOpen) => !isOpen);
    const {themeType, setThemeType} = useContext(ThemeContext);

    const onOptionClicked = (value: number) => () => {
        setThemeType(value);
        setIsOpen(false);
        closeSettings();
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>{t("themeButtonText")}</DropDownHeader>
            { isOpen && (
                <ThemeSwitcherDropDownListContainer>
                    <ThemeSwitcherDropDownList>
                        { ThemesList.map(option => (
                            <ThemeSwitcherListItem
                                fontColor={option.font}
                                background={option.background}
                                hoverBackground={option.hoverBackground}
                                border={option.border}
                                isSelected={option.id === themeType}
                                onClick={onOptionClicked(option.id)} key={option.id}>
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