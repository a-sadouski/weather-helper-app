import React, {useState} from 'react';
import options from "../../utils/SelectOptions";
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem
} from "../../shared/DropDown";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const LanguageFlagImg = styled.img`
  height: 29px;
`

function LanguageSwitcher({ closeSettings }: { closeSettings: Function }) {

    const {i18n} = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const selectedLanguage = options.languageOptions.find(item => item.id === i18n.language);

    const onOptionClicked = (language: string) => () => {
        i18n.changeLanguage(language);
        setIsOpen(false);
        closeSettings();
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                <LanguageFlagImg src={selectedLanguage?.image} alt={selectedLanguage?.title}/>
            </DropDownHeader>
            { isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        { options.languageOptions.map(option => (
                            <ListItem isSelected={option.id === i18n.language} onClick={onOptionClicked(option.id)} key={option.id}>
                                <LanguageFlagImg src={option?.image} alt={option?.title}/>
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}

export default LanguageSwitcher;