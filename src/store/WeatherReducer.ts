import { IWeatherDataState, StateActions, Temperature } from '../constants';

const defaultState: IWeatherDataState = {
    currentWeatherData: {
        textDate: '',
        iconId: '',
        date: 0,
        feelsLike: 0,
        humidity: 0,
        pressure: 0,
        temperature: 0,
        windSpeed: 0
    },
    currentLocationTitle:
        JSON.parse(localStorage.getItem('location')!) || 'Tbilisi',
    weatherTemperatureType: Temperature.Celsius
};

export const WeatherReducer = (
    state: IWeatherDataState = defaultState,
    action: { type: number; payload: any }
) => {
    switch (action.type) {
        case StateActions.SET_CURRENT_WEATHER_DATA:
            return { ...state, currentWeatherData: action.payload };

        case StateActions.SET_CURRENT_LOCATION_TITLE:
            return { ...state, currentLocationTitle: action.payload };

        case StateActions.SET_WEATHER_TEMPERATURE_TYPE:
            return { ...state, weatherTemperatureType: action.payload };

        default:
            return state;
    }
};
