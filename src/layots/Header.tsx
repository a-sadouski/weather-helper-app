import React, { useEffect, useState } from 'react';
import PlaceSearcher from '../components/PlaceSearcher';
import DegreesToggle from '../components/DegreesToggle';
import AuthorizationButton from '../components/AuthorizationButton';
import SummaryWeatherInfo from '../components/SummaryWeatherInfo';
import SettingsDropdown from '../components/SettingsDropdown';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    IForecastEntry,
    IWeatherHelperState,
    StateActions
} from '../constants';
import API from '../api/api';
import {
    HeaderActions,
    HeaderContainer,
    HeaderSummaryTitleContainer,
    HeaderTitle
} from './styled/Header.styled';
import { TailSpin } from 'react-loader-spinner';
import { FlexRowCentered } from '../components/styled/SummaryWeatherInfo.styled';

function Header() {
    const dispatch = useDispatch();
    const currentWeatherData = useSelector(
        (state: IWeatherHelperState) => state.weather.currentWeatherData
    );
    const currentLocationTitle = useSelector(
        (state: IWeatherHelperState) => state.weather.currentLocationTitle
    );
    const weatherTemperatureType = useSelector(
        (state: IWeatherHelperState) => state.weather.weatherTemperatureType
    );
    const isLoggedIn = useSelector(
        (state: IWeatherHelperState) => state.auth.isLoggedIn
    );

    const [t] = useTranslation();

    const [isErrorExist, setIsErrorExist] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [location, setLocation] = useState('');

    useEffect(() => {
        setWeatherInfo(currentLocationTitle);
    }, [currentLocationTitle]);

    function setWeatherTemperatureType(value: number) {
        localStorage.setItem('temperatureType', JSON.stringify(value));
        dispatch({
            type: StateActions.SET_WEATHER_TEMPERATURE_TYPE,
            payload: value
        });
    }

    function setWeatherInfo(searcherValue: string) {
        setIsLoading(true);
        API.fetchCurrentWeatherData(searcherValue)
            .then((weatherData: IForecastEntry) => {
                setIsErrorExist(false);
                localStorage.setItem('location', JSON.stringify(searcherValue));
                localStorage.setItem(
                    'weatherData',
                    JSON.stringify(weatherData)
                );
                setLocation(
                    searcherValue[0].toUpperCase() + searcherValue.slice(1)
                );
                dispatch({
                    type: StateActions.SET_CURRENT_WEATHER_DATA,
                    payload: weatherData
                });
                setIsLoading(false);
            })
            .catch(() => setIsErrorExist(true));
    }

    function setCurrentLocationTitle(searcherValue: string) {
        dispatch({
            type: StateActions.SET_CURRENT_LOCATION_TITLE,
            payload: searcherValue
        });
    }

    return (
        <HeaderContainer>
            <HeaderSummaryTitleContainer>
                <HeaderTitle>{t('headerTitle')}</HeaderTitle>
                {isLoading ? (
                    <FlexRowCentered>
                        <TailSpin
                            height='40'
                            width='40'
                            color='#ffffff'
                            ariaLabel='tail-spin-loading'
                            radius='1'
                            wrapperStyle={{}}
                            wrapperClass=''
                            visible={true}
                        />
                    </FlexRowCentered>
                ) : (
                    <SummaryWeatherInfo
                        currentLocationTitle={location}
                        weatherTemperatureType={weatherTemperatureType}
                        weatherData={currentWeatherData}
                    />
                )}
            </HeaderSummaryTitleContainer>
            <HeaderActions>
                <PlaceSearcher
                    isErrorExist={isErrorExist}
                    currentLocationTitle={currentLocationTitle}
                    setCurrentLocationTitle={setCurrentLocationTitle}
                />
                <DegreesToggle
                    weatherTemperatureType={weatherTemperatureType}
                    setWeatherTemperatureType={setWeatherTemperatureType}
                />
                <AuthorizationButton isLoggedIn={isLoggedIn} />
            </HeaderActions>
            <SettingsDropdown />
        </HeaderContainer>
    );
}

export default Header;
