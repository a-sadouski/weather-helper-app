import styled from 'styled-components';

export const WeatherHourCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 440px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    @media ${props => props.theme.media.sizeL} {
        height: 430px;
    }
    @media ${props => props.theme.media.sizeM} {
        height: 380px;
        width: 65px;
        padding: 10px 5px;
        font-size: ${props => props.theme.fontSizes.sizeM};
    }
    @media ${props => props.theme.media.sizeS} {
        height: 430px;
        width: 50px;
        padding: 5px;
        font-size: ${props => props.theme.fontSizes.sizeS};
    }
`;

export const WeatherCardBasicInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
  @media ${props => props.theme.media.sizeM} {
    height: 180px;
  }
  @media ${props => props.theme.media.sizeS} {
    height: 180px;
  }
`;

export const WeatherImageContainer = styled.div`
    margin-top: 30px;
    @media ${props => props.theme.media.sizeL} {
        margin-top: 20px;
    }
    @media ${props => props.theme.media.sizeM} {
        margin-top: 20px;
    }
    @media ${props => props.theme.media.sizeS} {
        margin-top: 20px;
    }
`;

export const WeatherImage = styled.img`
    width: 64px;
    @media ${props => props.theme.media.sizeM} {
        width: 48px;
        height: 48px;
    }
    @media ${props => props.theme.media.sizeS} {
        width: 32px;
        height: 32px;
    }
`;

export const WeatherFeelsLikeContainer = styled.div`
    margin-top: 10px;
    text-align: center;
    font-size: 10px;
`;

export const WeatherCardDescription = styled.div`
    width: 50px;
    margin-top: 30px;
    @media ${props => props.theme.media.sizeL} {
        margin-top: 20px;
    }
    @media ${props => props.theme.media.sizeM} {
        margin-top: 20px;
    }
    @media ${props => props.theme.media.sizeS} {
        margin-top: 20px;
    }
`;

export const WeatherCardField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    @media ${props => props.theme.media.sizeS} {
        flex-direction: column;
    }
`;

export const WeatherCardFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0 0 5px;
    @media ${props => props.theme.media.sizeM} {
        font-size: ${props => props.theme.fontSizes.sizeM};
        margin-left: 3px;
    }
`;

export const WeatherCardFieldImg = styled.img`
    @media ${props => props.theme.media.sizeM} {
        width: 16px;
        height: 16px;
    }
    @media ${props => props.theme.media.sizeS} {
        width: 16px;
        height: 16px;
    }
`;

export const WeatherCardFieldText = styled.div`
    font-size: ${props => props.theme.fontSizes.default};
    text-align: start;
    @media ${props => props.theme.media.sizeM} {
        font-size: ${props => props.theme.fontSizes.sizeM};
    }
    @media ${props => props.theme.media.sizeS} {
        font-size: ${props => props.theme.fontSizes.sizeS};
    }
`;

export const WeatherCardFieldMeasurementValue = styled.span`
    text-align: start;
    font-size: 10px;
    color: gray;
`;
