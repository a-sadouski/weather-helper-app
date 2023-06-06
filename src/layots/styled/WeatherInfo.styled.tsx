import styled from 'styled-components';

export const InfoContainer = styled.div`
    position: relative;
    height: auto;
    flex-grow: 2;
`;

export const InfoWrapper = styled.div`
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
`;

export const WeatherInfoContainer = styled.div`
    width: 760px;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${props => props.theme.media.sizeL} {
        padding: 10px;
    }
    @media ${props => props.theme.media.sizeM} {
        width: 500px;
        padding: 10px;
    }
    @media ${props => props.theme.media.sizeS} {
        width: 400px;
    }
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
`;

export const WeatherCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-self: end;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const NoDataContainer = styled.div`
    position: relative;
    top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NoDataTitle = styled.h4`
    font-size: 24px;
    text-align: center;
    margin-top: 25px;
`;
