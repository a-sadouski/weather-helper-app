import styled from 'styled-components';
import { DropDownContainer, DropDownHeader } from '../../shared/DropDown';

export const SettingsDropdownContainer = styled(DropDownContainer)`
    width: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const SettingsDropDownHeader = styled(DropDownHeader)`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.media.sizeS} {
        padding: 5px;
        font-size: 14px;
    }
`;

export const SettingsDropDownListContainer = styled.div`
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
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;