import styled from 'styled-components';
import {
    DropDownList,
    DropDownListContainer,
    ListItem
} from '../../shared/DropDown';
import { IThemeSwitcherItemProps } from '../../constants';

export const ThemeSwitcherDropDownListContainer = styled(DropDownListContainer)`
    position: relative;
    top: -68px;
    left: -115px;
`;

export const ThemeSwitcherDropDownList = styled(DropDownList)`
    width: 100px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ThemeSwitcherListItem = styled<any>(ListItem)`
    border-radius: 10px;
    padding: 4px;
    color: ${(props: IThemeSwitcherItemProps) => props.fontColor};
    background-color: ${(props: IThemeSwitcherItemProps) => props.background};
    border: 1px solid ${(props: IThemeSwitcherItemProps) => props.border};

    &:hover {
        background-color: ${(props: IThemeSwitcherItemProps) =>
            props.hoverBackground};
    }
`;
