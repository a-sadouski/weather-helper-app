import React, {useState} from 'react';
import {DropDownContainer, DropDownHeader} from "../../shared/DropDown"
import styled from "styled-components";
import {BsFillGearFill} from "react-icons/bs";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

const SettingsDropdownContainer = styled(DropDownContainer)`
  width: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SettingsDropDownHeader = styled(DropDownHeader)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.media.sizeS} {
    padding: 5px;
    font-size: 14px;
  }
`;

const SettingsDropDownListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  height: 120px;
  top: 10px;
  left: -60px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 10px;
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.secondaryBackground};
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
`




function SettingsDropdown() {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const closeSettings = () => {
        setIsOpen(false);
    };

    return (
       <SettingsDropdownContainer>
           <SettingsDropDownHeader onClick={toggling}><BsFillGearFill /></SettingsDropDownHeader>
           { isOpen && (
               <SettingsDropDownListContainer>
                   <ThemeSwitcher closeSettings={closeSettings}/>
                   <LanguageSwitcher closeSettings={closeSettings}/>
               </SettingsDropDownListContainer>
           )}
       </SettingsDropdownContainer>
    );
}

export default SettingsDropdown;