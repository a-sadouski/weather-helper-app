import React from 'react';
import {
    WeatherCardBasicInfoContainer,
    WeatherCardDescription,
    WeatherCardField,
    WeatherCardFieldContainer,
    WeatherCardFieldImg,
    WeatherCardFieldMeasurementValue,
    WeatherCardFieldText,
    WeatherFeelsLikeContainer,
    WeatherHourCardContainer,
    WeatherImage,
    WeatherImageContainer
} from './styled/WeatherHourCard.styled';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    IWeatherHelperState,
    IWeatherHourCardProps,
    Temperature
} from '../constants';
import WeatherDataConverter from '../utils/weatherDataConverter';

function WeatherHourCard({ weatherData }: IWeatherHourCardProps) {
    const [t] = useTranslation();

    const weatherTemperatureType = useSelector(
        (state: IWeatherHelperState) => state.weather.weatherTemperatureType
    );

    const kelvinTemperature = weatherData.temperature;
    const kelvinFeelsLikeTemperature = weatherData.feelsLike;
    const convertedTemperature = WeatherDataConverter.convertTemperature(
        kelvinTemperature,
        weatherTemperatureType
    );
    const convertedFeelsLikeTemperature =
        WeatherDataConverter.convertTemperature(
            kelvinFeelsLikeTemperature,
            weatherTemperatureType
        );

    const date = new Date(weatherData.textDate);
    let month: string | number = (date.getMonth() + 1)
        .toString()
        .padStart(2, '0');
    let day: string | number = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours();
    const pressure = weatherData.pressure - 300;
    const iconUrl = `https://openweathermap.org/img/w/${weatherData.iconId}.png`;
    return (
        <WeatherHourCardContainer>
            <WeatherCardBasicInfoContainer>
                <h3>{`${day}.${month}`}</h3>
                <h4>{`${hours}:00`}</h4>
                <WeatherImageContainer>
                    <WeatherImage
                        src={iconUrl}
                        alt={t('weatherIconPlaceHolder') as string}
                    />
                </WeatherImageContainer>
                <h4>
                    {convertedTemperature}
                    {weatherTemperatureType === Temperature.Celsius
                        ? ' °C'
                        : ' °F'}
                </h4>
                <WeatherFeelsLikeContainer>
                    {t('feelsLike')} {convertedFeelsLikeTemperature}
                    {weatherTemperatureType === Temperature.Celsius
                        ? ' °C'
                        : ' °F'}
                </WeatherFeelsLikeContainer>
            </WeatherCardBasicInfoContainer>
            <WeatherCardDescription>
                <WeatherCardField>
                    <WeatherCardFieldImg src='/drop.png' />
                    <WeatherCardFieldContainer>
                        <WeatherCardFieldText>
                            {weatherData.humidity}
                        </WeatherCardFieldText>
                        <WeatherCardFieldMeasurementValue>
                            %
                        </WeatherCardFieldMeasurementValue>
                    </WeatherCardFieldContainer>
                </WeatherCardField>
                <WeatherCardField>
                    <WeatherCardFieldImg src='/thermometer.png' />
                    <WeatherCardFieldContainer>
                        <WeatherCardFieldText>{pressure}</WeatherCardFieldText>
                        <WeatherCardFieldMeasurementValue>
                            {t('pressureMeasurementValue')}
                        </WeatherCardFieldMeasurementValue>
                    </WeatherCardFieldContainer>
                </WeatherCardField>
                <WeatherCardField>
                    <WeatherCardFieldImg src='/wind.png' />
                    <WeatherCardFieldContainer>
                        <WeatherCardFieldText>
                            {weatherData.windSpeed}
                        </WeatherCardFieldText>
                        <WeatherCardFieldMeasurementValue>
                            {t('speedMeasurementValue')}
                        </WeatherCardFieldMeasurementValue>
                    </WeatherCardFieldContainer>
                </WeatherCardField>
            </WeatherCardDescription>
        </WeatherHourCardContainer>
    );
}

export default WeatherHourCard;
