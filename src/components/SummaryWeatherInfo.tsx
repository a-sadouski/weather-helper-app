import React from 'react';
import WeatherDataConverter from '../utils/weatherDataConverter';
import { useTranslation } from 'react-i18next';
import { IForecastEntry, Temperature } from '../constants';
import {
    FlexColumnCentered,
    FlexRowCentered,
    SummaryWeatherInfoContainer
} from './styled/SummaryWeatherInfo.styled';

interface ISummaryWeatherInfoProps {
    currentLocationTitle: string;
    weatherTemperatureType: number;
    weatherData: IForecastEntry;
}

function SummaryWeatherInfo({
    currentLocationTitle,
    weatherTemperatureType,
    weatherData
}: ISummaryWeatherInfoProps) {
    const [t] = useTranslation();
    const iconUrl = `https://openweathermap.org/img/w/${weatherData.iconId}.png`;
    const kelvinTemperature = weatherData.temperature;
    const humidity = weatherData.humidity;
    const convertedTemperature = WeatherDataConverter.convertTemperature(
        kelvinTemperature,
        weatherTemperatureType
    );

    return (
        <SummaryWeatherInfoContainer>
            <FlexRowCentered style={{ marginRight: '15px' }}>
                <img
                    src={iconUrl}
                    alt={t('weatherIconPlaceHolder') as string}
                />
                <div style={{ fontSize: '20px' }}>
                    {convertedTemperature}
                    {weatherTemperatureType === Temperature.Celsius
                        ? ' °C'
                        : ' °F'}
                </div>
            </FlexRowCentered>
            <FlexColumnCentered>
                <div>
                    {t('humidity')}: {humidity} %
                </div>
                <div>
                    {t('location')}: {currentLocationTitle}
                </div>
            </FlexColumnCentered>
        </SummaryWeatherInfoContainer>
    );
}

export default SummaryWeatherInfo;
