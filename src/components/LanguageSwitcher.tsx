import React, { useRef } from 'react';
import options from '../constants/selectOptions';
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem
} from '../shared/DropDown';
import { useTranslation } from 'react-i18next';
import useToggle from '../shared/hooks/useToggle';
import { LanguageFlagImg } from './styled/LanguageSwitcher.styled';

function LanguageSwitcher({ closeSettings }: { closeSettings: Function }) {
    const { i18n } = useTranslation();
    const wrapperRef = useRef(null);
    const [toggleValue, toggle] = useToggle(wrapperRef, false);
    const selectedLanguage = options.languageOptions.find(
        item => item.id === i18n.language
    )!;

    const onOptionClicked = (language: string) => {
        i18n.changeLanguage(language).then(() => {
            toggle();
            closeSettings();
        });
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggle}>
                <LanguageFlagImg
                    src={selectedLanguage.image}
                    alt={selectedLanguage.title}
                />
            </DropDownHeader>
            {toggleValue && (
                <DropDownListContainer ref={wrapperRef}>
                    <DropDownList>
                        {options.languageOptions.map(option => (
                            <ListItem
                                isSelected={option.id === i18n.language}
                                onClick={() => onOptionClicked(option.id)}
                                onBlur={toggle}
                                key={option.id}
                            >
                                <LanguageFlagImg
                                    src={option.image}
                                    alt={option.title}
                                />
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}

export default LanguageSwitcher;
