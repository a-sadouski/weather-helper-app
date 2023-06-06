import React, { useRef } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import useToggle from '../shared/hooks/useToggle';
import {
    SettingsDropdownContainer,
    SettingsDropDownHeader,
    SettingsDropDownListContainer
} from './styled/SettingsDropdown.styled';

function SettingsDropdown() {
    const wrapperRef = useRef(null);
    const [toggleValue, toggle] = useToggle(wrapperRef, false);

    const closeSettings = () => {
        toggle();
    };

    return (
        <SettingsDropdownContainer ref={wrapperRef}>
            <SettingsDropDownHeader onClick={toggle}>
                <BsFillGearFill />
            </SettingsDropDownHeader>
            {toggleValue && (
                <SettingsDropDownListContainer>
                    <ThemeSwitcher closeSettings={closeSettings} />
                    <LanguageSwitcher closeSettings={closeSettings} />
                </SettingsDropDownListContainer>
            )}
        </SettingsDropdownContainer>
    );
}

export default SettingsDropdown;
