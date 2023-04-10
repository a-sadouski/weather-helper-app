import {createContext, Dispatch, SetStateAction} from "react";

export interface IWeatherDataContext {
    currentWeatherData: any;
    setCurrentWeatherData: Dispatch<SetStateAction<object>>;
    weatherTemperatureType: number;
    setWeatherTemperatureType: Dispatch<SetStateAction<number>>;
    currentLocationTitle: string;
    setCurrentLocationTitle: Dispatch<SetStateAction<string>>;
}

const WeatherDataContext = createContext<IWeatherDataContext>({
    currentWeatherData: {},
    setCurrentWeatherData: () => {},
    weatherTemperatureType: 0,
    setWeatherTemperatureType: () => {},
    currentLocationTitle: '',
    setCurrentLocationTitle: () => {},
});

export default WeatherDataContext;