import React from 'react';
import WeatherDataConverter from "../../utils/WeatherDataConverter";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Temperature} from "../../utils";


const SummaryWeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  color: ${props => props.theme.colors.font};;
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

const FlexRowCentered = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FlexColumnCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface ISummaryWeatherInfoProps {
    currentLocationTitle: string,
    weatherTemperatureType: number,
    weatherData: any
}

function SummaryWeatherInfo({ currentLocationTitle, weatherTemperatureType, weatherData }: ISummaryWeatherInfoProps) {
    const [t] = useTranslation();
    const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const kelvinTemperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;
    const convertedTemperature = WeatherDataConverter.convertTemperature(kelvinTemperature, weatherTemperatureType);

    return (
        <SummaryWeatherInfoContainer>
            <FlexRowCentered style={{marginRight: "15px"}}>
                <img src={iconUrl} alt={t('weatherIconPlaceHolder') as string} />
                <div style={{fontSize: "20px"}}>{ convertedTemperature }{ weatherTemperatureType === Temperature.Celsius ? ' °C' : ' °F' }</div>
            </FlexRowCentered>
            <FlexColumnCentered>
                <div>{t('humidity')}: { humidity } %</div>
                <div>{t('location')}: { currentLocationTitle }</div>
            </FlexColumnCentered>
        </SummaryWeatherInfoContainer>
    );
}

export default SummaryWeatherInfo;