import styled from 'styled-components';
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    ListItem
} from '../../shared/DropDown';

export const DegreesToggleDropDownContainer = styled(DropDownContainer)`
    @media ${props => props.theme.media.sizeM} {
        width: 45px;
    }

    @media ${props => props.theme.media.sizeS} {
        width: 30px;
        margin: 0 10px 0 10px;
    }
`;

export const DegreesToggleDropDownHeader = styled(DropDownHeader)`
    @media ${props => props.theme.media.sizeM} {
        padding: 5.5px 0;
        font-size: ${props => props.theme.fontSizes.sizeM};
    }

    @media ${props => props.theme.media.sizeS} {
        padding: 4px 0;
        font-size: ${props => props.theme.fontSizes.sizeS};
    }
`;

export const DegreesToggleDropDownList = styled(DropDownList)`
    @media ${props => props.theme.media.sizeM} {
        width: 45px;
    }

    @media ${props => props.theme.media.sizeS} {
        width: 30px;
    }
`;

export const DegreesToggleListItem = styled(ListItem)`
    @media ${props => props.theme.media.sizeM} {
        padding: 5.5px 0;
        font-size: ${props => props.theme.fontSizes.sizeM};
    }
    @media ${props => props.theme.media.sizeS} {
        padding: 4px 0;
        font-size: ${props => props.theme.fontSizes.sizeS};
    }
`;
