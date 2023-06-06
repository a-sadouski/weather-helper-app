import React, { useEffect, useState } from 'react';
import { FaArchive } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {
    ICoordinates,
    IForecastEntry,
    IWeatherHelperState
} from '../constants';
import DynamicBackground from '../components/DynamicBackground';
import API from '../api/api';
import {
    InfoContainer,
    InfoWrapper,
    MapContainer,
    NoDataContainer,
    NoDataTitle,
    WeatherCards,
    WeatherInfoContainer
} from './styled/WeatherInfo.styled';
import WeatherHourCard from '../components/WeatherHourCard';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

function WeatherInfo() {
    const [forecast, setForecast] = useState<IForecastEntry[]>([]);

    const currentLocation = useSelector(
        (state: IWeatherHelperState) => state.weather.currentLocationTitle
    );

    const [coordinates, setCoordinates] = useState<ICoordinates>({
        lat: 0,
        lng: 0
    });

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAiM0N52OqKOOGAm4kjEPgahnVhfmq92e4'
    });

    useEffect(() => {
        API.fetchWeatherForecastData(currentLocation).then(
            (data: IForecastEntry[]) => {
                setForecast(data.slice(0, 7));
            }
        );
        API.fetchCoordinatesData(currentLocation, true).then(
            (cords: ICoordinates) => {
                setCoordinates(cords);
            }
        );
    }, [currentLocation]);

    const weatherInfo = () => {
        return forecast.length ? (
            <WeatherInfoContainer>
                {isLoaded && (
                    <MapContainer>
                        <GoogleMap
                            zoom={10}
                            center={coordinates}
                            mapContainerClassName='map-container'
                        ></GoogleMap>
                    </MapContainer>
                )}
                <WeatherCards>
                    {forecast.map((weatherData: IForecastEntry) => (
                        <WeatherHourCard
                            weatherData={weatherData}
                            key={weatherData.date}
                        ></WeatherHourCard>
                    ))}
                </WeatherCards>
            </WeatherInfoContainer>
        ) : (
            <NoDataContainer>
                <FaArchive style={{ color: '#000', fontSize: '128px' }} />
                <NoDataTitle>No data Please enter your location</NoDataTitle>
            </NoDataContainer>
        );
    };

    return (
        <InfoContainer>
            <DynamicBackground />
            <InfoWrapper>{weatherInfo()}</InfoWrapper>
        </InfoContainer>
    );
}

export default WeatherInfo;
