import { Dispatch, SetStateAction } from 'react';

export interface IWeatherHelperState {
    weather: IWeatherDataState;
    auth: IAuthState;
}

export interface IWeatherDataState {
    currentWeatherData: IForecastEntry;
    currentLocationTitle: string;
    weatherTemperatureType: number;
}

export interface IAuthState {
    isLoggedIn: boolean;
}

export interface IThemeSwitcherItemProps {
    fontColor: string;
    hoverBackground: string;
    background: string;
    border: string;
    isSelected: boolean;
}

export interface IDegreesToggleProps {
    weatherTemperatureType: number;
    setWeatherTemperatureType: Function;
}

export interface IPlaceSearcherProps {
    isErrorExist: boolean;
    setCurrentLocationTitle: Function;
    currentLocationTitle: string;
}

export interface IWeatherHourCardProps {
    weatherData: IForecastEntry;
}

export interface IAuthProps {
    isVisible: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
}

export interface IForecastEntry {
    textDate: string;
    iconId: string;
    date: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
    temperature: number;
    windSpeed: number;
}

export interface ICoordinates {
    lat: number;
    lng: number;
}

export interface IListItemProps {
    isSelected?: boolean;
}

export interface IAuthorizationButtonProps {
    isLoggedIn: boolean;
}

export interface IThemeContext {
    themeType: number;
    setThemeType: Dispatch<SetStateAction<number>>;
}

export interface IAuthDto {
    email: string;
    password: string;
}

export interface IAuthForm {
    email: string;
    password: string;
    repeatedPassword: string;
}
