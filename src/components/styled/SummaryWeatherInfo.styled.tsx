import styled from 'styled-components';

export const SummaryWeatherInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    color: ${props => props.theme.colors.font};
    @media ${props => props.theme.media.sizeL} {
        flex-direction: row;
        justify-content: center;
    }
    @media ${props => props.theme.media.sizeM} {
        flex-direction: row;
        justify-content: center;
        font-size: 16px;
    }
    @media ${props => props.theme.media.sizeS} {
        flex-direction: row;
        justify-content: center;
        font-size: 14px;
    }
`;

export const FlexRowCentered = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FlexColumnCentered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;